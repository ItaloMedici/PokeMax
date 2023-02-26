import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { PokemonInfo } from "../pages/PokemonInfo";
import { Default } from "../pages/Default";

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <Default>
        <Home />
      </Default>
    ),
  },
  {
    path: "/pokemon/:id",
    element: (
      <Default>
        <PokemonInfo />
      </Default>
    ),
  },
]);
