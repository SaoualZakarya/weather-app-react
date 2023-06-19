import { useState } from "react";
import WeatherCard from "./WeatherCard";
import cityData from './lib/city.json'
const CityName =() => {
    const [city,setCity] = useState('')

    // Extract city names from the JSON data
    const cityNames = cityData.map((city) => city.name);
    const handleClick = (e)=>{
        e.preventDefault();
    }
    return ( 
    <div>
        <div className="mb-10 flex items-center flex-col">
            <form>
                <input 
                type="text" 
                value={city}
                placeholder="the city name here" 
                className="my-5 text-blue-900 w-[300px] md:w-[400px] outline-none px-4 py-2 rounded-xl bg-slate-200"
                onChange={(e)=>{setCity(e.target.value) }}
                list="citySuggestions"
                onClick={handleClick}
                />
                <datalist id="citySuggestions">
                    {cityNames.map((cityName, index) => (
                    <option key={index} value={cityName} />
                    ))}
                </datalist>
                
            </form>
        </div>
        <WeatherCard city={city}/>
    </div>
    );
}

export default CityName ;