import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb, SiVercel, SiBootstrap, SiFigma } from "react-icons/si";
import techsetGo from "../assets/images/projects/techsetGo.png";
import passwordManager from "../assets/images/projects/PasswordManager.png";
import docMaster from "../assets/images/projects/Project1.png";
import coffeeshop from "../assets/images/projects/coffeeshop.png";
import passwordGen from "../assets/images/projects/passwordGenrator.png";
import razorpay from "../assets/images/projects/razorpay.png";

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
    name: "Tech Set Go",
    description: "Tech Set Go empowers aspiring developers and tech professionals with expert training.",
    image: techsetGo,
    techStack: [
      <FaHtml5 className="text-orange-600 text-2xl sm:text-3xl" />,
      <FaCss3Alt className="text-blue-500 text-2xl sm:text-3xl" />,
      <FaJs className="text-yellow-500 text-2xl sm:text-3xl" />,
      <SiBootstrap className="text-indigo-500 text-2xl sm:text-3xl" />,
      <FaNodeJs className="text-green-500 text-2xl sm:text-3xl" />,
      <FaReact className="text-blue-400 text-2xl sm:text-3xl" />,
      <SiFigma className="text-main-red text-2xl sm:text-3xl" />,
      <FaGitAlt className="text-orange-500 text-2xl sm:text-3xl" />,
      <SiExpress className="text-gray-500 text-2xl sm:text-3xl" />,
      <SiMongodb className="text-green-600 text-2xl sm:text-3xl" />,
      <SiVercel className="text-black text-2xl sm:text-3xl" />,
      <SiTailwindcss className="text-teal-500 text-2xl sm:text-3xl" />,
      <FaGithub className="text-black text-2xl sm:text-3xl" />
    ],
  },
  {
    id: 2,
    name: "Doc Master",
    description: "A document management tool for efficient workflow.",
    image: docMaster,
    techStack: [
      <FaHtml5 className="text-orange-600 text-2xl sm:text-3xl" />,
      <FaCss3Alt className="text-blue-500 text-2xl sm:text-3xl" />,
      <FaJs className="text-yellow-500 text-2xl sm:text-3xl" />,
      <SiBootstrap className="text-indigo-500 text-2xl sm:text-3xl" />,
      <FaReact className="text-blue-400 text-2xl sm:text-3xl" />,
      <SiTailwindcss className="text-teal-500 text-2xl sm:text-3xl" />
    ],
  },
  {
    id: 3,
    name: "Password Manager",
    description: " Password Manager wa a project made to save password in one place to proctice my full stack",
    image: passwordManager,
    techStack: [
      <FaHtml5 className="text-orange-600 text-2xl sm:text-3xl" />,
      <FaCss3Alt className="text-blue-500 text-2xl sm:text-3xl" />,
      <FaJs className="text-yellow-500 text-2xl sm:text-3xl" />,
      <SiBootstrap className="text-indigo-500 text-2xl sm:text-3xl" />,
      <FaNodeJs className="text-green-500 text-2xl sm:text-3xl" />,
      <FaReact className="text-blue-400 text-2xl sm:text-3xl" />,
      <FaGitAlt className="text-orange-500 text-2xl sm:text-3xl" />,
      <SiExpress className="text-gray-500 text-2xl sm:text-3xl" />,
      <SiMongodb className="text-green-600 text-2xl sm:text-3xl" />,
      <SiVercel className="text-black text-2xl sm:text-3xl" />,
      <SiTailwindcss className="text-teal-500 text-2xl sm:text-3xl" />,
      <FaGithub className="text-black text-2xl sm:text-3xl" />
    ],
  },
  {
    id: 4,
    name: "Password Generator",
    description: "A secure password generator with advanced security features.",
    image: passwordGen,
    techStack: [
      <FaHtml5 className="text-orange-600 text-2xl sm:text-3xl" />,
      <FaCss3Alt className="text-blue-500 text-2xl sm:text-3xl" />,
      <FaJs className="text-yellow-500 text-2xl sm:text-3xl" />,
      <FaReact className="text-blue-400 text-2xl sm:text-3xl" />,
      <SiTailwindcss className="text-teal-500 text-2xl sm:text-3xl" />
    ],
  },
  {
    id: 5,
    name: "Razorpay Clone",
    description: "A modern Razorpay payment gateway clone.",
    image: razorpay,
    techStack: [
      <FaHtml5 className="text-orange-600 text-2xl sm:text-3xl" />,
      <FaCss3Alt className="text-blue-500 text-2xl sm:text-3xl" />,
      <FaJs className="text-yellow-500 text-2xl sm:text-3xl" />,
      <FaReact className="text-blue-400 text-2xl sm:text-3xl" />,
      <SiTailwindcss className="text-teal-500 text-2xl sm:text-3xl" />
    ],

  },
  {
    id: 6,
    name: "Coffee Shop",
    description: "An interactive website for a coffee shop with online ordering.",
    image: coffeeshop,
    techStack: [
      <FaHtml5 className="text-orange-600 text-2xl sm:text-3xl" />,
      <FaCss3Alt className="text-blue-500 text-2xl sm:text-3xl" />,
      <FaJs className="text-yellow-500 text-2xl sm:text-3xl" />,
      <FaReact className="text-blue-400 text-2xl sm:text-3xl" />,
      <SiTailwindcss className="text-teal-500 text-2xl sm:text-3xl" />
    ],
  },
];

