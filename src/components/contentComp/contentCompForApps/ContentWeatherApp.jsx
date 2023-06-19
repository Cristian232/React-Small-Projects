import StyledContent from "../../styledComp/StyledContent";
import axios from "axios";

const Content = () => {



    return (
        <StyledContent className={"content"}>
            <div className={"content-main-container"}>
                <h1 className={"heading"}>1Header Lorem ipsum dolor sit amet.</h1>
                <h3 className={"subHeading"}>Header description Lorem ipsum dolor sit
                    amet.<br/> Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Libero, omnis.</h3>
                <p className={"pContent"}>Content Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Recusandae, ullam? Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. A ab alias
                    aperiam assumenda at atque beatae commodi cumque dolore,
                    dolorem doloribus dolorum earum eius error expedita facere
                    fugiat inventore ipsam iste labore laudantium mollitia
                    nesciunt nisi, nostrum obcaecati officia officiis possimus
                    qui saepe similique sunt vitae voluptate voluptatem.
                    Dolorem, fugit?</p>
                <p className={"pContent"}>Content</p>
                <p className={"pContent"}>Content</p>
                <p className={"pContent"}>Content</p>
            </div>
        </StyledContent>
    );
};

export default Content;