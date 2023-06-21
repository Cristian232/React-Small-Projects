import {BsCloudLightningRainFill} from "react-icons/bs";
import {useEffect} from "react";
import {Link} from "react-router-dom";

const WeatherApp = ({setProjects, size}) => {

    let name = "Weather Info"
    let description = "Displays the weather info"
    let link = "/weather"

    let weather = {name: name, link: link, description: description}

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, weather]);
    }, [])

    return (
        <Link to={link} className={""}>
            <BsCloudLightningRainFill size={size}
                                      className={"sProjIcon"}
            />
        </Link>
    )

};

export default WeatherApp;