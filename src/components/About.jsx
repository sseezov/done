import React, { useContext, useState } from "react";
import MyPic from "../assets/UTgWXhK6jQg.jpg";
import { LangContext } from "./context";
import { translationAbout } from "./translation";
import { Section } from "react-fullpage";

const About = () => {
  const [toggleAbout, setToggleAbout] = useState(true);
  let { lang } = useContext(LangContext);

  return (
    <Section>
      <div
        name="about"
        className="w-full h-[99vh] text-gray-200 bg-gradient-to-r from-black via-indigo-900 to-fuchsia-500"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 md:gap-6">
            <div className="text-right pb-4">
              <p className="text-xl md:text-4xl ml-20 font-bold inline border-b-4 border-yellow-400">
                {translationAbout[lang].about}
              </p>
            </div>
            <div className="text-left pb-4">
              <button
                onClick={() => {
                  setToggleAbout(!toggleAbout);
                }}
                className="text-2xl pl-4 pb-2 md:text-4xl font-bold inline text-yellow-200 hover:text-yellow-400"
              >
                {toggleAbout ? ">" : "<"}
              </button>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 md:gap-8 md:px-4">
            <div className="sm:text-right">
              <img
                className="m-auto flex items-center justify-around md:float-right w-[160px] rounded-xl  sm:w-[180px] md:w-[280px]"
                src={MyPic}
                alt={translationAbout[lang].about}
              />
            </div>

            <div>
              {toggleAbout ? (
                <p className="px-4 float-left text-base sm:text-base md:text-xl">
                  {translationAbout[lang].text1}
                </p>
              ) : (
                <div>
                  <p className="px-4 float-left text-base sm:text-base md:text-xl pb-4">
                    {translationAbout[lang].text2a}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="text-purple-200"
                      href="https://www.freecodecamp.org/fcc0a4acf66-9b9c-4c1b-9064-83662a3c122a"
                    >
                      freecodecamp.org
                    </a>
                    ,{" "}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="text-purple-200"
                      href="https://www.theodinproject.com/"
                    >
                      theodinproject.com
                    </a>
                    {translationAbout[lang].text2b}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="text-purple-200"
                      href="https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g"
                    >
                      it-kamasutra{" "}
                    </a>
                    {translationAbout[lang].text2c}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="text-purple-200"
                      href="https://www.codewars.com/users/sseezov"
                    >
                      codewars
                    </a>
                    {translationAbout[lang].text2d}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="text-purple-200"
                      href="https://js.checkio.org/user/Sergej_Sizov/"
                    >
                      ts.checkio
                    </a>
                    {translationAbout[lang].text2e}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="text-purple-200"
                      href="https://github.com/sseezov"
                    >
                      github
                    </a>
                    .
                  </p>
                  <p className="px-4 float-left text-base sm:text-base md:text-xl">
                    {translationAbout[lang].text2f}
                    <strong className="text-red-600">
                      {translationAbout[lang].text2g}
                    </strong>
                    {translationAbout[lang].text2h}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
