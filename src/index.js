/* @flow */
import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';
import Instagram from './screens/Instagram';

import type { NavigationProps } from 'react-navigation/src/TypeDefinition';

const list = [
  {
    name: 'Instagram Example',
    route: 'instagram',
  },
];

class HomeScreen extends React.Component<NavigationProps> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <List containerStyle={{ marginBottom: 20 }}>
          {list.map(l => (
            <ListItem
              key={l.name}
              title={l.name}
              onPress={() => navigation.navigate('Instagram')}
            />
          ))}
        </List>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Instagram: {
    screen: Instagram,
  },
});

export default createAppContainer(AppNavigator);
