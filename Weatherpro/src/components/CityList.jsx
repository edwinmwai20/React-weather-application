import { useContext } from "react";
import { WeatherContext } from "./context/WeatherContext";
import CityCard from "./CityCard";

function CityList() {
  const { cities } = useContext(WeatherContext);

  return (
    <div className="grid">
      {cities.map(city => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
}

export default CityList;
