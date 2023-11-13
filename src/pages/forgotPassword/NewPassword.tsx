import React from 'react'
import { View, Text } from 'react-native'
import styles from './NewPasswordStyle'
import { Button } from '@rneui/base'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';



const NewPassword = ({navigation}: any) => {
  return (
    <View>

      <View style={{alignItems: 'center', marginTop: '45%'}}> 
        <Icon  size={200} color={'#1a1'} name='email-send'/>
        <Text style={{fontSize: 33,  marginBottom: '15%', color: '#7F7D7E'}} >Uma nova senha foi enviada para o seu e-mail !</Text>
        <Button onPress={() => navigation.navigate('login')} color={'#1A1'} style={{alignItems: 'center', }} title={'Voltar ao Inicio'}/>
      </View>

    </View>
  )
}

export default NewPassword
