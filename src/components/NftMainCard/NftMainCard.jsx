
import React from 'react'
import './NftMainCard.css'
import { Link } from 'react-router-dom';
export default function NftMainCard({mainImg ,title ,subImg ,dsecImg ,price ,highestBid,x}) {
  return (
    <Link  to="/nft">
    <div className={x?'bh-main-card-Artist':'bh-main-card-Discover'}>
      <img className='bh-main-card-img' src={mainImg} alt="NFT_image" />
      <div className='bh-main-card-desc'>
        <h5>{title}</h5>
        <div className='bh-main-card-artist'>
          <img src={subImg} alt="Artist_image" />
          <p>{dsecImg}</p>
        </div>
        <div className='bh-main-card-price'>
          <div>
            <p className='bh-main-card-price-title'>Price</p>
            <p className='bh-main-card-price-number'>{price}</p>
          </div>
          <div>
            <p className='bh-main-card-price-title text-end'>Highest Bid</p>
            <p className='bh-main-card-price-number'>{highestBid}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}
