import React from 'react'
import { Navbar } from './navbar/Navbar'
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
                    <img className="media-image_front" src="http://www.aptvisit.ru/images/cms/data/russian_artist/piknik/piknik5.jpg" width={80} alt="" />

                </div>
                <div className="media-body">
                    <span>Кем бы ты ни был, мир тебе и свет,
                        Кем бы ты ни был, грош тебе цена.
                        И все равно ведь где-то в вышине
                        И для тебя горит звезда одна.</span>
                </div>
            </div>
        </div>
    )
}
