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
import devices from "./style/breakpoints";
import Container from "./components/Container";
import {AppProvider} from "./components/AppContext";

const StyledApp = styled.div`

  display: grid;
  grid-template-rows: 50px auto 50px;
  min-height: 100svh;

  @media screen and  ${devices.sm} and ${devices.hr} {
    grid-template-rows: 75px auto 75px;
  }

`;


function App() {

    const [smallProjectsList, setSmallProjectsList] = useState([])

    return (
        // <BrowserRouter>
        //     <Routes >
        //         <Route path="/" /*For Production needs to be the homepage*/ element={<Home />}/>
        //         <Route path="about" /*For Production needs to be the homepage*/ element={<About />}/>
        //         <Route path="contact" /*For Production needs to be the homepage*/ element={<Contact />}/>
        //
        //
        <AppProvider>

            <Fragment>

                <GlobalStyle/>

                <StyledApp className="App">
                    <Header />
                    <Container />
                    <Footer/>
                </StyledApp>
            </Fragment>
        </AppProvider>
        //         </Routes>
        // </BrowserRouter>
    );
}

export default App;
