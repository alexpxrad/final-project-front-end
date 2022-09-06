import React from "react";
import LoginForm from "./LoginForm";
import video from  '../components/assets/video.mp4'

const Login = () => {
    return (

        <div className="hero-container">
        <div className="welcome-container">
          <LoginForm />
          
       
        </div>
        <div className="video-container">
          {/* <video src={video} autoPlay loop muted className="background-video" /> */}
        </div>
      </div>



    )

}

export default Login