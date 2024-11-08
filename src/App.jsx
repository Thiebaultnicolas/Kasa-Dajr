import { Outlet, useLocation, Link, NavLink } from "react-router-dom";
import LogoKasa from "./assets/LogoKasa.png";
import LogoKasaFooter from "./assets/LogoKasaFooter.png";
import "./App.scss";

// Déclare le composant principal `App`.
const App = () => {
    const location = useLocation(); // Utilise `useLocation` pour accéder à l'URL courante de l'application.
  
    return (
        <>
            {/* En-tête de l'application */}
            <header>
                {/* Logo de l'application avec un lien vers la page d'accueil */}
                <Link to="/">
                    <img src={LogoKasa} alt="Kasa Logo" />
                </Link>
                {/* Barre de navigation */}
                <nav>
                    <ul>
                        <li><NavLink to="/">Accueil</NavLink></li> {/* Lien vers la page d'accueil */}
                        <li><NavLink to="/a-propos">A propos</NavLink></li> {/* Lien vers la page "A propos" */}
                    </ul>
                </nav>
            </header>
            
            {/* Contenu principal de l'application où les routes enfants seront affichées */}
            <Outlet /> 

            {/* Pied de page de l'application */}
            <footer>
                {/* Logo de pied de page */}
                <img src={LogoKasaFooter} alt="Kasa Footer Logo" className="footer-logo" />
                {/* Texte de droits d'auteur */}
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </>
    );
};

// Exportation du composant `App` pour qu'il soit utilisé dans d'autres fichiers.
export default App;
