import Header from "./components/Header";
import Footer from "./components/Footer";
import React, {Fragment} from "react";
import GlobalStyle from "./style/globalStyles";
import Container from "./components/Container";
import {AppProvider} from "./components/AppContext";
import StyledApp from "./components/styledComp/StyledApp";

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
