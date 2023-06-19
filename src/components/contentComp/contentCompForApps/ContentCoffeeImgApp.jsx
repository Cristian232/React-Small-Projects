import StyledContent from "../../styledComp/StyledContent";
import {useEffect, useState} from "react";
import async from "async";
import axios from "axios";
import {image_search} from "duckduckgo-images-api";

const Content = () => {

    const [state,setState] = useState("");

    useEffect(() => {

        // const fetch = async () => {
        //     const response = await image_search({ query: "birds", moderate: true }).then(results=>console.log(results))
        //     // setState(response.data.file)
        //     console.log(response)
        // }
        // fetch()

    },[])

    return (
        <StyledContent className={"content"}>
            <div className={"content-main-container"}>
                <h3 className={"subHeading"}>Random Coffee image <br/> because who doesn't love coffee </h3>

                {/*<p className={"pContent"}>Content</p>*/}
                {/*<p className={"pContent"}>Content</p>*/}
                {/*<p className={"pContent"}>Content</p>*/}
            </div>
        </StyledContent>
    );
};

export default Content;