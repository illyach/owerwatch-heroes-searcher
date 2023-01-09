import React from 'react';
import Hero from "./Hero.js";
import './HeroList.css'
function HeroList({ hero }) {
    return (
        <div className="allHero">
            {hero.map((info) =>{
                return <Hero info={info}/>
            })}
        </div>
    );
}

export default HeroList;