import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Card } from 'react-native-elements'
import styles from './ShoppingCardStyle'

const ShoppngCart = ({route}: any) => {
  const {shoppingCart} = route.params
  return (
    shoppingCart.map((prod: any, i: number) => (
      <View>
      <ScrollView>
        <Card key={i}>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Divider/>
          <Card.Image source={{uri: prod.imagem}}/>
          <Card.Divider/>

          <View>
          <Text style={styles.preco}>Preço {prod.price}</Text>
          <Text style={styles.descricao}>descrição: {prod.description}</Text>
          </View>

        </Card>

      </ScrollView>
      </View>
    ))
  )
    
}

export default ShoppngCart