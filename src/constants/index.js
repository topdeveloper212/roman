import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  threeD,
  blockchaintranding,
  chatbot,
  imageTextBot,
  missail,
  realestatebot
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Shopify Developer",
    icon: web,
  },
  {
    title: "WebGL Developer",
    icon: mobile,
  },
  {
    title: "AI Developer",
    icon: backend,
  },
  {
    title: "Bot Developer",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
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
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Shopify developer",
    company_name: "Sonex",
    // icon: sonex,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Nov 2024",
    points: [
      "Completed many Shopify platform perfectly in a short time.",
    ],
  },
  {
    title: "WebGL developer",
    company_name: "Sonex",
    // icon: sonex,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Nov 2024",
    points: [
      "Created new style 3D panorama website and WebGL game.",
    ],
  },
  {
    title: "AI developer",
    company_name: "Sonex",
    // icon: sonex,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Nov 2024",
    points: [
      "Developed Linkedin scraping, Freelancer autoBid and many Discord, Telegram Bot using AI and api.",
    ],
  },
];
  
const projects = [
  {
    name: "Shopify website",
    description:
      "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
    tags: [
      {
        name: "Shopify",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: blockchaintranding,
  },
  {
    name: "3D panorama",
    tags: [
      {
        name: "WebGL",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: threeD,
  },
  {
    name: "ImageText TelegramBot",
    tags: [
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: imageTextBot,
    
  },
  {
    name: "Shoes sales site",
    tags: [
      {
        name: "Shopify",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
  },
  {
    name: "Model using WebGL",
    tags: [
      {
        name: "WebGL",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Baking Texture",
        color: "pink-text-gradient",
      },
    ],
    image: missail,
  },
  {
    name: "real estate Bot",
    tags: [
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: realestatebot,
  },
];

const personalInfo = {
  name: "Roman",
  fullName: "Roman Chervinko",
  role: "Software Developer",
  about: `I am a multi-talented developer specializing in Shopify, WebGL, AI, web scraping, and bot development.
To date, I have developed many clean, attractive, and user-friendly Shopify platforms.
Using WebGL and Three.js, I build immersive 3D experiences, and bring interactivity and visualization to the web.
I develop efficient web scrapers and intelligent bots for data automation and task execution.
With a focus on performance and innovation, I provide powerful, scalable solutions tailored to modern digital needs.`,
};



export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
};
