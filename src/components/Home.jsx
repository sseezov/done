import React, { useContext } from "react";
import { Section } from "react-fullpage";
import { HiArrowNarrowRight } from "react-icons/hi";
import { LangContext } from "./context";
import { translationHome } from "./translation";

const Home = () => {
  let { lang } = useContext(LangContext);

  return (
    <Section>
      <div className="w-full h-screen bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto p-12 flex flex-col justify-center h-full">
          <p className="text-yellow-400 text-2xl">
            {" "}
            {translationHome[lang].hi}{" "}
          </p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            {translationHome[lang].name}
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            {translationHome[lang].job}
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            React, Redux, Typescript, CSS, HTML, Javascript, Tailwind
          </p>
          <div className="max-w-[221px]">
            <a href="#about">
              <button className="text-white md:min-w-[221px] font-bold group border-2 px-6 py-3 my-2 flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400">
                {translationHome[lang].next}
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
