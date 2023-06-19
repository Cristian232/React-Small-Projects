import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import ContentContact
    from "./components/contentComp/contentCompForNavigationButtons/ContentContact";
import ContentAbout
    from "./components/contentComp/contentCompForNavigationButtons/ContentAbout";
import ContentHome
    from "./components/contentComp/contentCompForNavigationButtons/ContentHome";
import ContentWeatherApp
    from "./components/contentComp/contentCompForApps/ContentWeatherApp";
import ContentPeopleInSpaceApp
    from "./components/contentComp/contentCompForApps/ContentPeopleInSpaceApp";
import ContentChuckNorrisFactsApp
    from "./components/contentComp/contentCompForApps/ContentChuckNorrisFactsApp";
import ContentIpGeoApp
    from "./components/contentComp/contentCompForApps/ContentIpGeoApp";
import ContentCoffeeImgApp
    from "./components/contentComp/contentCompForApps/ContentCoffeeImgApp";

const router = createBrowserRouter([

        {
            element: <App/>,
            children: [
                {path: "contact", element: <ContentContact/>},
                {path: "about", element: <ContentAbout/>},
                {path: "/", element: <ContentHome/>},
                {path: "*", element: <ContentHome/>},
                {path: "weather", element: <ContentWeatherApp/>},
                {path: "ppl-in-space", element: <ContentPeopleInSpaceApp/>},
                {path: "chucknorrisfacts", element: <ContentChuckNorrisFactsApp/>},
                {path: "ip", element: <ContentIpGeoApp/>},
                {path: "coffee", element: <ContentCoffeeImgApp/>}
            ]
        }
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router}/>

);
