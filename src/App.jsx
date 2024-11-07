import { Outlet, useLocation, Link, NavLink } from "react-router-dom";
import LogoKasa from "./assets/LogoKasa.png";
import LogoKasaFooter from "./assets/LogoKasaFooter.png";
import "./App.scss";

const App = () => {
  const location = useLocation(); 
  

  return (
    <>
      <header>
        <Link to="/"> 
          <img src={LogoKasa} alt="Kasa Logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/a-propos">A propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>

          

      <Outlet />

      <footer>
        <img
          src={LogoKasaFooter}
          alt="Kasa Footer Logo"
          className="footer-logo"
        />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
};

export default App;