import React, { useContext, useState } from "react";
import MyPic from "../assets/UTgWXhK6jQg.jpg";
import { LangContext } from "./context";
import { translationAbout } from "./translation";

const About = () => {
  const [toggleAbout, setToggleAbout] = useState(true);
  let { lang } = useContext(LangContext);

  return (
    <div
      name="about"
      className="w-full h-screen min-h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 md:gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
              О СЕБЕ
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 md:gap-8 md:px-4">
          <div className="sm:text-right">
            <img
              className="m-auto flex items-center justify-around md:float-right w-[160px] rounded-xl  sm:w-[180px] md:w-[280px]"
              src={MyPic}
              alt="это я"
            />
          </div>

          <div>
            {toggleAbout ? (
              <p className="p-4 float-left text-base sm:text-base md:text-xl">
                Мне 31 год, у меня 2 высших очных образования и аспирантура за
                плечами. Восемь лет своей жизни я занимался наукой,
                преимущественно философией, и преподаванием, но теперь
                заинтересовался IT, хотя и здесь мне видится философия.
                Программирование для меня - это демиургическая практика, где
                цифры посредствуют логосу, а вечное солнце ноэматического
                открывается в диджитализации, понимаемой как переоткрытие
                пифагорейских практик.
              </p>
            ) : (
              <div>
                <p className="px-4 float-left text-base sm:text-base md:text-xl pb-4">
                  Я программист самоучка, прошел курсы верстки и js на{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="text-purple-300"
                    href="https://www.freecodecamp.org/fcc0a4acf66-9b9c-4c1b-9064-83662a3c122a"
                  >
                    freecodecamp.org
                  </a>
                  ,{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="text-purple-300"
                    href="https://www.theodinproject.com/"
                  >
                    theodinproject.com
                  </a>
                  , немного тайпскрипта и Node.js на Udemy, курсы по Реакту и
                  Редаксу в{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="text-purple-300"
                    href="https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g"
                  >
                    it-kamasutra{" "}
                  </a>
                  и вообще на ютубе (больше англоязычном) и по книгам. Решал
                  всякие задачки на{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="text-purple-300"
                    href="https://www.codewars.com/users/sseezov"
                  >
                    codewars
                  </a>{" "}
                  и{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="text-purple-300"
                    href="https://js.checkio.org/user/Sergej_Sizov/"
                  >
                    ts.checkio
                  </a>
                  . Читал книги, делал проекты, et cetera. Вот мой{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="text-purple-300"
                    href="https://github.com/sseezov"
                  >
                    гит
                  </a>
                  .
                </p>
                <p className="px-4 float-left text-base sm:text-base md:text-xl">
                  Меня интересует, прежде всего, возможность быстрого роста как
                  специалиста, а потому я ищу мощную команду, чтобы{" "}
                  <strong className="text-red-600">дичайше</strong>, например,
                  прокачаться.
                </p>
              </div>
            )}
            <button
              onClick={() => {
                setToggleAbout(!toggleAbout);
              }}
              className="pl-4 text-4xl font-bold inline text-yellow-200 hover:text-yellow-400"
            >
              {toggleAbout ? ">" : "<"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
