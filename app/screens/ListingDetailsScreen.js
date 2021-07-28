import React from 'react'
import { StyleSheet,Image, Text, View } from 'react-native'
import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen({route}) {
  const listing = route.params;
  return (
    <View>
     <Image style={styles.image} source={listing.image} />
     <View style={styles.detailsContainer}>
     <AppText style={styles.title}>{listing.title}</AppText>
     <AppText style={styles.price}>${listing.price}</AppText>
     <View style={styles.infoContainer}>
     <ListItem image={require('../assets/horse.jpeg')} subTitle='3 listings' title="Meta Horse"/>

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
