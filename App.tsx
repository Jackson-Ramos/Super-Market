import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/login/Login";
import Home from "./src/pages/home/Home";
import CreatAccount from "./src/pages/creatAccount/CreatAccount";
import ForgotPassword from "./src/pages/forgotPassword/ForgotPassword";
import NewPassword from "./src/pages/forgotPassword/NewPassword";
import  Icon  from 'react-native-vector-icons/Fontisto';
import  Icon1  from 'react-native-vector-icons/Ionicons';
import ShoppngCart from "./src/pages/shoppingCart/ShoppingCart";
import { useState } from "react";

 const App =({navigation}: any): JSX.Element => {

  const Stack = createNativeStackNavigator()
  const [shoppingCart, setShoppingCart] = useState([])
  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen options={{headerShown: false}} name="login" component={Login}></Stack.Screen>
        <Stack.Screen options={{title: "Recuperar Senha", headerTitleAlign: "center"}} name="forgotPassword" component={ForgotPassword}></Stack.Screen>
        <Stack.Screen options={{title: "Criar Usuário", headerTitleAlign: "center"}} name="creatAccount" component={CreatAccount}></Stack.Screen>
        <Stack.Screen options={{title: 'Recuperação de senha', headerShown: false}} name="NewPasswod" component={NewPassword}></Stack.Screen>
        <Stack.Screen options={{title: "Carrinho", headerTitleAlign: "center"}} name='shoppngCart' component={ShoppngCart}></Stack.Screen>

        <Stack.Screen options={({navigation}) => {
          return {
          headerBackVisible: false,
          headerTitleAlign: 'center',
          title: 'Pizzas',
          headerRight: () => (
            <Icon onPress={() =>(navigation.navigate('shoppngCart', {shoppingCart}))} name="shopping-basket" size={28}></Icon>
          ),
          headerLeft: () => (
            <Icon1 onPress={() => (navigation.navigate('login'))} name="log-out-outline" size={35}></Icon1>
          )
        }
        }} name="home">
          {
            () => (
              <Home shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} ></Home>
            )
          }
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App