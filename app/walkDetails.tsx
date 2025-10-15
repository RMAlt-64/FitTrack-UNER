import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams } from "expo-router";

export default function WalkDetails() {
  const { id } = useLocalSearchParams(); // Obtiene el id pasado por la ruta
  const [walk, setWalk] = useState<any>(null);

  useEffect(() => {
    loadWalk();
  }, []);

  const loadWalk = async () => {
    try {
      const stored = await AsyncStorage.getItem("walks");
      if (!stored) return;
      const parsed = JSON.parse(stored);
      const selected = parsed.find((w: any) => w.id === Number(id));
      setWalk(selected);
    } catch (error) {
      console.error("Error al cargar la caminata", error);
    }
  };

  if (!walk) {
    return (
      <View style={styles.center}>
        <Text style={styles.loading}>Cargando caminata...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: walk.path[0]?.latitude || 0,
          longitude: walk.path[0]?.longitude || 0,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Línea del recorrido */}
        <Polyline
          coordinates={walk.path}
          strokeColor="#6200ee"
          strokeWidth={4}
        />

        {/* Marcadores de inicio y fin */}
        <Marker
          coordinate={walk.path[0]}
          title="Inicio"
          pinColor="green"
        />
        <Marker
          coordinate={walk.path[walk.path.length - 1]}
          title="Fin"
          pinColor="red"
        />
      </MapView>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Caminata #{walk.id}</Text>
        <Text style={styles.detail}>🕒 {walk.duration} minutos</Text>
        <Text style={styles.detail}>📏 {walk.distance} km</Text>
        <Text style={styles.detail}>📅 {walk.startTime}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.7,
  },
  infoContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  detail: {
    fontSize: 16,
    color: "#555",
    marginBottom: 6,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    fontSize: 18,
    color: "#666",
  },
});
