import React, { useState } from "react";
import Slider from "react-slick";

import './styles.scss';

function NameSlider({entries, updateWinner, compName}) {
    const [winner, setWinner] = useState();
    
    const pickRandomWinner = () => {
        
        const winner = entries[Math.floor(Math.random()*entries.length)];
        
        setWinner(winner);
        updateWinner(winner);
        alert(`🎉The Winner is ${winner}! 🎉`);
    }

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        buttons: false,
      };

    return (
        <div className="slider">
            {winner ? <div className="winner">
                <h1>Congratulations</h1>
                <h1 className="big">🎉 {winner.trim()}! 🎉</h1>
                <h2>You have won the {compName}!</h2>
            </div> : ''}
            {entries.length && !winner ? <div>

            <Slider className="names-slider" {...settings}>
                {entries.map((name, key) => <div key={key}><p>{name}</p></div>)}
            </Slider>


            <button className="btn" onClick={pickRandomWinner}>Pick a Winner</button>
            </div> : ''}
        </div>
    );
}

export default NameSlider;
