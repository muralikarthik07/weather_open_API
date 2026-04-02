import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import "./weatherApp.css";
import { useState } from "react";

export default function weatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 25.05,
        tempMin: 24.44,
        tempMax: 25.56,
        humidity: 78,
        feelsLike: 24.84,
        weather: 'Clear sky'
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div className="weatherApp">
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    );
}