import React from 'react'
import './MagicMashroom.css'
import Timer from '../Timer/Timer'
import ButtonBh from '../ButtonBh/ButtonBh'
import Title from '../Title/Title'

export default function MagicMashroom() {
  return (
    <div className='mh-Magic'>
      <div className='mh-Magic-MainDiv'>
        <div className='mh-Magic-part1'>
          <div className='mh-Magic-card'>Image Desc</div>
          <Title title={"Magic Mashrooms"} magic_h3={true}/>
          <div className='mh-Magic-timer375px'>
            <Timer show_btn={false}/>
          </div>
          <ButtonBh buttonText={"See NFT"} buttonIcon={"./../../../public/Images/icons/Eye.svg"} buttonClass={"bh-button-three mh-btn-magic"} showIcon={true} />
        </div>
        <div className='mh-Magic-timer'>
          <Timer show_btn={false}/>
        </div>
      </div>
    </div>
  )
}
