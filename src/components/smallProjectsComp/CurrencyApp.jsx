import {useEffect} from "react";
import {BsCloudLightningRainFill} from "react-icons/bs";
import {Link} from "react-router-dom";

const CurrencyApp = ({setProjects}) => {

    let name = "Weather Info"
    let description = "Displays the weather info"
    let link = "/currency"

    let weather = {name: name, link: link, description: description}

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, weather]);
    }, [])

    return (<Link to={link}>
        <BsCloudLightningRainFill size={40}
                                  className={"sProjIcon"}
        />
    </Link>)

};

export default CurrencyApp;