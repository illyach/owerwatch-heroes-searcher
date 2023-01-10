import React, {useState} from 'react';
import './Hero.css'

function Hero({info}) {

    return (
        <div className="info">
       <h1>{info.name}</h1>
          <p>{info.role}</p>
       <img src={info.portrait} alt="portrait"/>
        </div>
    );
}

export default Hero;