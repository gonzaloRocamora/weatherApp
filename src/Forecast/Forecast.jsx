import React from 'react';
import './stylesFore.css'

export default function Forecast({dataForecast}) {
    
    const {data} = dataForecast
    console.log(data)
    return <div className='boxFore'>
        <h1>{data.title}</h1>
        <h4>{data.consolidated_weather[0].applicable_date}</h4>
        <h3><span>Temperatura maxima:</span>{data.consolidated_weather[0].max_temp}</h3>
        <h3><span>Temperatura minima:</span>{data.consolidated_weather[0].min_temp}</h3>
    </div>;
}
