import Header from "./components/Header";
import background from "./style/assets/lucian-Quf76bmG95A-unsplash.jpg";
import SmallProjects from "./components/SmallProjects";
import Content from "./components/Content";
import Footer from "./components/Footer";
import {Fragment, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/smallProjectsComp/Contact";
import GlobalStyle from "./style/globalStyles";
import styled from "styled-components";

const StyledApp = styled.div`

display: grid;
grid-template-rows: clamp(50px , 5vh , 150px) auto auto;

`;


function App() {

    const [smallProjectsList,setSmallProjectsList ] = useState([])

    return (
        // <BrowserRouter>
        //     <Routes >
        //         <Route path="/" /*For Production needs to be the homepage*/ element={<Home />}/>
        //         <Route path="about" /*For Production needs to be the homepage*/ element={<About />}/>
        //         <Route path="contact" /*For Production needs to be the homepage*/ element={<Contact />}/>
        //
        //
<Fragment>

        <GlobalStyle />

        <StyledApp className="App"/*grid grid-rows-3 grid-rows-[8vh_auto_auto]" style={{
            backgroundImage: `url(${background})`,
            minHeight: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }} */>
            <Header/>
            <div className={" "/*"container-wrapper flex"*/}>
                <SmallProjects
                    spList = {smallProjectsList}/>
                <Content/>
            </div>
            <Footer/>
        </StyledApp>
</Fragment>
        //         </Routes>
        // </BrowserRouter>
    );
}

export default App;
