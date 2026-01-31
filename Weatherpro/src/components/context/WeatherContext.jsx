import { createContext, useEffect, useState } from "react";

// Create context
export const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: loading state
  const [error, setError] = useState(null);     // Optional: error state

  // Fetch cities once when component mounts
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("http://localhost:5000/cities"); // json-server port
        if (!response.ok) throw new Error("Failed to fetch cities");
        const data = await response.json();
        setCities(data);
      } catch (err) {
        console.error("Error fetching cities:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  // Add a new city
  function addCity(newCity) {
    setCities([...cities, newCity]);
  }

  // Delete a city
  function deleteCity(id) {
    setCities(cities.filter((city) => city.id !== id));
  }

  // Update a city
  function updateCity(updatedCity) {
    setCities(
      cities.map((city) => (city.id === updatedCity.id ? updatedCity : city))
    );
  }

  return (
    <WeatherContext.Provider
      value={{ cities, addCity, deleteCity, updateCity, loading, error }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
