import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Modal, FlatList} from 'react-native'
import AppText from './AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'
import Screen from './Screen'
import PickerItem from './PickerItem'


export default function AppPicker({icon, onSelectItem, selectedItem, placeholder, items}) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
      <View style={styles.container}>
        { icon && <MaterialCommunityIcons name={icon} style= {styles.icon} size={20} color= {colors.medium}/>}
        <AppText style={styles.text}>
        {selectedItem ? selectedItem.label : placeholder}
        </AppText>
        <MaterialCommunityIcons name={'chevron-down'}  size={20} color= {colors.medium}/>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
        <Button title="Close" onPress={() => setModalVisible(false)}>
        </Button>
        <FlatList
        data={items}
        keyExtractor={(item)=> item.value.toString()}
        renderItem={({item}) =>
          <PickerItem
            label={item.label}
          onPress={()=>{
            setModalVisible(false)
            onSelectItem(item)
          }}
        />} />
        </Screen>
      </Modal>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center'
  },
  textInput: defaultStyles.text,
  icon: {
    margin: 10
  },
  text: {
    flex: 1,
  }
})
