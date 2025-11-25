import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  ScrollView 
} from "react-native";
import MapView, { Polyline } from "react-native-maps";
import * as FileSystem from "expo-file-system";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NewPostScreen() {
  const router = useRouter();

  // 🔹 Estados simulando datos del recorrido
  const [photos, setPhotos] = useState<string[]>([
    "https://picsum.photos/300/200", // Ejemplo temporal
  ]);
  const [routeCoords, setRouteCoords] = useState([
    { latitude: -31.73197, longitude: -60.5238 },
    { latitude: -31.73297, longitude: -60.5232 },
    { latitude: -31.73397, longitude: -60.5230 },
  ]);
  const [description, setDescription] = useState("");

  const handlePublish = async () => {
    const newPost = {
      id: Date.now(),
      description,
      photos,
      routeCoords,
      date: new Date().toISOString(),
    };

    // Guardar localmente (usando FileSystem o AsyncStorage)
    const path = AsyncStorage.getItem("posts").then((data) => {
      const posts = data ? JSON.parse(data) : [];
      posts.push(newPost);
      AsyncStorage.setItem("posts", JSON.stringify(posts));
    });
    

    alert("¡Tu caminata fue publicada! 🚶‍♂️");
    router.replace("/activities");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Publicar caminata</Text>

      {/* Vista previa del mapa */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: routeCoords[0].latitude,
          longitude: routeCoords[0].longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={routeCoords} strokeColor="#4CAF50" strokeWidth={4} />
      </MapView>

      {/* Vista previa de fotos */}
      <Text style={styles.subtitle}>Fotos tomadas</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {photos.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.photo} />
        ))}
      </ScrollView>

      {/* Campo de descripción */}
      <Text style={styles.subtitle}>Comentario</Text>
      <TextInput
        style={styles.input}
        placeholder="Contanos sobre tu caminata..."
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Botón de publicar */}
      <TouchableOpacity style={styles.button} onPress={handlePublish}>
        <Text style={styles.buttonText}>Publicar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FAFAFA",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#1C2541",
  },
  map: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    color: "#3A506B",
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 10,
  },
  input: {
    backgroundColor: "#E0E1DD",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1C2541",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
