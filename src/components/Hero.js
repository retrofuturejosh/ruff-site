import React from 'react';

function Hero() {
    return (
      <div className="Hero">
        <img id="Hero-img" src={process.env.PUBLIC_URL + '/stranger-hero.png'}></img>
      </div>
    );
  }
  
  export default Hero;
  