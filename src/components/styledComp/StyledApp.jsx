import styled from "styled-components";
import devices from "../../style/breakpoints";

const StyledApp = styled.div`

  display: grid;
  grid-template-rows: 50px auto 50px;
  min-height: 100svh;

  @media screen and  ${devices.sm} and ${devices.hr} {
    grid-template-rows: 75px auto 75px;
  }

`;

export default StyledApp;