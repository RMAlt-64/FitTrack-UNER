import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function Setting() {
  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
    </View>
    );      
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
