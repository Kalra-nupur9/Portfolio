import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  //   SiRedux,
  SiVercel,
  SiBootstrap,
  SiFigma,
} from "react-icons/si";
import techsetGo from "../assets/images/projects/techsetGo.png";
import passwordManager from "../assets/images/projects/PasswordManager.png";
import docMaster from "../assets/images/projects/Project1.png";
import coffeeshop from "../assets/images/projects/coffeeshop.png";
import passwordGen from "../assets/images/projects/passwordGen.png";
import razorpay from "../assets/images/projects/razorpay.png";

const MyProject = () => {
  return (
    <section className="bg-color" id="Project">
      <div className="h1 text-center">MY PROJECTS</div>
      <h3 className="h3 text-center">A Journey Through My Digital Creations</h3>

      <div className="grid grid-cols-1 gap-10 px-4 sm:px-8 md:grid-cols-1 lg:grid-cols-2 lg:px-16">
        {/* 01 Project */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105">
          <img
            src={techsetGo}
            alt="Project image"
            className="h-64 w-full object-cover transition-opacity duration-700 md:h-80"
          />
          <div className="topGrid border-main-red absolute inset-0 flex transform flex-col items-center justify-center rounded-2xl border-2 p-6 text-black backdrop-blur-[6px] transition-transform delay-400 duration-300 group-hover:translate-x-0 sm:translate-x-0 md:-translate-x-full">
            <div className="mb-6 grid grid-cols-1 pt-10 sm:grid-cols-1">
              <div className="grid transform grid-cols-7 items-center justify-center gap-6 transition duration-300 hover:scale-125">
                <FaHtml5 className="text-2xl text-orange-600 sm:text-3xl" />
                <FaCss3Alt className="text-2xl text-blue-500 sm:text-3xl" />
                <FaJs className="text-2xl text-yellow-500 sm:text-3xl" />
                <SiBootstrap className="text-2xl text-indigo-500 sm:text-3xl" />
                <FaNodeJs className="text-2xl text-green-500 sm:text-3xl" />
                <FaReact className="text-2xl text-blue-400 sm:text-3xl" />
                <SiFigma className="text-main-red text-2xl sm:text-3xl" />
                <FaGitAlt className="text-2xl text-orange-500 sm:text-3xl" />
                <SiExpress className="text-2xl text-gray-500 sm:text-3xl" />
                <SiMongodb className="text-2xl text-green-600 sm:text-3xl" />
                <SiVercel className="text-2xl text-black sm:text-3xl" />
                <SiNextdotjs className="text-2xl text-black sm:text-3xl" />
                <SiTailwindcss className="text-2xl text-teal-500 sm:text-3xl" />
                <FaGithub className="text-2xl text-black sm:text-3xl" />
              </div>
            </div>
            <h1 className="text-main-red py-4 text-2xl font-bold opacity-100 transition-opacity delay-200 duration-700 md:text-3xl md:opacity-0 md:group-hover:opacity-100">
              Name: Tech Set Go
            </h1>
            {/* about the project */}
            <p className="hidden text-justify text-sm opacity-100 transition-opacity delay-200 duration-700 sm:block md:text-base md:opacity-0 md:group-hover:opacity-100">
              Tech Set Go empowers aspiring developers and tech professionals with expert training,
              mentorship, and hands-on development services, bridging the gap between education and
              industry.
            </p>
          </div>
          <p className="text-main-red absolute top-0 left-0 rounded-br-full bg-white ps-2 pe-8 pb-5 text-5xl font-bold opacity-0 shadow-lg transition-opacity delay-200 duration-700 group-hover:opacity-100 md:text-8xl">
            01
          </p>
        </div>
        {/* 02 Project */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105">
          <img
            src={passwordManager}
            alt="Project image"
            className="h-64 w-full object-cover transition-opacity duration-700 md:h-80"
          />
          <div className="topGrid border-main-red absolute inset-0 flex transform flex-col items-center justify-center rounded-2xl border-2 p-6 text-black backdrop-blur-[6px] transition-transform delay-400 duration-300 group-hover:translate-x-0 sm:translate-x-0 md:-translate-x-full">
            <div className="mb-6 grid grid-cols-1 pt-10">
              <div className="grid transform grid-cols-7 items-center justify-center gap-6 transition duration-300 hover:scale-125">
                <FaHtml5 className="text-2xl text-orange-600 sm:text-3xl" />
                <FaCss3Alt className="text-2xl text-blue-500 sm:text-3xl" />
                <FaJs className="text-2xl text-yellow-500 sm:text-3xl" />
                <SiBootstrap className="text-2xl text-indigo-500 sm:text-3xl" />
                <FaNodeJs className="text-2xl text-green-500 sm:text-3xl" />
                <FaReact className="text-2xl text-blue-400 sm:text-3xl" />
                <SiFigma className="text-main-red text-2xl sm:text-3xl" />
                <FaGitAlt className="text-2xl text-orange-500 sm:text-3xl" />
                <SiExpress className="text-2xl text-gray-500 sm:text-3xl" />
                <SiMongodb className="text-2xl text-green-600 sm:text-3xl" />
                <SiVercel className="text-2xl text-black sm:text-3xl" />
                <SiNextdotjs className="text-2xl text-black sm:text-3xl" />
                <SiTailwindcss className="text-2xl text-teal-500 sm:text-3xl" />
                <FaGithub className="text-2xl text-black sm:text-3xl" />
              </div>
            </div>
            <h1 className="text-main-red py-4 text-center text-2xl font-bold opacity-100 transition-opacity delay-200 duration-700 md:text-3xl md:opacity-0 md:group-hover:opacity-100">
              Name: Password Manager
            </h1>
            <p className="hidden text-justify text-sm opacity-100 transition-opacity delay-200 duration-700 sm:block md:text-base md:opacity-0 md:group-hover:opacity-100">
              About Project: Password Manager wa a project made to save password in one place to
              proctice my full stack.
            </p>
          </div>
          <p className="text-main-red absolute top-0 left-0 rounded-br-full bg-white ps-2 pe-8 pb-5 text-5xl font-bold opacity-0 shadow-lg transition-opacity delay-200 duration-700 group-hover:opacity-100 md:text-8xl">
            02
          </p>
        </div>

        {/* 03 Project */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105">
          <img
            src={docMaster}
            alt="Project image"
            className="h-64 w-full object-cover transition-opacity duration-700 md:h-80"
          />
          <div className="topGrid border-main-red absolute inset-0 flex transform flex-col items-center justify-center rounded-2xl border-2 p-6 text-black backdrop-blur-[6px] transition-transform delay-400 duration-300 group-hover:translate-x-0 sm:translate-x-0 md:-translate-x-full">
            <div className="mb-6 grid grid-cols-1 pt-10">
              <div className="flex transform items-center justify-center gap-6 transition duration-300 hover:scale-125">
                <FaHtml5 className="text-2xl text-orange-600 sm:text-3xl" />
                <FaCss3Alt className="text-2xl text-blue-500 sm:text-3xl" />
                <FaJs className="text-2xl text-yellow-500 sm:text-3xl" />
                <SiBootstrap className="text-2xl text-indigo-500 sm:text-3xl" />
                <FaNodeJs className="text-2xl text-green-500 sm:text-3xl" />
                <FaReact className="text-2xl text-blue-400 sm:text-3xl" />
                <SiFigma className="text-main-red text-2xl sm:text-3xl" />
              </div>
            </div>
            <h1 className="text-main-red py-4 text-2xl font-bold opacity-100 transition-opacity delay-200 duration-700 md:text-3xl md:opacity-0 md:group-hover:opacity-100">
              Name: Docmaster.in
            </h1>
            <p className="hidden text-justify text-sm opacity-100 transition-opacity delay-200 duration-700 sm:block md:text-base md:opacity-0 md:group-hover:opacity-100">
              About Project: Website Monitoring: Maintained the high user experience level when
              analyzing and updating the design and functionality flaws. UI/UX Design: Formed easy
              and clear designs for Docmaster.in using Figma. Web Development: Developed and
              designed comprehensive webpages for Docmaster.in with HTML, CSS, React.js, and
              Node.js.
            </p>
          </div>

          <p className="text-main-red absolute top-0 left-0 rounded-br-full bg-white ps-2 pe-8 pb-5 text-5xl font-bold opacity-0 shadow-lg transition-opacity delay-200 duration-700 group-hover:opacity-100 md:text-8xl">
            03
          </p>
        </div>

        {/* 04 Project */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105">
          <img
            src={coffeeshop}
            alt="Project image"
            className="h-64 w-full object-cover transition-opacity duration-700 md:h-80"
          />
          <div className="topGrid border-main-red absolute inset-0 flex transform flex-col items-center justify-center rounded-2xl border-2 p-6 text-black backdrop-blur-[6px] transition-transform delay-400 duration-300 group-hover:translate-x-0 sm:translate-x-0 md:-translate-x-full">
            <div className="mb-6 grid grid-cols-1 pt-10">
              <div className="grid transform grid-cols-7 items-center justify-center gap-6 transition duration-300 hover:scale-125">
                <FaHtml5 className="text-2xl text-orange-600 sm:text-3xl" />
                <FaCss3Alt className="text-2xl text-blue-500 sm:text-3xl" />
                <FaJs className="text-2xl text-yellow-500 sm:text-3xl" />
                <SiBootstrap className="text-2xl text-indigo-500 sm:text-3xl" />
                <FaNodeJs className="text-2xl text-green-500 sm:text-3xl" />
                <FaReact className="text-2xl text-blue-400 sm:text-3xl" />
                <SiFigma className="text-main-red text-2xl sm:text-3xl" />
                <FaGitAlt className="text-2xl text-orange-500 sm:text-3xl" />
                <SiExpress className="text-2xl text-gray-500 sm:text-3xl" />
                <SiMongodb className="text-2xl text-green-600 sm:text-3xl" />
                <SiVercel className="text-2xl text-black sm:text-3xl" />
                <SiNextdotjs className="text-2xl text-black sm:text-3xl" />
                <SiTailwindcss className="text-2xl text-teal-500 sm:text-3xl" />
                <FaGithub className="text-2xl text-black sm:text-3xl" />
              </div>
            </div>
            <h1 className="text-main-red py-4 text-2xl font-bold opacity-100 transition-opacity delay-200 duration-700 md:text-3xl md:opacity-0 md:group-hover:opacity-100">
              Name: Coffee Moment
            </h1>
            <p className="hidden text-justify text-sm opacity-100 transition-opacity delay-200 duration-700 sm:block md:text-base md:opacity-0 md:group-hover:opacity-100">
              About Project: Coffee moment was a coffeeshop website with add to card and payment
              process option. It was a pratice Project.
            </p>
          </div>
          <p className="text-main-red absolute top-0 left-0 rounded-br-full bg-white ps-2 pe-8 pb-5 text-5xl font-bold opacity-0 shadow-lg transition-opacity delay-200 duration-700 group-hover:opacity-100 md:text-8xl">
            04
          </p>
        </div>
        {/* 05 Project */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105">
          <img
            src={passwordGen}
            alt="Project image"
            className="h-64 w-full object-cover transition-opacity duration-700 md:h-80"
          />
          <div className="topGrid border-main-red absolute inset-0 flex transform flex-col items-center justify-center rounded-2xl border-2 p-6 text-black backdrop-blur-[6px] transition-transform delay-400 duration-300 group-hover:translate-x-0 sm:translate-x-0 md:-translate-x-full">
            <div className="mb-6 grid grid-cols-1 pt-10">
              <div className="grid transform grid-cols-5 items-center justify-center gap-6 transition duration-300 hover:scale-125">
                <FaHtml5 className="text-2xl text-orange-600 sm:text-3xl" />
                <FaCss3Alt className="text-2xl text-blue-500 sm:text-3xl" />
                <FaJs className="text-2xl text-yellow-500 sm:text-3xl" />
                <SiVercel className="text-2xl text-black sm:text-3xl" />
                <FaGithub className="text-2xl text-black sm:text-3xl" />
              </div>
            </div>
            <h1 className="text-main-red py-4 text-center text-2xl font-bold opacity-100 transition-opacity delay-200 duration-700 md:text-3xl md:opacity-0 md:group-hover:opacity-100">
              Name: Password Genrator
            </h1>
            <p className="hidden text-justify text-sm text-white opacity-100 transition-opacity delay-200 duration-700 sm:block md:text-base md:opacity-0 md:group-hover:opacity-100">
              About Project: Website which genrate Passwords acording to your needs. you can set
              uppercase, Lowercase, Special caracter, and length of password and can also copy it.
              using HTML, CSS, Js
            </p>
          </div>
          <p className="text-main-red absolute top-0 left-0 rounded-br-full bg-white ps-2 pe-8 pb-5 text-5xl font-bold opacity-0 shadow-lg transition-opacity delay-200 duration-700 group-hover:opacity-100 md:text-8xl">
            05
          </p>
        </div>
        {/* 06 Project */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105">
          <img
            src={razorpay}
            alt="Project image"
            className="h-64 w-full object-cover transition-opacity duration-700 md:h-80"
          />
          <div className="topGrid border-main-red absolute inset-0 flex transform flex-col items-center justify-center rounded-2xl border-2 p-6 text-black backdrop-blur-[6px] transition-transform delay-400 duration-300 group-hover:translate-x-0 sm:translate-x-0 md:-translate-x-full">
            <div className="mb-6 grid grid-cols-1 pt-10">
              <div className="grid transform grid-cols-5 items-center justify-center gap-6 transition duration-300 hover:scale-125">
                <FaHtml5 className="text-2xl text-orange-600 sm:text-3xl" />
                <FaCss3Alt className="text-2xl text-blue-500 sm:text-3xl" />
                <SiVercel className="text-2xl text-black sm:text-3xl" />
                <SiTailwindcss className="text-2xl text-teal-500 sm:text-3xl" />
                <FaGithub className="text-2xl text-black sm:text-3xl" />
              </div>
            </div>
            <h1 className="text-main-red py-4 text-center text-2xl font-bold opacity-100 transition-opacity delay-200 duration-700 md:text-3xl md:opacity-0 md:group-hover:opacity-100">
              Name: Clone on Razorpay website
            </h1>
            <p className="hidden text-justify text-sm text-white opacity-100 transition-opacity delay-200 duration-700 sm:block md:text-base md:opacity-0 md:group-hover:opacity-100">
              About Project: Copy of html css design of Razorpay offical website
            </p>
          </div>
          <p className="text-main-red absolute top-0 left-0 rounded-br-full bg-white ps-2 pe-8 pb-5 text-5xl font-bold opacity-0 shadow-lg transition-opacity delay-200 duration-700 group-hover:opacity-100 md:text-8xl">
            06
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyProject;
