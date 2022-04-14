import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    &.MuiTypography-root {
      font-weight: 700;
    }
  }

  p, a, div, span {
    &.MuiTypography-root {
      font-weight: 400;
    }
  }
`

export default GlobalStyles