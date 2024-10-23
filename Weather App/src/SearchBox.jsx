import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "77cfb4562456f8a95741b208ba764720";
  
    let getWeatherInfo = async() => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            
            if (!response.ok) {
                // If the response is not OK, throw an error with the status
                throw new Error("City not found");
            }
            
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            setError(true); // Set error state if an error occurs
            throw err; // Rethrow the error if needed
        }
    };
    

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async(evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setError(false); // Reset error state before making the request
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err) {
            // Error handling logic can remain here
        }
    };

    return(
        <div className='SeachBox'>
            <form onSubmit={handleSubmit}>
            <TextField 
            id="city" 
            label="City Name"
            variant="outlined"
             required
            value={city} 
            onChange={handleChange} />
            <br></br> <br></br>
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p>No such place exists</p>}
            </form>
        </div>
    );
}