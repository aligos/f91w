/* @flow */
import React from 'react';
import { Font } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Icons } from '@screens';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Icons,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

const Routes = createAppContainer(AppNavigator);

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      Fuel: require('../assets/fonts/fuel.ttf'),
      Shades: require('../assets/fonts/shades.ttf'),
      Vicon: require('../assets/fonts/vicon.ttf'),
      Geometria: require('../assets/fonts/Geometria.ttf'),
      GeometriaBold: require('../assets/fonts/Geometria-Bold.ttf'),
      GeometriaMedium: require('../assets/fonts/Geometria-Medium.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    if (!this.state.fontLoaded) {
      return null;
    }

    return <Routes />;
  }
}
