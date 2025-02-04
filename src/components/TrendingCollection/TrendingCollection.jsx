import './TrendingCollection.css'
import { TrendingCollectionData } from '../../data/TrendingCollectionData'
import TrendingCollectionCard from '../TrendingCollectionCard/TrendingCollectionCard'
import Title from '../Title/Title'

export default function   TrendingCollection() {
  return (
    <section className='iA-TrendingCollection-Section'>
      <div>
      <Title title='Trending Collection' paragraph='Checkout our weekly updated trending collection.'/>
      <div className='iA-TrendingCollect-CardsGroup'>
      {
        TrendingCollectionData.map((i, index) => {
          return (
            <TrendingCollectionCard key={index} index={index} mainImage={i.mainImage} subImage1={i.subImage1} subImage2={i.subImage2} subImage3={i.subImage3} title={i.title} />
          )
        })
      }
    </div>
      </div>
    </section>

  )
}
