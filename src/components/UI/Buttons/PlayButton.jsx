import React from 'react'
import classes from './MyButton.module.css'

const PlayButton = ( {children, ...props}) => {
    return (
      <button { ...props} className= {classes.playBtn}><i className="fa fa-play"></i> {children}</button>
    )
}

export default PlayButton