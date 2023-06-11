
import {useEffect} from "react";

const TechyPhraseApp = ({setProjects}) => {

    let name = "Techy Phrase"
    let description = "Displays a Techy Phrase"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"
y
    let techy = [name, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
         setProjects(smallProjectList => [...smallProjectList, techy]);
        console.log("Fired once from Techy Phrase")
    },[])


    function appClickHandler(nameApp) {
        console.log("Clicked on TechyPhraseApp")
    }

    return(
    <BsCloudLightningRainFill size={40}
                              className={"mx-[auto] sProjIcon"}
                              onClick={ appClickHandler }/>
    )

};

export default TechyPhraseApp;