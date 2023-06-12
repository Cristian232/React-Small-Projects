import { createGlobalStyle} from 'styled-components';
import reset from "styled-reset";
import devices from "./breakpoints";
import backGroundImg from "./assets/lucian-Quf76bmG95A-unsplash.jpg"

const GlobalStyle = createGlobalStyle`

  ${reset}
  body {
    background: rgb(51,50,55);
    background: linear-gradient(0deg, rgba(51,50,55,1) 20%, rgba(52,57,63,1) 55%, rgba(49,56,62,1) 90%);
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
      background: rgb(51,50,55);
      background-image: url(${backGroundImg});
      background-size: cover;
      background-position: -565px;
      background-repeat: no-repeat;
      min-height: 100svh;
    }
  }

  @media screen and ${devices.xs} {
    body {
        background-position: -30vw;
    }
  }

  @media screen and ${devices.sm} {
    body {
      background-position: -200px;
    }
  } 
  
  @media screen and ${devices.md} {
    body {
      background-position: 0;
    }
  }

`;



export default GlobalStyle;