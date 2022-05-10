import samurai from "./../assets/samurai-network.avif";
import calc from "./../assets/react-calc.avif";
import weather from "./../assets/weather-cli.avif";
import church from "./../assets/churchsite.avif";
import birthday from "./../assets/birhtday.avif";
import rec from "./../assets/recursion2.avif";
import rest from "./../assets/rest.avif";
import me from "./../assets/me.avif";

const workStorage = [
  {
    id: 1,
    link: "https://github.com/sseezov/codepit/tree/main/react%20samurai%20%E2%80%94%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F/my-app",
    name: {
      en: "Social network",
      ru: "Социальная сеть",
    },
    image: samurai,
    text: {
      ru: `Это проект социальной сети на Реакте и Редаксе. Писал код пока обучался Реакту на курсе react-samurai с канала it-kamasutra. Курс примечателен своим объемом - все видео в совокупности (а их чуть больше 100) занимают более 54 часов времени. Что есть в самой социальной сети? Форма входа и авторизации (она устроена через куки другого сайта), своя страница, вывод страниц других пользователей сети, возможность подписаться на них, возможность писать сообщения и постить на стену (да, я вернул стену!).
    `,
      en: "This is a social network project based on React and Redux. I wrote this code while studying React on the react-samurai course from the it-kamasutra channel. The course is notable for its volume - all videos (there are a little more than 100) take more than 54 hours to watch. What is in the social network itself? Login and authorization form (it is arranged through cookies of another site), user page, page with all other network users with the ability to subscribe on any of them, and also you can write messages and posts.",
    },
  },
  {
    id: 2,
    link: "https://github.com/sseezov/codepit/tree/main/weather%20cli",
    name: {
      en: "Weather API CLI",
      ru: "Weather API CLI",
    },
    image: weather,
    text: {
      ru: "Этот проект я писал, когда проходил курс по Node.js на Udemy. Зачем я проходил этот курс, если занимаюсь фронтендом? Потому что мне интересна нода и вообще бекенд, однако, потом, когда дело дошло до баз данных, я отложил знакомство с беком в долгий ящик. Что в итоге? Здесь CLI, которая выводит данные о погоде в командной строке, используя weather api и несколько библиотек, чтобы было красочно (зацените эти разноцветные полоски!).",
      en: "I wrote this project when I was studying Node.js on Udemy. Why did I take this course if i'm doung Front-end? Because I'm interested in the Node and the backend in general, however, then, when deal came to databases, I postponed my acquaintance for better times. So, what's the result? Here's a CLI that prints weather data on the command line using the weather api and a few libraries to make it colorful (check out those colorful stripes!).",
    },
  },
  {
    id: 3,
    link: "https://github.com/sseezov/churchsite",
    name: {
      en: "Church landing page",
      ru: "Лендинг страница для храма",
    },
    image: church,
    text: {
      ru: "Это лендинг страница для храма. Я сделал ее, когда учил html и css. В своем время проект стал отличным материалом для тренировки навыков вертски. Также там можно видеть и авторский дизайн.",
      en: "This is a landing page for a local church. I made it when I was learning html and css. At the right time this site has become an excellent material for training my web-design skills.",
    },
  },
  {
    id: 4,
    link: "https://github.com/sseezov/birthday-reminder",
    name: {
      en: "Birthday reminder",
      ru: "Напоминалка дней рождения",
    },
    image: birthday,
    text: {
      ru: "Этот проект представляет собой напоминалку дней рождения у друзей. Он выводит различное количество друзей, в зависимости от текущего дня. Из интересного могу отметить только следующее - я решил написать этот проект на русском языке, где окончания склоняются в зависимости от того, сколько элементов представлено, скажем: один день рождения, два дня(!) рождения, пять дней(!) рождения - что заставило докрутить к интерфейсу программу чекер количества элементов и соответственного выведения слов.",
      en: "This project is a friends birthday reminder. It displays a different number of friends, depending on the current day. Of the interesting things, I can only note the following - I decided to write this project in Russian, where the words endings decline depending on how many elements are represented, say: 1 day (1 день), 2 days (2 дня!), 5 days (5 дней!) - which pushed me to make the number checker programm that make all output values look correct.",
    },
  },
  {
    id: 5,
    link: "https://github.com/sseezov/calculator",
    name: {
      en: "Calculator on React",
      ru: "Калькулятор на Реакте",
    },
    image: calc,
    text: {
      ru: "Данный проект примечателен тем, что здесь нет никаких библиотек, которые обычно используются для того, чтобы сделать калькулятор. 'Сделать калькулятор' - это классическая практика для будущих программистов, не только самоучек, но и обычных студентов IT-факультетов.",
      en: "This project is notable for the fact that there are no libraries that are usually used to make a calculator. 'To make a calculator' is a classic practice for future programmers, not only self-taught, but also ordinary IT-faculties graduates.",
    },
  },
  {
    id: 6,
    link: "http://sseezov.ru/",
    name: {
      en: "This website",
      ru: "Этот сайт-портфолио",
    },
    image: rec,
    text: {
      ru: "О нет, мы попали в бесконечную рекурсию и теперь умрем от утечки памяти. Ха-ха! Шутка! О нет, мы попали в бесконечную рекурсию и теперь умрем от утечки памяти. Ха-ха! Шутка! О нет, мы попали в бесконечную рекурсию и теперь умрем от утечки памяти. Ха-ха! Шутка! О нет, мы попали в бесконечную рекурсию и теперь умрем от утечки памяти. Ха-ха! Шутка! О нет, мы попали в бесконечную рекурсию и теперь умрем от утечки памяти. Ха-ха! Шутка!...",
      en: "Oh no, we're in an infinite recursion and now we're going to die from a memory leak. Haha! Just joking! Oh no, we're in an infinite recursion and now we're going to die from a memory leak. Haha! Just joking! Oh no, we're in an infinite recursion and now we're going to die from a memory leak. Haha! Just joking! Oh no, we're in an infinite recursion and now we're going to die from a memory leak. Haha! Just joking! Oh no, we're in an infinite recursion and now we're going to die from a memory leak. Haha! Just joking!...",
    },
  },
  {
    id: 7,
    link: "https://github.com/sseezov",
    name: {
      en: "More projects",
      ru: "Еще проекты",
    },
    image: rest,
    text: {
      ru: "Думаю, что нет особого смысла перечислять все дальше, потому что количество проектов все время растет и писать о них нужно только в том случае, если я сделаю что-нибудь действительно интересное. Тем не менее, стоит также припомнить следующие проекты: лист рекламных предложений туристических поездок, которые можно удалять из ленты; ленту с обзорами, которые можно листать и запрашивать в рандомном порядке; меню с вопросами и ответами на различные темы; и еще всякое такое.",
      en: "I think it makes little sense to list everything further, because the number of projects is growing all the time and you only need to write about them if you do something really interesting. However, the following projects are also worth mentioning: a list of promotional offers for travels that can be removed from the feed; a feed with reviews that can be scrolled through and requested in a random order; menu with questions and answers on various topics; and more of all that stuff.",
    },
  },
  {
    id: 8,
    name: {
      en: "And finally",
      ru: "И, наконец",
    },
    image: me,
    text: {
      ru: "Во время своего обучения я выполнил 500+ задач на freecodecamp.org, несколько модулей на theodinproject.com, решал задачки на codewars (я не так давно открыл этот сайт для себя и сейчас там только 150 баллов рейтинга) и js.checkio (там я упражнялся в тайпскрипте). Также, я свободно владею английским языком и имею отличный набор софт-скиллов.",
      en: "During my training, I completed 500+ challenges on freecodecamp.org, several modules on theodinproject.com, solved challenges on codewars (I recently discovered this site for myself and that's why now my profile has only 150 rating points) and js.checkio (there I practiced in typescript). Also, I am fluent in English and have an excellent set of soft skills.",
    },
  },
];

export default workStorage;
