import React from 'react';
import WeatherComponent from './WeatherComponent';
import './weather.css'

const Weatherlist = ({weather,search}) => {
  
    return (
        <div className='WeatherComponent'>
      {weather.map((item, index) => (
         <WeatherComponent  item={item} key={index}  search={search} />
       ))}  
  <div className="more">
   <h6>Подробнее</h6>
</div>
        </div>
    );
}

export default Weatherlist;
