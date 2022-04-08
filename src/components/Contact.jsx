import React from "react";
import {
  faFacebook,
  faTelegram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <div>
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
          Связаться со мной
        </p>
        <br />
        <ul className="pt-4">
          <ul>
            <li>
              <h2>
                <a
                  className="text-2xl sm:text-4xl font-bold text-[#ccd6f6] hover:bg-violet-700"
                  href="https://vk.com/sseezov"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faVk} color="#ffd700" />
                  vk.com/sseezov
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a
                  className="hover:bg-violet-700 text-2xl sm:text-4xl font-bold text-[#ccd6f6]"
                  href="https://t.me/sseezov"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTelegram} color="#ffd700" />
                  @sseezov
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a
                  className="hover:bg-violet-700 text-2xl sm:text-4xl font-bold text-[#ccd6f6]"
                  href="mailto: sseezov@mail.ru"
                >
                  <FontAwesomeIcon icon={faAt} color="#ffd700" />
                  sseezov@mail.ru
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a
                  className="hover:bg-violet-700 text-2xl sm:text-4xl font-bold text-[#ccd6f6]"
                  href="https://www.facebook.com/sseezov/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} color="#ffd700" />
                  facebook.com/sseezov
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a
                  className="hover:bg-violet-700 text-2xl sm:text-4xl font-bold text-[#ccd6f6]"
                  href="tel:+79515808134"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faPhone} color="#ffd700" />+ 7 951 580
                  8134
                </a>
              </h2>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
