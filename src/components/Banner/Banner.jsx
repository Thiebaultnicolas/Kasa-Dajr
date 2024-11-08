import './banner.scss';
import PropTypes from 'prop-types';

// Déclare le composant fonctionnel `Banner` avec `image` et `showText` comme props.
const Banner = ({ image, showText }) => {
    return (
        <div className="banner">
            <img src={image} alt="Banner" /> {/* Affiche l'image de bannière */}
            <div className="banner-text">{showText}</div> {/* Affiche le texte de la bannière s'il existe */}
        </div>
    );
};

// Définit les types des props pour le composant Banner.
Banner.propTypes = {
    image: PropTypes.string.isRequired, // `image` doit être une chaîne de caractères.
    showText: PropTypes.bool // `showText` est un booléen optionnel.
};

// Exportation du composant Banner pour l'utiliser dans d'autres fichiers.
export default Banner;
