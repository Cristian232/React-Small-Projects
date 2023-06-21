import styled from "styled-components";
import devices from "../../style/breakpoints";

const StyledFooter = styled.div`

  color: white;
  padding: 0 35px;
  display: flex;
  justify-content: center;
  align-self: center;
  .paragraph {
    text-shadow: 1px 1px 2px black;
  }

  @media screen and ${devices.sm} and ${devices.hr} {
    justify-content: end;
  }

`;

export default StyledFooter;