import React from 'react'
import './Hero.css'
import ButtonBh from './../ButtonBh/ButtonBh'
import InfoUlCard from '../InfoUlCard/InfoUlCard'
import data from './../../data/InfoUlCard'
import { Link } from 'react-router'

export default function Hero() {
  return (
    <section className='bh-hero'>
      <div className='bh-hero-father'>
        <div className='bh-left-part-hero'>
          <h1>Discover Digital Art & Collect NFTs</h1>
          <p className='bh-left-part-hero-p'>NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists.</p>
          <img className=' bh-img-sm-screen' src="./../../../public/Images/heroanimationtransparentbck-2.gif" alt="hero" />
          <Link to={"/create-account"}>
            <ButtonBh buttonText={"Get Started"} buttonIcon={"./../../../public/Images/icons/RocketLaunch.svg"} buttonClass={"bh-button-one bh-hero-button"} showIcon={true} />
          </Link>
          <div className='bh-hero-info-ul'>
            <InfoUlCard data={data.dataList1} />
          </div>
        </div>
        <img className='bh-hero-img-lg-md-screen' src="./../../../public/Images/heroanimationtransparentbck-2.gif" alt="hero" />
      </div>
    </section>
  )
}