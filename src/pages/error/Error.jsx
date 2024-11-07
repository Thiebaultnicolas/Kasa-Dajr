import { Link } from 'react-router-dom';
import Error404Img from '../../assets/404.svg'
import './error.scss'


const Error = () => {
    return <div className="error-page">
        <img src={Error404Img} alt="error image"/>
        <p>Oups! La page que vous demandez n'existe pas.</p>

        <Link to="/">Retourner sur la page d’accueil</Link>
    
    </div>
}

export default Error;