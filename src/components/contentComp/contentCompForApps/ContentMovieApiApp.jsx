import StyledContentForMovie from "../../styledComp/StyledContentForMovie";

const Content = () => {
    return (<StyledContentForMovie className={"content"}>
        <div className={"content-main-container"}>
            <h1 className={"heading first"}></h1>
            <h1 className={"heading second"}></h1>
            <h1 className={"heading middle"}></h1>
            <h1 className={"heading second"}></h1>
            <h1 className={"heading first"}></h1>
        </div>
    </StyledContentForMovie>);
};

export default Content;