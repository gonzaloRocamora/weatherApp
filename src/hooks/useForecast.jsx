import { useState } from "react"
import axios from 'axios'

const BASE_URL = 'https://www.metaweather.com/api/api/location';


const useForecast = () =>
{
    const [isError, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [forecast ,setForecast] = useState(null);
//we get the location data in order to pass it to submit request     
    const getWoeid = async(location) =>
    {
        const {data} = await axios(`${BASE_URL}/search`, {params: {query: location}});
        //console.log(data[0].woeid)

        if(!data || data.length === 0)
        {
            setError('location not found');
            setIsLoading(false);
            return undefined;
        } 
        return data;
    } 
    //we get the woeid passed in submit request from the response[0].woeid and store it in data
    const getForecast = async (woeid) =>
    {
        const {data} = await axios(`${BASE_URL}/${woeid}`);
        if(!data || data.length === 0){
            setError('something went wrong');
            setIsLoading(false);
            return;
        }
        return data;  
    }
    
  

    const submitRequest = async(location) =>
    {
        setIsLoading(true);

       const response = await getWoeid(location);
       if(!response || response.length === 0) return;
        
       const data = await getForecast(response[0].woeid);
        if(!data || data.length === 0) return;
        setForecast({data});
        setIsLoading(false);
    }

    return{
        isError,
        isLoading,
        forecast,
        submitRequest 
    }
    }
export default useForecast 