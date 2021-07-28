import React from 'react'
import {FlatList, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../config/colors'
import routes from '../navigation/routes'

export default function ListingsScreen({navigation}) {
  const listings = [
    {
      id: 1,
      title: 'Red Jacket for sale',
      price: 100,
      image: require('../assets/jacket.jpg')
    },
    {
      id: 2,
      title: 'Couch in great condition',
      price: 500,
      image: require('../assets/couch.jpg')
    },
    {
      id: 3,
      title: "Am selling Pikachu",
      price: 247,
      image: require('../assets/pikachu.jpeg')

    }
  ]
  return (
    <Screen style={styles.screen}>
      <FlatList
        data= {listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => 
          <Card
            onPress ={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            title={item.title}
            subTitle={'$' + item.price}
            image= {item.image} />}
            />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
    flex: 1
  }
})
