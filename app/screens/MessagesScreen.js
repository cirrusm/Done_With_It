import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Platform, } from 'react-native'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeperator from '../components/ListItemSeperator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'


const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg')
  }
]

export default function MessagesScreen() {

  const handleDelete = message => {
    setMessages(messages.filter((m) => m.id !== message.id))
  }

  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)
  return (
    <Screen>
      <FlatList data={messages}
      keyExtractor={(message)=>message.id.toString()}
      renderItem = {({item}) =>(
        <ListItem 
        title={item.title} 
        subTitle={item.description} 
        onPress={()=> console.log('message selected', item)}
        image={item.image}
        renderRightActions={() => <ListItemDeleteAction onPress={()=> handleDelete(item)}/>}
        />
        )}
      ItemSeparatorComponent={ListItemSeperator} 
      refreshing={refreshing}
      onRefresh={() => {
        setMessages([
          {
            id: 2,
            title: 'T2',
            description: 'D2',
            image: require('../assets/mosh.jpg')
          }
        ])
      }}
      />
      
    </Screen>
  )
}

const styles = StyleSheet.create({

})
