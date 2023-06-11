
import {useEffect} from "react";
import {GiDeathStar} from "react-icons/gi";
import {SiStartrek} from "react-icons/si";

const PeopleInSpaceApp = ({setProjects}) => {

    let name = "PeopleInSpace Info"
    let description = "Displays the PeopleInSpace info"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"

    let peopleInSpace = [name, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
         setProjects(smallProjectList => [...smallProjectList, peopleInSpace]);
        console.log("Fired once from PeopleInSpaceApp on window load")
    },[])



    function appClickHandler(nameApp) {
        console.log("Clicked on PeopleInSpaceApp ")
    }

    return(
    <SiStartrek size={40}
                              className={"mx-[auto] sProjIcon"}
                              onClick={ appClickHandler }/>
    )

};

export default PeopleInSpaceApp;