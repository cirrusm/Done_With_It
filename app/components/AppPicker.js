import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Modal, FlatList} from 'react-native'
import AppText from './AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'
import Screen from './Screen'
import PickerItem from './PickerItem'


export default function AppPicker({icon, numberOfColumns=1, onSelectItem, selectedItem, PickerItemComponent= PickerItem, placeholder, items, width}) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
      <View style={[styles.container, {width}]}>
        { icon && <MaterialCommunityIcons name={icon} style= {styles.icon} size={20} color= {colors.medium}/>}
        {selectedItem ? (
          <AppText style={styles.text}> {selectedItem.label}</AppText>) :( <AppText style={styles.placeholder}>{placeholder}</AppText>
        )}
        <MaterialCommunityIcons name={'chevron-down'}  size={20} color= {colors.medium}/>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
        <Button title="Close" onPress={() => setModalVisible(false)}>
        </Button>
        <FlatList
        numColumns={numberOfColumns}
        data={items}
        keyExtractor={(item)=> item.value.toString()}
        renderItem={({item}) =>
          <PickerItemComponent
          item={item}
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
  },
  placeholder: {
    flex: 1,
    color: '#6e6969'
  }
})
