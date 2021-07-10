import React from 'react'
import { StyleSheet,Image, Text, View } from 'react-native'
import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen({image, price, title}) {
  return (
    <View>
     <Image style={styles.image} source={require('../assets/jacket.jpg')} />
     <View style={styles.detailsContainer}>
     <AppText style={styles.title}>Red jacket for sale</AppText>
     <AppText style={styles.price}>$100</AppText>
     <View style={styles.infoContainer}>
     <ListItem image={require('../assets/mosh.jpg')} subTitle='5 listings' title="Mosh Hamedani"/>

     </View>
    </View>
     </View>
  )
}

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: 300
  },
  detailsContainer:{
    padding:20
  },
  price:{
    color: colors.secondary
  },
  title:{
    fontSize:20,
    fontWeight:'700'
  },
  infoContainer:{
    marginVertical: 30
  }
})
