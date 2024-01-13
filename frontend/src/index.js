import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Link,
  // import {Link} from "react-router-dom"
  // put the above on every page that includes a link

} from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Volunteer from "./pages/volunteer";
import Adopt from "./pages/adopt";
import Animals from "./pages/animals";
import Contact from "./pages/contact";
// must write import for each page linked
// must create browser router for each page (below)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/volunteer",
    element: <Volunteer/>,
  },
  {
    path: "/adopt",
    element: <Adopt/>,
  },
  {
    path: "/animals",
    element: <Animals/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <header>
        <h1 className="store-name">Tail Tales Rescue</h1>
        <nav>
          <ul className="nav-links">
            <li><img className="wagging-tails" src="https://www.kindpng.com/picc/m/650-6502332_dog-tails-wagging-cartoon-hd-png-download.png" /></li>
            <li><a href="/">Home</a></li>
            <li><a href="/animals">Animals</a></li>
            <li><a href="/adopt">Adopt</a></li>
            <li><a href="/volunteer">Volunteer</a></li>
          </ul>
      </nav>
    </header>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
