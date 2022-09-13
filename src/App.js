
import { Container } from 'react-bootstrap';
import './App.css';
//import NavBar from './components/Navbar';
//import React, { useState } from 'react';
import BootstrapCarousel from './components/BootstrapCarousel';
import Hero from './components/Hero';


function App() {
  return (
    
    <div className="App">
     <div>  

 <Container classname="container">
        
      <BootstrapCarousel/>
     
      </Container>


     <Container className='intro-container'> 
      <div style={{marginTop: '500px'}}>
     <div style={{backgroundImage: 'linear-gradient(rgb(172, 206, 77) , rgb(217, 163, 45))' ,height: '300px', width: '100%', opacity: '0.9', borderRadius: "5%", justifyContent: 'center'}}></div>


      <div style={{position: 'relative', top: '-250px'}}>
      <h1 style={{fontSize: '80px', textAlign: 'center'}}> Welcome to EverTrack</h1>
        <p style={{fontSize: '40px', textAlign: 'center'}}>The tracker app for conserving and preserving the Everglades</p>
        {/* <p className="hero-text-body">
            Everglades tracking web app that helps park rangers input coordinates, and description of:
            <br/>
            Natural wildlife 
            <br/>
            Invasive species of animals and plants
            <br/>
            Human activity such as overfishing, illegal hunting, pollution like trash dumping</p> */}
        </div>
        </div>
          </Container>
          <br/>
         
      <div>
     </div>
     <br/>
     
      </div>
      
    </div>
  );
}

export default App;
