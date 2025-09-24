import React from 'react';
import { View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Text } from 'react-native';
import * as Yup from 'yup';
import { Link } from 'expo-router';
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

const formValidationSchema = Yup.object().shape({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Campo obligatorio'),
  lastname: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Campo obligatorio'),
  email: Yup.string().email('Invalid email address').required('Campo obligatorio'),
  phone: Yup.string()
  .matches(/^[0-9]+$/, 'El número de teléfono solo debe contener dígitos numericos')
  
  .required('Campo obligatorio'),
  password: Yup.string()
  .required('Campo obligatorio')
 
});

export default function SingUp() {
  

  const handleSubmit = (values: IFormValues, { resetForm }: { resetForm: () => void }) => { 
    
    console.log(values.name)
    console.log(values.lastname)
    console.log(values.email)
    console.log(values.phone)
    resetForm()
  }
  
  return (

   
      <ScrollView>
        <Formik
          initialValues={{
            name: "",
            email: "",
            lastname: "",
            phone:"" ,
            password: ""
          }}
          validationSchema={formValidationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            isSubmitting,
            values,
            errors,
            touched 
            
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
                    autoFocus={true}
                  ></TextInput> 
                </View>
                {errors.name && touched.name ? (
                    <Text style={styles.errorText}>{errors.name}</Text>
                  ) : null}

                <View style={styles.boxInput}>
                  <TextInput
                    onChangeText={handleChange("lastname")}
                    onBlur={handleBlur("lastname")}
                    value={values.lastname}
                    placeholder="Your Lastname" 
                  ></TextInput> 
                </View>
                {errors.lastname && touched.lastname ? (
                      <Text style={styles.errorText}>{errors.lastname}</Text>
                    ) : null}

                <View style={styles.boxInput}>
                  <TextInput
                    onChangeText={handleChange("phone")}
                    onBlur={handleBlur("phone")}
                    value={values.phone}
                    placeholder="Your Phone Number"
                    keyboardType="phone-pad"
                  ></TextInput> 
                </View>
                {errors.phone && touched.phone ? (
                  <Text style={styles.errorText}>{errors.phone}</Text>
                  ) : null}

                <View style={styles.boxInput}>
                  <TextInput 
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="Email Address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  ></TextInput> 
                </View>
                {errors.email && touched.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}  
                <View style={styles.boxInput}>
                  <TextInput
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                  ></TextInput>
                </View>
                {errors.password && touched.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

                <View style={styles.fatherButton}>

                  <TouchableOpacity
                    onPress={() => handleReset()}
                    style={styles.button}
                    disabled={isSubmitting}
                  > <Text style={styles.buttonText}>Reset</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleSubmit()}
                    disabled={isSubmitting}
                  > <Text style={styles.buttonText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Formik>
        <View >
          <TouchableOpacity style={styles.button}>
            <Link href='/' style={{marginLeft: 10}}>
             <Text style={styles.buttonText}> At Home</Text>
            </Link>
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

    boxInput: {
      paddingInline: 25,
      marginTop: 25,
      width: '90%',
      fontSize: 14,
      backgroundColor: '#D8D2C2',
      borderRadius: 30,
      paddingVertical: 15
    }, 
    fatherButton: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginVertical: 20,
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
    errorText:{
      color: "red",
      fontSize: 12,
      marginTop: 5,
      marginLeft: 10,
      fontWeight: "500",
    }
  });