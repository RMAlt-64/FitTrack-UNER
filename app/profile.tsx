import {View, Text, Button, StyleSheet} from "react-native";
import {useRouter} from "expo-router";

export default function Perfil() {

  const router = useRouter()

  return (
      <View style={styles.container}>
        <Text>Perfil 1</Text>
        <Button title="Go to Home" onPress={() => router.push('/')} />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});