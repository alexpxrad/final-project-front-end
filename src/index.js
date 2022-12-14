
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Activity from './components/Activity';
import Submit from './components/Submit';
import Login from './components/Login';
import NavBar from './components/Navbar';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './components/Footer';
import {  FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-regular-svg-icons";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
<Router>
  <div>
    <NavBar/>
    

  <Routes>
    //<Route  path='/' element={<App/>} />
    <Route path='/Activity' element={<Activity/>} />
    <Route path='/Submit' element={<Submit/>} />
    <Route path='/Login' element={<Login/>} />
  </Routes>


    <Footer/>
  </div>
</Router>


);


