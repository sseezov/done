import React from "react";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-400">
            ОПЫТ РАБОТЫ
          </p>
          <p className="text-xl py-6">
            {" "}
            Мои проекты вы можете посмотреть на гитхабе в папке{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="text-purple-300"
              href="https://github.com/sseezov/done"
            >
              "done"
            </a>
            . Я занимался созданием социальной сети, написал CLI, которая
            выводит данные о погоде, в зависимости от полученных данных, написал
            лендинговую страницу для храма и этот сайт-портфолио. Остальное, а
            это большая часть написанного кода - практика в создании отдельных
            интерфейсов и алгоритмов. В ходе учебы я закончил множество
            практических модулей на{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="text-purple-300"
              href="https://www.freecodecamp.org/fcc0a4acf66-9b9c-4c1b-9064-83662a3c122a"
            >
              freecodecamp.org
            </a>
            , модули{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="text-purple-300"
              href="https://www.theodinproject.com/"
            >
              theodinproject.com
            </a>
            , задачи на{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="text-purple-300"
              href="https://js.checkio.org/user/Sergej_Sizov/"
            >
              ts.checkio
            </a>{" "}
            и т.п.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
