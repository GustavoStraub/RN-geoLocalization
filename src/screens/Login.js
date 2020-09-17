import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native'
import { Height, Width } from '../lib/Dimensions'
import Input from '../Components/Input'

export default function Login({ navigation }) {

  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState(null)

  function handleLogin() {
    if (nome === '') {
      setError('Insira um nome')
    } else if (senha == '') {
      setError('Insira uma senha')
    } else if (nome !== 'admin') {
      setError('Nome incorreto')
    } else if (senha !== '123') {
      setError('Senha incorreta')
    } else {
      navigation.navigate('Map')
    }
  }

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <Input
          label='Nome'
          value={nome}
          set={nome => setNome(nome)}
        />
        <Input
          label='Senha'
          value={senha}
          senha={true}
          set={senha => setSenha(senha)}
        />
        {error ? <Text style={styles.errorText}>
          {error}*
      </Text> : null}
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}>
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: Height,
    width: Width,
    justifyContent: 'center',
    alignItems: 'center'
  },
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
    height: Height / 8
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  button: {
    borderRadius: 5,
    backgroundColor: 'gray',
    width: Width / 3,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
})