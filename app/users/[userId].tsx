import {View, Text} from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function User() {

  const params = useLocalSearchParams()

  return (
      <View>
        <Text>User ID: {params?.userId}</Text>
      </View>
  )
}