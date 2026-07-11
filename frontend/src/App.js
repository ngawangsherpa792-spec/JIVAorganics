import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import ProcessingSection from "./components/ProcessingSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <JourneySection />
      <ProcessingSection />
      <FooterSection />
    </div>
  );
}

export default App;