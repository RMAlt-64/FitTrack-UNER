import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Alert } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function WalkTracker() {
  const [location, setLocation] = useState<any>(null);
  const [route, setRoute] = useState<any[]>([]);
  const [tracking, setTracking] = useState(false);
  const [subscription, setSubscription] = useState<any>(null);
  const [startTime, setStartTime] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permiso de ubicación denegado 😕");
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);


  const toggleTracking = async () => {
    if (tracking) {
      subscription?.remove();
      setSubscription(null);
      setTracking(false);
      const endTime = new Date();
      const duration = (endTime.getTime() - startTime.getTime()) / 1000 / 60;
      if (route.length > 1) {
        const distance = calculateDistance(route);
        const walkData = {
          id: Date.now(),
          startTime: startTime.toLocaleString(),
          endTime: endTime.toLocaleString(),
          duration: duration.toFixed(1),
          distance: distance.toFixed(2),
          route,
        };

        await saveWalk(walkData);
        Alert.alert("✅ Caminata guardada", `Distancia: ${distance.toFixed(2)} km`);
      } else {
        Alert.alert("⚠️ No se registró movimiento suficiente");
      }

      setRoute([]);
    } else {
        setStartTime(new Date());
      const newSub = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Highest,
          distanceInterval: 5,
        },
        (loc) => {
          setLocation(loc);
          setRoute((prev) => [...prev, loc.coords]);
        }
      );
      setSubscription(newSub);
      setTracking(true);
    }
  };

  const saveWalk = async (walkData: any) => {
    try {
      const existing = await AsyncStorage.getItem("walks");
      const walks = existing ? JSON.parse(existing) : [];
      walks.push(walkData);
      await AsyncStorage.setItem("walks", JSON.stringify(walks));
    } catch (error) {
      console.error("Error guardando caminata", error);
    }
  };

  const calculateDistance = (points: any[]) => {
    let total = 0;
    for (let i = 1; i < points.length; i++) {
      const a = points[i - 1];
      const b = points[i];
      total += haversineDistance(a, b);
    }
    return total;
  };

  const haversineDistance = (a: any, b: any) => {
    const R = 6371; // km
    const dLat = (b.latitude - a.latitude) * (Math.PI / 180);
    const dLon = (b.longitude - a.longitude) * (Math.PI / 180);
    const lat1 = a.latitude * (Math.PI / 180);
    const lat2 = b.latitude * (Math.PI / 180);

    const hav =
      Math.sin(dLat / 2) ** 2 +
      Math.sin(dLon / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);

    return 2 * R * Math.asin(Math.sqrt(hav));
  };

  if (!location) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#172494ff" />
        <Text>Esperando ubicación inicial...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation
        followsUserLocation
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {route.length > 1 && (
          <Polyline
            coordinates={route}
            strokeColor="#6200ee"
            strokeWidth={4}
          />
        )}
        {route.length > 0 && (
          <Marker
            coordinate={route[0]}
            title="Inicio"
            pinColor="green"
          />
        )}
      </MapView>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: tracking ? "red" : "green" }]}
        onPress={toggleTracking}
      >
        <Text style={styles.buttonText}>
          {tracking ? "Detener" : "Iniciar Caminata"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
