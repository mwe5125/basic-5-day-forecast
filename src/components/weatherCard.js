import React from 'react'
import moment from 'moment'



const WeatherCard = (props) => {
    let newDate = new Date()
    const weekday = props.weather.dt * 1000
    newDate.setTime(weekday)

    const imgURL = `owf owf-${props.weather.weather[0].id} owf-5x`
    const temp = !props.tempScale ? Math.round(props.weather.main.temp) : Math.round((props.weather.main.temp - 32) * 5/9)
    const tempDegree = !props.tempScale ? '°F' : '°C'
    
    return (
        <div className="card">
            <p className="card__day-title">{moment(newDate).format('dddd')}</p>
            <p className="card__day-time">{moment(newDate).format('MMM Do, h:mm a')}</p>
            <i className={imgURL}></i>
            <p className="temp-main">{temp}{tempDegree}</p>
            <p className="weather-description">
                {props.weather.weather[0].description}
            </p>
        </div>
    )
}

export default WeatherCard