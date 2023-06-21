import StyledContent from "../../styledComp/StyledContent";
import StyledContentMainContainer
    from "../../styledComp/StyledContentMainContainer";

const Content = () => {
    return (
        <StyledContent className={"content"}>
            <StyledContentMainContainer className={"content-main-container"}>
                <h1 className={"heading"}>Author <span className={"spanBg"}>=></span> <span className={"spanStrike"}> j</span><span className={"spanItalic"}>u</span><span className={"spanSpacing"}>s<span className={"spanStrike"}>t</span></span> <span className={"spanRotate"}>me</span> &#129488; </h1>
                <h3 className={"subHeading"}> Bridging the Gap Between Front-End and Back-End.</h3>
                <p className={"pContent"}>If Chuck Norris were to travel to an alternate dimension in which there was another Chuck Norris and they both fought, they would both win.</p>
                <p className={"pContent"}>There is no chin behind Chuck Norris' beard. There is only another fist.</p>
                <p className={"pContent"}>Really big fan of Chuck Norris &#x1F600; </p>
            </StyledContentMainContainer>
        </StyledContent>
    );
};

export default Content;