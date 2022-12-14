import React, { useState }  from 'react'
// import { Link } from 'react-router-dom'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import cavers from './data/cavers.json'
import IconButtonHome from './UI/Buttons/IconButtonHome'
import CaverButton from './UI/Buttons/CaverButton'
import Modal from './UI/Modals/Modals';
// import MyButton from './UI/Buttons/MyButton';
import PlayButton from './UI/Buttons/PlayButton';
import About from './About'
// import PlayList from './PlayList';
 
const SongsMan = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    return (
        
        <div className="tribute_app">
            <div className="content">
                <h1>Слушаем!</h1> 
                <Modal visible={modal} setVisible={setModal}>
                   <About/>
                </Modal>           
                <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
                <CaverButton onClick={() => navigate("/songs")}>Каверы</CaverButton>
                <PlayButton onClick={() => setModal(true)}></PlayButton>
                <div className="b-row" >
                {cavers.map((caver) => (
                    <div className="b-col" key={caver.index} onClick={() => navigate(`/cavers/${caver.id}`)}>   
                            <div className="b-item"> 
                            <img src={caver.photo} alt=""/> 
                                                   
                        </div>
                        <p>{caver.name}</p>  
                        </div>
                         ))}
                </div>
            </div>
        </div>

    )
   
}

export default SongsMan