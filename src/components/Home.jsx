import React, { useContext } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { LangContext } from "./context";
import { translationHome } from "./translation";

const Home = () => {
  let { lang } = useContext(LangContext);

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-400 text-2xl"> {translationHome[lang].hi} </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          {translationHome[lang].name}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          {translationHome[lang].job}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          React, Redux, Typescript, CSS, HTML, Javascript
        </p>
        <div className="max-w-[221px]">
          <Link to="about" smooth={true} duration={500}>
            <button className="text-white md:min-w-[221px] font-bold group border-2 px-6 py-3 my-2 flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400">
              {translationHome[lang].next}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
