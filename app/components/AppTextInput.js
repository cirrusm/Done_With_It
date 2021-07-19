import React, {useState} from 'react'
import { Platform, StyleSheet, TextInput, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'


export default function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      { icon && <MaterialCommunityIcons name={icon} style= {styles.icon} size={20} color= {colors.medium}/>}
      <TextInput style = {[styles.textInput, styles.textWidth ]} {...otherProps} placeholderTextColor={colors.medium}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: '100%',
    padding: 10,
    marginVertical: 10
  },
  textInput: defaultStyles.text,
  textWidth: {width: '100%'},
  icon: {
    margin: 10,

  }
})
