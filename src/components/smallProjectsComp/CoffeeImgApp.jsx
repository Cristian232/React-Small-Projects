
import {useEffect} from "react";
import {BiCoffeeTogo} from "react-icons/bi";

const CoffeeImgApp = ({setProjects,size}) => {

    let name = "Coffee Info"
    let description = "Displays the Coffee info"
    let contentLine1 = "Nothing"
    let contentLine2 = "Nothing"
    let contentLine3 = "Nothing"
    let contentLine4 = "Nothing"

    let coffee = [name, description, contentLine1, contentLine2, contentLine3, contentLine4]

    useEffect(() => {
         setProjects(smallProjectList => [...smallProjectList, coffee]);
        console.log("Fired once from CoffeeImgApp")
    },[])


    function appClickHandler(nameApp) {
        console.log("Clicked on CoffeeImg")
    }

    return(
    <BiCoffeeTogo size={size}
                              className={"mx-[auto] sProjIcon"}
                              onClick={ appClickHandler }/>
    )

};

export default CoffeeImgApp;