
import WeatherApp from "./smallProjectsComp/WeatherApp";
import {useContext, useEffect, useState} from "react";
import IpGeoApp from "./smallProjectsComp/IpGeoApp";
import PeopleInSpaceApp from "./smallProjectsComp/PeopleInSpaceApp";
import HoroscopeApp from "./smallProjectsComp/HoroscopeApp";
import MovieApiApp from "./smallProjectsComp/MovieApiApp";
import ChuckNorrisFactsApp from "./smallProjectsComp/ChuckNorrisFactsApp";
import CoffeeImgApp from "./smallProjectsComp/CoffeeImgApp";
import CatApiApp from "./smallProjectsComp/CatApiApp";
import styled from "styled-components";
import AppContext from "./AppContext";
import SmallProjectListItems from "./SmallProjectListItems";

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
    display: contents;
    //padding: 10px;
    border: none;
    box-shadow: none;
  }

  .smallProjects-item a {
    display: contents;
    //padding: 10px;
    border: none;
    box-shadow: none;

  }

  .smallProjects-list li a svg {
    display: block;
    padding: 10px;
    border-radius: 20px;
    border: 1px outset rgba(8, 139, 213, 0.5);
    box-shadow: 2px 5px 15px rgb(30 29 29);
  }

  .smallProjects-list li a svg:hover {
    border: 1px outset rgba(8, 139, 213, 0.5);
    box-shadow: 1px 1px 2vh 0.5vh hsl(40deg 39% 88%);
  }
  

`;


const SmallProjects = () => {


    // useEffect(() => {
    //     console.log(smallProjectList.length)
    //     console.log("Updated on use effect from smallProjects")
    //     setSpList(...spList, smallProjectList)
    // },[smallProjectList])


    return (
        <StyledSmallProjects
            className={"smallProjects"}>
            <div className={"smallProjects-wrapper"}>
                <ul className={"smallProjects-list"}>
                    <SmallProjectListItems />
                </ul>
            </div>
        </StyledSmallProjects>
    );
};

export default SmallProjects;