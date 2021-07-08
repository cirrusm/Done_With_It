import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const handlePress = () => (console.log('clicked'))
  //React native components map the components into their native widgets. View Text Statusbar are examples
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello Welcome to React Native</Text>
      <TouchableOpacity onPress={handlePress}>
      <Image source={{
        uri: "https://picsum.photos/200/300",
        width: 200,
        height:300
      }} />
      </TouchableOpacity>
      <Button title="hi" onPress={() => Alert.alert('My title', 'My message', [
        {text: 'Yes'},
        {text: 'No'}
      ])} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
