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

  creatForgotLink: {
    flexDirection:'row',
    alignSelf:'flex-end',
    marginBottom:'5%'
  },
  
  link: {
    color: "#2196F3",
    marginLeft:'10%'

  },

  logo: {
    alignItems: 'center',
    marginBottom: '15%'
  },
  text: {
    fontSize: 30,
    color: '#1A1A1A'
  }
});
  
  export default styles

