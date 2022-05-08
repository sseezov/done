import React, { useContext, useState } from "react";
import { LangContext } from "./context";
import workStorage from "./workData";
import { translationWork } from "./translation";
import ReactSwipe from "react-swipe";

const Work = () => {
  let [index, setIndex] = useState(0);
  const [workData, setWorkData] = useState(workStorage);
  let { lang, nav } = useContext(LangContext);
  let reactSwipeEl;

  return nav ? (
    <div name={"work"} className="h-[850px]"></div>
  ) : (
    <div
      name="work"
      className="visible w-full m-auto pt-16 md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1100px] m-auto p-4 h-full items-center justify-center">
        <div className="md:ml-[33px]">
          <p className="text-xl md:text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-400">
            {translationWork[lang].work}
          </p>
          <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: false }}
            ref={(el) => (reactSwipeEl = el)}
          >
            <div className="md:p-8 pt-2 min-h-[400px] md:min-h-[320px] ">
              <a href={workData[0].link} target="_blank" rel="noreferrer">
                <h1 className="text-xl md:text-2xl font-bold inline text-gray-300 hover:text-purple-300">
                  {workData[0].name[lang]}
                </h1>
              </a>
              <div className="md:flex md:flex-row">
                <img
                  className="m-auto max-h-[200px] md:max-h-[250px] rounded-xl p-2 md:hover:scale-125 duration-500"
                  src={workData[0].image}
                  alt={workData[0].name[lang]}
                />
                <p className="text-base md:text-xl text-gray-300 md:p-2">
                  {workData[0].text[lang]}
                </p>
              </div>
            </div>

            <div className="md:p-8 pt-2 min-h-[500px] md:min-h-[370px] ">
              <a href={workData[1].link} target="_blank" rel="noreferrer">
                <h1 className="text-xl md:text-2xl font-bold inline text-gray-300 hover:text-purple-300">
                  {workData[1].name[lang]}
                </h1>
              </a>
              <div className="md:flex md:flex-row">
                <img
                  className="m-auto max-w-[280px] max-h-[200px] md:max-h-[250px] rounded-xl p-2 md:hover:scale-125 duration-500"
                  src={workData[1].image}
                  alt={workData[1].name[lang]}
                />
                <p className="text-base md:text-xl text-gray-300 md:p-2">
                  {workData[1].text[lang]}
                </p>
              </div>
            </div>

            <div className="md:p-8 pt-2 min-h-[500px] md:min-h-[370px] ">
              <a href={workData[2].link} target="_blank" rel="noreferrer">
                <h1 className="text-xl md:text-2xl font-bold inline text-gray-300 hover:text-purple-300">
                  {workData[2].name[lang]}
                </h1>
              </a>
              <div className="md:flex md:flex-row">
                <img
                  className="m-auto max-w-[280px] max-h-[200px] md:max-h-[250px] rounded-xl p-2 md:hover:scale-125 duration-500"
                  src={workData[2].image}
                  alt={workData[2].name[lang]}
                />
                <p className="text-base md:text-xl text-gray-300 md:p-2">
                  {workData[2].text[lang]}
                </p>
              </div>
            </div>

            <div className="md:p-8 pt-2 min-h-[500px] md:min-h-[370px] ">
              <a href={workData[3].link} target="_blank" rel="noreferrer">
                <h1 className="text-xl md:text-2xl font-bold inline text-gray-300 hover:text-purple-300">
                  {workData[3].name[lang]}
                </h1>
              </a>
              <div className="md:flex md:flex-row">
                <img
                  className="m-auto max-w-[280px] max-h-[200px] md:max-h-[250px] rounded-xl p-2 md:hover:scale-125 duration-500"
                  src={workData[3].image}
                  alt={workData[3].name[lang]}
                />
                <p className="text-base md:text-xl text-gray-300 md:p-2">
                  {workData[3].text[lang]}
                </p>
              </div>
            </div>

            <div className="md:p-8 pt-2 min-h-[500px] md:min-h-[370px] ">
              <a href={workData[4].link} target="_blank" rel="noreferrer">
                <h1 className="text-xl md:text-2xl font-bold inline text-gray-300 hover:text-purple-300">
                  {workData[4].name[lang]}
                </h1>
              </a>
              <div className="md:flex md:flex-row">
                <img
                  className="m-auto max-w-[280px] max-h-[200px] md:max-h-[250px] rounded-xl p-2 md:hover:scale-125 duration-500"
                  src={workData[4].image}
                  alt={workData[4].name[lang]}
                />
                <p className="text-base md:text-xl text-gray-300 md:p-2">
                  {workData[4].text[lang]}
                </p>
              </div>
            </div>

            <div className="md:p-8 pt-2 min-h-[500px] md:min-h-[370px] ">
              <a href={workData[5].link} target="_blank" rel="noreferrer">
                <h1 className="text-xl md:text-2xl font-bold inline text-gray-300 hover:text-purple-300">
                  {workData[5].name[lang]}
                </h1>
              </a>
              <div className="md:flex md:flex-row">
                <img
                  className="m-auto max-w-[280px] max-h-[200px] md:max-h-[250px] rounded-xl p-2 md:hover:scale-125 duration-500"
                  src={workData[5].image}
                  alt={workData[5].name[lang]}
                />
                <p className="text-base md:text-xl text-gray-300 md:p-2">
                  {workData[5].text[lang]}
                </p>
              </div>
            </div>

            <div className="md:p-8 pt-2 min-h-[500px] md:min-h-[370px] ">
              <a href={workData[6].link} target="_blank" rel="noreferrer">
                <h1 className="text-xl md:text-2xl font-bold inline text-gray-300 hover:text-purple-300">
                  {workData[6].name[lang]}
                </h1>
              </a>
              <div className="md:flex md:flex-row">
                <img
                  className="m-auto max-w-[280px] max-h-[200px] md:max-h-[250px] rounded-xl p-2 md:hover:scale-125 duration-500"
                  src={workData[6].image}
                  alt={workData[6].name[lang]}
                />
                <p className="text-base md:text-xl text-gray-300 md:p-2">
                  {workData[6].text[lang]}
                </p>
              </div>
            </div>

            <div className="md:p-8 min-h-[500px] md:min-h-[370px] ">
              <a href={workData[7].link} target="_blank" rel="noreferrer">
                <h1 className="text-xl md:text-2xl font-bold inline text-gray-300 hover:text-purple-300">
                  {workData[7].name[lang]}
                </h1>
              </a>
              <div className="md:flex md:flex-row">
                <img
                  className="m-auto max-w-[280px] max-h-[200px] md:max-h-[250px] rounded-xl px-2 md:hover:scale-125 duration-500"
                  src={workData[7].image}
                  alt={workData[7].name[lang]}
                />
                <p className="text-base md:text-xl text-gray-300 md:px-2">
                  {workData[7].text[lang]}
                </p>
              </div>
            </div>
          </ReactSwipe>
          <div className="md:px-2 flex items-center justify-around">
            {index > 0 ? (
              <button
                className="text-yellow-200 hover:text-yellow-400 font-bold text-6xl"
                onClick={() => {
                  setIndex(index - 1);
                  reactSwipeEl.prev();
                }}
              >
                {"<"}
              </button>
            ) : (
              <button disabled className="text-[#0a192f] font-bold text-6xl">
                {"<"}
              </button>
            )}
            <div className="invisible md:visible font-bold text-gray-300 text-xl">
              {`${index + 1} ` + translationWork[lang].page}
            </div>

            {index < workData.length - 1 ? (
              <button
                className="text-yellow-200 hover:text-yellow-400 font-bold text-6xl"
                onClick={() => {
                  setIndex(index + 1);
                  reactSwipeEl.next();
                }}
              >
                {">"}
              </button>
            ) : (
              <button disabled className="text-[#0a192f] font-bold text-6xl">
                {">"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
