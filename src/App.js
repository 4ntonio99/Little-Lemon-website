import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from "./Pages/Home/Home";
import Booking from "./Pages/Booking/Booking";

function App() {

  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Booking/" element={<Booking />}/>
        </Routes>
        <Footer/>
    </Router>

  );

}

export default App;
