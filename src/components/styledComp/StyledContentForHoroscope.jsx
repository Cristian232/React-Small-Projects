import styled from "styled-components";
import StyledContent from "./StyledContent";
import pngTriangle from "../../style/assets/triangle-png-42407.png";
import devices from "../../style/breakpoints";

const StyledContentForHoroscope = styled(StyledContent)`
  .subHeading {
    text-align: center;
    margin-bottom: 30px;
  }

  .subHeading::first-letter {
    text-transform: capitalize;
  }

  .signArea {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
  }

  .signCard {
    color: #04396b;
    margin: 1vh 2vw;
    display: flex;
    flex-flow: column;
    width: clamp(70px, calc(50px + 10vw), 120px);
    height: clamp(12vh, calc(50px + 10vh), 15vh);
    justify-content: space-between;
    background-image: url(${pngTriangle});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: powderblue;
    border-radius: 10px;
  }

  .signCard:hover {
    background-color: #D5BFA5;
    border-radius: 10px;
  }

  .signImg {
    display: flex;
    justify-content: center;
    min-height: 7vh;
    align-items: center;
    z-index: 1;
    color: darkblue;
  }

  .signImg svg {
    z-index: 0;
    width: 80%;
    height: 80%;
  }

  .signDate p {
    color: black;
    font-size: 14px;
    text-shadow: 1px 1px 1px white;
  }
  
  @media screen and ${devices.sm} and ${devices.hr} {
    .signCard {
      margin: 10px 30px;
      background-size: contain;
      background-position: center;
      background-color: cornsilk;
      border-radius: 10px;
      box-shadow: 3px 3px 10px #798b9b;
    }

    .signCard:hover {
      box-shadow: 3px 3px 10px #e3e7ee;
      color: #bb0000;
      background-color: mediumpurple;
    }

    .signImg:hover svg {
      z-index: 0;
      width: 100%;
      height: 100%;
    }

    .signDate p {
      color: black;
      font-size: 14px;
      text-shadow: 1px 1px 1px white;
      background-color: powderblue;
    }
  }
`;

export default StyledContentForHoroscope;