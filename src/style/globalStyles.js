import { createGlobalStyle} from 'styled-components';
import reset from "styled-reset";
import devices from "./breakpoints";
import backGroundImg from "./assets/lucian-Quf76bmG95A-unsplash.jpg"

const GlobalStyle = createGlobalStyle`

  ${reset}
  body {
    background-color: #10bec4;
  }

  h1, #heading {
    font-family: 'Space Grotesk', "Comic Sans MS", "Helvetica Neue", cursive;
  }

  h2, #subHeading {
    color: white;
    font-family: 'Roboto', cursive;
  }

  h3, #pContent {
    font-family: 'Nunito', cursive;
  }

  .sProjIcon {
    color: #a43434;
  }


  @media screen and ${devices["3xs"]} {
    body {
      background-color: #838288;
      background-image: url(${backGroundImg});
      background-size: cover;
      background-position: -565px;
      background-repeat: no-repeat;
      min-height: 100svh;
    }
  }

  @media screen and ${devices.xs} {
    body {
        background-position: -400px;
    }
  }

  @media screen and ${devices.sm} {
    body {
      background-position: -200px;
    }
  }

`;



export default GlobalStyle;