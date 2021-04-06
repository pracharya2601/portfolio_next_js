import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;800&display=swap');
  html {
    overflow: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
  * {
      transition: all 0.2s linear;
      transition-property: color, background-color, border-color;
  }
`;

{/* <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tangerine"></link> */}