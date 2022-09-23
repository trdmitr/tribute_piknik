import React from 'react'
import { Navbar } from './navbar/Navbar'

export const Front = () => {
    return (
        <div className="tribute_app">
            <div className="content">
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
                <Navbar/>
            </div>
        </div>
    )
}
