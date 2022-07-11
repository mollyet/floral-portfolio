import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
        {/* <Routes>
          <Route path="/about">
            {about()}
          </Route>
          <Route path="/portfolio">
            {portfolio()}
          </Route>
          <Route path="/">
            {home()}
          </Route>
        </Routes> */}
      </div>
      </Router>
  );
}

// const home = () => {
//   return <h2>Home</h2>
// }
// const portfolio = () => {
//   return <h2>Portfolio</h2>
// }
// const about = () => {
//   return <h2>i like cheese</h2>
// }
/***
 * function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */

export default App;
