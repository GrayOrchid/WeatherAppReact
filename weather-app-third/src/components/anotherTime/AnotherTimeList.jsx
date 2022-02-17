import React from 'react';
import AnotherTimecomponent from './AnotherTimecomponent';

const Anothertimelist = ({weather,active,setActive}) => {
    return (       
          <div className={active?'Anothertimelist active':'Anothertimelist' } onClick={()=>setActive(false)}>
            {weather.map((item,index)=>
            <AnotherTimecomponent item={item} key={index}/>)}                 
        </div>
    );
}

export default Anothertimelist;
