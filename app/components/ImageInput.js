import React, {useState, useEffect} from 'react'
import { StyleSheet, SafeAreaView, Image, Text, View, TouchableOpacity, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Icon from './Icon'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ImageInput({imageUri, onChangeImage}) {

    useEffect(() => {
      requestPermission()
    }, [])

  const requestPermission = async()=> {
    const {granted} = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted){
      alert('You need to enable permission to access the camera')
    }
  }

  const handlePress = () => {
    if(!imageUri) selectImage();
    else Alert.alert('Delete', 'Are you sure you want to delete this image?', [{text: 'Yes', onPress: ()=> onChangeImage(null)}, {text:'No'}])

    
  }
  
  const selectImage = async () => {
    try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5
    })
    if(!result.cancelled)
      onChangeImage(result.uri)
    }catch(error){
      console.log(error)
    }
    }

  return (
      <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>{ !imageUri && (
      <MaterialCommunityIcons name='camera' color={colors.medium} size= {40}/>
      
      )}
      {imageUri && <Image source={{uri : imageUri}} style= {styles.image} />}
      </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.light,
    width: 80,
    justifyContent: 'center',
    height: 100,
    width: 100,
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})
