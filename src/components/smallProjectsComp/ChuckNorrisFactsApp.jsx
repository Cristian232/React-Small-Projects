import {useEffect} from "react";
import {GiGoat} from "react-icons/gi";
import {Link} from "react-router-dom";

const ChuckNorrisFactsApp = ({setProjects, size}) => {

    let name = "just Facts Info"
    let description = "Displays the actual facts info"
    let link = "/chucknorrisfacts"

    let justFacts = {name: name, link: link, description: description}

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, justFacts]);
    }, [])

    return (<Link to={link}>
        <GiGoat size={size}
                className={"sProjIcon"}
        />
    </Link>)

};

export default ChuckNorrisFactsApp;