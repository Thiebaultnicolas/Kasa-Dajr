import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import Home from "./pages/home/Home.jsx";
import Logement from "./pages/logement/Logement.jsx";
import APropos from "./pages/Apropos/Apropos.jsx";
import Error from "./pages/error/Error.jsx";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "logements/:id",
        element: <Logement />,
        errorElement: <Error/>,
        loader: (async ({params}) => {
          const resp = await fetch("/logements.json");
          const logements = await resp.json();
          const foundLogement = logements.find((l) => l.id === params.id);
          
          if(!foundLogement){
            throw new Response('Error', {status: 404});
          }

          return foundLogement
        }),
      },
      {
        path: "a-propos",
        element: <APropos />, 
      },
      {
        path: "*",
        element: <Error />, 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);