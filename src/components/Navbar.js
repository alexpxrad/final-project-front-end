import React from "react";
import { Link } from 'react-router-dom'
import './styles/Navbar.css'
import newlogo from './assets/newlogo.png'


const NavBar = () => {
    return (
        
      <div className="sum">
        <div className="logo">
            EverTrack
            <img src={newlogo} alt="Brand Logo" width="75" height="50" />
        </div>
        <nav className="item"></nav>
            <ul className="ul">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Activity'>Activity</Link>
                </li>
                <li>
                    <Link to='/Login'>Login</Link>
                </li>
                <li>
                    <Link to='/Submit'>Submit</Link>
                </li>
            </ul>
      </div>
    );
  }

  export default NavBar