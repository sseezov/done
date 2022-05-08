import React, { useContext, useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LangContext } from "./context";
import { translationNavbar } from "./translation";
import hh2 from "./../assets/HeadHunter_logo_1_1.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  let { lang, setLang, nav, setNav } = useContext(LangContext);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:underline underline-offset-8 decoration-yellow-400 decoration-4">
          <Link to="home" smooth={true} duration={500}>
            {translationNavbar[lang].main}
          </Link>
        </li>
        <li className="hover:underline underline-offset-8 decoration-yellow-400 decoration-4">
          <Link to="about" smooth={true} duration={500}>
            {translationNavbar[lang].about}
          </Link>
        </li>
        <li className="hover:underline underline-offset-8 decoration-yellow-400 decoration-4">
          <Link to="skills" smooth={true} duration={500}>
            {translationNavbar[lang].skills}
          </Link>
        </li>
        <li className="hover:underline underline-offset-8 decoration-yellow-400 decoration-4">
          <Link to="work" smooth={true} duration={500}>
            {translationNavbar[lang].works}
          </Link>
        </li>
        <li className="hover:underline underline-offset-8 decoration-yellow-400 decoration-4">
          <Link to="contact" smooth={true} duration={500}>
            {translationNavbar[lang].contacts}
          </Link>
        </li>
      </ul>
      <button
        onClick={() => {
          setLang(lang === "en" ? "ru" : "en");
        }}
        className=" text-gray-300  flex flex-row p-2 md:hover:underline underline-offset-8 decoration-yellow-400 decoration-4"
      >
        {translationNavbar[lang].switch}
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
            {translationNavbar[lang].main}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            {translationNavbar[lang].about}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            {translationNavbar[lang].skills}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            {translationNavbar[lang].works}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            {translationNavbar[lang].contacts}
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[40%] left-0">
        <ul>
          <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#d40e18]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://kemerovo.hh.ru/resume/abdb3d94ff09cd003a0039ed1f7a345278784b"
            >
              Headhunter{" "}
              <img
                className="ml-[6px]"
                src={hh2}
                alt="hh"
                style={{ width: 60 }}
              />
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
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/sergey-sizov-2bbb21235"
            >
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
