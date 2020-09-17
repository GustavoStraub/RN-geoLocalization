import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Width, Height } from '../lib/Dimensions'

export default function Input(props) {
  return (
    <View style={styles.form}>
      <Text style={styles.Label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        secureTextEntry={props.senha}
        onChangeText={props.set}
        autoCapitalize='none' />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: Width / 2,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#cecece',
    paddingLeft: 10,
    fontSize: 16
  },
  Label: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20
  },
  form: {
    height: Height / 6
  }
})