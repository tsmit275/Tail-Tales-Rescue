import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Adopt from "./pages/adopt";
import Volunteer from "./pages/volunteer";
import Animals from "./pages/animals";
import Pet from "./pages/pet";
import Contact from "./pages/contact";
import Admin from "./pages/admin";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="store-name">Tail Tales Rescue</h1>
        <nav>
          <ul>
            <li><img className="wagging-tails"
                     src="https://www.kindpng.com/picc/m/650-6502332_dog-tails-wagging-cartoon-hd-png-download.png"
                     alt="keep tails wagging"/></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/animals">Animals</Link></li>
            <li><Link to="/adopt">Adopt</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/Admin">Admin</Link></li>
            {/* <button className="btn btn-primary">Log In</button> */}
          </ul>
        </nav>
      </header>
      <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/adopt"} element={<Adopt />} />
      <Route path={"/volunteer"} element={<Volunteer />} />
      <Route path={"/animals"} element={<Animals />} />
      <Route path={"/animal/:id"} element={<Pet />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"/admin"} element={<Admin />} />
    </Routes>
    </div>
  );
}

export default App;
