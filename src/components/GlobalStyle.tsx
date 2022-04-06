import { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: NexaRegular;
  src: url("/fonts/Nexa-Regular.otf");
}
@font-face {
  font-family: NexaBold;
  src: url("/fonts/Nexa-Bold.otf");
}
@font-face {
  font-family: NexaLight;
  src: url("/fonts/Nexa-Light.otf");
}
@font-face {
  font-family: NexaBlack;
  src: url("/fonts/Nexa-Black.ttf");
}
@font-face {
  font-family: NexaBook;
  src: url("/fonts/Nexa-Book.ttf");
}
@font-face {
  font-family: NexaHeavy;
  src: url("/fonts/Nexa-Heavy.ttf");
}
  html, body {
    margin: 0;
    box-sizing: border-box;
    font-family: NexaRegular, sans-serif;
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    color: #1A1A1A;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
