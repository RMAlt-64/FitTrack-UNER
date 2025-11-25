import { Stack, Slot } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { View, ActivityIndicator, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

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
 

}

export default function RootLayout() {
  const { logout } = useAuth();
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false,
        gestureEnabled: false 
       }}>
        
        <Stack.Screen name="auth"/>
        <Stack.Screen name="home" options={{
          title: "Inicio",
          headerShown: true,
          headerStyle: { backgroundColor: "#3A506B" },
          headerTintColor: "#fff",
          headerRight: () => (
            <TouchableOpacity onPress={logout} style={{ marginRight: 15 }}>
              <MaterialIcons name="logout" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}/>
        <Stack.Screen name="map" options={{
          title: "Mapa",
          headerShown: true,
          headerStyle: { backgroundColor: "#3A506B" },
          headerTintColor: "#fff",
          headerRight: () => (
            <TouchableOpacity onPress={logout} style={{ marginRight: 15 }}>
              <MaterialIcons name="logout" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}/>
          <Stack.Screen name="walkDetails" options={{
            title: "Detalles de la caminata",
            headerShown: true,
            headerStyle: { backgroundColor: "#3A506B" },
            headerTintColor: "#fff",
            headerRight: () => (
              <TouchableOpacity onPress={logout} style={{ marginRight: 15 }}>
                <MaterialIcons name="logout" size={24} color="#fff" />
              </TouchableOpacity>
            ),
        }}/>
        <Stack.Screen name="camera" options={{
          title: "camera",
          headerShown: true,
          headerStyle: { backgroundColor: "#3A506B" },
          headerTintColor: "#fff",
          headerRight: () => (
            <TouchableOpacity onPress={logout} style={{ marginRight: 15 }}>
              <MaterialIcons name="logout" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }} />
        <Stack.Screen name="activities" options={{
          title: "Registro de actividad",
            headerShown: true,
            headerStyle: { backgroundColor: "#3A506B" },
            headerTintColor: "#fff",
            headerRight: () => (
              <TouchableOpacity onPress={logout} style={{ marginRight: 15 }}>
                <MaterialIcons name="logout" size={24} color="#fff" />
              </TouchableOpacity>
            ),
        }}/>
        <Stack.Screen name="settings" options={{
          title: "Configuración",
            headerShown: true,
            headerStyle: { backgroundColor: "#3A506B" },
            headerTintColor: "#fff",
            headerRight: () => (
              <TouchableOpacity onPress={logout} style={{ marginRight: 15 }}>
                <MaterialIcons name="logout" size={24} color="#fff" />
              </TouchableOpacity>
            ),
        }}/>
      </Stack>
      <RootLayoutInner/>
    </AuthProvider>
  );
}
