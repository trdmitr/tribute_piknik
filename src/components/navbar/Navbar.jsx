import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Icons from '../Icons'
export const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className="nav">
                    <span className="material-symbols-rounded menu"
                    
                    onClick={() => navigate("/")}
                    >
                        
                        Home
                    </span>
                    <span className="material-symbols-rounded menu">
                        auto_detect_voice
                    </span>
                    <span Icons 
         name='documents-outline'
         color='#fff'
         size='32' className="material-symbols-rounded menu"
                    onClick={() => navigate("/songs")}
                    >
                        text_to_speech
                    </span>

                </div>
  )
}
