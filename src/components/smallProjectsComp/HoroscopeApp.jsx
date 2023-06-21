import {useEffect} from "react";
import {GiAngelOutfit} from "react-icons/gi";
import {Link} from "react-router-dom";

const HoroscopeApp = ({setProjects, size}) => {

    let name = "Horoscope Info"
    let description = "Displays the Horoscope info"
    let link = "/horoscope"

    let horoscope = {name: name, link: link, description: description}

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, horoscope]);
    }, [])

    return (<Link to={link}>
        <GiAngelOutfit size={size}
                       className={"sProjIcon"}
        />
    </Link>)

};

export default HoroscopeApp;