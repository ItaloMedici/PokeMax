import pokeMaxTheme, * as T from "./PokeMaxTheme";

const getTheme = (props: T.ThemeProps) => {
  return props.theme && props.theme.colors ? props.theme : pokeMaxTheme;
}

export const getColor = (color: T.ColorsScheme, props: T.ThemeProps) => {
  return getTheme(props).colors[color];
}

export const getBorderRadius = (borderRadius: T.BorderRadiusScheme, props: T.ThemeProps) => {
  return getTheme(props).borderRadius[borderRadius];
}

export const getBreakpoint = (breakpoint: T.BreakPointsScheme, props: T.ThemeProps) => {
  return getTheme(props).breakpoint[breakpoint];
}

export const getSpace = (space: T.SpacesScheme, props: T.ThemeProps) => {
  return getTheme(props).space[space];
}