import React from 'react';

export default function Forecast({dataForecast}) {
    
    const {data} = dataForecast
    console.log(data)
    return <div>
        <h1>{data.title}</h1>
    </div>;
}
