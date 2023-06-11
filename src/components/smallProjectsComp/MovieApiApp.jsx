
import {useEffect} from "react";
import {GiDeathStar} from "react-icons/gi";

const MovieApiApp = ({setProjects}) => {

    let name = "MovieApi Info"
    let description = "Displays the Movie info"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"

    let weather = [name, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
         setProjects(smallProjectList => [...smallProjectList, weather]);
        console.log("Fired once from MovieApiApp")
    },[])


    function appClickHandler(nameApp) {
        console.log("Clicked on movie")
    }

    return(
    <GiDeathStar size={40}
                              className={"mx-[auto] sProjIcon"}
                              onClick={ appClickHandler }/>
    )

};

export default MovieApiApp;