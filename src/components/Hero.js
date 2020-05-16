import React from 'react';

function Hero() {
    return (
      <div className="Hero">
        <img id="Hero-img" src={process.env.PUBLIC_URL + '/ruff-hero.jpg'}></img>
      </div>
    );
  }
  
  export default Hero;
  