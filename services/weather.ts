export const getWeather = async (lat: number, lon: number) => {
  const API_KEY = "b628ecee2591a2c131171da2fd0493ba";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al obtener el clima");
    const data = await response.json();
    return {
      temp: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      city: data.name,
    };
  } catch (error) {
    console.error("Error en getWeather:", error);
    return null;
  }
};
