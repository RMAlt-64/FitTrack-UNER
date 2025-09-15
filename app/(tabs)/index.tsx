import { StyleSheet,  Button, TextInput,  View, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';

import Colors from "@/constants/Colors";
import { useEffect, useState } from 'react';


export default function App() {
  return(
    <View style={styles.container}>
      <Text style={styles.input}>Hola Mundo</Text>
      <TouchableOpacity>
        <Text style={styles.button}>Button</Text>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: "#ffffff",
    width: 250, 
    margin: 15,
    borderRadius:25
  },
  textoEntrada: {

  },
  button: {
    width: 100,
    borderRadius: 40,
    backgroundColor: Colors.buttonColor
  }

});
