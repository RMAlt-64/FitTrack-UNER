import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "expo-router";

export default function SettingsScreen() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace("/auth/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Configuración</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, marginBottom: 20 },
  button: { backgroundColor: "red", padding: 15, borderRadius: 8 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
