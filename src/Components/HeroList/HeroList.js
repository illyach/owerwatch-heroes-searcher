import React from 'react';
import Hero from "../Hero/Hero.js";
import './HeroList.css'
function HeroList({ filteredHero }) {
    return (
        <div className="allHero">
            {filteredHero.map((info) =>{
                return <Hero key={info.key} info={info}/>
            })}
        </div>
    );
}

export default HeroList;