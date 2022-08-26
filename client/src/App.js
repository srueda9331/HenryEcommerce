import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import image1 from "./assets/images/slide1.jpeg";
import image2 from "./assets/images/slide2.png";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import BackgroundSlider from "react-background-slider";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import CardDetailContainer from "./components/CardDetailContainer/CardDetailContainer";
import Login from "./components/Login/Login";
// import { setAuthToken } from "./components/setAuthToken";
// import RouteGuard from "./components/RouteGuard";
// import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  // const token = localStorage.getItem("token");
  // if (token) {
  //   setAuthToken(token);
  // }
  return (
    <Router>
      <NavBar />
      <header>
        <Home />
        <BackgroundSlider
          images={[image1, image2]}
          duration={5}
          transition={2}
        />
      </header>
      <main>
        <Routes>
          {/* <Route exact path="/user" component={RouteGuard} /> */}
          <Route exact path="/phone/:id" element={<CardDetailContainer />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/create" element={<PhoneCreate />}/>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<CardsContainer />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
