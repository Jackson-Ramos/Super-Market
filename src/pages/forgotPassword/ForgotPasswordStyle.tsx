import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      padding:40,
    },
  
    input: {
      height: 40,
      width: "100%",
      borderColor: "#848484",
      borderWidth: 1,
      marginTop: "3%",
      marginBottom:"5%"
    },
  
    buttons: {
      alignSelf:'flex-end',
      marginBottom:'5%',
      padding: 10,
      width: '100%'
    },
  
    logo: {
      alignItems: 'center',
      marginBottom: '15%'
    },
  
    text: { 
      fontSize: 30,
      color: '#2196F3'
    },
  
    linha: {
      color: '#2196F3'
    },
  
    text2: {
      color: '#A1A1A1',
      fontSize: 15
    },

    iconCPF: {
      flexDirection:'row',
    },

    icm: {
      margin: '10%',
      alignSelf: 'center'
    }
  });

  export default styles