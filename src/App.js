import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header'
import SearchBox from './Components/Searbox'
import Results from './Components/Results'

function App() {
  const [searchText, setSearchText]= useState ("")
  const [weather, setWeather]= useState([])
  const [locationKey, setLocationKey]=useState([])

  useEffect(() => {
    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=wPaCoMzGtvltkHAJuS6QoZMuvTRPnS7Y`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
     setWeather(data.DailyForecasts)
      })
    
    }, [locationKey]);

  const getLocation= () => {
    const url= `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=wPaCoMzGtvltkHAJuS6QoZMuvTRPnS7Y&q=${searchText}&offset=0`
    fetch(url)
    .then(res=>res.json())
    .then(data =>{
      console.log(data)
     setLocationKey(data[0].Key)
     setSearchText("")

    
   }) 
  }

  return (
    <div >
     <Header></Header>
     <SearchBox searchText= {searchText} setSearchText= {setSearchText} getLocation= {getLocation}></SearchBox>
    <Results weather= {weather}></Results>
    </div>
  );
}

export default App;
