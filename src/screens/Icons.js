/* @flow */
import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import colors from '@constants/colors';
import Fuel from '@icons/Fuel';
import Vicon from '@icons/Vicon';
import StickyScroll from '@components/StickyScroll';

const vicons = [
  'box',
  'write',
  'clock',
  'reply',
  'reply-all',
  'forward',
  'flag',
  'search',
  'trash',
  'envelope',
  'bubble',
  'bubbles',
  'user',
  'users',
  'cloud',
  'download',
  'upload',
  'rain',
  'sun',
  'moon',
  'bell',
  'folder',
  'pin',
  'sound',
  'microphone',
  'camera',
  'image',
  'cog',
  'calendar',
  'book',
  'map-marker',
  'store',
  'support',
  'tag',
  'heart',
  'video-camera',
  'trophy',
  'cart',
  'eye',
  'cancel',
  'chart',
  'target',
  'printer',
  'location',
  'bookmark',
  'monitor',
  'cross',
  'plus',
  'left',
  'up',
  'browser',
  'windows',
  'switch',
  'dashboard',
  'play',
  'fast-forward',
  'next',
  'refresh',
  'film',
  'home',
];

const fuel = [
  'add',
  'back',
  'broadcast',
  'call',
  'capitalise',
  'chart',
  'gear',
  'grow',
  'info',
  'people',
  'rocket',
  'sequence',
  'textcard',
  'trash',
];

export default class HeaderScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <StickyScroll
          makeScrollable
          renderStickyHeader={() => (
            <Header
              leftComponent={<Fuel name="back" size={18} color={colors.black} />}
              centerComponent={
                <Text
                  style={{
                    fontFamily: 'GeometriaBold',
                    fontSize: 20,
                    height: 20,
                    lineHeight: 23,
                    color: colors.black,
                  }}>
                  Icons
                </Text>
              }
              rightComponent={<Vicon name="bell" size={20} color={colors.black} />}
              outerContainerStyles={{ backgroundColor: '#FFFFFF' }}
            />
          )}
          renderStickyFooter={() => (
            <View
              style={{
                height: 114,
                paddingBottom: 34,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.black,
                borderTopWidth: 1,
                borderTopColor: colors.black,
              }}>
              <Text style={{ color: 'white', fontSize: 18 }}>{`Sticky footer`}</Text>
            </View>
          )}>
          <Text style={{ fontSize: 20, fontFamily: 'GeometriaBold', lineHeight: 20, padding: 10 }}>
            Fuel
          </Text>
          {fuel.map(f => (
            <View key={f} style={{ padding: 10 }}>
              <Fuel name={f} size={20} color={colors.black} />
              <Text style={{ fontSize: 20, fontFamily: 'Geometria', lineHeight: 20 }}>{f}</Text>
            </View>
          ))}

          <Text style={{ fontSize: 20, fontFamily: 'GeometriaBold', lineHeight: 20, padding: 10 }}>
            Vicon
          </Text>
          {vicons.map((v, key) => (
            <View
              key={key}
              style={{ padding: 10, marginBottom: key === vicons.length - 1 ? 50 : 0 }}>
              <Vicon name={v} size={20} color={colors.black} />
              <Text style={{ fontSize: 20, fontFamily: 'Geometria', lineHeight: 20 }}>{v}</Text>
            </View>
          ))}
        </StickyScroll>
      </SafeAreaView>
    );
  }
}
