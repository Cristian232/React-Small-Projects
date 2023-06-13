
import {useEffect} from "react";
import {GiAngelOutfit, GiGoat} from "react-icons/gi";

const HoroscopeApp = ({setProjects,size}) => {

    let name = "Horoscope Info"
    let description = "Displays the Horoscope info"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"

    let horoscope = [name, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
         setProjects(smallProjectList => [...smallProjectList, horoscope]);
        console.log("Fired once from HoroscopeApp")
    },[])


    function appClickHandler(nameApp) {
        console.log("Clicked on HoroscopeApp")
    }

    return(
    <GiAngelOutfit size={size}
                              className={"mx-[auto] sProjIcon"}
                              onClick={ appClickHandler }/>
    )

};

export default HoroscopeApp;