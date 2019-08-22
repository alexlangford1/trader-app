import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')


const Login = (props) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const user = {
    username: 'alex',
    password: 'qwe'
  }
  const { navigate } = props.navigation

  const login = () => {
    if(userName === user.username && password == user.password){
      navigate('Profile')
    } else {
      alert('dangit')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shift Trader</Text>
      <TextInput
        value={userName}
        onChangeText={value => setUserName(value)}
        style={styles.input}
        placeholder={'Email'}
      />
      <TextInput
        value={password}
        onChangeText={value => setPassword(value)}
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={() => login()}
        style={styles.btn}
      >
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => navigate('Register')}
      style={styles.btn}
      >
        <Text style={{color: 'white'}}>Register</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 24,
    backgroundColor: 'white',
    margin: 10,
    paddingLeft: 25,
    textAlign: 'left',
  },
  title: {
    fontSize: 35,
    color: "white",
    marginTop: 175
  },
  btn: {
    backgroundColor: 'rebeccapurple',
    width: WIDTH - 250,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    color: "white",
    borderRadius: 24,
    margin: 10,

  }

});
