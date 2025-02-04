
import React from 'react'
import './BrowseCategories.css'
import { dataCategoriesCard } from '../../data/dataCategoriesCard'
import BrowseCategoriesCard from '../BrowseCategoriesCard/BrowseCategoriesCard'


export default function BrowseCategories() {
  return (
    <>
    <section>
    <div className='hn-browseCategory'>
      <div>
      <h3 className='hn-h3'>Browse Categories</h3>
    <div className='hn-cards'>
      {dataCategoriesCard.map((e,index)=>{
        return(
          <BrowseCategoriesCard key={index} photo={e.photo} title={e.title} />
        )
       
      })}
      </div>
      </div>
      </div>
      </section>
      </>
  )
}

