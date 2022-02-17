import React from 'react';
import './weather.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faWind,  faArrowDown,  faEye,  faTint,  faCloud,  faWater} from "@fortawesome/free-solid-svg-icons";
const WeatherComponent = (props) => {
 
  const date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
    console.log(minutes);
  } else {
    minutes = minutes;
  }
  let time = `${hour}:${minutes}`;

    return (
      <div className='Info'>
      <div className="MainInfo">
         <div className="mainInfoText">
            <h1>Город: {props.search}</h1>
            <h4>По состоянию на {time} MSK</h4>
            <h1>{props.item.hour[hour].temp_c} °C </h1>
            <h2>{props.item.hour[hour].condition.text}</h2>
            <h2>Вероятность дождя: {props.item.hour[hour].chance_of_rain}</h2>
         </div>
         <div className="img">
            <img src={props.item.hour[hour].condition.icon} alt="" />
         </div>
      </div>
      <div className="moreInfo">
         <div className="detail">
            {" "}
            <FontAwesomeIcon icon={faArrowDown} className="icon">
               {" "}
            </FontAwesomeIcon>
            <h3>давление :{props.item.hour[hour].pressure_mb} ммбар </h3>
         </div>
         <div className="detail">
            <FontAwesomeIcon icon={faEye} className="icon">
               {" "}
            </FontAwesomeIcon>
            <h3>видимость :{props.item.hour[hour].vis_km} км </h3>
         </div>
         <div className="detail">
            <FontAwesomeIcon icon={faTint} className="icon">
               {" "}
            </FontAwesomeIcon>
            <h3>точки росы :{props.item.hour[hour].dewpoint_c} </h3>
         </div>
         <div className="detail">
            {" "}
            <FontAwesomeIcon icon={faCloud} className="icon">
               {" "}
            </FontAwesomeIcon>
            <h3>облачность: {props.item.hour[hour].cloud} </h3>
         </div>
         <div className="detail">
            <FontAwesomeIcon icon={faWind} className="icon">
               {" "}
            </FontAwesomeIcon>
            {" "}
            <h3>скорость ветра: {props.item.hour[hour].wind_kph} км </h3>
         </div>
         <div className="detail">
            <FontAwesomeIcon icon={faWater} className="icon">
               {" "}
            </FontAwesomeIcon>
            <h3>влажность: {props.item.hour[hour].humidity}% </h3>
         </div>
      </div>
   </div>
    );
}

export default WeatherComponent;
