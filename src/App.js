
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

 <Container>
        
      <BootstrapCarousel/>
     
      </Container>


     <Container> 
      <div style={{marginTop: '300px'}}>
     <div style={{backgroundColor: 'lightGreen', height: '300px', opacity: '0.3'}}></div>


      <div style={{position: 'relative', top: '-200px'}}>
      <h1> Welcome to EverTrack</h1>
        <p >The tracker app for conserving and preserving the Everglades</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Accusantium hic temporibus praesentium ratione eveniet consequatur non? 
          Maxime exercitationem vitae nesciunt deleniti, eveniet amet praesentium id vero similique, 
          veritatis assumenda? Amet?</p>
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
