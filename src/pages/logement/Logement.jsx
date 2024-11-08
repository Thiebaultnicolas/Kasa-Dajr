import React from 'react';
import { useLoaderData } from "react-router-dom";
import Rate from "../../components/rate/Rate";
import Carousel from "../../components/carousel/Carousel";
import Tag from "../../components/tag/Tag";
import "./logement.scss";
import Accordeon from "../../components/accordeon/Accordeon";

// Déclaration du composant fonctionnel `Logement`.
const Logement = () => {
  const logement = useLoaderData(); // Récupère les données du logement via le loader de React Router.

  // Si `logement` n'existe pas, retourne `null` pour ne pas afficher de contenu.
  if (!logement) {
    return null;
  }

  return (
    <div className="logement-page">
      {/* Affichage du carousel avec les images du logement */}
      <Carousel pictures={logement.pictures} />
      <div className="logementGlobal">
        <div className="logement-header">
          <div className="left">
            {/* Affiche le titre et la localisation du logement */}
            <h1>{logement.title}</h1>
            <p className="location">{logement.location}</p>
            {/* Affiche les tags associés au logement */}
            <ul className="tags">
              {logement.tags.map((tag) => (
                <li key={tag}>
                  <Tag name={tag} />
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            {/* Affiche les informations de l'hôte */}
            <div className="host-info">
              <p>{logement.host.name}</p>
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="host-picture"
              />
            </div>
            {/* Affiche la note du logement sous forme d'étoiles */}
            <Rate rating={logement.rating} />
          </div>
        </div>
        {/* Affichage des accordéons pour la description et les équipements du logement */}
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
}

// Exportation du composant Logement pour qu'il puisse être utilisé dans d'autres fichiers.
export default Logement;
