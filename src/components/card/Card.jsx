import { Link } from "react-router-dom";
import "./card.scss";
import PropTypes from "prop-types";

// Déclare le composant fonctionnel `Card` avec `id`, `title` et `cover` comme props.
const Card = ({ id, title, cover }) => {
    return (
        <Link
            style={{ backgroundImage: `url(${cover})` }} // Utilise l'image `cover` comme arrière-plan de la carte.
            className="card"
            to={`logements/${id}`} // Lien vers la page du logement spécifique en utilisant l'id.
        >
            <h3>{title}</h3> {/* Affiche le titre du logement */}
            <div className="background"></div> {/* Arrière-plan pour ajouter un effet visuel */}
        </Link>
    );
};

// Définit les types des props pour le composant Card.
Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

// Exportation du composant Card pour l'utiliser dans d'autres fichiers.
export default Card;
