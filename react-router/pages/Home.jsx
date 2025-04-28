import React, { useEffect, useState } from 'react'
import './index.css'

function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(0);
  const API_URL = import.meta.env.VITE_API_URL
  const API_KEY = import.meta.env.VITE_API_KEY

  useEffect(() => {
    const url = new URL(API_URL)

    url.searchParams.set('appid', API_KEY);

    fetch(url.toString())
    .then(res => res.json())
    .then(data => setWeather(data.main.feels_like))
    .catch(err => console.error(err))
  }, []);

  return(
    <>
    <div className="container">
    <h1>Home page</h1>
    <p>The place where every journey begins and every story feels just right</p><br/>
    <p>The weather in Bergen is currently: </p>
    <p>{weather}°C</p>
    </div>
    </>
  )
}

export default Home