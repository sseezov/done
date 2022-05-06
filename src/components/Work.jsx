import React, { useContext, useState } from "react";
import { LangContext } from "./context";
import workStorage from "./workData";
import { translationWork } from "./translation";

const Work = () => {
  const [index, setIndex] = useState(0);
  const [workData, setWorkData] = useState(workStorage);
  let { lang } = useContext(LangContext);

  return (
    <div
      name="work"
      className="w-full pt-4 md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] m-auto p-4 flex items-center justify-center w-full h-full ">
        <div className="ml-[33px]">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-400">
            {translationWork[lang].work}
          </p>

          <div className="md:p-8 pt-2 min-h-[500px] md:min-h-[370px] md:min-w-[1200px] sm:flex-col">
            <a href={workData[index].link} target="_blank" rel="noreferrer">
              <h1 className="text-xl md:text-2xl font-bold inline text-gray-300 hover:text-purple-300">
                {workData[index].name[lang]}
              </h1>
            </a>

            <div className="md:flex md:flex-row">
              <img
                className="m-auto max-h-[200px] md:max-h-[250px] rounded-xl p-2"
                src={workData[index].image}
                alt={workData[index].name[lang]}
              />
              <p className="text-base md:text-xl text-gray-300 md:p-2">
                {workData[index].text[lang]}
              </p>
            </div>
          </div>
          <div className="md:p-2 flex items-center justify-around">
            {index > 0 ? (
              <button
                className="text-yellow-200 hover:text-yellow-400 font-bold text-6xl"
                onClick={() => {
                  setIndex(index - 1);
                }}
              >
                {"<"}
              </button>
            ) : (
              <button className="text-[#0a192f] font-bold text-6xl">
                {"<"}
              </button>
            )}
            <div className="font-bold text-gray-300 text-xl">
              {`${index + 1} ` + translationWork[lang].page}
            </div>

            {index < workData.length - 1 ? (
              <button
                className="text-yellow-200 hover:text-yellow-400 font-bold text-6xl"
                onClick={() => {
                  setIndex(index + 1);
                }}
              >
                {">"}
              </button>
            ) : (
              <button className="text-[#0a192f] font-bold text-6xl">
                {">"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

//Высоту документа ( $(document).height() ) делим на 100, умножаем на нужный % прокрутки.
//scrollleft+ (x)

export default Work;
