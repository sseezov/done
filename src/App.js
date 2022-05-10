import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { LangContext } from "./components/context";
import { SectionsContainer, Header } from "react-fullpage";

const browserLang = window.navigator.language || navigator.userLanguage;
window.onload = function () {
  if (window.location.href[window.location.href.length - 1] !== "/") {
    window.location.replace("https://sseezov.ru/");
  }
};

function App() {
  const [lang, setLang] = useState(/ru/gim.test(browserLang) ? "ru" : "en");
  const [nav, setNav] = useState(false);
  let options = {
    sectionClassName: "section",
    anchors: ["home", "about", "skills", "work", "contacts"],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,
    sectionPaddingTop: "0px",
    sectionPaddingBottom: "0px",
    arrowNavigation: false,
  };

  return (
    <LangContext.Provider value={{ lang, setLang, nav, setNav }}>
      <Header>
        <Navbar />
      </Header>

      <SectionsContainer {...options}>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </SectionsContainer>
    </LangContext.Provider>
  );
}

export default App;
