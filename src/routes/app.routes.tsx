import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home"
import { PokemonInfo } from "../pages/PokemonInfo";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, {
    path: "/pokemon/:id",
    element: <PokemonInfo />
  }
])