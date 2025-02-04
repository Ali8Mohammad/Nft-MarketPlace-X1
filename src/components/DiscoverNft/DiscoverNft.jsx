import React from 'react'
import './DiscoverNft.css'
import Title from '../Title/Title';
import NftMainCard from '../NftMainCard/NftMainCard';
import ButtonTitleResponsive from '../ButtonTitleResponsive/ButtonTitleResponsive';
import { HomeMainCard } from '../../data/HomeMainCard';

export default function DiscoverNft() {
  return (
    <div className='ys-discover-sec'>
      <div>
      <div className='tilt-discover'>
      <Title  
       title={'Discover More NFTs'} 
       paragraph={'Explore new trending NFTs'}
       buttonText={'See All'} 
       myIcon={'./../../public/Images/icons/Eye.svg'}     
       showButton={true}
      />
      </div>
      
      <div className='ys-descover'>
      {HomeMainCard.map((d ,index) => {
          return(
           
            <NftMainCard 
            key={index}
            mainImg={d.mainImg}
            title={d.title}
            subImg={d.subImg}
            dsecImg={d.dsecImg}
            highestBid={d.highestBid}
            x={false}
            />
        
          )
        })
        }
      </div>
      <div className='ys-div-btn-res'>
      <ButtonTitleResponsive myButtonText={'See All'} icon={'./../../public/Images/icons/Eye.svg'} />
      </div>
      </div>
    </div>
  )
}
