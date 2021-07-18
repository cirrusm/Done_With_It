import React, {useState} from 'react';
import { StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity, TextInput, Alert, Platform } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card'
import AppText from './app/components/AppText'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
export default function App() {
  const [firstName, setFirstName] = useState('')
  return (   
    <Screen>
      <AppTextInput 
      placeholder = "hi"
      icon="email"
      />
    </Screen>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff3f',
    paddingTop: Platform.OS === "android" ? '20px' : 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
