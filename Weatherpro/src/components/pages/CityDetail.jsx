import { useContext } from "react"; // Import useContext to access context
import { useParams } from "react-router-dom"; // Import useParams to get URL parameters
import {WeatherContext} from "../../context/WeatherContext"; // Import WeatherContext to access weather data

function CityDetail() {
    const { cityId } = useParams(); //grabs the ID from the URL
    const { cities } = useContext(WeatherContext); // Access cities from context

    // Find the city with the matching ID
    const city = cities.find(city => city.id.toString() === cityId); // Ensure both are strings for comparison

    // If city is not found, display a message
    if (!city) {
        return <div>City not found</div>;
    }
    return ( 
            <div>  
            <h1>{city.name} Details</h1> // Display city details
            <p><strong>Temperature:</strong> {city.temperature}°C</p> // Display temperature
            <p><strong>Weather:</strong> {city.weather}</p>         // Display weather condition
            <p><strong>Humidity:</strong> {city.humidity}%</p>       // Display humidity    
            
        </div>
    );
}

export default CityDetail; 
