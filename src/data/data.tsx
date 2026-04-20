
import techsetGo from "../assets/images/projects/techsetGo.png";
import passwordManager from "../assets/images/projects/PasswordManager.png";
import docMaster from "../assets/images/projects/Project1.png";
import coffeeshop from "../assets/images/projects/coffeeshop.png";
import passwordGen from "../assets/images/projects/passwordGenrator.png";
import razorpay from "../assets/images/projects/razorpay.png";
import portfolio from "../assets/images/projects/Portfolio.png";
import pcsudbury from "../assets/images/projects/PCSudbury.png";
import wctr from "../assets/images/projects/WCTRC.png";
import nsw from "../assets/images/projects/nsw.png";
import immizest from "../assets/images/projects/immizest.png";
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
    description:
      "Tech Set Go: Next.JS project , Created Website design using Figma and implemented design in Next.JS using Bootstrap Framework ,Custom CSS, Node.JS,Express.js and MongoDB",
    image: techsetGo,

    techStack: [
      "Next.js",
      "Bootstrap",
      "Node.js",
      "React",
      "Figma",
      "Git",
      "Express",
      "MongoDB",
      "Vercel",
      "Tailwind CSS",
      "GitHub",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
 
  {
    id: 2,
    name: "My Portfolio ",
    description:
      "A full-stack portfolio website to showcase my work and skills. Built with React and TypeScript, styled using Tailwind CSS, and powered by a Node.js + Express backend with MongoDB. Deployed on Vercel and Render.",
    image: portfolio,
    techStack: [
      "Vite",
      "React",
      "TypeScript",
      "Node.js",
      "Git",
      "Express",
      "MongoDB",
      "Vercel",
      "Tailwind CSS",
      "GitHub",
      "Render",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    id: 3,
    name: "Password Manager",
    description:
      "Created Password Manager Website using React.Js, TailwindCSS, Node.JS and MongoDB.",
    image: passwordManager,
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "React",
      "Git",
      "Express",
      "MongoDB",
      "Vercel",
      "Tailwind CSS",
      "GitHub",
    ],
  },
   {
    id: 4,
    name: "Doc Master",
    description:
      "Created a Website design using Figma and Implemented the design using React.js,  Bootstrap Framework ,Custom CSS and Node.js.",
    image: docMaster,
    techStack: ["HTML", "Figma", "CSS", "JavaScript", "Bootstrap", "React", "Tailwind CSS"],
  },
  
  {
    id: 5,
    name: "Immizest Website",
    description:
      "An interactive website for Immizest showcasing there cources and attract new student to get in contact with them via website. Link: https://immizest.com/",
    image: immizest,

    techStack: ["HTML", "CSS", "JS", "WORDPRESS", "FIGMA"],
  },

  {
    id: 6,
    name: "Pcsudbury Business Website",
    description:
      "An interactive Business website for a Powder Coating Services for marketing and lead genration. Link: http://pcsudbury.com/",
    image: pcsudbury,
    techStack: ["HTML", "CSS", "JS", "WORDPRESS", "FIGMA"],
  },
  {
    id: 7,
    name: "WCTR Business Website",
    description:
      "An interactive website for WCTR college showcasing there cources and attract new student to get in contact with them via website. Link: https://wctrc.com/",
    image: wctr,
    techStack: ["HTML", "CSS", "JS", "WORDPRESS", "FIGMA"],
  },
  {
    id: 8,
    name: "NSW Business Website",
    description:
      "An interactive website for Northern Steel Works showcasing there Services and attract new Clients to get in contact with them via website.",
    image: nsw,
    techStack: ["HTML", "CSS", "JS", "WORDPRESS", "FIGMA"],
  },
 {
    id: 9,
    name: "Password Generator",
    description:
      "A secure password generator with advanced security features. Created Password Generator Website Pages Using HTML, CSS and JavaScript.",
    image: passwordGen,
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 10,
    name: "Razorpay Clone",
    description: "A modern Razorpay payment gateway clone.",
    image: razorpay,
    techStack: ["HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: 11,
    name: "Coffee Shop",
    description: "An interactive website for a coffee shop with online ordering.",
    image: coffeeshop,
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Git",
      "Express",
      "MongoDB",
      "Vercel",
      "Tailwind CSS",
      "GitHub",
      "Render",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
];
