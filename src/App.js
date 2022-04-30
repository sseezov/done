import About from "./components/About";
import Contact from "./components/Contact";
import i18next from "i18next";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { initReactI18next } from "react-i18next";

const translationEn = {};
const translationRu = {};

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    ru: { translation: translationRu },
  },
  lng: "en",
  fallbackLng: "en",
});

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
