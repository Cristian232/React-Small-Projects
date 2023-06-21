import axios from "axios";
import {useEffect, useState} from "react";
import codeMappings from "./weatherCodeMappings";
import StyledContentForWeather from "../../styledComp/StyledContentForWeather";

const Content = () => {

    const [weatherVars, setWeatherVars] = useState("");
    const [city, setCity] = useState("")

    useEffect(() => {
        const fetch = async () => {
            let responseIp = await axios.get("http://ip-api.com/json/?fields=message,city,lat,lon")
            setCity(responseIp.data.city);
            let response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${responseIp.data.lat}&longitude=${responseIp.data.lon}&hourly=temperature_2m,precipitation_probability,weathercode&current_weather=true`)
            setWeatherVars({
                temperature: response.data.current_weather.temperature,
                wind: response.data.current_weather.windspeed,
                weatherCode: response.data.current_weather.weathercode
            })
        }
        fetch()
    }, [])

    const weatherCodeConverter = (code) => {
        return codeMappings[code]
    }

    return (
        <StyledContentForWeather className={"content"}>
            <div className={"content-main-container"}>
                <h3 className={"subHeading"}>Weather info from
                    api.open-meteo.com<br/>
                    Location info from ip-api.com</h3>
                <p className={"pContent"}>Your current
                    weather {city.length && `in ${city}`}</p>
                <p className={"pContent"}>Temperature {weatherVars.wind && `is ${weatherVars.temperature} Celsius`}</p>
                <p className={"pContent"}>Wind {weatherVars.wind && `is ${weatherVars.wind} km/h`}</p>
                <p className={"pContent"}>Expected
                    conditions: <br/>{weatherVars.wind && ` ${weatherCodeConverter(weatherVars.weatherCode)}`}
                </p>
            </div>
        </StyledContentForWeather>
    );
};

export default Content;