import React, { useContext } from "react";
import { faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { translationContacts } from "./translation";
import { LangContext } from "./context";
import { Section } from "react-fullpage";

const Contact = () => {
  let { lang } = useContext(LangContext);
  return (
    <Section>
      <div className="m-auto w-full h-screen bg-gradient-to-r from-black via-indigo-900 to-fuchsia-500 flex justify-center items-center">
        <div>
          <p className="text-xl md:text-4xl inline font-bold border-b-4 border-pink-600 text-gray-300">
            {translationContacts[lang].contactMe}
          </p>

          <ul className="p-3">
            <li>
              <h2>
                <a
                  className="text-2xl sm:text-4xl font-bold text-[#ccd6f6] hover:text-yellow-400"
                  href="https://vk.com/sseezov"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faVk} color="#ffd700" /> vk.com/sseezov
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a
                  className="hover:text-yellow-400 text-2xl sm:text-4xl font-bold text-[#ccd6f6]"
                  href="https://t.me/sseezov"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTelegram} color="#ffd700" /> @sseezov
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a
                  className="hover:text-yellow-400 text-2xl sm:text-4xl font-bold text-[#ccd6f6]"
                  href="mailto: sseezov@mail.ru"
                >
                  <FontAwesomeIcon icon={faAt} color="#ffd700" />{" "}
                  sseezov@mail.ru
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a
                  className="hover:text-yellow-400 text-2xl sm:text-4xl font-bold text-[#ccd6f6]"
                  href="tel:+79515808134"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faPhone} color="#ffd700" /> +7 951 580
                  8134
                </a>
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
