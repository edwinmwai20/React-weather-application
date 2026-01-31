import { useContext } from "react"; // Import useContext to access context
import { useParams } from "react-router-dom"; // Import useParams to get URL parameters
import { WeatherContext } from "../context/WeatherContext"; // Import WeatherContext to access weather data

function CityDetail() {
    const { id } = useParams(); //grabs the ID from the URL
    const { cities, loading } = useContext(WeatherContext); // Access cities from context

    // Show loading message while fetching
    if (loading) {
        return <div>Loading...</div>;
    }

    // If no cities loaded
    if (!cities || cities.length === 0) {
        return <div>No cities available</div>;
    }

    // Find the city with the matching ID
    const city = cities.find(c => String(c.id) === String(id));

    // If city is not found, display a message with debug info
    if (!city) {
        return (
            <div>
                <p>City not found</p>
                <p>Looking for ID: {id}</p>
                <p>Available IDs: {cities.map(c => c.id).join(', ')}</p>
            </div>
        );
    }
    return (
        <div>
            <h1>{city.name} Details</h1>
            <p><strong>Temperature:</strong> {city.temp}°C</p>
            <p><strong>Weather:</strong> {city.condition}</p>
            <p><strong>Humidity:</strong> {city.humidity}%</p>
        </div>
    );
}

export default CityDetail; 
