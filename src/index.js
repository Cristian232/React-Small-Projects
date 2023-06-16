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

const router = createBrowserRouter([

        {
            element: <App/>,
            children: [
                {path: "contact", element: <ContentContact/>},
                {path: "about", element: <ContentAbout/>},
                {path: "/", element: <ContentHome/>},
                {path: "*", element: <ContentHome/>}
            ]
        }
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router}/>

);
