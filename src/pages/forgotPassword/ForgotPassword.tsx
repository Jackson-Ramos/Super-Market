import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import styles from './ForgotPasswordStyle';


const ForgotPassword = ({navigation}: any) => {
  return (
    <View style={styles.container}>

      <View style={styles.icm}>
      <Icon color={'#1a1'} size={60} name='key'/>
      </View>

      <View style={styles.logo}>
        <Text style={styles.text}>Esqueceu a senha?</Text>
        <Text style={styles.linha}>_____________________________________________</Text>
        <Text style={styles.text2}>Vamos recuperar sua senha de acesso.</Text>
      </View>

      <View style={styles.iconCPF}>
        <Icon size={15} name='id-card'/>
        <Text>Qual é o seu CPF</Text>
      </View>

      <TextInput placeholder=' Digite seu CPF' style={styles.input}/>
      
      <Button onPress={() => navigation.navigate("NewPasswod")} color={'#1A1'} title='Recuperar minha Senha'/>

  </View>
  );
}

export default ForgotPassword
