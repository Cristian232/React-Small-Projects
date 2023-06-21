import TechyPhraseApp from "./smallProjectsComp/TechyPhraseApp";
import StyledFooter from "./styledComp/StyledFooter";

const Footer = () => {
    return (
        <StyledFooter
            className={"footer"}
            id={"footerId"}>
            <div className={"footer-wrapper"}>
                <TechyPhraseApp />
            </div>
        </StyledFooter>
    );
};

export default Footer;
