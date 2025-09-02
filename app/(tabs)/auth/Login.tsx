
import { StyleSheet, Image, TextInput,TouchableOpacity } from "react-native"
import { View,Text} from '@/components/Themed';
import { StatusBar } from "expo-status-bar";



export default function Login() {
  


  


  return (
    
    <View style={styles.main_container}>
      <StatusBar style="auto"/>
      <Image source={require("@/assets/images/retrato-de-mujer-atractiva-segura-pecho-de-brazos-cruzados-y-sonriendo-complacido.jpg")} style={styles.profile}/>
      <Text style={styles.title}>Login</Text>
      <View style={styles.card}>
        <View style={styles.boxText}>
          <TextInput placeholder="correo@email.com" style={{paddingHorizontal:15}}/>
        </View>
        <View style={styles.boxText}>
          <TextInput placeholder="Password" style={{paddingHorizontal:15}} />

        </View>
        <View style={styles.fatherButton}>
          <TouchableOpacity style={styles.submit}>
            <Text style={{color: 'white'}}>sign in</Text>
          </TouchableOpacity>

        </View>
      </View>

      
    </View>
    
  )
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#FAF7F0",
      
    },
    title: {
      fontSize: 30
    },
    profile: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    card: {
      margin:20,
      width: '90%', 
      padding:20,
      borderRadius: 20,
      backgroundColor: '#f5f5f5ff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height:2
      },
      shadowOpacity:0.25,
      shadowRadius:4,
      elevation: 5

    },
    boxText: {
      paddingVertical:20,
      backgroundColor: '#D8D2C2',
      borderRadius:30,
      marginVertical:10


    },


    fatherButton:{
      alignItems: 'center',
      backgroundColor: '#f5f5f5ff',
      

    },
    submit:{
      alignItems:'center',
      backgroundColor: '#4A4947',
      borderRadius: 30,
      paddingVertical:20,
      width:150,
      margin: 20,
      
    },


})