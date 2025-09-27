import {View, Text} from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function index() {

  const params = useLocalSearchParams()

  return (
      <View>
        <Text>Lista de usuarios página {params?.page} limite {params?.limit}</Text>
      </View>
  )
}