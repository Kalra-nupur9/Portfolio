import { JSX } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
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
} from "react-icons/si";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon: JSX.Element;
}

const TechStack: React.FC = () => {
  const techStack: TechItem[] = [
    { name: "Next.js", icon: <SiNextdotjs className="text-6xl text-black" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-6xl text-green-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-6xl text-green-500" /> },
    { name: "React", icon: <FaReact className="text-6xl text-blue-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-6xl text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-6xl text-gray-800" /> },
    { name: "Express", icon: <SiExpress className="text-6xl text-gray-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-6xl text-cyan-300" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-6xl text-indigo-500" /> },
    { name: "Redux", icon: <SiRedux className="text-6xl text-purple-600" /> },
    { name: "Vercel", icon: <SiVercel className="text-6xl text-black" /> },
    { name: "Figma", icon: <SiFigma className="text-main-red text-6xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-6xl text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-6xl text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-6xl text-yellow-500" /> },
    { name: "Render", icon: <SiRender className="text-2xl text-black sm:text-3xl" /> },
  ];

  return (
    <div className="tech-stack">
      <div className="stack">
        {techStack.map((tech, index) => (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div key={index} className="icon-div">
              {tech.icon}
              <p className="para">{tech.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
