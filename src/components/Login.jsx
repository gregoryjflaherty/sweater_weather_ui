import React from 'react'
import { useNavigate } from 'react-router-dom'
import  loginVideo  from '../assets/loginVideo.mp4'
import yellowLogo from '../assets/yellowLogo.png'

const Login = () => {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
        <div className= "relative w-full h-full">
              <video
                  src={loginVideo}
                  type="video/mp4"
                  loop
                  controls={false}
                  muted
                  autoPlay
                  className="w-full h-full object-cover"
              >
              </video>
              <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0">
                <div className="p-5">
                  <img src={ yellowLogo } width="500px" alt="logo"/>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Login
