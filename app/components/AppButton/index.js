import { Button, Text, TouchableOpacity } from 'react-native'

import React from 'react';
import styles from './styles';

const AppButton = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>
      {props.children}        
        </Text> </TouchableOpacity>
  );
}


export default AppButton;
