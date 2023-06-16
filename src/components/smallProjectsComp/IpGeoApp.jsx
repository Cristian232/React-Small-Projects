import {useEffect} from "react";
import {BsRouterFill} from "react-icons/bs";
import {Link} from "react-router-dom";

const IpGeoApp = ({setProjects, size}) => {

    let name = "Ip Info"
    let description = "Displays the Ip info"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"
    let link = "/ip"

    let ipGeo = [name, link, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, ipGeo]);
    }, [])


    function appClickHandler(nameApp) {
    }

    return (
        <Link to={link}>
            <BsRouterFill size={size}
                          className={"sProjIcon"}
                          onClick={appClickHandler}/>
        </Link>
    )

};

export default IpGeoApp;