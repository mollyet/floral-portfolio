import React from "react";

import About from "./components/about";
import Portfolio from "./components/portfolio";
import Home from "./components/home";


// import logo from './logo.svg';
import "./App.css";

const App = () => {
  return (
    <nav>
      <Home />
      <About />
      <Portfolio />
    </nav>
  );
}
// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/portfolio">Portfolio</Link>
//             </li>
//           </ul>
//         </nav>
//         {/* <Routes>
//           <Route path="/about">
//             {about()}
//           </Route>
//           <Route path="/portfolio">
//             {portfolio()}
//           </Route>
//           <Route path="/">
//             {home()}
//           </Route>
//         </Routes> */}
//       </div>
//     </Router>
//   );
// }

export default App;
