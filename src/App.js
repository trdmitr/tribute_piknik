import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SongsMan from './components/SongsMan';
import { Front } from './components/Front';
import SingleOne from './components/SingleOne';
// import { useState } from 'react';
// import SongData from './components/SongData';

function App() {
  
  return (
 
    <BrowserRouter>
     {/* <SongsMan cavers ={cavers}/> */}
    <div>
      {/* <SongData cavers={cavers}/> */}
        <Routes>
      <Route path="/" element={<Front />} />
      <Route path= "/songs" element={<SongsMan />} />
      <Route path='/cavers/:id' element={<SingleOne/>}/>
     </Routes>
    </div>  
    </BrowserRouter>
  );
}

export default App;
