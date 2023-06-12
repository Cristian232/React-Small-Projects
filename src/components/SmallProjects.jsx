
import WeatherApp from "./smallProjectsComp/WeatherApp";
import {useEffect, useState} from "react";
import IpGeoApp from "./smallProjectsComp/IpGeoApp";
import PeopleInSpaceApp from "./smallProjectsComp/PeopleInSpaceApp";
import HoroscopeApp from "./smallProjectsComp/HoroscopeApp";
import MovieApiApp from "./smallProjectsComp/MovieApiApp";
import ChuckNorrisFactsApp from "./smallProjectsComp/ChuckNorrisFactsApp";
import CoffeeImgApp from "./smallProjectsComp/CoffeeImgApp";
import CatApiApp from "./smallProjectsComp/CatApiApp";



const SmallProjects = ({smallProjectsList : spList, setSmallProjectsList : setSpList }) => {

    let [smallProjectList, setSmallProjectList] = useState([]);

    useEffect(() => {
        console.log(smallProjectList.length)
        console.log("Updated on use effect from smallProjects")
        setSpList(...spList, smallProjectList)
    },[smallProjectList])

    return (
        <div
            className={"smallProjects " /*smallProjectsCacheCssTest w-[75px] ml-[0.5vw] mx-[auto] h-[92vh] flex items-center justify-items-center row-span-1"} id={"smallProjectsId */}>
            <div className={"smallProjects-wrapper w-[80%] mx-[auto]"}>
                <ul className={"smallProjects-list flex-col space-y-5  "}>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <WeatherApp setProjects={setSmallProjectList}/>
                    </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <IpGeoApp setProjects={setSmallProjectList}/>
                    </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <PeopleInSpaceApp setProjects={setSmallProjectList}/>
                    </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <CatApiApp setProjects={setSmallProjectList}/>
                    </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <CoffeeImgApp setProjects={setSmallProjectList}/>
                    </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <ChuckNorrisFactsApp setProjects={setSmallProjectList}/>
                    </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <MovieApiApp setProjects={setSmallProjectList}/>
                    </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <HoroscopeApp setProjects={setSmallProjectList}/>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SmallProjects;