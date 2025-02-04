
import React from 'react'
import './HowItWorksCard.css'
import { Link } from 'react-router-dom';
export default function HowItWorksCard({img , title , text}) {
  return (
    <>
    <Link to="/connect-wallet">
    <div className='how-it-work-card-ys'>
     <img src={img}></img>
      <div className='how-it-work-div-card-ys'>
      <h5 className='how-it-work-div-card-ys-h5'>{ title}</h5>
      <p className='how-it-work-div-card-ys-p'>{text}</p>
      </div>
    </div>
    </Link>
    </>
  )
}