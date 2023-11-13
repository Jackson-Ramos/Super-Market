import React from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import styles from './HomeStyle';
import { Card } from 'react-native-elements';

const products = [
  {
  name: "Pizza Calabresa",
  price: "R$: 39,99",
  imagem: 'https://imgs.search.brave.com/JJL3_QdCCokHaL5OMH3zKbnHpo6teVSpZ0TZrVblphA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzE4LzY2Lzk5/LzM2MF9GXzE4NjY5/OTY0X1R4ejRCUzBP/RXJ6ajl2OURITTNO/NTFkOHlGVmE4NWRS/LmpwZw',
  description: 'É especialmente preparada com recheio generoso de linguiça calabresa de primeira qualidade, queijo muçarela e orégano'
},

{ 
name: "Pizza Mussarela",
price: "R$: 39,99",
imagem: 'https://imgs.search.brave.com/z7btkH5zxMMcCeqvGpSTrLBPqOdIw9ZKMw07-z3VoGo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jYWxk/b2JvbS5jb20uYnIv/dXBsb2Fkcy8yMDE3/LzA3L3BpenphLW11/c3NhcmVsYS5qcGc',
description: 'É coberta com molho de tomate, queijo tipo mussarela, azeitonas pretas e orégano e massa com fermentação natural'
},

{ 
  name: "Pizza Marguerita",
  price: "R$: 39,99",
  imagem: 'https://imgs.search.brave.com/b7vkcOpCEUyRPnTWJT7E9tGFvuICDS_5-WQpLkdLVyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hbmFt/YXJpYWJyYWdhLmds/b2JvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wOC9w/aXp6YS1tYXJnaGVy/aXRhLTEwMjR4NTc2/LmpwZw',
  description: 'É composta por tomate, queijo e manjericão, inspirado pelas cores da bandeira da Itália.'
  },

  { 
    name: "Pizza Portuguesa",
    price: "R$: 39,99",
    imagem: 'https://imgs.search.brave.com/-Ioytqy7oz2buzx3UiI7P4dbgBXY2nBltkUk_Re6je8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZWNl/aXRhc2ltcGxlc2Vm/YWNpbC5jb20uYnIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDkvUGl6emEtUG9y/dHVndWVzYS0xMDI0/eDY4MS5qcGc',
    description: 'É Preparada com a deliciosa combinação de ingredientes como ervilha, azeitona, molho de tomate, cebola, ovos, queijo, linguiça calabresa e orégano'
    },

    { 
      name: "Pizza Frango Catupiry",
      price: "R$: 39,99",
      imagem: 'https://imgs.search.brave.com/S5JkSweskHI3si3xbxeZarw417bYfPPisgFB5p85C-A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MTIvYjQvZWMvZjQv/cGl6emEtZnJhbmdv/LWNhdHVwaXJ5Lmpw/Zw',
      description: 'A pizza de frango com catupiry é um sabor clássico do preparo de origem italiana. A combinação possui uma textura que agrada a muitos '
      },
]

const Home = ({shoppingCart, setShoppingCart}: any) => {
  const openToast =(message: string) => {
    ToastAndroid.show(message, 3000)
  }
  return (
  <ScrollView>{
      products.map((products, i) => {
        return(
          <Card key={i}>
            <Card.Title style={{fontWeight: 'bold', fontSize: 20}}>{products.name}</Card.Title>
            <Card.Divider/>
            <Card.Image source={{uri: products.imagem}}/>
            <Card.Divider/>

            <View style={styles.viewBT}>
            <Text style={styles.preco}>Preço {products.price}</Text>
            <Text style={styles.descricao}>descrição: {products.description}</Text>
            </View>

            <Button onPress={() => {
              openToast("Item adicionado ao carrinho!")
              setShoppingCart([...shoppingCart, products])
              }} color={'#1A1'}
              title='comprar'/>
          </Card>
        )
      })
    }
  </ScrollView>
  );
}

export default Home
