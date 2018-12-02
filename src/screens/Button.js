/* @flow */
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Button from '@components/Button';
import colors from '@constants/colors';

export default class ButtonComponent extends Component {
  render() {
    return (
      <SafeAreaView style={{ justifyContent: 'center', alignContent: 'center' }}>
        <Button
          name="Press Me!"
          onPress={() => alert('Awww, too hard!')}
          textColor={colors.white}
          backgroundColor={colors.bluesky}
        />
      </SafeAreaView>
    );
  }
}
