import StyledContent from "../../styledComp/StyledContent";
import {useEffect, useState} from "react";
import {
    browserName,
    browserVersion,
    deviceDetect,
    deviceType, osName, osVersion
} from "react-device-detect"
import axios from "axios";

const Content = () => {

    const [state, setState] = useState([])

    useEffect(() => {
        setState([])

        const fetch = async () => {
            let response = await axios.get("http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query")
            setState(response.data)
            console.log(response.data)

        }
        fetch()

    },[])

    return (
        <StyledContent className={"content"}>
            <div className={"content-main-container"}>
                <h1 className={"heading"}>Ip info from ip-api.com</h1>
                <p className={"pContent"}>Your ip is {state.query} from isp {state.isp}</p>
                <p className={"pContent"}>You are in {state.continent} / {state.country} more precisely in {state.city}</p>
                <p className={"pContent"}>Your currency is {state.currency} {state.mobile && ", using a mobile network yes "} {state.proxy && "and proxy"} </p>
                <p className={"pContent"}>Browser is {browserName} version {browserVersion} on os {osName} version {osVersion} with cookies {navigator.cookieEnabled && "enabled" || "disabled"}</p>
            </div>
        </StyledContent>
    );
};

export default Content;