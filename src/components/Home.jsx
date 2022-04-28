import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-400 text-2xl">Привет, меня зовут</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Сергей Сизов
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Я — фронтенд-разработчик
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          React, Redux, Typescript, CSS, HTML, Javascript
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="text-white font-bold group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-400 hover:border-yellow-400">
              Смотреть дальше
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
