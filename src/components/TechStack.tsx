import { JSX } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiRedux,
  SiVercel,
  SiBootstrap,
  SiFigma,
  SiRender,
  SiTypescript,
} from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";

import { motion } from "framer-motion";
import LogoLoop from "./LogoLoop";
interface TechItem {
  name: string;
  icon: JSX.Element;
}

const TechStack: React.FC = () => {
  const logos = [
  { node: <SiNextdotjs className="text-5xl text-black" />, title: "Next.js" },
  { node: <SiMongodb className="text-5xl text-green-500" />, title: "MongoDB" },
  { node: <FaNodeJs className="text-5xl text-green-400" />, title: "Node.js" },
  { node: <FaReact className="text-5xl text-cyan-400" />, title: "React" },
  { node: <SiTypescript className="text-5xl text-blue-600" />, title: "TypeScript" },
  { node: <FaGitAlt className="text-5xl text-orange-500" />, title: "Git" },
  { node: <FaGithub className="text-5xl text-purple-700" />, title: "GitHub" },
  { node: <SiExpress className="text-5xl text-gray-400" />, title: "Express" },
  { node: <SiTailwindcss className="text-5xl text-cyan-300" />, title: "Tailwind" },
  { node: <SiBootstrap className="text-5xl text-purple-500" />, title: "Bootstrap" },
  { node: <TbBrandVite className="text-5xl text-purple-400" />, title: "Vite" },
  { node: <SiVercel className="text-5xl text-purple-900" />, title: "Vercel" },
  { node: <SiFigma className="text-5xl text-pink-500" />, title: "Figma" },
  { node: <FaHtml5 className="text-5xl text-orange-500" />, title: "HTML" },
  { node: <FaCss3Alt className="text-5xl text-blue-500" />, title: "CSS" },
  { node: <FaJs className="text-5xl text-yellow-400" />, title: "JavaScript" },
  { node: <SiRender className="text-5xl text-black" />, title: "Render" },
  { node: <FaWordpress className="text-5xl text-blue-400" />, title: "WordPress" },
  { node: <SiRedux className="text-5xl text-purple-400 " />, title: "Redux" },
];

  return (
    <div className=" w-full overflow-hidden ">
      <div className="relative ">
        {/* glow */}
        <div className="absolute inset-0 bg-bg3"></div>

        <div className="relative z-10">
           <LogoLoop
        logos={logos}
        speed={90}
        direction="left"
        logoHeight={70}
        gap={75}
        hoverSpeed={30}
        scaleOnHover
        fadeOut
        fadeOutColor="#0b0b0f"
        ariaLabel="Technology partners"
      />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
