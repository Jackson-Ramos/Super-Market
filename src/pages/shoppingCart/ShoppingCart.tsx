import React from 'react'
import { Text } from 'react-native'

const ShoppngCart = ({route}: any) => {
  const {shoppngCart} = route.params
  return (
    shoppngCart.map((prod: any, i: number) => (
      <Text>{prod.name} </Text>
    ))
  )
    
}

export default ShoppngCart