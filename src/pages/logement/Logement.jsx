import { useLoaderData } from "react-router-dom";
import Rate from "../../components/rate/Rate";
import Carousel from "../../components/carousel/Carousel";
import Tag from "../../components/tag/Tag";

import "./logement.scss";
import Accordeon from "../../components/accordeon/Accordeon";

const Logement = () => {

  const logement = useLoaderData()

  if (!logement) {
    return null;
  }

  return (
    <div className="logement-page">
      <Carousel pictures={logement.pictures} />
      <div className="logementGlobal">
        <div className="logement-header">
          <div className="left">
            <h1>{logement.title}</h1>
            <p className="location">{logement.location}</p>
            <ul className="tags">
              {logement.tags.map((tag) => (
                <li key={tag}>
                  <Tag name={tag} />
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            <div className="host-info">
              <p>{logement.host.name}</p>
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="host-picture"
              />
            </div>
            <Rate rating={logement.rating} />
          </div>
                  
        </div>
          <div className="accordeons-logement">
            <Accordeon title="Description">
              <p>{logement.description}</p>
            </Accordeon>
            <Accordeon title="Equipements">
              <ul>
                {logement.equipments.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </Accordeon>
          </div>
      </div>
    </div>
  );
};

export default Logement;