import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiVercel,
  SiBootstrap,
  SiFigma,
  SiRender,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import { TbBrandVite } from "react-icons/tb";
import techsetGo from "../assets/images/projects/techsetGo.png";
import passwordManager from "../assets/images/projects/PasswordManager.png";
import docMaster from "../assets/images/projects/Project1.png";
import coffeeshop from "../assets/images/projects/coffeeshop.png";
import passwordGen from "../assets/images/projects/passwordGenrator.png";
import razorpay from "../assets/images/projects/razorpay.png";
import portfolio from "../assets/images/projects/Portfolio.png";

// Define Project Type
interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  techStack: React.ReactNode[];
}

// Project Data
export const projects: Project[] = [
  {
    id: 1,
    name: "My Portfolio ",
    description:
      "A full-stack portfolio website to showcase my work and skills. Built with React and TypeScript, styled using Tailwind CSS, and powered by a Node.js + Express backend with MongoDB. Deployed on Vercel and Render.",
    image: portfolio,
    techStack: [
      <TbBrandVite className="text-2xl text-purple-600 sm:text-3xl" />,
      <FaReact className="text-2xl text-blue-400 sm:text-3xl" />,
      <SiTypescript className="text-2xl text-blue-800 sm:text-3xl" />,

      <FaNodeJs className="text-2xl text-green-500 sm:text-3xl" />,

      <FaGitAlt className="text-2xl text-orange-500 sm:text-3xl" />,
      <SiExpress className="text-2xl text-gray-500 sm:text-3xl" />,
      <SiMongodb className="text-2xl text-green-600 sm:text-3xl" />,
      <SiVercel className="text-2xl text-black sm:text-3xl" />,
      <SiTailwindcss className="text-2xl text-teal-500 sm:text-3xl" />,
      <FaGithub className="text-2xl text-black sm:text-3xl" />,
      <SiRender className="text-2xl text-black sm:text-3xl" />,
      <FaHtml5 className="text-2xl text-orange-600 sm:text-3xl" />,
      <FaCss3Alt className="text-2xl text-blue-500 sm:text-3xl" />,
      <FaJs className="text-2xl text-yellow-500 sm:text-3xl" />,
    ],
  },
  {
    id: 2,
    name: "Tech Set Go",
    description:
      "Tech Set Go: Next.JS project , Created Website design using Figma and implemented design in Next.JS using Bootstrap Framework ,Custom CSS, Node.JS,Express.js and MongoDB",
    image: techsetGo,
    techStack: [
      <SiNextdotjs className="text-2xl text-black sm:text-3xl" />,
      <SiBootstrap className="text-2xl text-indigo-500 sm:text-3xl" />,
      <FaNodeJs className="text-2xl text-green-500 sm:text-3xl" />,
      <FaReact className="text-2xl text-blue-400 sm:text-3xl" />,
      <SiFigma className="text-main-red text-2xl sm:text-3xl" />,
      <FaGitAlt className="text-2xl text-orange-500 sm:text-3xl" />,
      <SiExpress className="text-2xl text-gray-500 sm:text-3xl" />,
      <SiMongodb className="text-2xl text-green-600 sm:text-3xl" />,
      <SiVercel className="text-2xl text-black sm:text-3xl" />,
      <SiTailwindcss className="text-2xl text-teal-500 sm:text-3xl" />,
      <FaGithub className="text-2xl text-black sm:text-3xl" />,
      <FaHtml5 className="text-2xl text-orange-600 sm:text-3xl" />,
      <FaCss3Alt className="text-2xl text-blue-500 sm:text-3xl" />,
      <FaJs className="text-2xl text-yellow-500 sm:text-3xl" />,
    ],
  },
  {
    id: 3,
    name: "Doc Master",
    description:
      "Created a Website design using Figma and Implemented the design using React.js,  Bootstrap Framework ,Custom CSS and Node.js.",
    image: docMaster,
    techStack: [
      <FaHtml5 className="text-2xl text-orange-600 sm:text-3xl" />,
      <SiFigma className="text-main-red text-2xl sm:text-3xl" />,
      <FaCss3Alt className="text-2xl text-blue-500 sm:text-3xl" />,
      <FaJs className="text-2xl text-yellow-500 sm:text-3xl" />,
      <SiBootstrap className="text-2xl text-indigo-500 sm:text-3xl" />,
      <FaReact className="text-2xl text-blue-400 sm:text-3xl" />,
      <SiTailwindcss className="text-2xl text-teal-500 sm:text-3xl" />,
      // <FaNodeJs className="text-2xl text-green-500 sm:text-3xl" />,
    ],
  },
  {
    id: 4,
    name: "Password Manager",
    description:
      "Created Password Manager Website using React.Js, TailwindCSS, Node.JS and MongoDB.",
    image: passwordManager,
    techStack: [
      <FaHtml5 className="text-2xl text-orange-600 sm:text-3xl" />,
      <FaCss3Alt className="text-2xl text-blue-500 sm:text-3xl" />,
      <FaJs className="text-2xl text-yellow-500 sm:text-3xl" />,
      <SiBootstrap className="text-2xl text-indigo-500 sm:text-3xl" />,
      <FaNodeJs className="text-2xl text-green-500 sm:text-3xl" />,
      <FaReact className="text-2xl text-blue-400 sm:text-3xl" />,
      <FaGitAlt className="text-2xl text-orange-500 sm:text-3xl" />,
      <SiExpress className="text-2xl text-gray-500 sm:text-3xl" />,
      <SiMongodb className="text-2xl text-green-600 sm:text-3xl" />,
      <SiVercel className="text-2xl text-black sm:text-3xl" />,
      <SiTailwindcss className="text-2xl text-teal-500 sm:text-3xl" />,
      <FaGithub className="text-2xl text-black sm:text-3xl" />,
    ],
  },
  {
    id: 5,
    name: "Password Generator",
    description:
      "A secure password generator with advanced security features. Created Password Generator Website Pages Using HTML, CSS and JavaScript.",
    image: passwordGen,
    techStack: [
      <FaHtml5 className="text-2xl text-orange-600 sm:text-3xl" />,
      <FaCss3Alt className="text-2xl text-blue-500 sm:text-3xl" />,
      <FaJs className="text-2xl text-yellow-500 sm:text-3xl" />,
    ],
  },
  {
    id: 6,
    name: "Razorpay Clone",
    description: "A modern Razorpay payment gateway clone.",
    image: razorpay,
    techStack: [
      <FaHtml5 className="text-2xl text-orange-600 sm:text-3xl" />,
      <FaCss3Alt className="text-2xl text-blue-500 sm:text-3xl" />,
      <SiTailwindcss className="text-2xl text-teal-500 sm:text-3xl" />,
    ],
  },
  {
    id: 7,
    name: "Coffee Shop",
    description: "An interactive website for a coffee shop with online ordering.",
    image: coffeeshop,
    techStack: [
      <FaReact className="text-2xl text-blue-400 sm:text-3xl" />,
      <SiTypescript className="text-2xl text-blue-800 sm:text-3xl" />,

      <FaNodeJs className="text-2xl text-green-500 sm:text-3xl" />,

      <FaGitAlt className="text-2xl text-orange-500 sm:text-3xl" />,
      <SiExpress className="text-2xl text-gray-500 sm:text-3xl" />,
      <SiMongodb className="text-2xl text-green-600 sm:text-3xl" />,
      <SiVercel className="text-2xl text-black sm:text-3xl" />,
      <SiTailwindcss className="text-2xl text-teal-500 sm:text-3xl" />,
      <FaGithub className="text-2xl text-black sm:text-3xl" />,
      <SiRender className="text-2xl text-black sm:text-3xl" />,
      <FaHtml5 className="text-2xl text-orange-600 sm:text-3xl" />,
      <FaCss3Alt className="text-2xl text-blue-500 sm:text-3xl" />,
      <FaJs className="text-2xl text-yellow-500 sm:text-3xl" />,
    ],
  },
];
