import {useEffect} from "react";
import {SiStartrek} from "react-icons/si";
import {Link} from "react-router-dom";

const PeopleInSpaceApp = ({setProjects, size}) => {

    let name = "PeopleInSpace Info"
    let description = "Displays the PeopleInSpace info"
    let link = "/ppl-in-space"

    let peopleInSpace = [name, link, description]

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, peopleInSpace]);
    }, [])


    function appClickHandler(nameApp) {
    }

    return (
        <Link to={link}>
            <SiStartrek size={size}
                        className={"sProjIcon"}
                        onClick={appClickHandler}/>
        </Link>
    )

};

export default PeopleInSpaceApp;