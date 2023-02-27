import { render as tRender } from "@testing-library/react";
import { LanguageProvider } from "../context/LanguageProvider";
import { ThemeProvider } from "styled-components";
import { pokeMaxTheme } from "../theme";

function render(ui: React.ReactElement,) {
  return tRender(
    <LanguageProvider>
      <ThemeProvider theme={pokeMaxTheme}>
          {ui}
      </ThemeProvider>
    </LanguageProvider>
  )
}

export * from "@testing-library/react";

export { render };
