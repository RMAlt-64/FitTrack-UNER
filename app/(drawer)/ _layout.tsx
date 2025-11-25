import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";



export default function DrawerLayout() {
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: "#6200ee" },
          headerTintColor: "#fff",
          drawerActiveTintColor: "#6200ee",
          drawerLabelStyle: { fontSize: 16 },
          
        }}
      >
        <Drawer.Screen
          name="settings"
          options={{
            headerShown: true,
            drawerLabel: "Mapa",
            title: "Mapa",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="map" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="new-post"
          options={{
            drawerLabel: "publicar post",
            title: "Registrar Caminata",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="directions-walk" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="camera"
          options={{
            drawerLabel: "Cámara",
            title: "Cámara",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="camera-alt" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="activities"
          options={{
            title: "Actividades",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="history" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="weather"
          options={{
            title: "Clima",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="wb-sunny" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}