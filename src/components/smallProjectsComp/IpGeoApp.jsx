
import {useEffect} from "react";
import {BsRouterFill} from "react-icons/bs";

const IpGeoApp = ({setProjects}) => {

    let name = "Ip Info"
    let description = "Displays the Ip info"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"

    let ipGeo = [name, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
         setProjects(smallProjectList => [...smallProjectList, ipGeo]);
        console.log("Fired once from ip on window load")
    },[])


    function appClickHandler(nameApp) {
        console.log("Clicked on Ip")
    }

    return(
    <BsRouterFill size={40}
                              className={"mx-[auto] sProjIcon"}
                              onClick={ appClickHandler }/>
    )

};

export default IpGeoApp;