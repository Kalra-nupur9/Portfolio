import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import dots from "../assets/images/userAsset/dots.png";
import cube from "../assets/images/userAsset/cube.png";
import circle from "../assets/images/userAsset/circle.png";
import zigzags from "../assets/images/userAsset/zigzags.png";
import CV from "../assets/PDF/NK-CV.pdf";
import plus from "../assets/images/userAsset/plus.png";
import programming from "../assets/images/userAsset/Programming.gif";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const typedRef = useRef<HTMLDivElement | null>(null);

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

      // Cleanup on unmount
      return () => typed.destroy();
    }
  }, []);

  return (
    <>
      <div className="bg-color py-9 sm:py-5">
        {/* HERO SECTION */}
        <div className="relative">
          {/* Faded Text */}

          <div className="hero-content">
            <div className="introduction-div">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1>Hello, I’m</h1>
                <h5 className="h5">NUPUR KALRA</h5>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="typed" ref={typedRef}></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="para max-w-2xl">
                  Welcome to my professional portfolio! Here, you can explore my journey as a
                  software developer, discover the skills I bring to the table, and see the projects
                  I’ve worked on. Feel free to reach out and connect !
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col gap-2 py-5 sm:flex-row">
                  <Link to="/contactme" className="btn btn-red">
                    Contact ME
                  </Link>
                  {/* <a href={CV} download className="btn btn-red">
                    Download PDF
                  </a> */}
                </div>
              </motion.div>
            </div>
            <div className="poster-div">
              {/* Floating Icons */}
              <img src={dots} alt="dots" className="dots absolute" />
              <img src={cube} alt="cube" className="cube absolute" />
              <img src={circle} alt="circle" className="circle absolute" />
              <img src={zigzags} alt="zigzag" className="zigzags absolute" />
              <img src={plus} alt="plus" className="plus absolute" />

              {/* Background Image */}
              <img src={programming} alt="Programming" className="duranion-1000 poster" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
