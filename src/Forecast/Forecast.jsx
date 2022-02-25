import React from "react";
import "./stylesFore.css";
import moment from "moment";

export default function Forecast({ dataForecast }) {
  const URL  = 'https://www.metaweather.com/static'
  const { data } = dataForecast;
  console.log({ data });
  const holeWeek = data.consolidated_weather.slice(1);
  console.log(holeWeek);
  

  return (
    <div className="boxFore">
      <div className="actualTemp">
        <h1>{data.title}</h1>
        <h4>{data.consolidated_weather[0].applicable_date}</h4>
        <h3>
          <span>Actual Temp:</span>
          {Math.floor(data.consolidated_weather[0].the_temp)}
        </h3>

        <h3>
          <span>Max Temp:</span>
          {Math.floor(data.consolidated_weather[0].max_temp)}
        </h3>
        <h3>
          <span>Min Temp:</span>
          {Math.floor(data.consolidated_weather[0].min_temp)}
        </h3>
      </div>
      <div className="upcomingDays">
        <span>Temp for the week:</span>
        {holeWeek.map((item) => {
          return (
            <div key={item.id}>
              <span>{moment(item.applicable_date).format("dddd")}:</span>
              <span>{item.weather_state_name}</span>
              <img
                src={`${URL}/img/weather/${item.weather_state_abbr}.svg`}
                alt={item.weather_state_abbr}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
