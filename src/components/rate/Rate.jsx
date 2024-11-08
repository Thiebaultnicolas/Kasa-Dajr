import "./rate.scss";
import StarActive from "../../assets/star-active.svg";
import StarInactive from "../../assets/star-inactive.svg";
import PropTypes from "prop-types";

// Déclare le composant fonctionnel `Rate` avec `rating` comme prop.
const Rate = ({ rating }) => {
    // Crée un tableau d'étoiles actives selon la note.
    const starActive = Array.from({ length: parseInt(rating) }).map((_, idx) => (
        <img key={idx} src={StarActive} />
    ));

    // Crée un tableau d'étoiles inactives selon la note (pour compléter jusqu'à 5).
    const starInactive = Array.from({ length: 5 - parseInt(rating) }).map(
        (_, idx) => <img key={idx} src={StarInactive} />
    );

    return (
        <div className="rating">
            {starActive}
            {starInactive}
        </div>
    );
};

// Définit les types des props pour le composant Rate.
Rate.propTypes = {
    rating: PropTypes.string.isRequired,
};

// Exportation du composant Rate pour l'utiliser dans d'autres fichiers.
export default Rate;
