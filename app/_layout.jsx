import {Stack} from "expo-router";
import { AuthProvider, useAuth } from "./context/AuthContext";

function RootLayoutNav() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth/login" />
      </Stack>
    );
  }
  
  return (

      <Stack screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="index" options={{headerTitle:"Home"}}/>
        <Stack.Screen name="profile" options={{headerTitle: "profile"}}/>
        <Stack.Screen name="users/index" options={{headerTitle: false,}}/>
        <Stack.Screen name="users/[userId]" options={{headerTitle: false}}/>
        <Stack.Screen name="settings" options={{headerTitle: "Settings"}}/>
        <Stack.Screen name="not-found" options={{headerTitle: "Oops!"}}/>
        <Stack.Screen name="(drawer)" options={{headerTitle:"Drawer"}}/>
      </Stack>
  )
}
export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}