import {useEffect} from "react";
import {GiAngelOutfit} from "react-icons/gi";
import {Link} from "react-router-dom";

const HoroscopeApp = ({setProjects, size}) => {

    let name = "Horoscope Info"
    let description = "Displays the Horoscope info"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"
    let link = "/horoscope"

    let horoscope = [name, link, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, horoscope]);
    }, [])


    function appClickHandler(nameApp) {
    }

    return (
        <Link to={link}>
            <GiAngelOutfit size={size}
                           className={"sProjIcon"}
                           onClick={appClickHandler}/>
        </Link>
    )

};

export default HoroscopeApp;