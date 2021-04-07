import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Bold.ttf');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Italic.ttf');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Light.ttf');
    font-weight: lighter;
    font-style: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  html,
  body,
  html * {
    font-family: 'Montserrat', 'Helvetica';
  }
  body {
    margin: 0;
    padding: 0;
    height:100%;
    width:100%;
  }
  * {
      transition: all 0.2s linear;
      transition-property: color, background-color, border-color;
  }
`;

