import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import {Formik} from 'formik'
import * as Yup from 'yup'
import AppText from '../components/AppText'
import ErrorMessage from '../components/ErrorMessage'
import AppFormField from '../components/AppFormField'
import SubmitButton from '../components/SubmitButton'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label('Password')
})

export default function LoginScreen() {
  return (
    <Screen style={{ padding: 10}}>
      <Image style={styles.logo} source = {require('../assets/logo-red.png')} />

      <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => console.log(values)}
      validationSchema={validationSchema}>
        { () => (
          <>
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
            <SubmitButton  title="Submit"/>
          </>
        ) }

      </Formik>
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
