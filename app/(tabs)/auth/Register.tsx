import React from 'react';
import { View, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity, Text } from 'react-native';


import { Formik } from 'formik';

import Colors from "@/constants/Colors";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';





interface IFormValues {
  name: string
  email: string
  lastname: string
  phone: string
  password: string
}

export default function SingUp() {


  const handleSubmit = (values: IFormValues) => {
    console.log(values.name)
    console.log(values.lastname)
    console.log(values.email)
    console.log(values.phone)
    values.name= "";
    values.email= "";
    values.lastname= "";
    values.phone= "";
    values.password="";
   


  }
  return (
      <ScrollView>
        <Formik
          initialValues={{
            name: "",
            email: "",
            lastname: "",
            phone: "",
            password: ""
          }}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            isSubmitting,
            values,
          }) => (
            <View style={styles.main_container}>
              <View style={styles.icon}>
                <MaterialIcons name="add-a-photo" size={24} color="white" />
              </View>

              <View style={styles.container}>
                <View style={styles.boxInput}>
                  <TextInput
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    placeholder="Your Name"
                    style={styles.input}
                  />
                </View>

                <View style={styles.boxInput}>
                  <TextInput
                    onChangeText={handleChange("lastname")}
                    onBlur={handleBlur("lastname")}
                    value={values.lastname}
                    placeholder="Your Lastname"
                    style={styles.input}
                  />
                </View>

                <View style={styles.boxInput}>
                  <TextInput
                    onChangeText={handleChange("phone")}
                    onBlur={handleBlur("phone")}
                    value={values.phone}
                    placeholder="Your Phone Number"
                    keyboardType="phone-pad"
                    style={styles.input}
                  />
                </View>

                <View style={styles.boxInput}>
                  <TextInput
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="Email Address"
                    keyboardType="email-address"
                    style={styles.input}
                  />
                </View>
                <View style={styles.boxInput}>
                  <TextInput
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    placeholder="Password"
                    keyboardType="visible-password"
                    style={styles.input}
                  />
                </View>

                <View style={styles.fatherButton}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                    disabled={isSubmitting}
                  > <Text style={styles.buttonText}>Submit</Text>
                  </TouchableOpacity>
               
                
                  <TouchableOpacity
                    onPress={handleReset}
                    style={styles.button}
                    disabled={isSubmitting}
                  > <Text style={styles.buttonText}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Formik>
        <View >
          <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}> At Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }



  const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
      backgroundColor: Colors.colorDeFondoPrincipal,

    },

    error: {
      margin: 8,
      fontSize: 14,
      color: 'red',
      fontWeight: 'bold',
    },
    boxInput: {
      paddingInline: 25,
      marginTop: 25,
      width: '90%',
      fontSize: 14,
      backgroundColor: '#D8D2C2',
      borderRadius: 30,
      paddingVertical: 15,

    },
    input: {
      
    },
    
    fatherButton: {
      flex:1
    },
    button: {
      backgroundColor: Colors.buttonColor,
      borderRadius: 30,
      paddingVertical: 15,
      width: 150,
      margin: 20,
           
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
    container: {
      justifyContent: "center",
      alignItems: "center",
      width: '90%',
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
    icon: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#766153",
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 15
    },
   
  });