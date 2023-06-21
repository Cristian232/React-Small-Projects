import SmallProjectListItems from "./SmallProjectListItems";
import StyledSmallProjects from "./styledComp/StyledSmallProjects";

const SmallProjects = () => {

    return (
        <StyledSmallProjects
            className={"smallProjects"}>
            <div className={"smallProjects-wrapper"}>
                <ul className={"smallProjects-list"}>
                    <SmallProjectListItems />
                </ul>
            </div>
        </StyledSmallProjects>
    );
};

export default SmallProjects;