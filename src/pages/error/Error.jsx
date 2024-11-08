import React from 'react'
import { Link } from 'react-router-dom'
import Error404Img from '../../assets/404.svg'
import './error.scss'

// Déclaration du composant fonctionnel `Error`.
const Error = () => {
    return (
        <div className="error-page">
            {/* Affiche l'image d'erreur 404 */}
            <img src={Error404Img} alt="error image" />
            {/* Message indiquant que la page demandée n'existe pas */}
            <p>Oups! La page que vous demandez n'existe pas.</p>
            {/* Lien de retour vers la page d'accueil */}
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

// Exportation du composant Error pour qu'il puisse être utilisé dans d'autres fichiers.
export default Error;
