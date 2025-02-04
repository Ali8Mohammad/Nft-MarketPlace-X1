import './TopCreators.css';
import CreatorsCard from '../CreatorsCard/CreatorsCard';
import { dataHomeTopCreators } from "../../data/dataHomeTopCreators";
import Title from '../Title/Title';
import ButtonTitleResponsive from '../ButtonTitleResponsive/ButtonTitleResponsive';



export default function TopCreators() {
  return (
    <div className='ys-cards-creators'>
    <div className='top-creators'>
      <div className='ys-title-top-creat'>
        <Title title={'Top Creators'} 
      paragraph={'Checkout Top Creators on the NFT Marketplace'}
      buttonText={'view Ranking'} 
      myIcon={'./../../public/Images/icons/RocketLaunch.svg'}     
      showButton={true}
      />
      </div>
      <div className="creators">
        {dataHomeTopCreators.map((creator ,index) => {
          return(
            
            <CreatorsCard 
            key={index}
              id={creator.id}
              img={creator.img}
              title={creator.title}
              sales={creator.sales}
            />
         
          )
        })
        }
          
      </div>
      <div className='ys-div-btn-res'>
      <ButtonTitleResponsive myButtonText={'view Ranking'} icon={'./../../public/Images/icons/RocketLaunch.svg'} />
      </div>
      </div>
    </div>
  );
}