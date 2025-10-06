import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const router = useRouter();

  const goTo = (path: string) => router.push(path);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏃‍♂️ FitTrack UNER</Text>
      <Text style={styles.subtitle}>Tu compañero para mantenerte activo</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.card} onPress={() => goTo("/map")}>
          <Ionicons name="map" size={40} color="#fff" />
          <Text style={styles.cardText}>Mapa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => goTo("/camera")}>
          <Ionicons name="camera" size={40} color="#fff" />
          <Text style={styles.cardText}>Cámara</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => goTo("/activities")}>
          <Ionicons name="list" size={40} color="#fff" />
          <Text style={styles.cardText}>Actividades</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => goTo("/settings")}>
          <Ionicons name="settings" size={40} color="#fff" />
          <Text style={styles.cardText}>Configuración</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  menuContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  card: {
    backgroundColor: "#6200ee",
    width: 130,
    height: 130,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});
