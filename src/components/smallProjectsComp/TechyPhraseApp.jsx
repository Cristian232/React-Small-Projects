import {useEffect, useState} from "react";
import axios from "axios";


const TechyPhraseApp = () => {

    const [message, setMessage] = useState("");

    let name = "Techy Phrase"
    let description = "Displays a Techy Phrase"
    let link = "/techy"

    let techy = [name, link, description]



    useEffect(() => {

    axios.get("https://techy-api.vercel.app/api/text")
        .then(res => setMessage(res.data) )
        .catch(err => console.log(err))
    }, [])


    function appClickHandler(nameApp) {
    }

    return (
            <p className={"paragraph"}>{message}  | Your techy phrase for today :)</p>
    )

};

export default TechyPhraseApp;