import {BsCloudLightningRainFill} from "react-icons/bs";
import {useEffect} from "react";

const WeatherApp = ({setProjects, size}) => {

    let name = "Weather Info"
    let description = "Displays the weather info"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"

    let weather = [name, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
         setProjects(smallProjectList => [...smallProjectList, weather]);
        console.log("Fired once")
    },[])


    function appClickHandler(nameApp) {
        console.log("Clicked on weather")
    }

    return(
    <BsCloudLightningRainFill size={size}
                              className={"mx-[auto] sProjIcon"}
                              onClick={ appClickHandler }/>
    )

};

export default WeatherApp;