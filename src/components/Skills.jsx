import React, { useContext } from "react";
import Tailwind from "../assets/tailwind.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import TypeScript from "../assets/Typescript_logo_2020.svg.png";
import GitHub from "../assets/github.png";
import Bootstrap from "../assets/bootstrap-600x600.jpg";
import ReduxImg from "../assets/react — копия.png";
import { LangContext } from "./context";
import { translationSkills } from "./translation";

const Skills = () => {
  let { lang } = useContext(LangContext);
  return (
    <div className="w-full pt-14 first-line:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="px-8">
          <p className="text-xl md:text-4xl font-bold inline border-b-4 border-yellow-400 ">
            {translationSkills[lang].skills}
          </p>
          <p className="py-4 text-xl">{translationSkills[lang].technologies}</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GIT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={TypeScript} alt="HTML icon" />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={Bootstrap} alt="HTML icon" />
            <p className="my-4">BOOTSTRAP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={ReduxImg} alt="HTML icon" />
            <p className="my-4">REDUX</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
