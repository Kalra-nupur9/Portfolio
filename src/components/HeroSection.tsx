import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import ContactDetails from "./ContactDetails";
import FloatingLines from "./FloatingLines";
import CV from "../assets/PDF/NK-CV.pdf";

const HeroSection = () => {
  const typedRef = useRef<HTMLDivElement | null>(null);
  const [openContact, setOpenContact] = useState(false);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Full Stack Developer",
          "Web Developer",
          "UI/UX Designer",
          "Backend Developer",
          "Frontend Specialist",
          "Problem Solver",
        ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
        showCursor: false,
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <div className="bg-color relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* BACKGROUND ANIMATION */}
      <div className="absolute inset-0 z-0">
        <FloatingLines />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl text-center">
        {/* Badge */}
        <div className="hero-badge mx-auto mb-4 justify-center">
          <FaCircle className="text-[8px]" />
          <span className="text-green-500">Available for Freelance</span>
        </div>

        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-white md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hello, I’m
        </motion.h1>

        <motion.h2
          className="from-cyan-color to-main-color mt-2 bg-gradient-to-r via-purple-400 bg-clip-text text-4xl font-extrabold text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] md:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          NUPUR KALRA
        </motion.h2>

        {/* Typed Text */}
        <div
          ref={typedRef}
          className="mt-4 min-h-[32px] text-xl font-medium text-white md:text-2xl"
        ></div>

        {/* Description */}
        <p className="mt-6 leading-relaxed text-gray-100">
          I build modern, scalable, and user-focused web applications with a strong emphasis on
          performance and design.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button onClick={() => setOpenContact(true)} className="btn btn-red">
            Contact Me →
          </button>

          <a href={CV} download className="btn btn-white">
            Download CV
          </a>
        </div>
      </div>

      {/*MODAL */}
      {openContact && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          onClick={() => setOpenContact(false)}
        >
          <div
            className="max-h-[90vh] w-full max-w-6xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <ContactDetails onClose={() => setOpenContact(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
