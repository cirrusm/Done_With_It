import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import Icon from '../components/Icon'
import colors from '../config/colors'
import ListItemSeperator from '../components/ListItemSeperator'
import routes from '../navigation/routes'

const item = {
  id: 1,
  title: 'Cirrus Mokhtari',
  description: 'Cirrus1994@gmail.com',
  image: require('../assets/mypic.jpeg')
}

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    },
    targetScreen: 'Messages'
  }
]

export default function AccountScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <View style = {styles.container}>
      <ListItem 
        title={item.title} 
        subTitle={item.description} 
        
        image={item.image}
        style= {styles.card}
        />
      </View>
      <View style= {styles.container}>
        <FlatList
          data = {menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent ={ListItemSeperator}
          renderItem={({item}) =>
            <ListItem
              title={item.title}
              IconComponent = {
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
        } 
        onPress={() => navigation.navigate(routes.MESSAGES)}
        /> }
/>
      </View>
      <ListItem
        title="Log Out"
        IconComponent= {
          <Icon name="logout" backgroundColor="#ffe66d" />
        } />
    </Screen>
  )
}

const styles = StyleSheet.create({
  card: {
    borderColor: 'red',
    borderWidth: 3
  },
  screen: {
    backgroundColor: colors.light
  },
  container: {
    marginVertical: 20
  }
})
