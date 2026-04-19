// import  { useEffect } from 'react';
// import { toast } from 'react-toastify';
import HeroSection from "../components/HeroSection";
import CallOnAction from "../components/CallToAction";
// import { motion } from "framer-motion";
import ServicesSection from "../sections/ServicesSection";
import Feedback from "../components/Feedback";
import MyProjects from "../sections/MyProject";
import MySkills from "../sections/MySkills";
// import ContactMe from "./ContactMe";

const Home = () => {
  // useEffect(() => {
  //   const shown = sessionStorage.getItem("welcomeToastShown");
  //   if (!shown) {
  //     toast.success("🎉 Welcome to the Portfolio!");
  //     sessionStorage.setItem("welcomeToastShown", "true");
  //   }
  // }, []);

  return (
    <div className="bg-color">
      <section id="home">
        <HeroSection  />
      </section>

      

      <section id="projects">
        <MyProjects />
      </section>

     

      <section id="skills">
        <MySkills />
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
