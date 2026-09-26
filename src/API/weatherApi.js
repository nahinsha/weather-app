const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather(city) {
  //endpoint banailam
  const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`; //endpoint banailam

  //endpoint e request patabo
  const response = await fetch(url);
  const data = await response.json();
  // Here,huge amount of data aslo data variable ,ekhn sob data toh lagbe na ,

  return {
    city: data.name,
    temperature: Math.round(data.main.temp),
    condition: data.weather[0].main,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  };
}






