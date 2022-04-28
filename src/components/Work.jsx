import React from "react";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-400">
            ОПЫТ РАБОТЫ
          </p>
          <p className="text-base md:text-xl py-6">
            {" "}
            Мои проекты вы можете посмотреть на{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="text-purple-300"
              href="https://github.com/sseezov"
            >
              гитхабе
            </a>
            . Я занимался созданием{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="text-purple-300"
              href="https://github.com/sseezov/codepit/tree/main/react%20samurai%20%E2%80%94%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F/my-app"
            >
              социальной сети
            </a>
            , написал{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="text-purple-300"
              href="https://github.com/sseezov/codepit/tree/main/weather%20cli"
            >
              CLI
            </a>
            , которая выводит данные о погоде, в зависимости от полученных
            данных, написал{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="text-purple-300"
              href="https://github.com/sseezov/churchsite"
            >
              лендинговую страницу для храма
            </a>{" "}
            и этот{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="text-purple-300"
              href="https://github.com/sseezov/done"
            >
              сайт-портфолио
            </a>
            . Остальное, а это большая часть написанного кода - практика в
            создании отдельных интерфейсов и алгоритмов. В ходе учебы я закончил
            множество практических модулей на{" "}
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
            </a>
            ,{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="text-purple-300"
              href="https://www.codewars.com/users/sseezov"
            >
              codewars
            </a>{" "}
            и т.п.
            <br />
          </p>
          <p className="text-base sm:text-base md:text-xl text-purple-600">
            А еще я свободно владею английским языком и имею отличный набор
            софт-скиллов.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
