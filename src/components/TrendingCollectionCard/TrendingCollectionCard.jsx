
import './TrendingCollectionCard.css'
import { ImageDescriptionData } from '../../data/ImageDescriptionData'
import ImageDescription from '../ImageDescription/ImageDescription'
import { Link } from 'react-router-dom';

export default function TrendingCollectionCard({ mainImage, subImage1, subImage2, subImage3, title, index }) {
  const x = ImageDescriptionData[index]


  return (
    <div className={`iA-Card${index}`}>
      <div className="iA-TrendingCollectionCard">
        <Link to={'/nft'}><img className='iA-mainImage' src={mainImage} /></Link>
        <div className='iA-subImage-container'>
          <Link to={'/nft'}><img className='iA-subImage' src={subImage1} /></Link>
          <Link to={'/nft'}><img className='iA-subImage' src={subImage2} /></Link>
          <img className='iA-subImage' src={subImage3} />
        </div>
        <div className='iA-TrendingCollectionCard-title-description'>
          <h5 className='iA-TrendingCollectionCardTitle'>{title}</h5>
          <ImageDescription
            userImage={x.userImage}
            userName={x.userName}
            border={false} font={true} />

        </div>
      </div>
    </div>
  )
}
