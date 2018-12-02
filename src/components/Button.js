/* @flow */
import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import TouchableItem from './TouchableItem';

const ButtonContent = styled(TouchableItem)`
  justify-content: center;
  align-content: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'blue')};
  align-content: center;
  height: 44;
  width: auto;
  border-radius: 33;
`;

const ButtonText = styled(Text)`
  text-align: center;
  color: ${props => (props.textColor ? props.textColor : 'white')};
  font-family: GeometriaBold;
  font-size: 20;
  line-height: 23;
  height: 23;
  align-self: center;
`;

type ButtonType = {
  name: string,
  onPress?: () => void,
  backgroundColor?: string,
  textColor?: string,
};

export default (props: ButtonType) => {
  return (
    <ButtonContent {...props}>
      <ButtonText>{props.name}</ButtonText>
    </ButtonContent>
  );
};
