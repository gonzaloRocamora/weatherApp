import {React, Fragment} from 'react'
import Form from './components/form/Form'
import Header from './components/header/Header'
import useForecast from './hooks/useForecast.jsx'
import Loader from './components/loader/Loader'
import Erorr from './components/error/Erorr'
import Forecast from './Forecast/Forecast'


const App = () =>
{
   const {isError, isLoading, forecast, submitRequest} = useForecast();
    const submit = (value) =>
    {
        submitRequest(value);
    }

    return(
        <Fragment>
            <Header />
            {!forecast && (
                <div className='box'>
                {!isLoading && <Form submitSearch={submit}/>}
                {isLoading && <Loader />}
                {isError && <Erorr />}
                         
            </div>
            ) }
            
            {forecast && <Forecast dataForecast={forecast}/>}
        </Fragment>
    )
}
export default App;