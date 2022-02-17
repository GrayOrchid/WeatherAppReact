import React from 'react';
import './anotherTime.css'
const AnotherTimecomponent = (props) => {
  return (
    <div  className='Anothertimecomponent' >
    <div className="items">
       <h1>Утро</h1>
       <h3>{props.item.hour[6].temp_c} °C </h3>
       <h3>{props.item.hour[6].condition.text}</h3>
       <h3>Вероятность дождя: {props.item.hour[6].chance_of_rain}</h3>
       <div className="imgTimes">
          <img src={props.item.hour[6].condition.icon} alt="" />
       </div>
    </div>
    <div className="items">
       <h1>Утро</h1>
       <h3>{props.item.hour[12].temp_c} °C </h3>
       <h3>{props.item.hour[12].condition.text}</h3>
       <h3>Вероятность дождя: {props.item.hour[12].chance_of_rain}</h3>
       <div className="imgTimes">
          <img src={props.item.hour[12].condition.icon} alt="" />
       </div>
    </div>
    <div className="items">
       <h1>Утро</h1>
       <h3>{props.item.hour[18].temp_c} °C </h3>
       <h3>{props.item.hour[18].condition.text}</h3>
       <h3>Вероятность дождя: {props.item.hour[18].chance_of_rain}</h3>
       <div className="imgTimes">
          <img src={props.item.hour[18].condition.icon} alt="" />
       </div>
    </div>
    <div className="items">
       <h1>Утро</h1>
       <h3>{props.item.hour[0].temp_c} °C </h3>
       <h3>{props.item.hour[0].condition.text}</h3>
       <h3>Вероятность дождя: {props.item.hour[0].chance_of_rain}</h3>
       <div className="imgTimes">
          <img src={props.item.hour[0].condition.icon} alt="" />
       </div>
    </div>
 </div>
  );
}

export default AnotherTimecomponent;
