import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

function AddCityForm() {
    const { addCity } = useContext(WeatherContext);
    const [form, setForm] = useState({ name: "", temp: "", condition: "", humidity: "" });

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:5000/cities", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })
            .then(res => res.json())
            .then(data => addCity(data));
        setForm({ name: "", temp: "", condition: "", humidity: "" });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="City Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input placeholder="Temperature" value={form.temp} onChange={e => setForm({ ...form, temp: e.target.value })} />
            <input placeholder="Condition" value={form.condition} onChange={e => setForm({ ...form, condition: e.target.value })} />
            <input placeholder="Humidity" value={form.humidity} onChange={e => setForm({ ...form, humidity: e.target.value })} />
            <button>Add City</button>
        </form>
    );
}

export default AddCityForm;