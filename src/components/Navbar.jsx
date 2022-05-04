import React, { useContext, useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import englishFlag from "./../assets/pngwing.com.png";
import russianFlag from "./../assets/Flag_of_Russia.png";

import hh from "./../assets/hh.png";
import { Link } from "react-scroll";
import { LangContext } from "./context";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  let { lang, setLang } = useContext(LangContext);

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:underline underline-offset-8 decoration-yellow-400 decoration-4">
          <Link to="home" smooth={true} duration={500}>
            В начало
          </Link>
        </li>
        <li className="hover:underline underline-offset-8 decoration-yellow-400 decoration-4">
          <Link to="about" smooth={true} duration={500}>
            О себе
          </Link>
        </li>
        <li className="hover:underline underline-offset-8 decoration-yellow-400 decoration-4">
          <Link to="skills" smooth={true} duration={500}>
            Навыки
          </Link>
        </li>
        <li className="hover:underline underline-offset-8 decoration-yellow-400 decoration-4">
          <Link to="work" smooth={true} duration={500}>
            Опыт работы
          </Link>
        </li>

        <li className="hover:underline underline-offset-8 decoration-yellow-400 decoration-4">
          <Link to="contact" smooth={true} duration={500}>
            Контакты
          </Link>
        </li>
      </ul>
      <button
        onClick={() => {
          setLang(lang === "en" ? "ru" : "en");
          console.log(lang);
        }}
        className=" text-gray-300  flex flex-row p-2 hover:underline underline-offset-8 decoration-yellow-400 decoration-4"
      >
        Сменить язык{" "}
        {lang === "en" ? (
          <img src={englishFlag} className="w-[40px] pl-2" alt="flag" />
        ) : (
          <img src={russianFlag} className="w-[40px] pl-2" alt="flag" />
        )}
      </button>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl ">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            В начало
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            О себе
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Навыки
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Опыт работы
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Контакты
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[45%] left-0">
        <ul>
          <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#d81921]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://kemerovo.hh.ru/resume/abdb3d94ff09cd003a0039ed1f7a345278784b"
            >
              Headhunter <img src={hh} alt="hh" style={{ width: 30 }} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/sseezov"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
