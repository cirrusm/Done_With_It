import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import colors from '../config/colors'
import AppText from './AppText'

export default function Card({title, subTitle, image, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>

    <View style={styles.card}>
      <Image style={styles.image} source={image}/>
      <View style={styles.detailContainer}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style = {styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
card: {
  backgroundColor: 'white',
  borderRadius: 15,
  marginBottom:20,
  width: '100%'
},
image: {
  width: '100%',
  height: 200,
  padding: 10,
  borderRadius: 5
},
detailContainer: {
  padding: 20,
},
title: {
  fontSize: 24
},
subTitle: {
  color: colors.secondary,
  fontWeight: 'bold'
}
})

