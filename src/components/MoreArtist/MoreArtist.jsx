import React from 'react'
import './MoreArtist.css'
import {  NftMainCardData } from '../../data/NftMainCardData';
import NftMainCard from '../NftMainCard/NftMainCard';
import ButtonTitleResponsive from '../ButtonTitleResponsive/ButtonTitleResponsive';
export default function MoreArtist() {
  return (
    <section className='ys-more-artist'>
      <div className='my'>
        <div className='tilte-more-ys'>
          <h3  className='tilte-more-h3-ys'>More from this artist</h3>
          <button className='ys-more-artist-btn'>
            <img src='../../public/Images/icons/ArrowRight.svg'></img>
            Go To Artist Page
          </button>
        </div>
      
      <div className="MoreArtist">
        {NftMainCardData.map((d ,index) => {
           return(
           
            <NftMainCard 
            key={index}
            mainImg={d.mainImg}
            title={d.title}
            subImg={d.subImg}
            dsecImg={d.dsecImg}
            highestBid={d.highestBid}
            price={d.price}
         
            />
        
          )
        })
        }
        < ButtonTitleResponsive myButtonText={'Go To Artist Page'} icon={'../../public/Images/icons/ArrowRight.svg'} />
      </div>
    </div>
    </section>
  )
}

