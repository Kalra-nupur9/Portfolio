// import  { useEffect } from 'react';
// import { toast } from 'react-toastify';
import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import CallOnAction from "../components/CallToAction";
// import { motion } from "framer-motion";
import ServicesSection from "../sections/ServicesSection";
import Feedback from "../components/Feedback";
import MyProjects from "../sections/MyProject";
import  AboutMe from "../sections/AboutMe";
// import ContactMe from "./ContactMe";

const Home = () => {
  // useEffect(() => {
  //   const shown = sessionStorage.getItem("welcomeToastShown");
  //   if (!shown) {
  //     toast.success("🎉 Welcome to the Portfolio!");
  //     sessionStorage.setItem("welcomeToastShown", "true");
  //   }
  // }, []);
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-color">
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-6 bottom-6 z-50 rounded-full bg-main-color p-3 text-white shadow-lg transition duration-300 hover:scale-110"
        >
          ↑
        </button>
      )}
      <section id="home">
        <HeroSection />
      </section>

      <section id="projects">
        <MyProjects />
      </section>

      <section id="aboutme">
        <AboutMe/>
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="contact">
        <CallOnAction />
      </section>
    </div>
  );
};

export default Home;
