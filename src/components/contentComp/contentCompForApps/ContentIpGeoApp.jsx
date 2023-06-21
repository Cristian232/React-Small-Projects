import StyledContent from "../../styledComp/StyledContent";
import {useEffect, useState} from "react";
import {
    browserName, browserVersion, osName, osVersion
} from "react-device-detect"
import axios from "axios";
import StyledSpan from "../../styledComp/StyledSpan";

const Content = () => {

    const [state, setState] = useState([])

    useEffect(() => {
        setState([])
        const fetch = async () => {
            let response = await axios.get("http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query")
            setState(response.data)
        }
        fetch()
    }, [])

    return (<StyledContent className={"content"}>
        <div className={"content-main-container"}>
            <h1 className={"heading"}>Ip info from ip-api.com</h1>
            <p className={"pContent"}>
                Your ip is <StyledSpan>{state.query}</StyledSpan> from isp <StyledSpan>{state.isp}</StyledSpan>
            </p>
            <p className={"pContent"}>You are in <StyledSpan>{state.continent} / {state.country}</StyledSpan> more precisely in <StyledSpan>{state.city}</StyledSpan>
            </p>
            <p className={"pContent"}>Your currency is <StyledSpan>{state.currency}</StyledSpan>
                {state.mobile && ", using a "}
                <StyledSpan>{state.mobile && "mobile network yes"}</StyledSpan>
                {state.proxy && "and "}
                <StyledSpan>{state.proxy && "proxy"}</StyledSpan>
            </p>
            <p className={"pContent"}>
                Browser is <StyledSpan>{browserName}</StyledSpan> version <StyledSpan>{browserVersion}</StyledSpan> on os <StyledSpan>{osName}</StyledSpan> version <StyledSpan>{osVersion}</StyledSpan> with <StyledSpan> cookies </StyledSpan> {navigator.cookieEnabled && (
                    <StyledSpan>enabled</StyledSpan>) || (
                    <StyledSpan>disabled</StyledSpan>)}</p>
        </div>
    </StyledContent>);
};

export default Content;