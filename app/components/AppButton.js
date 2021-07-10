import {Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

import React from 'react';


const AppButton = ({title, onPress, color="primary"}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, {backgroundColor: colors[color]}] }>
    <Text style={styles.text}>
      {title}
      </Text>
    
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 6
  },
  text: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
})


export default AppButton;
