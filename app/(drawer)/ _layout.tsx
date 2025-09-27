import {GestureHandlerRootView} from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { MaterialIcons } from "@expo/vector-icons";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: "#6200ee" },
          headerTintColor: "#fff",
          drawerActiveTintColor: "#6200ee",
          drawerLabelStyle: { fontSize: 16 },
          
          
        }}
      >
      <Drawer.Screen
        name="index"
        options={{
          headerShown: true,
          drawerLabel: "Inicio",
          title: "Inicio",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          headerShown: true,
          drawerLabel: "Perfil",
          title: "Perfil de Usuario",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          headerShown: true,
          drawerLabel: "Configuración",
          title: "Configuración",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
      </Drawer>
    </GestureHandlerRootView>
  );
}