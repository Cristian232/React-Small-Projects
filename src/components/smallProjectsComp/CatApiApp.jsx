import {useEffect} from "react";
import {IoLogoOctocat} from "react-icons/io";
import {Link} from "react-router-dom";

const CatApiApp = ({setProjects, size}) => {

    let name = "CatApi Info"
    let description = "Displays the weather info"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"
    let link = "/cat"

    let weather = [name, link, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, weather]);
    }, [])


    function appClickHandler(nameApp) {

    }

    return (
        <Link to={link}>
            <IoLogoOctocat size={size}
                           className={"sProjIcon"}
                           onClick={appClickHandler}/>
        </Link>
    )

};

export default CatApiApp;