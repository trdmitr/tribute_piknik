import React from 'react'

const SongData = ({props}) => {
    console.log("Data ",props.cavers)
    // console.log(cavers)
  return (
    
          <div className="b-item">
            <img src={props.cavers.photo} alt=""> </img>
            <p>{props.cavers.name}</p>
          </div>
        
  )
}

export default SongData