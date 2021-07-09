import React from 'react';
import { StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity, Alert, Platform } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import AppText from './app/components/AppText'

export default function App() {

  return (   
<WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? '20px' : 0
  },
});
