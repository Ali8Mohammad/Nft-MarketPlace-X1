import './MarketPlaceRankingHeader.css'

export default function MarketPlaceRankingHeader() {
  return (
    <div className='iA-MarketPlaceHeader-Section'>
      <div className='iA-MarketPlaceHeader'>
        <div className='iA-MarketPlaceHeader-TitleText'>
          <h2 className='iA-MarketPlaceHeader-Title'>Browse Marketplace</h2>
          <p className='iA-MarketPlaceHeader-Text'>Browse through more than 50k NFTs on the NFT Marketplace.</p>
        </div>
        <div className='iA-searchBar'>
          <div className='iA-searchBar-Elements'>
            <p className='iA-search-text'>Search your favourite NFTs</p>
            <img className='iA-search-Icon' src='../../../public/Images/icons/MagnifyingGlass.svg' />
          </div>
        </div>
      </div>
    </div>  
  )
}