import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { Navbar } from './navbar/Navbar'
import cavers from './data/cavers.json'
// import SongData from './SongData'
// const cavers =
//     [
//     {
//       id: 1,
//       song_name2: "55",
//       cover2: "https://drive.google.com/uc?export=download&id=14Z3KIZqcpGI2oKjoQRjYCzI5zmmKxdEK",
//       cover: "https://drive.google.com/uc?export=download&id=14Z3KIZqcpGI2oKjoQRjYCzI5zmmKxdEK",
//       photo: "https://sun9-41.userapi.com/impf/c845324/v845324039/253e5/qUy4il21_1A.jpg?size=1841x2160&quality=96&proxy=1&sign=e2c1590d9b738567de2f9b9cf0df7ba8&type=album",
//       name: "Света Спиридонова",
//       song_name: "Та самая девчонка"
//     },
//     {
//       id: 2,
//       cover2: "",
//       cover: "https://drive.google.com/uc?export=download&id=1WJmvVCKrQDk7OT4jDiCrVkN-cvIVvlyN",
//       photo: "https://sun9-28.userapi.com/impg/plyOz0boJzDuuBxrmCsy2cm5O-3_Vej5S4kO7g/4WlqFS64dHQ.jpg?size=690x921&quality=96&proxy=1&sign=b37b4e57341acc3b302ef4cdf60464f4",
//       name: "Ксения Фадеева",
//       song_name: "Туман"
//     },
//     {
//       id: 3,
//       cover: "https://drive.google.com/uc?export=download&id=1_-NgOfLLo2mzCqZaAS_SDfzR6yjD3ZUb",
//       photo: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/8YFuYBavb4LsA8DEV8VQ/pub/0HhnoxghEqsKKoT3TMJd.jpg",
//       name: "Марго",
//       song_name: "Любо братцы любо!"
//     },
//     {
//       id: 4,
//       cover2: "",
//       cover: "https://drive.google.com/uc?export=download&id=1aNRFw9IZpADcT0hM-LdzVbePvKjm-MBo",
//       photo: "https://sun1-30.userapi.com/s/v1/if1/qm1DfYA_geNnZqrnoMc_erjBTRvu17OVpOe4-W9IpyQH6yVlqr4Wsx19DGCVj-drMauP5Vj8.jpg?size=200x0&quality=96&crop=0,0,810,1080&ava=1",
//       name: "Женя Савельева",
//       song_name: "Мой генерал"
//     }
//   ]
  
const SongsMan = () => {
    // const cavers = props.cavers;
    // console.log("Song man ", cavers)
    const navigate = useNavigate();
    return (
        <div className="tribute_app">
            <div className="content">
                <h1>Слушаем!</h1>
                <Link to="/">Home</Link>
                <div className="b-row">
                {cavers.map((caver) => (
                    <div className="b-col" onClick={() => navigate(`/cavers/${caver.id}`)}>   
                            <div className="b-item" key={caver.id}> 
                            <img src={caver.photo} alt=""/> 
                            <p>{caver.name}</p>
                            {/* <button onClick={() => navigate(`/cavers/${caver.id}`)}></button> */}
                        </div>
                        </div>
                         ))}
                </div>
                <Navbar/>
            </div>
        </div>

    )
   
}

export default SongsMan