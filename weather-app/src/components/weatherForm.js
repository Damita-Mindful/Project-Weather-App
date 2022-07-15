import { useState } from "react";
import style from "../styles/weatherForm.module.css"

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState('');

  function onChange(e) {
    const value = e.target.value;

    if (value !== "") {
      setCity(value)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <div>
    <form onSubmit={handleSubmit}  className={style.container}>
      <input type="text" placeholder="Search!" onChange={onChange}  className={style.input} />
    </form>
    </div>
  )
}