import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import Home from "./pages/home/Home.jsx";
import Logement from "./pages/logement/Logement.jsx";
import APropos from "./pages/Apropos/Apropos.jsx";
import Error from "./pages/error/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Configuration du routeur avec toutes les routes de l'application.
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // Le composant `App` est le layout principal de cette route.
        children: [
            { path: "/", element: <Home /> }, // Route pour la page d'accueil
            { 
                path: "logements/:id", 
                element: <Logement />, // Route pour la page de chaque logement spécifique
                errorElement: <Error />, // Affiche une page d'erreur si le logement n'existe pas
                loader: async ({ params }) => {
                    const resp = await fetch("/logements.json"); // Récupère les données du fichier JSON
                    const logements = await resp.json();
                    const foundLogement = logements.find((l) => l.id === params.id); // Cherche le logement correspondant à l'id

                    if (!foundLogement) {
                        throw new Response('Error', { status: 404 }); // Renvoie une erreur 404 si le logement n'est pas trouvé
                    }

                    return foundLogement; // Retourne le logement trouvé
                }
            },
            { path: "a-propos", element: <APropos /> }, // Route pour la page "A propos"
            { path: "*", element: <Error /> }, // Route pour toutes les pages inexistantes (page 404)
        ],
    },
]);

// Point d'entrée de l'application React, où elle est rendue dans le DOM.
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} /> {/* Fournit le routeur à l'application */}
    </StrictMode>
);
