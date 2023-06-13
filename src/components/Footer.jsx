import styled from "styled-components";
import devices from "../style/breakpoints";


const StyledFooter = styled.div`

  color: white;
  padding: 0 35px;
  display: flex;
  justify-content: center;
  align-self: center;

  @media screen and ${devices.sm} and ${devices.hr} {
    justify-content: end;
  }

`;

const Footer = () => {
    return (
        <StyledFooter
            className={"footer fixed bottom-0 right-0 px-[20px] text-white"}
            id={"footerId"}>
            <div className={"footer-wrapper"}>
                <p>Footer Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Quod, repellat.</p>
            </div>
        </StyledFooter>
    );
};

export default Footer;
