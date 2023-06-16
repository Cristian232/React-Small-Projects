import SmallProjects from "./SmallProjects";
import Content from "./Content";
import styled from "styled-components";
import devices from "../style/breakpoints";
import ContentHome from "./contentComp/contentCompForNavigationButtons/ContentHome";
import ContentAbout
    from "./contentComp/contentCompForNavigationButtons/ContentAbout";
import ContentContact
    from "./contentComp/contentCompForNavigationButtons/ContentContact";
import {Outlet, Route, Routes} from "react-router-dom";

const StyledSmallProject = styled.div`
      display: none;
`;

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

const Container = ({smallProjectsList,setSmallProjectsList}) => {
    return (
        <StyledContainer>
            <StyledSmallProject>
            <SmallProjects/>
            </StyledSmallProject>
                <Outlet />
        </StyledContainer>
    );
};

export default Container;