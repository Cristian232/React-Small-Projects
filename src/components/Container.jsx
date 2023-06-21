import SmallProjects from "./SmallProjects";
import {Outlet} from "react-router-dom";
import StyledSmallProject from "./styledComp/StyledSmallProject";
import StyledContainer from "./styledComp/StyledContainer";

const Container = () => {
    return (
        <StyledContainer>
            <StyledSmallProject>
                <SmallProjects/>
            </StyledSmallProject>
            <Outlet/>
        </StyledContainer>
    );
};

export default Container;