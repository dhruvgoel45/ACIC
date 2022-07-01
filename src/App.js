import React from "react";
import Navbar from "./components/Navbar";
import Benefits from "./components/Benefits";
import Carousel from "./components/Carousel";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import Cards from "./components/Startups";
import LightContactB from "./components/contact";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Events from "./components/Events";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Teams />
      <Benefits />
      <Events />
      <Cards />

      <Gallery />
      <LightContactB />

      <Footer />
    </div>
  );
}

export default App;
