import React, {useState} from 'react';
import './Hero.css'
import icons from 'icons'
function Hero({info}) {

    const [roleIcon, setRoleIcon] = useState("")
    {
        if(info.role === 'tank'){
                setRoleIcon(<img src="icons/tank.png">)
            }
    }


    return (
        <div className="info">
       <h1>{info.name}</h1>
       <p>{
           info.role
       }</p>
       <img src={info.portrait} alt="portrait"/>
        </div>
    );
}

export default Hero;