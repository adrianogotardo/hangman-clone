import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    user-select: none;
    box-sizing: border-box;
  }
  @font-face {
    font-family: Roboto;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  }
  body {
    font-family: "Roboto", sans-serif;
    //font-family: Roboto;
  }
`;

export default GlobalStyles;
