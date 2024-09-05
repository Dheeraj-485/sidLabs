import React from "react";
import Header from "./components/Navbar";
import Mission from "./components/Mission";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import SidLabsInfo from "./components/SidLabsInfo";
import AiInsights from "./components/AiInsights";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Explore />
        <SidLabsInfo />
        <AiInsights />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
