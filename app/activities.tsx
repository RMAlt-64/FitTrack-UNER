import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function ActivitiesScreen() {
  const [walks, setWalks] = useState<any[]>([]);

  useEffect(() => {
    loadWalks();
  }, []);

  const loadWalks = async () => {
    try {
      const stored = await AsyncStorage.getItem("walks");
      const parsed = stored ? JSON.parse(stored) : [];
      // Ordenamos por fecha más reciente
      const sorted = parsed.sort((a: any, b: any) => b.id - a.id);
      setWalks(sorted);
    } catch (error) {
      console.error("Error al cargar caminatas", error);
    }
  };

  const clearWalks = async () => {
    await AsyncStorage.removeItem("walks");
    setWalks([]);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.date}>{item.startTime}</Text>
        <Text style={styles.detail}>🕒 Duración: {item.duration} min</Text>
        <Text style={styles.detail}>📏 Distancia: {item.distance} km</Text>
      </View>
      <TouchableOpacity
        onPress={() => router.push(`/walkDetails?id=${item.id}`)} 
        style={styles.viewButton}>
        <Text style={styles.viewButtonText}>Ver</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Caminatas</Text>

      {walks.length === 0 ? (
        <Text style={styles.empty}>No hay caminatas registradas 🥾</Text>
      ) : (
        <FlatList
          data={walks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      )}

      {walks.length > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={clearWalks}>
          <Text style={styles.clearText}>Borrar historial</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2", padding: 16 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    color: "#333",
  },
  empty: {
    textAlign: "center",
    marginTop: 40,
    color: "#777",
    fontSize: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },
  date: { fontSize: 16, fontWeight: "bold", color: "#333" },
  detail: { fontSize: 14, color: "#666" },
  viewButton: {
    backgroundColor: "#6200ee",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  viewButtonText: { color: "#fff", fontWeight: "bold" },
  clearButton: {
    backgroundColor: "#e53935",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  clearText: { color: "#fff", fontWeight: "bold" },
});
