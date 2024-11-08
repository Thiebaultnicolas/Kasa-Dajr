import React from 'react'
import Accordeon from '../../components/accordeon/Accordeon'
import './apropos.scss'
import Banner from '../../components/Banner/Banner'
import BannerImageApropos from '../../assets/BannerApropos.jpg';

// Déclaration du composant fonctionnel `Apropos`.
const Apropos = () => {
  return (
    <>
      {/* Affichage de la bannière avec une image spécifique pour la page "A propos" */}
      <Banner image={BannerImageApropos} showText={''} />

      {/* Conteneur pour les accordéons de la page */}
      <div className='accordeons-apropos'>
        {/* Utilisation du composant Accordeon pour afficher la section "Fiabilité" */}
        <Accordeon title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, et toutes les informations sont 
            régulièrement vérifiées par nos équipes.</p>
        </Accordeon>
        {/* Accordeon pour la section "Respect" */}
        <Accordeon title="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera 
            une exclusion de notre plateforme.</p>
        </Accordeon>
        {/* Accordeon pour la section "Service" */}
        <Accordeon title="Service">
          <p>
          La qualité du service est au cœur de notre engagement chez Kasa. 
          Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, 
          soit empreinte de respect et de bienveillance.
          </p>
        </Accordeon>
        {/* Accordeon pour la section "Sécurité" */}
        <Accordeon title="Sécurité">
          <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
          chaque logement correspond aux critères de sécurité établis par nos services. 
          En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de 
          vérifier que les standards sont bien respectés. Nous organisons également des ateliers 
          sur la sécurité domestique pour nos hôtes.    
          </p>
        </Accordeon>
      </div>  
    </>
  )
}

// Exportation du composant Apropos pour qu'il puisse être utilisé dans d'autres fichiers.
export default Apropos;
