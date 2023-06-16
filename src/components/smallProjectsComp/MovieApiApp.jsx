import {useEffect} from "react";
import {GiDeathStar} from "react-icons/gi";
import {Link} from "react-router-dom";

const MovieApiApp = ({setProjects, size}) => {

    let name = "MovieApi Info"
    let description = "Displays the Movie info"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"
    let link = "/movie"

    let weather = [name, link, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, weather]);
    }, [])


    function appClickHandler(nameApp) {
    }

    return (
        <Link to={link}>
            <GiDeathStar size={size}
                         className={"sProjIcon"}
                         onClick={appClickHandler}/>
        </Link>
    )

};

export default MovieApiApp;