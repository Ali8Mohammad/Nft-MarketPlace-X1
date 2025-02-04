import "./RankingCardsSection.css";
import { dataRankingTopCreators } from "../../data/dataRankingTopCreators";
import ArtistPageTaps from "../ArtistPageTaps/ArtistPageTaps"; // Ensure you import this component
import RankingCard from "../RankingCard/RankingCard"; // Ensure you import the RankingCard component
import RankingHeader from "../RankingHeader/RankingHeader";

export default function RankingCardSection() {
  const RankingData = dataRankingTopCreators; // Accessing the array directly

  return (
    <div className="af-ranking-card-sec">
      <ArtistPageTaps
        tab1="hn-tab1Ranking"
        tab2="hn-tab2Ranking"
        tab3="hn-tab3Ranking"
        tab4="hn-tab4Ranking"
        number1="hn-302Ranking"
        number2="hn-67Ranking"
        number3="hn-4Ranking"
        title1="Today"
        title2="This Week"
        title3="This Month"
        title4="All Time"
      />
      <div className="af-ranking-card-sec-body">
        <RankingHeader/>
        {RankingData.map((item, index) => (
          <RankingCard
            key={item.id} // Use a unique property as the key for better practices
            id={item.id}
            img={item.img}
            title={item.title}
            percent={item.percent}
            description={item.description}
            sales={item.sales}
          />
        ))}
      </div>
    </div>
  );
}
