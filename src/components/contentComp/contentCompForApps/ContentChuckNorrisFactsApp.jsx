import StyledContent from "../../styledComp/StyledContent";
import {useEffect, useState} from "react";
import axios from "axios";

const Content = () => {

    const [facts, setFacts] = useState([]);

    useEffect(() => {
        setFacts([])
        const fetch = async () => {
            let response = await axios.get("https://api.chucknorris.io/jokes/random?category=dev")
            setFacts(prev => [...prev, response.data.value])
            response = await axios.get("https://api.chucknorris.io/jokes/random?category=dev")
            setFacts(prev => [...prev, response.data.value])
            response = await axios.get("https://api.chucknorris.io/jokes/random?category=travel")
            setFacts(prev => [...prev, response.data.value])
            response = await axios.get("https://api.chucknorris.io/jokes/random?category=movie")
            setFacts(prev => [...prev, response.data.value])
            response = await axios.get("https://api.chucknorris.io/jokes/random?category=sport")
            setFacts(prev => [...prev, response.data.value])
        }
        fetch()
    }, [])

    return (<StyledContent className={"content"}>
        <div className={"content-main-container"}>
            <h1 className={"heading"}>Just facts! </h1>
            {facts.length && facts.map(fact => {
                return <h3 className={"subHeading"} key={fact}>{fact}</h3>
            })}
        </div>
    </StyledContent>);
};

export default Content;