import React from 'react'
import './MarketPlaceTaps.css'
import ArtistPageTaps from '../ArtistPageTaps/ArtistPageTaps'
import { MarketPlaceMainCard } from '../../data/MarketPlaceMainCard'
import NftMainCard from '../NftMainCard/NftMainCard'

export default function MarketPlaceTaps() {
  return (

    <>
    <section>
    <div className='hn-borderMarketTop'>
<ArtistPageTaps tab1={'hn-tab1Market'} tab2={'hn-tab2Market'}  number1={'hn-302Market'} number2={'hn-67Market'} number3={'hn-4Market'} title1={'NFT'} title2={'Collection'}/>

<div className='hn-cardMarket'> 
<div className='hn-cardNftMarket'>
{
  MarketPlaceMainCard.map((e,index)=>{
    return(
      <NftMainCard key={index}  mainImg={e.mainImg} subImg={e.subImg} title={e.title} dsecImg={e.dsecImg} price={e.price} highestBid={e.highestBid}  x={true}/>
    )
  })
}
</div>
</div>
    </div>
    </section>
    </>
  )
}
