import './accordeon.scss'
import ArrowUp from '../../assets/arrow-up.svg'
import { useRef, useState } from 'react'
import PropTypes from "prop-types";

// Déclare le composant fonctionnel `Accordeon` avec `title` et `children` comme props.
const Accordeon = ({ title, children }) => {
    const [open, setOpen] = useState(false); // Initialise un état `open` pour gérer l'ouverture/fermeture de l'accordéon.
    const accordeonContentRef = useRef(null); // Crée une référence pour accéder au contenu de l'accordéon.

    // Fonction pour inverser l'état `open` lorsqu'on clique sur le bouton.
    const onOpen = () => {
        setOpen(!open);
    };

    // Fonction pour obtenir la hauteur du contenu de l'accordéon s'il est ouvert.
    const getAccordeonContentHeight = () => {
        if (open) {
            return `${accordeonContentRef?.current?.clientHeight}px`;
        }
        return 0;
    };

    // Structure du rendu JSX de l'accordéon.
    return (
        <div className={`accordeon ${open ? 'open' : ''}`}>
            <div className="accordeon-title">
                <span>{title}</span> {/* Affiche le titre de l'accordéon */}
                <button onClick={onOpen}> {/* Bouton pour ouvrir/fermer l'accordéon */}
                    <img src={ArrowUp} alt="Ouvrir l'accordéon" />
                </button>
            </div>
            <div className="accordeon-content" style={{ height: getAccordeonContentHeight() }}>
                <div className="accordeon-children" ref={accordeonContentRef}>
                    {children} {/* Affiche le contenu de l'accordéon */}
                </div>
            </div>
        </div>
    );
};

// Définit les types des props pour valider les données passées au composant.
Accordeon.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

// Exportation du composant Accordeon pour l'utiliser dans d'autres fichiers.
export default Accordeon;
