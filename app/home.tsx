import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";
import { getWeather } from "../services/weather";
import * as Location from "expo-location";
import LottieView from "lottie-react-native";


export default function HomeScreen() {
  const router = useRouter();
  const [weather, setWeather] = useState<any>(null);
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(true);

  const goTo = (path: string) => router.push(path);
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setWeather({ error: "Permiso denegado para acceder a la ubicación" });
        setLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const data = await getWeather(
        location.coords.latitude,
        location.coords.longitude
      );
      setWeather(data);
      setLoading(false);
    })();
  }, []);
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <LottieView
          source={require("../assets/animations/sunny.json")}
          autoPlay
          loop
          style={{ width: 180, height: 180 }}
        />
        <Text style={styles.loadingText}>Cargando clima...</Text>
      </View>
    );
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.weatherCard}>
        {loading ? (
          <Text>Cargando clima...</Text>
        ) : weather?.error ? (
          <Text>{weather.error}</Text>
        ) : (
          <>
            <Image
              source={{
                uri: `https://openweathermap.org/img/wn/${weather.icon}@4x.png`,
              }}
              style={{ width: 60, height: 60 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.weatherText}>
                {weather.city || "Ubicación desconocida"}
              </Text>
              <Text style={styles.weatherSubtext}>
                {weather.temp}°C · {weather.description}
              </Text>
            </View>
          </>
        )}
      </View>
       <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <LottieView
            source={require("../assets/animations/StickMan Walking.json")}
            autoPlay
            loop
            speed={0.7}
            style={{ width: 60, height: 60, marginRight: 8 }}
          />
          <Text style={styles.greeting}>FitTrack UNER</Text>
          
        </View>
        <Text style={styles.subgreeting}>Tu compañero para mantenerte activo</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.cardButton} onPress={() => goTo("/map")}>
          <Ionicons name="map" size={40} color="#fff" />
          <Text style={styles.cardText}>Mapa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardButton} onPress={() => goTo("/camera")}>
          <Ionicons name="camera" size={40} color="#fff" />
          <Text style={styles.cardText}>Cámara</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardButton} onPress={() => goTo("/activities")}>
          <Ionicons name="list" size={40} color="#fff" />
          <Text style={styles.cardText}>Actividades</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardButton} onPress={() => goTo("/settings")}>
          <Ionicons name="settings" size={40} color="#fff" />
          <Text style={styles.cardText}>Configuración</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardButton} onPress={() => goTo("/walkTracker")}>
          <MaterialIcons name="directions-walk" size={40} color="#fff" />
          <Text style={styles.cardText}>Registrar Caminata</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#0B132B",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#1C2541",
    padding: 20,
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,    
  },
  greeting: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    
  },
  subgreeting: {
    color: "#ddd",
    fontSize: 16,
    marginTop: 5,
  },
  weatherCard: {
    backgroundColor: "#3A506B",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
  },
  weatherText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  weatherSubtext: {
    color: "#ddd",
    fontSize: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardButton: {
    backgroundColor: "#3b9e9cff",
    width: "47%",
    height: 120,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
  },
});
