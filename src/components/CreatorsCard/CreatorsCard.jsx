import "./CreatorsCard.css";
import { Link } from 'react-router-dom';
export default function CreatorsCard({ id, img, title, sales }) {


  return (
    <Link to="/artist">
    <div className="af-creators-card">
      <div className="af-creators-card-header">
        <div className="af-creators-card-id-pop">
          <p className="af-creators-card-id">{id}</p>
        </div>
        <div className="ys-desc-creators">
          <img
            className="af-creators-card-img"
            src={img}
            alt={`Image of artist: ${title}`}
          />
        </div>
      </div>
      <div className="af-creators-card-text">
        <h5 className="af-card-artist-name">{title}</h5>
        <div className="af-creators-card-sales">
          <p>Total Sales:</p>
          <span>{sales}</span>
        </div>
      </div>
    </div>
    </Link>
  );
}