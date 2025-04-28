import { useState, useEffect } from 'react';

import React from 'react';
import Home from '../pages/Home.jsx'
import Blog from '../pages/Blog.jsx'
import Contact from '../pages/Contact.jsx'
import Products from '../pages/Products.jsx'
import ProductDetails from '../pages/ProductDetails.jsx';
import About from '../pages/About.jsx'

import './App.css'
// BrowserRouter listens to changes in the browsers adress bar and decides what react component to show based on the current path
// Routes is a container for all individual Route components, it groups all possible paths
// Route is a specific path + the component its mapped to, like /, or /home, or /about
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([null]);
  const [weather, setWeather] = useState(null);
  const WEATHER_URL = import.meta.env.VITE_WEATHER_API_URL
  const WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY
  const PRODUCTS_URL = import.meta.env.VITE_PRODUCTS_API_URL

  useEffect(() => {
    const url = new URL(WEATHER_URL)
    url.searchParams.set('appid', WEATHER_KEY);

      fetch(url.toString())
      .then(res => res.json())
      .then(data => setWeather(data.main.feels_like))
      .catch(err => console.error(err))

      fetch(PRODUCTS_URL)
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error(err))
  }, []);

  return (
    <BrowserRouter>
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li> 
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
    
    <Routes>
      <Route path="/" element={<Home weather={weather} />}/>
      <Route path="/products" element={<Products products={products}/>}/>
      <Route path="/products/:id" element={<ProductDetails />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App