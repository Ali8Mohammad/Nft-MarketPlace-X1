/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import './ImageDescription.css'

export default function ImageDescription({ userImage, userName, bordered, font }) {

  return (
    <div className={bordered ? "iA-image-description-BorderedFill" : "iA-image-description"}>
      <img src={userImage} alt='userImage' />
      <p className={font ? "iA-image-description-WorkSans-font" : "iA-image-description-SpaceMono-Font"}>{userName}</p>
    </div>
  )
}