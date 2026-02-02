import { Link } from "react-router-dom";

function CityCard({ city }) {
    return (
        <div className="card">
            
            <h3>{city.name}</h3>
            <p>Temp: {city.temp}°C</p>
            <p>Condition: {city.condition}</p>

            <Link to={`/city/${city.id}`}>View Details</Link>

        </div>
    );
}

export default CityCard;

