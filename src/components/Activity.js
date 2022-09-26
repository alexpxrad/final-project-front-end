import React from "react";
import ActivityCard from "./ActivityCard";
//import NavBar from './components/Navbar';
import BootstrapCarousel from "./BootstrapCarousel";
import './Activity.css'
import GoogleMap from "./GoogleMap";


const Activity = () => {
    return (
            
            <div >   
                    <h1>Activity Log</h1>
                        <GoogleMap/>
                    
                    <ActivityCard/>
            </div>



    )

}

export default Activity