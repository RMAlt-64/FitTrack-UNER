import { StyleSheet, TextInput,  View, TouchableOpacity, Text } from 'react-native';
import { Link } from 'expo-router';



export default function App() {
  return(
    <View style={styles.container}>
      <Text>HOME</Text>
      <TouchableOpacity>
        <Link href="/auth/login">Go to Login</Link>
        <Link href="/auth/register">Go to Register</Link>
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
  

});
