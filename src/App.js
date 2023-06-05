import Header from "./components/Header";
import background from "./style/assets/lucian-Quf76bmG95A-unsplash.jpg";
import SmallProjects from "./components/SmallProjects";
import Content from "./components/Content";
import Footer from "./components/Footer";


function App() {
    return (
        <div className="App grid grid-rows-2 grid-rows-[8vh_92vh]" style={{
            backgroundImage: `url(${background})`,
            minHeight: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <Header/>
            <div className={"container-wrapper flex"}>
                <SmallProjects/>
                <Content/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
