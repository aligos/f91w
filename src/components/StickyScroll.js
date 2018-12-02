import React, { Component } from 'react';
import { Dimensions, View, ViewPropTypes, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

const { bool, func, number, string } = PropTypes;

const WINDOW = Dimensions.get('window');

// Properties accepted by `stickyScroll`.
const propTypes = {
  renderStickyHeader: func,
  renderStickyFooter: func,
  additionalHeightReserve: number,
  makeScrollable: bool,
  fitToScreen: bool,
  contentBackgroundColor: string,
  contentContainerStyle: ViewPropTypes.style,
};

class StickyScroll extends Component {
  constructor(props) {
    super(props);
    this.bodyOffsetTop = 0;
    this.bodyHeight = 0;
    this.footerSpacerHeight = 0;
    this.bodyOffsetBottom = 0;
  }

  render() {
    const {
      renderStickyHeader,
      renderStickyFooter,
      additionalHeightReserve,
      makeScrollable,
      fitToScreen,
      contentBackgroundColor,
      contentContainerStyle,
      children,
    } = this.props;

    const stickyHeader = this.renderStickyHeader(renderStickyHeader, {
      contentBackgroundColor,
    });

    const scrollElement = makeScrollable ? (
      <ScrollView {...this.props} />
    ) : (
      <View {...this.props} />
    );

    const bodyComponent = this.wrapChildren(children, {
      contentBackgroundColor,
      contentContainerStyle,
      additionalHeightReserve,
    });

    const footerSpacer = fitToScreen ? (
      this.renderFooterSpacer({ contentBackgroundColor })
    ) : (
      <View />
    );

    const stickyFooter = this.renderStickyFooter(renderStickyFooter, {});

    return (
      <View>
        {React.cloneElement(
          scrollElement,
          { backgroundColor: contentBackgroundColor },
          bodyComponent,
          footerSpacer
        )}
        {stickyHeader}
        {stickyFooter}
      </View>
    );
  }

  renderStickyHeader(renderStickyHeader, { contentBackgroundColor }) {
    return (
      <View
        style={[
          {
            position: 'absolute',
            top: 0,
            width: Dimensions.get('window').width,
            backgroundColor: contentBackgroundColor,
          },
        ]}
        onLayout={e => {
          const {
            nativeEvent: {
              layout: { height },
            },
          } = e;
          if (this.bodyOffsetTop !== height) {
            this.bodyComponent.setNativeProps({
              style: { marginTop: height },
            });
            this.bodyOffsetTop = height;
          }
        }}>
        {renderStickyHeader()}
      </View>
    );
  }

  wrapChildren(
    children,
    { contentBackgroundColor, contentContainerStyle, additionalHeightReserve }
  ) {
    const containerStyles = [{ backgroundColor: contentBackgroundColor }];

    if (contentContainerStyle) containerStyles.push(contentContainerStyle);

    return (
      <View
        style={containerStyles}
        ref={ref => (this.bodyComponent = ref)}
        onLayout={e => {
          const {
            nativeEvent: {
              layout: { height },
            },
          } = e;
          const footerSpacerHeight = Math.max(
            0,
            WINDOW.height - this.bodyOffsetBottom - this.bodyOffsetTop - height
          );
          if (!!this.footerSpacerComponent && this.footerSpacerHeight != footerSpacerHeight) {
            this.footerSpacerComponent.setNativeProps({
              style: { height: footerSpacerHeight - additionalHeightReserve },
            });
            this.footerSpacerHeight = footerSpacerHeight;
          }
        }}>
        {children}
      </View>
    );
  }

  renderFooterSpacer({ contentBackgroundColor }) {
    return (
      <View
        ref={ref => (this.footerSpacerComponent = ref)}
        style={{ backgroundColor: contentBackgroundColor }}
      />
    );
  }

  renderStickyFooter(renderStickyFooter) {
    if (renderStickyFooter == null) return null;
    return (
      <View
        style={[
          {
            position: 'absolute',
            bottom: 0,
            width: Dimensions.get('window').width,
          },
        ]}
        onLayout={e => {
          const {
            nativeEvent: {
              layout: { height },
            },
          } = e;
          if (this.bodyOffsetBottom !== height) {
            this.bodyComponent.setNativeProps({
              style: { marginBottom: height },
            });
            this.bodyOffsetBottom = height;
          }
        }}>
        {renderStickyFooter()}
      </View>
    );
  }
}

StickyScroll.propTypes = propTypes;

StickyScroll.defaultProps = {
  renderStickyHeader: () => {},
  renderStickyFooter: () => {},
  additionalHeightReserve: 0,
  makeScrollable: false,
  fitToScreen: true,
  contentContainerStyle: null,
  contentBackgroundColor: 'transparent',
};

export default StickyScroll;
