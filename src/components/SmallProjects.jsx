
import WeatherApp from "./smallProjectsComp/WeatherApp";
import {useEffect, useState} from "react";
import IpGeoApp from "./smallProjectsComp/IpGeoApp";
import PeopleInSpaceApp from "./smallProjectsComp/PeopleInSpaceApp";
import HoroscopeApp from "./smallProjectsComp/HoroscopeApp";
import MovieApiApp from "./smallProjectsComp/MovieApiApp";
import ChuckNorrisFactsApp from "./smallProjectsComp/ChuckNorrisFactsApp";
import CoffeeImgApp from "./smallProjectsComp/CoffeeImgApp";
import CatApiApp from "./smallProjectsComp/CatApiApp";
import styled from "styled-components";

const StyledSmallProjects = styled.div`
  
  .smallProjects-wrapper {
    height: 100%;
  }
  
  .smallProjects-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  
  .smallProjects-item {
    border: 1px outset rgba(8, 139, 213, 0.5);
    box-shadow: 1px 1px 10px rgba(30, 29, 29, 0.4);
    border-radius: 20px;
    padding: 10px;
  }

  .smallProjects-item:hover {
    border: 1px outset rgba(8, 139, 213, 0.5);
    box-shadow: 2px 2px 20px rgba(30, 29, 29, 0.88);
  }
  
`;


const SmallProjects = ({smallProjectsList : spList, setSmallProjectsList : setSpList }) => {

    let [smallProjectList, setSmallProjectList] = useState([]);

    useEffect(() => {
        console.log(smallProjectList.length)
        console.log("Updated on use effect from smallProjects")
        setSpList(...spList, smallProjectList)
    },[smallProjectList])

    let iconSize = 34;
    return (
        <StyledSmallProjects
            className={"smallProjects " /*smallProjectsCacheCssTest w-[75px] ml-[0.5vw] mx-[auto] h-[92vh] flex items-center justify-items-center row-span-1"} id={"smallProjectsId */}>
            <div className={"smallProjects-wrapper w-[80%] mx-[auto]"}>
                <ul className={"smallProjects-list flex-col space-y-5  "}>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <WeatherApp setProjects={setSmallProjectList} size={iconSize}/>
                    </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <IpGeoApp setProjects={setSmallProjectList} size={iconSize}/>
                    </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <PeopleInSpaceApp setProjects={setSmallProjectList} size={iconSize}/>
                    </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <CatApiApp setProjects={setSmallProjectList} size={iconSize}/>
                    </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <CoffeeImgApp setProjects={setSmallProjectList} size={iconSize}/>
                    </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <ChuckNorrisFactsApp setProjects={setSmallProjectList} size={iconSize}/>
                    </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <MovieApiApp setProjects={setSmallProjectList} size={iconSize}/>
                    </li>
                    <li className={"smallProjects-item block p-[5px] py-[10px] flex items-center rounded-[25px]"}>
                        <HoroscopeApp setProjects={setSmallProjectList} size={iconSize}/>
                    </li>
                </ul>
            </div>
        </StyledSmallProjects>
    );
};

export default SmallProjects;