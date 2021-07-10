import React from 'react';
import { StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity, Alert, Platform } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card'
import AppText from './app/components/AppText'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {

  return (   
    <MessagesScreen />
   

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
