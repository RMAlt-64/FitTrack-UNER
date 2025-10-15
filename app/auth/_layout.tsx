import { Stack } from 'expo-router';
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../../context/AuthContext";

export default function RootLayout() {
  
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3A506B',
 
        },
        
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
        
      }}>
      <Stack.Screen name= "login" options={{headerTitle:"Login"}}/>
      <Stack.Screen name= "register" options={{headerTitle:"Register"}}/>
    </Stack>
  )
}
