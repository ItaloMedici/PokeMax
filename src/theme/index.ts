import * as theme from "./selectors";
import pokeMaxTheme, { PokeMaxTheme, pokeMaxThemeDark } from "./PokeMaxTheme";

const themes = {
  light: pokeMaxTheme,
  dark: pokeMaxThemeDark
}

type Themes = keyof typeof themes

export { theme, pokeMaxTheme, pokeMaxThemeDark, themes };
export type { PokeMaxTheme, Themes }
