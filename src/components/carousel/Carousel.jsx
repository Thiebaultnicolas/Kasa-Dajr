import './carousel.scss';
import ArrowRight from "../../assets/arrow-right.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import PropTypes from "prop-types";
import { useState, useRef } from "react";

// Déclare le composant fonctionnel `Carousel` avec `pictures` comme prop.
const Carousel = ({ pictures }) => {
    const [index, setIndex] = useState(0); // Initialise l'état `index` pour suivre l'image courante.
    const refImage = useRef(null); // Crée une référence pour accéder aux dimensions de l'image.

    // Fonction pour aller à l'image précédente.
    const onPrevSlide = (e) => {
        e.preventDefault();
        setIndex(index === 0 ? pictures.length - 1 : index - 1); // Si à la première image, revient à la dernière.
    };

    // Fonction pour aller à l'image suivante.
    const onNextSlide = (e) => {
        e.preventDefault();
        setIndex(index === pictures.length - 1 ? 0 : index + 1); // Si à la dernière image, revient à la première.
    };

    return (
        <div className="carousel-container">
            {/* Liste des images du carousel */}
            <ul className="carousel" style={{ transform: `translateX(-${index * refImage?.current?.width}px)` }}>
                {pictures.map((image, idx) => (
                    <li className="slide" key={`carousel-image-${idx}`}>
                        <img src={image} ref={refImage} />
                    </li>
                ))}
            </ul>
            {/* Affiche les flèches de navigation si le carousel a plusieurs images */}
            {pictures.length > 1 && (
                <div className="arrows">
                    <a href="#" className="right" onClick={onNextSlide}><img src={ArrowRight} /></a>
                    <a href="#" className="left" onClick={onPrevSlide}><img src={ArrowLeft} /></a>
                </div>
            )}
            {/* Affiche le compteur de l'image courante / total des images */}
            <div className="counter">
                {pictures.length > 1 ? `${index + 1} / ${pictures.length}` : ""}
            </div>
        </div>
    );
};

// Définit les types des props pour le composant Carousel.
Carousel.propTypes = {
    pictures: PropTypes.array.isRequired,
};

// Exportation du composant Carousel pour l'utiliser dans d'autres fichiers.
export default Carousel;
