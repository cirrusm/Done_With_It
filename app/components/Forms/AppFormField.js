import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'

export default function AppFormField({name,width, ...otherProps}) {
  const {setFieldTouched, handleChange, errors, touched}= useFormikContext()
  return (
    <>
    <AppTextInput
              // placeholder="Email" 
              // icon="email" 
              // autoCapitalize="none" 
              // autoCorrect={false} 
              // keyboardType='email-address'
              onBlur={() => setFieldTouched(name)}
              // textContentType="emailAddress"
              onChangeText = {handleChange(name)}
              {...otherProps} 
              width={width}/>
              <ErrorMessage style={{color:'red'}} error={errors[name]} visible={touched[name]} />
  </>
  )
}

const styles = StyleSheet.create({})
