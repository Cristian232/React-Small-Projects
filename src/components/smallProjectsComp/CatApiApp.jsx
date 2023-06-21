import {useEffect} from "react";
import {IoLogoOctocat} from "react-icons/io";
import {Link} from "react-router-dom";

const CatApiApp = ({setProjects, size}) => {

    let name = "CatApi Info"
    let description = "Displays the weather info"
    let link = "/cat"

    let weather = {name: name, link: link, description: description}

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, weather]);
    }, [])

    return (<Link to={link}>
        <IoLogoOctocat size={size}
                       className={"sProjIcon"}
        />
    </Link>)

};

export default CatApiApp;