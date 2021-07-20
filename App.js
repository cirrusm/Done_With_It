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
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';


export default function App() {

  return (
    <ListingEditScreen />   
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
