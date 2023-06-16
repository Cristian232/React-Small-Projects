import {useEffect} from "react";
import {BiCoffeeTogo} from "react-icons/bi";
import {Link} from "react-router-dom";

const CoffeeImgApp = ({setProjects, size}) => {

    let name = "Coffee Info"
    let description = "Displays the Coffee info"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"
    let link = "/coffee"

    let coffee = [name, link, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, coffee]);
    }, [])


    function appClickHandler(nameApp) {
    }

    return (
        <Link to={link}>
            <BiCoffeeTogo size={size}
                          className={"sProjIcon"}
                          onClick={appClickHandler}/>
        </Link>
    )

};

export default CoffeeImgApp;