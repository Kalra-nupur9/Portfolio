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
    <div className="relative bg-color min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* BACKGROUND ANIMATION */}
      <div className="absolute inset-0 z-0">
        <FloatingLines />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-3xl">

        {/* Badge */}
        <div className="hero-badge mx-auto mb-4 justify-center">
          <FaCircle className="text-[8px]" />
          <span className="text-highlight">Available for Freelance</span>
        </div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hello, I’m
        </motion.h1>

        <motion.h2
          className="h5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          NUPUR KALRA
        </motion.h2>

        {/* Typed Text */}
        <div
          ref={typedRef}
          className="mt-4 text-xl md:text-2xl text-white font-medium min-h-[32px]"
        ></div>

        {/* Description */}
        <p className="mt-6 text-gray-100 leading-relaxed">
          I build modern, scalable, and user-focused web applications with a strong
          emphasis on performance and design.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">

          <button
            onClick={() => setOpenContact(true)}
            className="btn btn-red"
          >
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setOpenContact(false)}
        >
          <div
            className="w-full max-w-6xl max-h-[90vh] overflow-y-auto "
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