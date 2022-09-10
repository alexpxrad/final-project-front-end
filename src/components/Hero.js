import React from 'react'
import "./styles/Hero.css"






function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-header">EverTrack</h1>
      <br />
      <section className="hero-text">
        <h2 className="header-text"> Everglades tracking web app that helps park rangers input coordinates, and description of:</h2>
        <i>
          <p className="hero-text-body">
            Everglades tracking web app that helps park rangers input coordinates, and description of:
            <br/>
            Natural wildlife 
            <br/>
            Invasive species of animals and plants
            <br/>
            Human activity such as overfishing, illegal hunting, pollution like trash dumping

          </p>
        </i>
      </section>
    </div>
  );
}
export default Hero