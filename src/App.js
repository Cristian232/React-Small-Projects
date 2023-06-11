import Header from "./components/Header";
import background from "./style/assets/lucian-Quf76bmG95A-unsplash.jpg";
import SmallProjects from "./components/SmallProjects";
import Content from "./components/Content";
import Footer from "./components/Footer";
import {useState} from "react";


function App() {

    const [smallProjectsList,setSmallProjectsList ] = useState([])

    return (
        <div className="App grid grid-rows-3 grid-rows-[8vh_auto_auto]" style={{
            backgroundImage: `url(${background})`,
            minHeight: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <Header/>
            <div className={"container-wrapper flex"}>
                <SmallProjects
                    spList = {smallProjectsList}/>
                <Content/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
