import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import appRoutes from "./routes/app.routes";
import { LanguageProvider } from "./context/LanguageProvider";
import { pokeMaxTheme } from "./theme";
import Global from "./theme/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider theme={pokeMaxTheme}>
        <Global />
        <RouterProvider router={appRoutes} />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
