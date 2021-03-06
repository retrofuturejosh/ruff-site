import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Hero(props) {
  const { image } = props;
  console.log(image);

  useEffect(() => {
    window.location.href = 'https://cityprincessmusic.com';
  });

  return (
    <div className="Hero">
      <Link id="hero-link" to="/?songLink=strangers">
        <img id="Hero-img" src={process.env.PUBLIC_URL + image}></img>
      </Link>

    </div>
  );
}

export default Hero;
