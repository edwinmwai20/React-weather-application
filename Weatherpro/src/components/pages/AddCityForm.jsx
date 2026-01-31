import { useContext,useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

function AddCityForm(){
    const {addCity} = useContext(WeatherContext);

    const [name, setName] = useState("")
    const [temperature, setTemp]= useState("")
    const[condition, setCondition] = useState("")
    const [humidity,setHumidity] = useState()


    function HandleSubmit(e){
        e.preventDefault()

        fetch("http://localhost:5000/cities",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name:name,
                temp:temperature,
                condition:condition,
                humidity:humidity
            })
        })
          .then(response=>response.json())
          .then(data=>addCity(data))
    }

    
    return(
        <form onSubmit={HandleSubmit}>
            <input type="text" placeholder="City Name" onChange={e=>setName (e.target.value)}/>
            <input type="text" placeholder="Temp"onChange={e=>setTemp(e.target.value)}/>
            <input type="text" placeholder="Condition" onChange={e=>setCondition(e.target.value)}/>
            <input type="text"  placeholder="Humidity" onChange={e=>setHumidity (e.target.value)}/>

            <button>Add City</button>
        </form>

    )
}

export default AddCityForm