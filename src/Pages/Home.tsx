// import  { useEffect } from 'react';
// import { toast } from 'react-toastify';
import HeroSection from "../components/HeroSection";
import CallOnAction from "../components/CallToAction";
// import { motion } from "framer-motion";
import ServicesSection from "./ServicesSection";
import Feedback from "./Feedback";

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
      <HeroSection />
     
      <hr />
      <ServicesSection />
      <hr />
      <CallOnAction />
      {/* <Feedback/> */}
    </div>
  );
};

export default Home;
