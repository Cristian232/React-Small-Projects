import styled from "styled-components";
import devices from "../../style/breakpoints";

const StyledContent = styled.div`
  
  min-height: 100%;
  display: flex;

  h1 {
    padding: clamp(25px, 10px + 6vh, 35px) 10px;
    color: white;
    text-shadow: 1px 1px 1px black;
    font-size: 40px;
    text-align: center;
  }

  h3 {
    padding: 8px 1px;
    color: white;
    text-shadow: 1px 1px 5px black;
    font-size: 27px;
    text-align: center;
  }

  p {
    padding: 3px 1px;
    color: white;
    text-shadow: 1px 1px 2px black;
    font-size: 18px;
    text-align: center;
  }

  .content-main-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-width: 100%
  }

  @media screen and ${devices.sm} and ${devices.hr} {

    .heading, .subHeading {
      text-align: start;
      padding-left: 5vw;
    }

    .pContent {
      padding: 0 10vw;
      font-size: 22px;
    }
    
    .morePaddingLeft {
      padding-left: 15vw;
    }

  }
`;


export default StyledContent;