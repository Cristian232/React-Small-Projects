import styled from "styled-components";
import StyledContent from "./StyledContent";
import pngBg from "../../style/assets/pexels-sasha-martynov-1260727.jpg";
import deathStarBg from "../../style/assets/712440.jpg";
import devices from "../../style/breakpoints";

const StyledContentForMovie = styled(StyledContent)`
  background-image: url(${pngBg});
  background-size: cover;
  border-radius: 10px;

  .content-main-container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    padding: 0;
  }

  .heading {
    background-image: url(${deathStarBg});
    width: 80vw;
    height: 10vh;
    margin: 3px 0;
    border-radius: 5px;
    background-attachment: fixed;
    background-size: 100vh;
    background-origin: padding-box;
    background-repeat: no-repeat;
    background-position: center;
  }

  .second {
    width: 60vw;
  }

  .first {
    width: 40vw;
  }

  @media screen and ${devices.sm} and ${devices.hr} {
    background-image: url(${pngBg});
    opacity: 0.9;
    background-size: cover;
    border-radius: 10px;
    .content-main-container {
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
    }

    .heading {
      height: 60vh;
      background-image: url(${deathStarBg});
      width: 8vw;
      margin: 0 5px;
      border-radius: 5px;
      background-attachment: fixed;
      background-size: 130%;
      background-origin: content-box;
      background-repeat: no-repeat;
      background-position: center;
      padding-left: 0;
      box-shadow: 1px 1px 10px #6e6d6d;
      border: 1px solid darkgrey;
    }

    .second {
      height: 50vh;
    }

    .first {
      height: 40vh;
    }
  }
`;

export default StyledContentForMovie;