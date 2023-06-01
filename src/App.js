import Header from "./components/Header";
import background from "./style/assets/lucian-Quf76bmG95A-unsplash.jpg";
import SmallProjects from "./components/SmallProjects";
import Content from "./components/Content";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${background})`, minHeight:"100vh", backgroundSize:"cover", backgroundPosition:"center"}}>
        <Header />
        <SmallProjects />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
