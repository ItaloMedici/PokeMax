import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { LanguageProvider } from "./context/LanguageProvider";
import { PokeMaxThemeProvider } from "./context/PokeMaxThemeProvider";
import Global from "./theme/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <PokeMaxThemeProvider>
        <Global />
        <App />
      </PokeMaxThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
