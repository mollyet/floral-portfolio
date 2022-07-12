import React from "react";
import {Outlet, Link } from "react-router-dom"

//components
import About from "./components/about";
import Portfolio from "./components/portfolio";



//styling
import "./App.css";


//the app itself


const App = () => {
 
  return (
    <div>
      <h1>does it work?</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App;
