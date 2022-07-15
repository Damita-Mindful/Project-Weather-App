import { useState, useEffect } from "react";
import WeatherDetails from "./weatherDetails";
import WeatherForm from "./weatherForm";
import Loading from "./loading";
import style from "../styles/weatherApp.module.css"

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  async function loadInfo(city = "london"){
    try {
      const request = await fetch(`${process.env.REACT_APP_URL_F}&key=${process.env.REACT_APP_KEY}&q=${city}&days=4&aqi=no&alerts=no`);
      const json = await request.json();
      console.log(json);
      setWeather(json)
    } catch(error) {}
  }

  useEffect(() => {
    loadInfo()
  }, []);

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`
  })

  return (
    <div>
    <div> <h1 className={style.title}>The Clima App</h1>
    </div>
    <div className={style.container}>
      <WeatherForm onChangeCity={handleChangeCity} />
      </div>
      <div className={style.weather}>
      { weather ? <WeatherDetails  weather={weather} /> : <Loading /> }
    </div>
    </div>
  );
}