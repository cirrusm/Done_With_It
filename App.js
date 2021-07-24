import React, {useEffect, useState} from 'react';
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
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { result } from 'lodash';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import styles from './app/config/styles';

const Link = () => {
  const navigation = useNavigation()
  return (<Button 
    title="Click"
    onPress={()=> navigation.navigate("TweetDetails")}
/>)}

const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
)

const TweetDetails = ({route}) => (
  //useRoute gets you the route if youre in a child component
<Screen>
  <Text>details</Text>
</Screen>

)

const Stack = createStackNavigator()
const StackNavigator = () => (
  <Stack.Navigator
  screenOptions={{
    headerStyle: {backgroundColor: "tomato"},
    headerTintColor: 'White',
    headerShow: false
  }} >
    <Stack.Screen 
      name = "Tweets"
      component={Tweets}
      options={{
        headerStyle: {backgroundColor: "tomato"},
        headerTintColor: 'White',
        headerShow: false
      }} />
    <Stack.Screen name = "TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
)
const Account = () => <Screen><Text>Account</Text></Screen>
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
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
  image: {
    height: 100,
    width: 100
  }

});
