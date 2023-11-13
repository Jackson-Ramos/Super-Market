import React from 'react'
import  Icon  from 'react-native-vector-icons/Fontisto';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from './LoginStyle'
import { ScreenStackHeaderSubview } from 'react-native-screens';



const Login = ({navigation}: any) => {

  const goToPage = (path: String) => {
    navigation.navigate(path)
  }

    return (
    
        <View style={styles.container}>
          <View style={styles.logo}>
            <Icon size={200} color='#1A1A' name='shopping-store'></Icon>
            <Text style={styles.text}>Sapore D'Itália</Text> 
          </View>
    
          <Text> Login</Text>
          <TextInput placeholder=' Ex.name' style={styles.input}/>
          <Text> password</Text>
          <TextInput placeholder=' Ex.12345' keyboardType='numeric' secureTextEntry={true} style={styles.input}/>
          
          <View style={styles.creatForgotLink}>
            <Text onPress={() => {goToPage("creatAccount")}} style={styles.link}>Create Account</Text>
            <Text onPress={() => {goToPage("forgotPassword")}} style={styles.link}>Forgot Password</Text>
          </View>
    
          <Button onPress={() => goToPage("home")} color={'#1A1'} title='Enviar'></Button>
    
        </View>
      );
    }
    

export default Login
