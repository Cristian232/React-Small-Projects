import {useEffect} from "react";
import {Link} from "react-router-dom";
import {BsCloudLightningRainFill} from "react-icons/bs";

const TechyPhraseApp = ({setProjects}) => {

    let name = "Techy Phrase"
    let description = "Displays a Techy Phrase"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"
    let link = "/techy"

    let techy = [name, link, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, techy]);
    }, [])


    function appClickHandler(nameApp) {
    }

    return (
        <Link to={link}>
            <BsCloudLightningRainFill size={40}
                                      className={"mx-[auto] sProjIcon"}
                                      onClick={appClickHandler}/>
        </Link>
    )

};

export default TechyPhraseApp;