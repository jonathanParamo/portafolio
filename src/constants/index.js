import {
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  sexshop,
  rickMorty,
  storage,
  booklog,
  logothreejs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "",
    iconBg: "#383E56",
    date: "August 2022 - at the moment",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "To collaborate in a work team to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: logothreejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Sex shop",
    description:
      "Web application, users can view and interact with various products that can meet their needs and/or search for what they require, as well as add products to the cart.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sexshop,
    source_code_link: "https://github.com/bufssexshop/bufs-next-app",
    deployed_app_link: "https://bufssexshop-bufssexshop-gmailcom.vercel.app/",
  },
  {
    name: "Rick and Morty",
    description:
      "Web application that enables users to allows the user to search for characters, explore different dimensions, and learn about the characters that have appeared in the show.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "reduxtoolkit",
        color: "green-text-gradient",
      },
      {
        name: "material UI",
        color: "pink-text-gradient",
      },
    ],
    image: rickMorty,
    source_code_link: "https://github.com/jonathanParamo/RickAndMorty",
    deployed_app_link: "https://rick-and-morty-bice.vercel.app/",
  },
  {
    name: "Storage administration",
    description:
      "This web application allows the user to register or log in, as well as edit their profile. Additionally, it enables the creation, editing, and deletion of products and warehouses",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: storage,
    source_code_link: "https://github.com/jonathanParamo/storageAdministration",
    deployed_app_link: "https://storage-administration.vercel.app/",
  },
  {
    name: "Booklog",
    description:
      "This book web app enables user registration, login, and browsing of available books. Users can also reserve and manage their bookings, including returns, from their profile.",    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: booklog,
    source_code_link: "https://github.com/jonathanParamo/bookLog",
    deployed_app_link: "https://book-log-psi.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
