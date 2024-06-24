// "cardata.json" => This is a manual typed Json file containing all data about all car is carvilla website.
// import logo from "./logo.svg";
import "./App.css";

import { Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import CarVilla from "./Pages/Carvilla";
import Services from "./Pages/Services";
import About_us from "./Pages/About_us";
import Magazine from "./Pages/Magazine";
import Contact from "./Pages/Contact";
import Newcarview from "./Pages/Newcarview";
import Magzineview from "./Pages/Magzineview";
import Errorpage from "./Pages/Errorpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/carvilla" Component={CarVilla} />
        <Route exact path="/services" Component={Services} />
        <Route exact path="/magazine" Component={Magazine} />
        <Route exact path="/about_us" Component={About_us} />
        <Route exact path="/contact" Component={Contact} />
        <Route path="/car/:carid" Component={Newcarview} />
        <Route path="/magzine/:magzine_id" Component={Magzineview} />
        <Route path="*" Component={Errorpage} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
