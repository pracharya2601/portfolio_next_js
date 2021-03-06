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
  html,
  body {
    height:100%;
    min-height: 100%;
    width: 100%;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.text};
  }
  * {
      transition: all 0.2s linear;
      transition-property: color, background-color, border-color;
  }
  a {
    text-decoration: none;
    color: ${({theme}) => theme.text};
    &:hover {
      text-decoration: none;
      color: ${({theme}) => theme.textHover};
    }
  }
`;

