import React, { useState, useEffect, useRef } from 'react';
import cavers from './data/cavers.json'
const PlayList = ({props}) => {
	// State
  console.log ("props ", props)
  const [trackIndex, setTrackIndex] = useState(0);
  const { audio1, audio_name1, name, photo } = cavers[trackIndex];
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { title, artist, color, image, audioSrc } = cavers[trackIndex];
  const audioRef = useRef(new Audio(audio1));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;
  const toPrevTrack = () => {
    console.log('TODO go to prev');
  }

  const toNextTrack = () => {
    console.log('TODO go to next');
  }
	return ( 
    <div className="audio-player">
    <div className="track-info">
      <img
        className="artwork"
        src={image}
        alt={`track artwork for ${title} by ${artist}`}
      />
      <h2 className="title">{title}</h2>
      <h3 className="artist">{artist}</h3>
    </div>
  </div>
);
  
}

export default PlayList;