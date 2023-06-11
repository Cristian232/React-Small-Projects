
import {useEffect} from "react";
import {IoLogoOctocat} from "react-icons/io";

const CurrencyApp = ({setProjects}) => {

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
    <IoLogoOctocat size={40}
                              className={"mx-[auto] sProjIcon"}
                              onClick={ appClickHandler }/>
    )

};

export default CurrencyApp;