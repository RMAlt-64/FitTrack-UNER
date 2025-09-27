
import { StyleSheet, Image, TextInput, TouchableOpacity } from "react-native"
import { View, Text } from '@/components/Themed';
import { StatusBar } from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "expo-router";



import Colors from "@/constants/Colors";
import { useEffect, useState } from "react";

export default function LoginScreen() {
  const { login } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("");

  const [error, setError] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [isEnabled, setIsEnabled] = useState<boolean>(true);




  const handleLogin = () => {
    login(username);
    router.replace("/");
    console.log(email);
    console.log(password);
    setEmail(undefined);
    setPassword(undefined);
    if (!email || !password) {
      setError ('Debe completar los campos');
      return
    }
  };

  useEffect (()=>{
    setIsEnabled(email !== undefined  && password !== undefined);
    
  }, [email,password]);

  
  
  return (
    

    <View style={styles.main_container}>
      <StatusBar style="auto" />
      <Image source={require("@/assets/images/retrato-de-mujer-atractiva-segura-pecho-de-brazos-cruzados-y-sonriendo-complacido.jpg")}
      style={styles.profile} />
      <Text style={styles.title}>Login</Text>
      <View style={styles.card}>
        <View style={styles.boxText}>
          <TextInput
          keyboardType="email-address"
          placeholder="correo@email.com"
          value={email}
          onChangeText={setEmail}
          style={{ paddingHorizontal: 10 }} />
        </View>
        <View style={styles.boxTextTwo}>
          <TextInput
          style={styles.textInput} 
          placeholder="Password" 
          value={password}
          onChangeText={setPassword}
          secureTextEntry={showPassword}
           />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={!showPassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            ></Ionicons>
          </TouchableOpacity>
    
        </View>
        <View style={styles.fatherButton}>
          {error && <Text style={styles.error}>{error}</Text>}
          <TouchableOpacity onPress={handleLogin} disabled={!isEnabled} style={ isEnabled ? styles.submit : styles.isdisabledSubmit }>
            <Text style={{color:'#ffffff'}} >Sign in</Text>
          </TouchableOpacity>
        </View> 
      </View>
      <View >
        <TouchableOpacity style={styles.button}>
          <Link href='/' style={{marginLeft: 10}}>
              <Text style={styles.buttonText}> At Home</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.colorDeFondoPrincipal,

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
    margin: 20,
    width: '90%',
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#f5f5f5ff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5

  },
  button: {
        backgroundColor: Colors.buttonColor,
        borderRadius: 30,
        paddingVertical: 15,
        width: 150,
        margin: 20,       
      },
  boxText: {
    paddingVertical: 20,
    backgroundColor: '#D8D2C2',
    borderRadius: 30,
    marginVertical: 10,
    paddingHorizontal: 20
  },
  boxTextTwo:{
    flexDirection: "row", 
    alignItems: "center",
    backgroundColor: '#D8D2C2',
    borderRadius: 30,
    paddingVertical:20,
    marginBottom: 15,
    marginVertical: 10,
    paddingHorizontal: 20
  },
  buttonText: {
      color: "#ffffff",
      fontSize: 16,
      fontWeight: "bold",
      marginVertical:10,
      justifyContent:"center",
      marginHorizontal: 35,
      textAlign:"center"
    },
   
 
  textInput:{
    flex: 1, 
    padding: 10,
  },

  fatherButton: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5ff',
  },
  submit: {
    alignItems: 'center',
    backgroundColor: Colors.buttonColor,
    borderRadius: 30,
    paddingVertical: 20,
    width: 150,
    margin: 20,
  },
  isdisabledSubmit: {
    alignItems: 'center',
    backgroundColor: Colors.buttonColorDisabled,
    borderRadius: 30,
    paddingVertical: 20,
    width: 150,
    margin: 20,
  },
  error:{
    color:"red",
    fontSize:12
  }
  


})