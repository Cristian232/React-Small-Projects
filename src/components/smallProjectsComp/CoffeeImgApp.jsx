import {useEffect} from "react";
import {BiCoffeeTogo} from "react-icons/bi";
import {Link} from "react-router-dom";

const CoffeeImgApp = ({setProjects, size}) => {

    let name = "Coffee Info"
    let description = "Displays the Coffee info"
    let link = "/coffee"

    let coffee = {name: name, link: link, description: description}

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, coffee]);
    }, [])

    return (<Link to={link}>
        <BiCoffeeTogo size={size}
                      className={"sProjIcon"}
        />
    </Link>)

};

export default CoffeeImgApp;