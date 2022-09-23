import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import cavers from './data/cavers.json'
import IconButtonHome from './UI/Buttons/IconButtonHome'
import CaverButton from './UI/Buttons/CaverButton'
 
const SongsMan = () => {
    const navigate = useNavigate();
    return (
        <div className="tribute_app">
            <div className="content">
                <h1>Слушаем!</h1>            
                <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
                <CaverButton onClick={() => navigate("/songs")}>Каверы</CaverButton>
                <div className="b-row">
                {cavers.map((caver) => (
                    <div className="b-col" onClick={() => navigate(`/cavers/${caver.id}`)}>   
                            <div className="b-item" key={caver.id}> 
                            <img src={caver.photo} alt=""/> 
                            {/* <p>{caver.name}</p>                           */}
                        </div>
                        </div>
                         ))}
                </div>
            </div>
        </div>

    )
   
}

export default SongsMan