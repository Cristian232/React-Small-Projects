import {useEffect} from "react";
import {GiDeathStar} from "react-icons/gi";
import {Link} from "react-router-dom";

const MovieApiApp = ({setProjects, size}) => {

    let name = "MovieApi Info"
    let description = "Displays the Movie info"
    let link = "/movie"

    let weather = {name: name, link: link, description: description}

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, weather]);
    }, [])

    return (<Link to={link}>
        <GiDeathStar size={size}
                     className={"sProjIcon"}
        />
    </Link>)

};

export default MovieApiApp;