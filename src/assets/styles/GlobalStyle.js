import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }
  
  body {
    width: 100rem;
    height: 100vh;
    font-size: 1.6rem;
    font-family: 'Arial', sans-serif;
    background-color: white;
    color: black;
    display: grid;
    place-items: center;
    margin: 0 auto;
  }
`;
