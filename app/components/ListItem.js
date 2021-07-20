import React from 'react'
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ListItem({title, subTitle, image, onPress, renderRightActions, IconComponent}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress}
      underlayColor={colors.light}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source = {image} style={styles.image} />}
            <View style = {styles.detailContainer}>
              <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
              {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
            </View>
            <MaterialCommunityIcons name ="chevron-right" size={25} color={colors.medium}/>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    
  },
  title: {
    fontWeight: '600',
  },
  subTitle: {
    color: colors.medium
  }
})
