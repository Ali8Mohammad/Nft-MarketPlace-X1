import React from 'react'

import './HowItWorks.css'
import Title from '../Title/Title'
import HowItWorksCard from '../HowItWorksCard/HowItWorksCard'
import { HowItWorkCardData } from '../../data/dataHowItWorksCard'

export default function HowItWorks() {
  return (
    <section className='my-section-how-it-work-ys'>
      <div className='sec-How-it-work-ys'>
      <div className='title-how-it-work-ys' >
         <Title  magic_h3={true} title={'How It Works'} paragraph={'Find Out How To Get Started'}/>
      </div>
      <div className='div-cards-how-it-work-ys'>
        { HowItWorkCardData.map(( y , index) => {
          return(
            
            <HowItWorksCard key={index} title={y.title} img={y.img} text={y.text} />
            
          )
        }
        )
        }
      </div>
     </div>
    </section>
  )
}