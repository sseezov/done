import React from "react";
import MyPic from "../assets/UTgWXhK6jQg.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
              О СЕБЕ
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              <img
                src={MyPic}
                style={{ width: 300, float: "right" }}
                alt="это я"
              />
            </p>
          </div>
          <div>
            <p className="text-xl">
              Мне 31 год, у меня 2 высших очных образования и аспирантура за
              плечами. Восемь лет своей жизни я занимался наукой,
              преимущественно философией, и преподаванием, но теперь
              заинтересовался IT, хотя и здесь мне видится философия.
              Программирование для меня - это демиургическая практика, где цифры
              посредствуют логосу, а вечное солнце ноэматического открывается в
              диджитализации, понимаемой как переоткрытие пифагорейских практик.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
