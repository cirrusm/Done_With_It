import React, { useEffect, useState } from 'react'
import {FlatList, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../config/colors'
import routes from '../navigation/routes'
import listingsApi from '../api/listings'

export default function ListingsScreen({navigation}) {
  const [listings, setListings] = useState([])

  const loadListings = async () => {
    const response = await listingsApi.getListings()
    setListings(response.data)
  }
  useEffect(()=> {
    loadListings()
  }, [])
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
            imageUrl= {item.images[0].url} />}
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
