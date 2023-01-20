/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useEffect} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';



export default function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  handleOnPress = () => {
      if (email.toLowerCase() == 'demo@gmail.com' && password == '1234'){
        navigation.navigate('Details', { username, age, email })
        Alert.alert(
          'Login Success'
        );
      } else {
        Alert.alert(
          'Login Failure'
        );
      }
  };

 
  return (
    <View testID="welcomeScreen" style={styles.container}>
    
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          testID="#email"
          onChangeText={(email) => setEmail(email)}
        />
      </View>


      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity testID={'touchable'} style={styles.loginBtn} onPress={this.handleOnPress}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'black',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
    borderColor:'black',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    borderColor:'black',

  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:'#E50914',
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    borderColor:'#564d4d',
    backgroundColor: '#E50914',
  },
});
