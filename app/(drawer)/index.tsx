import { View, Text, StyleSheet, Button } from "react-native";


export default function HomeScreen() {
  
  return (
    <View style={styles.container}>
      <Button title="☰ Abrir menú" />
      <Text style={styles.text}>🏠 Bienvenido al Home!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
