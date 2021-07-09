import React from 'react';
import { StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity, Alert, Platform } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
    <View style={{flex:1,
    flexDirection:'row',
    justifyContent:'center'}}>
      <View
        style = {{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: '100%'
        }}>
        </View>
        <View
        style = {{
          backgroundColor: 'red',
          width: 100,
          height: 100
        }}>
        </View>
        <View
        style = {{
          backgroundColor: 'green',
          width: 100,
          height: 100
        }}>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? '20px' : 0
  },
});
