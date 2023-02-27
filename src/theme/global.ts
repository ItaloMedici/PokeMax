import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800&display=swap');

  * {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }
`