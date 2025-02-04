import "./RankingCard.css";

export default function RankingCard({ id, img, title, percent, description, sales }) {
  return (
    <div className="af-ranking-card ">
      <div className="af-ranking-card-header">
        <div className="af-ranking-card-id-pop">
          <p className="af-ranking-card-id">{id}</p>
        </div>
        <div className="af-desc-ranking">
          <img
            className="af-ranking-card-img"
            src={img}
            alt={`Image of artist: ${title}`}
          />
          <h5 className="af-ranking-card-artist-name">{title}</h5>
        </div>
      </div>
      <div className="af-ranking-card-text">
          <div className="af-ranking-card-percent">
            {percent}
          </div>
          <div className="af-ranking-card-description">
            {description}
          </div>
          <div className="af-ranking-card-sales">
            {sales}
          </div>
      </div>
    </div>
  );
};