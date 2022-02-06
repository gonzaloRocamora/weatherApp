import React, { useState } from "react";
import './stylesForm.css';

export default function Form({submitSearch}) {
  const [city, setCity] = useState('');
  
  const submit = (e) =>
  {
      e.preventDefault();
    
      if(!city || city === ''){
        return undefined;
        }
        submitSearch(city);
  }
  return (
    <div >
      <form onSubmit={submit} className="search">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
      ></input>
      <button
      type='submit'
      onClick={submit}
      >
        Search
      </button>

      </form>
      
    </div>
  );
}
