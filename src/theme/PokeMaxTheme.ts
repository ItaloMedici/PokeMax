const lightScheme = {
  grey25: "#fefefe",
  grey50: "#fcfcfc",
  grey100: "#fafafa",
  grey200: "#f5f5f5",
  grey300: "#f0f0f0",
  grey400: "#dedede",
  grey500: "#c2c2c2",
  grey600: "#979797",
  grey700: "#818181",
  grey800: "#606060",
  grey900: "#3c3c3c",

  background: "#f5f5f5",
  backgroundA: "#fafafa57",

  surface: "#fefefe",
  
  textColor: "#1b1b1b",
  iconColor: "#1b1b1b"
}

const types = {
  bug: '#8CB230',
  dark: '#58575F',
  dragon: '#0F6AC0',
  electric: '#EED535',
  fairy: '#ED6EC7',
  fighting: "#D04164",
  fire:"#FD7D24",
  flying: "#748FC9",
  ghost: "#556AAE",
  grass: "#62B957",
  ground: "#DD7748",
  ice: "#61CEC0",
  normal: "#9DA0AA",
  poison: "#A552CC",
  psychic: "#EA5D60",
  rock: "#BAAB82",
  steel: "#417D9A",
  water: "#4A90DA",
  unknown: "#606060",
  shadow:"#432750"
}

const pokeMaxTheme = {

  colors: {
    ...lightScheme,
    ...types,
    
    primary: "#0162ef",
  },

  borderRadius: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "10px",
    xlg: "20px",
    full: "999px"
  },

  space: {
    px: "1px",
    1: "0.25rem",
    2: "0.50rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.21rem",
    6: "1.50rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.5rem",
    10: "3rem",
    11: "3.5rem",
    12: "4rem",
    13: "4.5rem",
    14: "5rem",
    15: "5.5rem",
    20: "8rem",
    30: "13rem",
    40: "18rem",
    50: "23rem",
    80: "36rem",
  },

  breakpoint: {
    xs: "@media (min-width: 414px)",
    sm: "@media (min-width: 576px)",
    md: "@media (min-width: 768px)",
    lg: "@media (min-width: 992px)",
    xl: "@media (min-width: 1090px)",
    '2xl': "@media (min-width: 1200px)",
  },
}

export type PokeMaxTheme = typeof pokeMaxTheme;

export type ThemeProps = { theme?: PokeMaxTheme }

export type ColorsScheme = keyof PokeMaxTheme["colors"] 
export type BorderRadiusScheme = keyof PokeMaxTheme["borderRadius"]
export type SpacesScheme = keyof PokeMaxTheme["space"]
export type BreakPointsScheme = keyof PokeMaxTheme["breakpoint"]

export default pokeMaxTheme;


const darkTheme = {
  grey25: "#242424",
  grey50: "#2e2e2e",
  grey100: "#333333",
  grey200: "#3b3b3b",
  grey300: "#444444",
  grey400: "#555555",
  grey500: "#737373",
  grey600: "#a6a6a6",
  grey700: "#c2c2c2",
  grey800: "#e1e1e1",
  grey900: "#f5f5f5",
  
  background: "#1d1d1d",
  backgroundA: "#1a1a1a57",
  
  surface: "#2c2c2c",
  
  textColor: "#fefefe",
  iconColor: "#fefefe"
}

export const pokeMaxThemeDark = {
  ...pokeMaxTheme,
  colors: {
    ...pokeMaxTheme.colors,
    ...darkTheme
  }
}