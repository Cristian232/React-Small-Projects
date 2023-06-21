import styled from "styled-components";
import devices from "../../style/breakpoints";
import StyledSmallProject from "./StyledSmallProject";

const StyledContainer = styled.div`
  padding: 20px 10px;
  @media screen and ${devices.sm} and ${devices.hr} {
    display: grid;
    grid-template-columns: 75px auto;
    ${StyledSmallProject} {
      display: flex;
      margin: 0 auto;
      padding: 0.5vh 0;
    }
  }
`;

export default StyledContainer;