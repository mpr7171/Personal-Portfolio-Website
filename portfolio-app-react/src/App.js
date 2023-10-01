import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience"; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;