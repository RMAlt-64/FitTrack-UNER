import React from 'react';
import { Text, View, StyleSheet, TextInput, Alert,Image } from 'react-native';
import * as Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Colors from "@/constants/Colors";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default class SingUp extends React.Component {
  emailInput = null;
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.icon} >
          <MaterialIcons name="add-a-photo" size={24} color="white" />
        </View>
        
        <Formik
          initialValues={{ name: '', email: '', lastName:'', phone: '', }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(2, 'Too Short!')
              .max(10, 'Too Long!')              
              .required('Required'),
            email: Yup.string()
              .email('Invalid Email')
              .required('Required'),
            lastName: Yup.string()
            .min(2,'Too Short!!')
            .max(10, 'Too Long!')              
            .required('Required'),
            phone: Yup.number()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')              
            .required('Required'),

          })}
          onSubmit={(values, formikActions) => {
            setTimeout(() => {
              Alert.alert(JSON.stringify(values));
              // Important: Make sure to setSubmitting to false so our loading indicator
              // goes away.
              formikActions.setSubmitting(false);
            }, 500);
          }}>
          {props => (
            <View style={styles.container}>
              <View style={styles.boxInput}>
             <TextInput
                onChangeText={props.handleChange('name')}
                onBlur={props.handleBlur('name')}
                value={props.values.name}
                autoFocus
                placeholder="Your Name"
                style={styles.input}
                onSubmitEditing={() => {
                  // on certain forms, it is nice to move the user's focus
                  // to the next input when they press enter.
                  this.emailInput.focus()
                }}
                
              />
              </View>
              {props.touched.name && props.errors.name ? (
                <Text style={styles.error}>{props.errors.name}</Text>
              ) : null}
             
              <View style={styles.boxInput}>
              <TextInput
                onChangeText={props.handleChange('lastName')}
                onBlur={props.handleBlur('lastName')}
                value={props.values.lastName}
                autoFocus
                placeholder="Your LastName"
                style={styles.input}
                
              />
              </View>
              {props.touched.lastName && props.errors.lastName ? (
                <Text style={styles.error}>{props.errors.lastName}</Text>
              ) : null}
              
              <View style={styles.boxInput}>
              <TextInput
                onChangeText={props.handleChange('phone')}
                onBlur={props.handleBlur('phone')}
                value={props.values.phone}
                autoFocus
                placeholder="Your Phone Number"
                style={styles.input}
                
              />
              </View>
              {props.touched.phone && props.errors.phone ? (
                <Text style={styles.error}>{props.errors.name}</Text>
              ) : null}
              
              <View style={styles.boxInput}>
              <TextInput
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                value={props.values.email}
                placeholder="Email Address"
                style={styles.input}
                ref={el => this.emailInput = el}
                
              />
              </View>
              {props.touched.email && props.errors.email ? (
                <Text style={styles.error}>{props.errors.email}</Text>
              ) : null}
              
              <View style={styles.fatherButton}>
              <Button
                onPress={props.handleSubmit}
                
                mode="contained"
                loading={props.isSubmitting}
                disabled={props.isSubmitting}
                style={styles.button}>
                Submit
              </Button>
              <Button
                onPress={props.handleReset}
                
                mode="elevated"
                disabled={props.isSubmitting}
                style={styles.button}>
                Reset
              </Button>
              </View>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent:"center",
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
    flex:1,
   
    width: '90%',
    fontSize: 14,
    backgroundColor: '#D8D2C2',
    borderRadius: 30,
    
    paddingVertical:20,
    marginBottom: 15,
    marginVertical: 15,
    
  },
  
  button: {
   
    backgroundColor: Colors.buttonColor,
    borderRadius: 30,
    paddingVertical: 10,
    width: 150,
    margin: 20,
    
  },
  container: {
    
    justifyContent:"center",
    alignItems:"center",
    
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
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#766153",
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom:15
    
  },
  

});