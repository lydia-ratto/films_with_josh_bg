import '../css/components/sun.css';
import '../css/components/josh.css';
import '../css/components/hero-banner.css';
import '../css/components/cinema.css';
import '../css/components/grass.css';
import '../css/components/palms.css';
import React from 'react'

function Hero() {
  return (
    <div className="hero-banner">
      <div className="hero-title">
        <h1><span style={{fontSize: '120px'}}>FILMS </span>with</h1>
        <h1>JOSH BUNGARD</h1>
      </div>
      <img src={require("../images/grass-dark.png")} className="grass-dark" alt="grass-light"/>
      <img src={require("../images/chorleywood.png")} className="chorleywood" alt="chorleywood"/>
      <img src={require("../images/grass-light.png")} className="grass-light" alt="grass-light"/>
      <div className="grass-light"/>
      <div className="suns">
        <div className="sun-centre" />
        <div className="sun-middle" />
        <div className="sun-outer" />
      </div>
      <img src={require("../images/palms.png")} className="palms" alt="palms"/>
      <img src={require("../images/josh.png")} className="josh-hero" alt="josh"/>
      <img src={require("../images/cinema.png")} className="cinema" alt="cinema"/>
    </div>
  )
}

export default Hero
