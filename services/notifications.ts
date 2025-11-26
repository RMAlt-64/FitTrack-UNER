import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";



// Pedir permisos y obtener token (si hiciera falta en el futuro)
export async function registerForPushNotifications() {
  let token;

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      alert("Se necesitan permisos para enviar notificaciones!");
      return null;
    }

    token = await Notifications.getExpoPushTokenAsync();
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
    });
  }

  return token;
}


export async function sendImmediateNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "¡Hora de entrenar! 💪",
      body: "Tu cuerpo te está esperando. Salí a caminar un poco.",
    },
    trigger: null,
  });
}


export async function scheduleDailyNotification(hour: number, minute: number) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Recordatorio de caminata 🏃‍♂️",
      body: "Es el momento perfecto para moverte un poco.",
    },
    trigger: {
      hour,
      minute,
      repeats: true,
    },
  });
}
