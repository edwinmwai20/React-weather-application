import { Children, createContext, useContext,useEffect,useState} from "react";


export const WeatherContext = createContext()

function WeatherProvider({Children}){

    const[cities,setCities] =useState([])


    useEffect(()=>{
        fetch("")
        .then(response=>response.json())
        .then(data=>setCities(data))
    }) 

// Posting a new city
    function AddCity(newCity){
        setCities([...cities,newCity])
    }

//Deleting a city

    function DeleteCity(id){
        setCities(cities.filter(city=>city.id !==id))
    }

// Updateing the city
    
    function  updateCity(updateCity){
        setCities(
            cities.map(city=>city.id === updateCity.id ? updateCity:city)
        )
    }

    return(
    <WeatherContext.Provider value={{cities,AddCity,DeleteCity,updateCity}}>
        {Children}
    </WeatherContext.Provider>
    )
}

export default WeatherProvider