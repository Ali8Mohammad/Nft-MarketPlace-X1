import './RankingHeader.css'
export default function RankingHeader() {

  return (
    <>
<div className="af-ranking-header">
  <div className='af-ranking-header-body'>
    <div className="af-artist">
      <p>#</p>
      <p>Artist</p>
    </div>
    <div className="af-ranking-sections">
      <div className='change'> <p>Change</p></div>
      <div className='nfts-sold'><p>NFTs Sold</p></div>
      <div className='volume'><p>Volume</p></div>
    </div>
    </div>
  </div>      
    </>
  );
}