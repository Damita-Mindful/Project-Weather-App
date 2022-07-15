import style from "../styles/weatherDetails.module.css"

export default function WeatherDetails({ weather }) {
    return (
        <div className={style.mainContainer}>
        <div className={style.info}>
            <div className={style.city}>{weather?.location.name}</div>
            <div className={style.country}>{weather?.location.country}</div>
            <div className={style.date}>Date: {weather?.location.localtime} hs</div>
            <div className={style.row}>
                <div>
                    <img className={style.icon} src={`http:${weather?.current.condition.icon}`} alt={weather?.current.condition.text} />
                    <div className={style.text}>Humidity: {weather?.current.humidity}%</div>
                </div>
                <div>
                    <div className={style.condition}>{weather?.current.condition.text}</div>
                    <div className={style.current}>{weather?.current.temp_c}°C</div>
                    <div className={style.text}>Feelslike: {weather?.current.feelslike_c}°C</div>
                    
                </div>
            </div>
            <div className={style.map}>
            <iframe 
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d121886.07329373505!2d${weather?.location.lon}75!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1656889556743!5m2!1sen!2sar`} 
            width="100%" 
            height="200" 
            style={{ border: 0 }} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>

        <div className={style.fore}>
            <h1 className={style.next}>Next two days</h1>
            <div className={style.day}>Date: {weather?.forecast.forecastday[1].date}</div>
            <div className={style.box}>
                <div className={style.icons}>
                    <img src={`http:${weather?.forecast.forecastday[1].day.condition.icon}`} alt={weather?.forecast.forecastday[1].day.condition.text} height="100px"/>
                </div>
                <div>
                    <div className={style.temp}>Max: {weather?.forecast.forecastday[1].day.maxtemp_c}°</div>
                    <div className={style.temp}>Min: {weather?.forecast.forecastday[1].day.mintemp_c}°</div>
                    <div className={style.more}>Probability of rain: {weather?.forecast.forecastday[1].day.daily_chance_of_rain}%</div>
                    <div className={style.more}>Moon Phase: {weather?.forecast.forecastday[1].astro.moon_phase}</div>
                </div>
            </div>

            <div className={style.day}>Date: {weather?.forecast.forecastday[2].date}</div>
            <div className={style.box}>
                <div className={style.icons}>
                    <img src={`http:${weather?.forecast.forecastday[2].day.condition.icon}`} alt={weather?.forecast.forecastday[2].day.condition.text} height="100px"/>
                </div>
                <div>
                    <div className={style.temp}>Max: {weather?.forecast.forecastday[2].day.maxtemp_c}°</div>
                    <div className={style.temp}>Min: {weather?.forecast.forecastday[2].day.mintemp_c}°</div>
                    <div className={style.more}>Probability of rain: {weather?.forecast.forecastday[2].day.daily_chance_of_rain}%</div>
                    <div className={style.more}>Moon Phase: {weather?.forecast.forecastday[2].astro.moon_phase}</div>
                </div>
            </div>
        
            </div>

            </div>
    )
}