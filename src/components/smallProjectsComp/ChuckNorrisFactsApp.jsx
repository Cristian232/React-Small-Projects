
import {useEffect} from "react";
import {GiBloodySword, GiGoat} from "react-icons/gi";

const ChuckNorrisFactsApp = ({setProjects}) => {

    let name = "just Facts Info"
    let description = "Displays the actual facts info"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"

    let justFacts = [name, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
         setProjects(smallProjectList => [...smallProjectList, justFacts]);
        console.log("Fired once from ChuckNorrisFacts")
    },[])


    function appClickHandler(nameApp) {
        console.log("Clicked on ChuckNorrisFactsApp")
    }

    return(
    <GiGoat size={40}
                              className={"mx-[auto] sProjIcon"}
                              onClick={ appClickHandler }/>
    )

};

export default ChuckNorrisFactsApp;