import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../config/colors'

import React from 'react';
import styles from './styles';

const AppButton = ({title, onPress, color="primary"}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, {backgroundColor: colors[color]}] }>
    <Text style={styles.text}>
      {title}
      </Text>
    
    </TouchableOpacity>
  );
}




export default AppButton;
