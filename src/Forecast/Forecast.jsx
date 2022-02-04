import React from 'react';

export default function Forecast({dataForecast}) {
    
    const {data} = dataForecast
    console.log(data.consolidated_weather[0].humidity)
    return <div>Forecast</div>;
}
