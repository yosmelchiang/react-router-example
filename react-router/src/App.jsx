import React from 'react';
import Home from '../pages/Home.jsx'
import Blog from '../pages/Blog.jsx'
import Contact from '../pages/Contact.jsx'
import Products from '../pages/Products.jsx'
import About from '../pages/About.jsx'

import './App.css'
// BrowserRouter listens to changes in the browsers adress bar and decides what react component to show based on the current path
// Routes is a container for all individual Route components, it groups all possible paths
// Route is a specific path + the component its mapped to, like /, or /home, or /about
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li> 
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App