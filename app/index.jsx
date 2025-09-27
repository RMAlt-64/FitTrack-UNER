import {View, TouchableOpacity, Button} from "react-native";
import {useRouter} from "expo-router";
import { StyleSheet } from "react-native";


export default function Home() {

  const router = useRouter();
  return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", gap: 10}}>
        
        <Button title="Ir a Login" onPress={() => router.push("/auth/login")} />
        <Button title="Ir a Register" onPress={() => router.replace("/auth/register")} />
        <Button title="Ir a Perfil" onPress={() => router.push("/profile")} />
        <Button title="Ir a Usuarios con query" onPress={() => router.push("/users?page=1&limit=10")} />
        <Button title="Ir a Usuario 20" onPress={() => router.push("/users/20")} />
        <Button title="Ir al Drawer" onPress={() => router.push("/(drawer)")} />

      </View>
  )
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    borderRadius: 30,
    padding: 10,
    backgroundColor: '#606163ff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    width: 170,
  }
})