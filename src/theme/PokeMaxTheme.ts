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

  background: "#fafafa",
  backgroundA: "#fafafa57",
  
}

const pokeMaxTheme = {

  colors: {
    ...lightScheme,
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
    80: "36rem",
  },

  breakpoint: {
    xs: "@media (max-width: 414px)",
    sm: "@media (max-width: 576px)",
    md: "@media (max-width: 768px)",
    lg: "@media (max-width: 992px)",
    xl: "@media (max-width: 1090px)",
    '2xl': "@media (max-width: 1200px)",
  },
}

export type PokeMaxTheme = typeof pokeMaxTheme;

export type ThemeProps = { theme?: PokeMaxTheme }

export type ColorsScheme = keyof typeof lightScheme
export type BorderRadiusScheme = keyof PokeMaxTheme["borderRadius"]
export type SpacesScheme = keyof PokeMaxTheme["space"]
export type BreakPointsScheme = keyof PokeMaxTheme["breakpoint"]

export default pokeMaxTheme;