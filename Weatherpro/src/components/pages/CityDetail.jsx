import { useContext } from "react";
import { useParams } from "react-router-dom";
import { WeatherContext } from "../context/WeatherContext";

function CityDetail() {
    const { id } = useParams();
    const { cities, loading } = useContext(WeatherContext);

    if (loading) return <div>Loading...</div>;
    const city = cities.find(c => String(c.id) === String(id));
    if (!city) return <div>City not found</div>;

    return (
        <div className="detail-page">
            <h1>{city.name} Weather Details</h1>
            <div className="detail-box">
                <p><strong>Temperature:</strong> {city.temp}°C</p>
                <p><strong>Condition:</strong> {city.condition}</p>
                <p><strong>Humidity:</strong> {city.humidity}%</p>
            </div>
        </div>
    );
}

export default CityDetail; 
