import { Routes, Route, HashRouter} from 'react-router-dom';
import './App.css';
import SongsMan from './components/SongsMan';
import { Front } from './components/Front';
import SingleOne from './components/SingleOne';


// import { PlayList } from './components/PlayList';
// import PlayList from './components/PlayList';
// import { useState } from 'react';
// import SongData from './components/SongData';

function NotFound(){
  return <h2>Ресурс не найден</h2>;
}
function App() { 


      
  return (
 
    <HashRouter>
     {/* <SongsMan cavers ={cavers}/> */}
    <div>
      {/* <SongData cavers={cavers}/> */}
        <Routes>
      <Route exact path="/" element={<Front />} />
      <Route path= "/songs" element={<SongsMan />} />
      {/* <Route exact path='/cavers/playlist' element={<PlayList/>}/> */}
      <Route path='/cavers/:id' element={<SingleOne/>}/>
      
      
      <Route path="*" element={<NotFound />} />
     </Routes>
    </div>  
    </HashRouter>
  );
  
}

export default App;
