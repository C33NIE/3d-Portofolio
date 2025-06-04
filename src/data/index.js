import {
  airly,
  algorithms,
  devnotes,
  khoj,
  oscs,
  ring,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "The View",
  },
  { id: "aboutme", 
    title: "About Me" 
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "MIS Intern",
    company_name: "Air Blue",
    date: "Oct 2019 — Jan 2020",
    location: "Islamabad, Pakistan",
    details: [
      "Installed and configured various software applications and services to support the organization’s needs.",
      "Debugged software, identified root causes, and proposed solutions to software issues.",
      "Collaborated with talented peers to foster a knowledge-sharing environment, actively learning and adopting <span style='color: white;'>best practices in software development</span>.",
    ],
  },
  {
    title: "Social Media Marketing Intern",
    company_name: "Air Blue",
    date: "Jan 2020 — Feb 2020",
    location: "Islamabad, Pakistan",
    details: [
      "Implemented a <span style='color: white;'>social media marketing strategy</span> that increased engagement with target audiences by <span style='color: white;'>60%</span>.",
      "Managed relationships with vendors, ensuring all marketing materials were produced and delivered on time and within budget.",
      "Collaborated with marketing to create campaigns that improved customer engagement and generated leads.",
    ],
  },
  {
    title: "CTO",
    company_name: "YA Drops",
    date: "Jul 2023 — Oct 2023",
    details: [
      "Grew the company’s revenue by <span style='color: white;'>100%</span> through effective marketing and sales strategies.",
      "Developed a <span style='color: white;'>user-friendly website</span> that increased website traffic by <span style='color: white;'>120%</span>.",
      "Researched and wrote weekly blog posts that increased website traffic by <span style='color: white;'>30%</span>.",
    ],
  },
  {
  title: "BS Computer Games Development",
    company_name: "Air University", // Replace with your university name
    date: "2022",
    details: [
      "Currently pursuing a degree in Computer Games Development with a focus on game design and development.",
      "Achieved the highest GPA in the program to date.",
      "Created several games, showcasing skills in programming, design, and teamwork.",
    ],
  },
];


const portfolio = [
  {
    name: "Ring Toss Royale",
    description:
      "A 3D multiplayer ring toss game featuring real-time networking powered by Photon.",
    image: ring,
  },
  {
    name: "Airly",
    description:
      "A social media app for university students, designed with React Native for seamless interactions.",
    image: airly,
  },
  {
    name: "Khoj",
    description:
      "An immersive prototype for an action-adventure game developed in Unreal Engine, featuring advanced character mechanics.",
    image: khoj,
  },
];


export { experiences, portfolio };

