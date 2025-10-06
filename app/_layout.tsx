import { Stack, Slot } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

function RootLayoutInner() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    
    if (!loading){
      if (user) {
        router.replace("/home");
      } else {
        router.replace("/auth/login");
      }
    }

    
  }, [user, loading]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }
  return;

}

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="auth" />
        <Stack.Screen name="home" />
        <Stack.Screen name="map" />
        <Stack.Screen name="camera" />
        <Stack.Screen name="activities" />
        <Stack.Screen name="settings" />
      </Stack>
      <RootLayoutInner/>
    </AuthProvider>
  );
}
