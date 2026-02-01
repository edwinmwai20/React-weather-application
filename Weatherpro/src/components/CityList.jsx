import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import CityCard from "./CityCard";

function CityList() {
  const { cities } = useContext(WeatherContext);
//if data is still loading or fetch failed, show message

if(!cities || cities.length === 0){
return <p>Loading weather data...</p>;
}
return (
    <div className="grid">
        {cities.map(city => (
            <CityCard key={city.id}
            city={city}/>
        ))}
    </div>
)
}


export default CityList;
