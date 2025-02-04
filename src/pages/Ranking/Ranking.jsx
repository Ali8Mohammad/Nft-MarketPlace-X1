
import RankingCardsSection from '../../components/RankingCardsSection/RankingCardsSection'
import RankingHero from '../../components/RankingHero/RankingHero'
import './Ranking.css'


export default function Ranking() {
  return (
    <>
    <div className="ranking-hero">
    <RankingHero/>
    </div>
    <div className="ranking-body">
    <RankingCardsSection/>
    </div>
    </>
  )
}
