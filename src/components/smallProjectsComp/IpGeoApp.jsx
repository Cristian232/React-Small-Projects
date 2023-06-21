import {useEffect} from "react";
import {BsRouterFill} from "react-icons/bs";
import {Link} from "react-router-dom";

const IpGeoApp = ({setProjects, size}) => {

    let name = "Ip Info"
    let description = "Displays the Ip info"
    let link = "/ip"

    let ipGeo = {name: name, link: link, description: description}

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, ipGeo]);
    }, [])

    return (<Link to={link}>
        <BsRouterFill size={size}
                      className={"sProjIcon"}
        />
    </Link>)

};

export default IpGeoApp;