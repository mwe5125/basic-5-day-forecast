import React, {useState} from 'react'
import './App.css';
import WeatherCard from './components/weatherCard';
import api from './API/api'
import CelciusToggle from './components/degreeToggle'

function App() {
  
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState([])
  const [type, setType] = useState(false)
  const [city, setCity] = useState('')

  const search = ( e ) => {

    if (e.key === "Enter") {
      fetch(`${api.base}forecast?q=${query}&units=imperial&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        const dailyData = result.list.filter(reading => {
          return reading.dt_txt.includes("18:00:00")
        }) 
        setCity(result.city.name)
        setWeather(dailyData)
        setQuery('')
        console.log(result)
      })
    }
  }

  const changeType = () => {
    setType(type => !type)
}

  //figure out how to launch to github


  return (
    <div className="App">
      <div className="header-container">
        <h3 className="city">{city}</h3>
        <p className="instructions">{!city ? 'Search location for 5 day forecast below' : null}</p>
        <input 
          type="text"
          className="search-box"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      <div>
        <CelciusToggle type={type} changeType={changeType}/>
      </div>
      <div className="flexbox-container">
        {
          weather.map((data) => {
            return <WeatherCard tempScale={type} weather={data} key={(data.main.temp + Math.random())}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
