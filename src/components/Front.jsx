import React from 'react'
import IconButtonHome from './UI/Buttons/IconButtonHome'
import { useNavigate } from 'react-router-dom'
import CaverButton from './UI/Buttons/CaverButton'

export const Front = () => {
    const navigate = useNavigate();
    return (
        <div className="tribute_app">
            <div className="content">
                <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
                <CaverButton onClick={() => navigate("/songs")}>Каверы</CaverButton>
                <div className="header">
                    <h>Каверы группы Пикник</h>
                </div>
                <div className="media">
                    <img className="media-image_front" src="https://drive.google.com/uc?export=download&id=1-3OdKtoW0a0oAbbOMsyZmXa-D2Lt1bM6" width={80} alt="Пикник каверы" />

                </div>
                <div className="media-body">
                    <span>Струн не будет - всё равно сыграю, 67 лет отмечаю!</span>
                </div>
            </div>
        </div>
    )
}
