import React, { useEffect, useState } from "react";
import "./home.scss";
import Card from "../../components/card/Card.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import BannerHome from  '../../assets/BannerHome.jpg';

// Déclaration du composant fonctionnel `Home`.
const Home = () => {
  const [logements, setLogements] = useState([]); // Initialisation de l'état `logements` pour stocker les données des logements.

  // useEffect avec une fonction de récupération des données qui se déclenche lors du premier rendu du composant.
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("/logements.json"); // Récupère les données du fichier JSON.
      const data = await resp.json();
      setLogements(data); // Met à jour l'état `logements` avec les données reçues.
    };
    fetchData(); // Appel de la fonction de récupération des données.
  }, []);

  return (
    <>
      {/* Affichage de la bannière avec une image spécifique pour la page d'accueil */}
      <Banner image={BannerHome} showText={'Chez vous, partout et ailleurs'} />
      {/* Affichage de la liste des logements sous forme de cartes */}
      <ul className="logements">
        {logements.map((logement) => (
          <li key={logement.id}>
            <Card
              id={logement.id} // Passe l'identifiant du logement en prop.
              title={logement.title} // Passe le titre du logement en prop.
              cover={logement.cover} // Passe l'image de couverture du logement en prop.
            />
          </li>
        ))}
      </ul>
    </>    
  );
}

// Exportation du composant Home pour qu'il puisse être utilisé dans d'autres fichiers.
export default Home;
