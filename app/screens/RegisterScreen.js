import {AppForm, AppFormField, SubmitButton} from '../components/Forms'
import Screen from '../components/Screen'
import * as Yup from 'yup'
import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label('Password')
})

export default function RegisterScreen() {
  return (
    <Screen style={{ padding: 10}}>
      

      <AppForm
      initialValues={{email: '', password: ''}}
      onSubmit={values => console.log(values)}
      validationSchema={validationSchema}>
        <AppFormField
              placeholder="Name" 
              icon="account"
              name="user" 
              autoCapitalize="none" 
              autoCorrect={false} 
              />
          <AppFormField
              placeholder="Email" 
              icon="email"
              name="email" 
              autoCapitalize="none" 
              autoCorrect={false} 
              keyboardType='email-address'
              textContentType="emailAddress" />
          <AppFormField 
              autoCapitalize="none"
              name="password"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              textContentType="password"
              secureTextEntry
            />
          <SubmitButton  title="Register"/>
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
logo: {
  width: 80,
  height: 80,
  justifyContent: 'center',
  alignSelf: 'center',
  marginTop: 50,
  marginBottom: 20
}
})