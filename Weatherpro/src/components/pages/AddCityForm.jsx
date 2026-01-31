import { useContext,useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

function AddCityForm(){
    const {AddCity} = useContext(WeatherContext);

    const [name, setName] = useState("")
    const [temp, setTemp]= useState("")
    const[condition, setCondition] = useState("")
    const [humidity,setHumidity] = useState()


    function HandleSubmit(e){
        e.preventDefault()

        fetch("http://localhost:3000/cities",{
            method:"POST",
            header:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name:city,
                temperature:temperature,
                condition:condition,
                humidity:humidity
            })
        })
          .then(response=>response.json())
          .then(data=>AddCity(data))
    }


    
    return(
        <form onSubmit={HandleSubmit}>
            <input type="text" placeholder="City Name" onChange={e=>setCity (e.target.value)}/>
            <input type="text" placeholder="Temp"onChange={e=>setTemp(e.target.value)}/>
            <input type="text" placeholder="Condition" onChange={e=>setCondition(e.target.value)}/>
            <input type="text"  placeholder="Humidity" onChange={e=>setHumidity (e.target.value)}/>

            <button>Add City</button>
        </form>

    )
}

export default AddCityForm