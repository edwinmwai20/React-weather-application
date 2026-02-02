import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/cities")
      .then(res => res.json())
      .then(data => {
        setCities(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading cities:", err);
        setLoading(false);
      });
  }, []);

  function addCity(newCity) {
    setCities([...cities, newCity]);
  }

  return (
    <WeatherContext.Provider value={{ cities, addCity, loading }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
