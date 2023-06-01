import {useEffect, useState} from "react";

const GithubUsers = () => {
    const [state, setState] = useState([]);

    const URL = "https://api.github.com/users"

    const getUsers = async () => {
        // const response = await fetch(URL);
        // const data = await response.json();
        // console.log("here is the data:" + data)
        // setState(data)
    }

    useEffect(() => {
        getUsers()
    },[])

    return (
        <div className={"GithubUsers bg-emerald-500 w-52 h-52"}>
            <p>GithubUsers {state.length}</p>
            <ul>
                {state.map(user => {
                    const {id, login, avatar_url, html_url} = user;
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={""}/>
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url} rel="noreferrer" target={"_blank"}>profile</a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default GithubUsers;