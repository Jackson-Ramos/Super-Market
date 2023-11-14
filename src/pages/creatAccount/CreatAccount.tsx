import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import styles from './CreatAccountStyle'


const CreatAccount = ({navigation}: any) => {
  return (
    <View style={styles.container}>

    <View style={styles.logo}>
      <Icon size={75} color='#1a1' name='user-plus'></Icon>
    </View>

    <Text>Nome</Text>
    <TextInput placeholder=' Ex.name' style={styles.input}/>

    <Text>Sobrenome</Text>
    <TextInput placeholder=' Ex.Silva' style={styles.input}/>

    <Text>E-mail</Text>
    <TextInput placeholder=' Ex.exemplo@gmail.com' style={styles.input}/>

    <Text>Endereço</Text>
    <TextInput placeholder=' Ex.Rua das Oliveira n.12' secureTextEntry={true} style={styles.input}/>

    <Text>Senha</Text>
    <TextInput placeholder=' Ex.12345' keyboardType='numeric' secureTextEntry={true} style={styles.input}/>

    <Button onPress={() => navigation.navigate("login")} color={'#1A1'} title='salvar'/>

  </View>
  );
}

export default CreatAccount
