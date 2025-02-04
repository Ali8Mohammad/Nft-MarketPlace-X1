import './ArtistPageNftCard.css'
import NftMainCard from '../NftMainCard/NftMainCard'


import ArtistPageTaps from '../ArtistPageTaps/ArtistPageTaps'

import { ArtistMainCard } from '../../data/ArtistMainCard'
export default function ArtistPageNftCard() {
    return(
        <>
        <section>
          <div className='hn-borderTop'> 
        <ArtistPageTaps tab1={'hn-tab1Artist'} tab2={'hn-tab2Artist'} tab3={'hn-tab3Artist'}  number1={'hn-302Artist'} number2={'hn-67Artist'} number3={'hn-4Artist'} title1={'Created'} title2={'Owned'} title3={'Collction'} />
         <div className='hn-artistNftCard'>
     <div className='hn-cardNft'> 
    {
      ArtistMainCard.map((e,index)=>{
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
