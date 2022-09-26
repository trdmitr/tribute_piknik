import React from 'react'
import classes from './MyButton.module.css'
const YoutButton = ( {children, ...props}) => {
    return (
      <button { ...props} className= {classes.youBtn}><i className="fa fa-music" aria-hidden="true"></i> {children}</button>
    )
}

export default YoutButton