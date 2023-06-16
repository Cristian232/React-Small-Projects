import Header from "./components/Header";
import Footer from "./components/Footer";
import React, {Fragment} from "react";


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

    return (
        <AppProvider>
            <Fragment>
                <GlobalStyle/>
                <StyledApp className="App">
                    <Header/>
                    <Container/>
                    <Footer/>
                </StyledApp>
            </Fragment>
        </AppProvider>
    );
}

export default App;
