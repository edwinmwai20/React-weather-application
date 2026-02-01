import { useContext } from "react";
import { WeatherContext } from "./context/WeatherContext";
import CityCard from "./CityCard";

function CityList() {
  const { cities, loading } = useContext(WeatherContext);

  if (loading) return <p style={{ textAlign: "center", fontSize: "1.2rem" }}>Loading cities...</p>;
  if (!cities || cities.length === 0) return <p style={{ textAlign: "center", fontSize: "1.2rem" }}>No cities found</p>;

  return (
    <div className="grid">
      {cities.map(city => <CityCard key={city.id} city={city} />)}
    </div>
  );
}

export default CityList;