import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Themes, themes } from "../theme";

type PokeMaxThemeContext = {
  currentTheme: Themes
  toggleTheme(scheme?: Themes): void
}

export const PokeMaxThemeContext = React.createContext<PokeMaxThemeContext>({} as PokeMaxThemeContext);

const PokeMaxThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<Themes>("light");

  useEffect(() => {
    let currentTheme = localStorage.getItem("pokeMaxTheme")

    if (currentTheme) {
      toggleTheme(currentTheme === "light" ? "light" : "dark")
    } else {
      localStorage.setItem("pokeMaxTheme", "light")
    }
  }, [])

  const toggleTheme = (scheme?: Themes) => {
    setTheme(prev => {
      let t = !scheme ? prev === "light" ? "dark" : "light" : scheme;

      localStorage.setItem("pokeMaxTheme", t)
      console.log(t)
      return t
    });
  }

  console.log(themes[theme].colors)

  return (
    <PokeMaxThemeContext.Provider value={{ toggleTheme, currentTheme: theme }}>
      <ThemeProvider theme={themes[theme]}>
        {children}
      </ThemeProvider>
    </PokeMaxThemeContext.Provider>
  );
}

export { PokeMaxThemeProvider };

