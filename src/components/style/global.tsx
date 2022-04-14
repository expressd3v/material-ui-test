import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  
  html, body {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p, a, div, span {
    font-family: "Roboto","Helvetica","Arial",sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  p, a, div, span {
    font-weight: 400;
  }
`

export default GlobalStyles