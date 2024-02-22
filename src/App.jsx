import React from "react";
import Header from "./components/Header";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className=" h-screen">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
