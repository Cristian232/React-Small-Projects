import {useEffect} from "react";
import {BsCloudLightningRainFill} from "react-icons/bs";
import {Link} from "react-router-dom";

const CurrencyApp = ({setProjects}) => {

    let name = "Weather Info"
    let description = "Displays the weather info"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"
    let link = "/currency"

    let weather = [name, link, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
        setProjects(smallProjectList => [...smallProjectList, weather]);
    }, [])


    function appClickHandler(nameApp) {
    }

    return (
        <Link to={link}>
            <BsCloudLightningRainFill size={40}
                                      className={"sProjIcon"}
                                      onClick={appClickHandler}/>
        </Link>
    )

};

export default CurrencyApp;