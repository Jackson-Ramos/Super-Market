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
  
  
    viewButtons: {
      flexDirection:'row',
      marginBottom:'5%',
      padding: 10,
      width: '100%',
    },
  
    logo: {
      alignItems: 'center',
      marginBottom: '15%'
    },
    button: {
      marginEnd: "auto",
      marginStart: "auto"
    }
    
  });
  export default styles