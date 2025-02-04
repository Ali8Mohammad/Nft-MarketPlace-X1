import React from 'react'
import './NftPageHero.css'
import Timer from '../Timer/Timer'
export default function NftPageHero() {
  return (
  <section>
     <img className='my-img-nft-ys' src='./../../../public/Images/Image PlaceHolder (2).png'></img>
     <div className='my-hero-nft-ys'>
     <div className='my-div-nft-ys'>
      <div className='div1-nft-ys'>
        <div className='text1-div1-nft-ys'>
          <h2  className='text1-h2-div1-nft-ys'>The Orbitians</h2>
          <h3  className='text1-h3-div1-nft-ys'>The Orbitians</h3>
          <h4  className='text1-h4-div1-nft-ys'>The Orbitians</h4>
          <p  className='text1-p-div1-nft-ys'>Minted on Sep 30, 2022</p>
        </div>
        <div className='timer1-nft-ys'>
          <Timer show_btn={true}/> 
        </div>
        <div className='text2-div1-nft-ys'> 
          <h5 className='text2-h5-div1-nft-ys'>Created By</h5>
          <p className='text2-p-div1-nft-ys'>Created By</p>
          <div className='my-img-des-nft-ys'>
            <img className='img1-avatar-nft-ys' src='./../../../public/Images/myicones/Avatar.svg'></img>
            <img  className='img2-avatar-nft-ys' src='./../../../public/Images/myicones/Asset 12 2.svg'></img>
            <h5 className='my-img-des-h5-nft-ys'>Orbitian</h5>
            <p className='my-img-des-p-nft-ys'>Orbitian</p>
          </div>
        </div>
        <div className='text3-div1-nft-ys'>
          <h5 className='text3-h5-div1-nft-ys'>Description</h5>
          <h5 className='text3-p-div1-nft-ys'>Description</h5>
           <div className='text3-div-div1-nft-ys'>
            <p className='text3-div-p-div1-nft-ys'>the Orbitians
            is a collection of 10,000 unique NFTs on the Ethereum blockchain,</p>
            <p className='text3-div-p-div1-nft-ys'>there are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. </p>
            <p className='text3-div-p-div1-nft-ys'>They live in a metal space machines, high up in the sky and only have one foot on Earth.
            These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.</p>
           </div>
           
        </div>
        <div className='text5-div1-nft-ys'>
          <h5 className='text5-h5-div1-nft-ys' >Details</h5>
          <p className='text5-myp-div1-nft-ys' >Details</p>
           <div className='text5-img-des-div1-nft-ys'><img src='./../../../public/Images/icons/Globe.svg'></img> <p className='text5-p-div1-nft-ys' >View on Etherscan</p></div>
           <div className='text5-img-des-div1-nft-ys'><img src='./../../../public/Images/icons/Globe.svg'></img> <p className='text5-p-div1-nft-ys'>View Original</p></div>
        </div>
        <div className='text4-div1-nft-ys'>
          <p className='text4-p-div1-nft-ys'>Tags</p>
          <div className='text4-div-div1-nft-ys'>
            <div className='text4-div2-div1-nft-ys' >Animation </div>
            <div className='text4-div3-div1-nft-ys' >illustration</div>
            <div className='text4-div4-div1-nft-ys' >moon</div>
            <div className='text4-div5-div1-nft-ys' >moon</div>
          </div>
        </div>
      </div>
      <div className='timer2-nft-ys'>
         <Timer show_btn={true}/>
      </div>
     </div>
     </div>
  </section>
  )
}