import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import workStorage from "./workData";

const Work = () => {
  const [index, setIndex] = useState(0);
  const [workData, setWorkData] = useState(workStorage);

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-400">
            ОПЫТ РАБОТЫ И ПРОЕКТЫ
          </p>

          <div className="p-8 md:min-h-[370px] md:min-w-[1200px] sm:flex-col">
            <h1 className="text-xl md:text-2xl font-bold inline text-gray-300">
              {workData[index].name}
            </h1>
            <div className="md:flex md:flex-row">
              <img
                className="ml-[20px] max-h-[200px] md:max-h-[250px] rounded-xl p-2"
                src={workData[index].image}
                alt={workData[index].name}
              />
              <p className="text-base md:text-xl text-gray-300 md:p-2">
                {workData[index].text}
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
            <div className="font-bold text-gray-300 text-xl">{`${
              index + 1
            } страница`}</div>

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

export default Work;
