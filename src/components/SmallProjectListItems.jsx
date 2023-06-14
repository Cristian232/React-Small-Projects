import WeatherApp from "./smallProjectsComp/WeatherApp";
import IpGeoApp from "./smallProjectsComp/IpGeoApp";
import PeopleInSpaceApp from "./smallProjectsComp/PeopleInSpaceApp";
import CatApiApp from "./smallProjectsComp/CatApiApp";
import CoffeeImgApp from "./smallProjectsComp/CoffeeImgApp";
import ChuckNorrisFactsApp from "./smallProjectsComp/ChuckNorrisFactsApp";
import MovieApiApp from "./smallProjectsComp/MovieApiApp";
import HoroscopeApp from "./smallProjectsComp/HoroscopeApp";
import {useContext} from "react";
import AppContext from "./AppContext";

const SmallProjectListItems = () => {

    const {setItems : setSmallProjectList} = useContext(AppContext)
    let iconSize = 34;

    return (
        <>
            <li className={"smallProjects-item"}>
                <WeatherApp setProjects={setSmallProjectList} size={iconSize}/>
            </li>
            <li className={"smallProjects-item"}>
                <IpGeoApp setProjects={setSmallProjectList} size={iconSize}/>
            </li>
            <li className={"smallProjects-item"}>
                <PeopleInSpaceApp setProjects={setSmallProjectList} size={iconSize}/>
            </li>
            <li className={"smallProjects-item"}>
                <CatApiApp setProjects={setSmallProjectList} size={iconSize}/>
            </li>
            <li className={"smallProjects-item"}>
                <CoffeeImgApp setProjects={setSmallProjectList} size={iconSize}/>
            </li>
            <li className={"smallProjects-item"}>
                <ChuckNorrisFactsApp setProjects={setSmallProjectList} size={iconSize}/>
            </li>
            <li className={"smallProjects-item"}>
                <MovieApiApp setProjects={setSmallProjectList} size={iconSize}/>
            </li>
            <li className={"smallProjects-item"}>
                <HoroscopeApp setProjects={setSmallProjectList} size={iconSize}/>
            </li>
        </>
    );
};

export default SmallProjectListItems;