import React, { useEffect, useState } from 'react';
import Weatherlist from './components/WeatherList';
import './App.css'
import Anothertimelist from './components/anotherTime/AnotherTimeList';
import Clear from './components/Clear';

const App = () => {
  let [search, setSearch] = useState("Grozny");
  let [weather, setWeather] = useState([]);
  let [active,setActive] = useState(false)

  async function getWeather() {
    let url = await fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${search}&days=1&lang=ru`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          "x-rapidapi-key": "4dc52008ecmsh2bcdc10b022af42p10bdd6jsna654d75053e1"
        }
      }
    );
    let data = await url.json();
    if (data.forecast) {
      setWeather(data.forecast.forecastday);
    } 
  }

  useEffect(()=>{
    getWeather()
  },[search])


  return (
<div className='App'>
   <Anothertimelist weather={weather} active={active} setActive={setActive} />
   <div className="weather-cont">
      <input type="text" onChange={e=>setSearch(e.target.value)} value={search} />
      {search
      ?
      <Weatherlist weather={weather} search={search}  />
      :
      <Clear/>
      }
      {search?
      <h4  className='another-time-open' onClick={()=>setActive(true) }>Другое время суток</h4>
      :
      <h4 className='another-time-open' >Введите название города </h4>
      }
   </div>
</div>
  );
}

export default App;

