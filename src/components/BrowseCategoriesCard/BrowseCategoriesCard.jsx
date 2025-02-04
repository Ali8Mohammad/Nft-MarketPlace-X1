import React from 'react'
import './BrowseCategoriesCard.css'
import { Link } from 'react-router-dom';
export default function BrowseCategoriesCard({photo,title}) {
  return (
   <Link to="/market-place"> 
   <div className='hn-cardBrows'>
   
 <img src={photo} alt= 'image' className='hn-image' />
  <h5 className='hn-title'>{title}</h5>
   </div>
   </Link> 
  
  )
}