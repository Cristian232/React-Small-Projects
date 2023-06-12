import React from 'react';
import ReactDOM from 'react-dom/client';
// import './style/index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="React-Small-Projects" element={ <App /> } />
        </Routes>
    </BrowserRouter>
);
