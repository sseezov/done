import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { LangContext } from "./components/context";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </LangContext.Provider>
  );
}

export default App;
