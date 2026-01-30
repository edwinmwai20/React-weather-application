import { Link } from "react-router-dom";

function CityCard({city}){
    return(
        <div className="card">
            <h3>{city.name}</h3>
            <p>{city.temp}</p>
            <P>{city.condition}</P>
            {/* When I click View, it will take me to the page for THIS city. */}
            <Link to={"/city/" +city.id}>View Details</Link>
        </div>
    )
}

export default CityCard

