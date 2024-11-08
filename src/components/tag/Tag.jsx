import "./tag.scss";
import PropTypes from "prop-types";

// Déclare le composant fonctionnel `Tag` avec `name` comme prop.
const Tag = ({ name }) => {
    return <p className="tag">{name}</p>; // Affiche le nom du tag dans une balise <p>.
};

// Définit les types des props pour le composant Tag.
Tag.propTypes = {
    name: PropTypes.string.isRequired,
};

// Exportation du composant Tag pour l'utiliser dans d'autres fichiers.
export default Tag;
