import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7c7978ff',
 
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name= "login" options={{headerTitle:"Login"}}/>
      <Stack.Screen name= "register" options={{headerTitle:"Register"}}/>
    </Stack>
  )
}
