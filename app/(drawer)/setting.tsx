import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "expo-router";
import { sendImmediateNotification, scheduleDailyNotification } from "../../services/notifications";


export default function SettingsScreen() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace("/auth/login");
  };

  return (
    <><View style={styles.container}>
      <Text style={styles.title}>⚙️ Configuración</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#1C2541",
            padding: 15,
            borderRadius: 10,
            marginBottom: 20,
          }}
          onPress={sendImmediateNotification}
        >
          <Text style={{ color: "#fff" }}>Enviar notificación ahora</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#3A506B",
            padding: 15,
            borderRadius: 10,
          }}
          onPress={() => scheduleDailyNotification(18, 0)} // todos los días a las 18:00
        >
          <Text style={{ color: "#fff" }}>Programar recordatorio diario</Text>
        </TouchableOpacity>
      </View></>



  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, marginBottom: 20 },
  button: { backgroundColor: "red", padding: 15, borderRadius: 8 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
