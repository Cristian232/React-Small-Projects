import StyledContent from "../../styledComp/StyledContent";
import {useEffect, useState} from "react";
import axios from "axios";

const Content = () => {

    const [numberOfPpl, setNumberOfPpl] = useState(0);
    const [astrosNamesAndCraft, setAstrosNamesAndCraft] = useState([]);

    useEffect(() => {

        setAstrosNamesAndCraft([])
        const fetchData = async () => {
            const {data} = await axios.get("http://api.open-notify.org/astros.json");
            setNumberOfPpl(data["number"]);
            data["people"].map((people) => {
                setAstrosNamesAndCraft(prevState => [...prevState, {
                    name: people.name, craft: people.craft
                }])
            })
        }
        fetchData()
    }, [])



    return (<StyledContent className={"content"}>
        <div className={"content-main-container"}>
            <h1 className={"heading"}>
                How Many People Are In Space Right Now
                ? &#129300; &#x1F680; &#x1F6F0;&#xFE0F; &#x1F6F8;
            </h1>
            <p className={"pContent"}>There are
                currently {numberOfPpl} people out there &#x1F913; and they
                are:
            </p>


            {astrosNamesAndCraft.length &&
                astrosNamesAndCraft.map(({name,craft}) => {
                    return <p className={"pContent"} key={name}>{name} on
                        the {craft}</p>
                })}


        </div>
    </StyledContent>);
};

export default Content;