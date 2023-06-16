import {useEffect} from "react";
import {GiGoat} from "react-icons/gi";
import {Link} from "react-router-dom";

const ChuckNorrisFactsApp = ({setProjects, size}) => {

    let name = "just Facts Info"
    let description = "Displays the actual facts info"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"
    let link = "/chucknorrisfacts"

    let justFacts = [name, link, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, justFacts]);
    }, [])


    function appClickHandler(nameApp) {
    }

    return (
        <Link to={link}>
            <GiGoat size={size}
                    className={"sProjIcon"}
                    onClick={appClickHandler}/>
        </Link>
    )

};

export default ChuckNorrisFactsApp;