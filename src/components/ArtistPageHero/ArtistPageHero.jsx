import './ArtistPageHero.css'
import data from './../../data/InfoUlCard'
import InfoUlCard from '../InfoUlCard/InfoUlCard'
import SocialMediaLink from '../SocialMediaLink/SocialMediaLink'
import ButtonBh from '../ButtonBh/ButtonBh'
import image1 from './../../assets/Images/Image-PlaceHolder_2.jpg'
import hn_image2 from './../../assets/Images/Avatar.jpg'
import Copy from './../../assets/Images/icons/Copy.svg'
import plus from './../../assets/Images/icons/Plus.svg'

export default function ArtistPageHero() {
  return (
    <>
<div className='hn-artistHeader'>
  <section>
   <div className='hn-hero'>  
    <img src={image1} alt="image" className='hn-image1' /> 
    <img src= {hn_image2} alt="image" className='hn-image2' />
     </div>
  </section>
 
  <section>
   <div className='hn-sec2'>
    <div className='hn-animiked'>
      <h2>Animaked</h2>
     <div className='hn-button'>
      <ButtonBh showIcon={true} buttonText={'0xc0E3...B79C'} buttonClass={'hn-button-one bh-button-one'} buttonIcon={Copy} />
      <ButtonBh showIcon={true} buttonText={'Follow'} buttonClass={'hn-button-two bh-button-two'} buttonIcon={plus} />
    
    </div>
  </div>
  
   <InfoUlCard data={data.dataList2}/>

   <div className='hn-bio'>
      <h5>Bio </h5>
      <p> The internet's friendliest designer kid.</p>
    </div>
   <h5>Links</h5>
    <SocialMediaLink/>
 </div>
  </section>
  </div>
</>
  )
  
}
