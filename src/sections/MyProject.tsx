import Project from "../components/Project";
import { motion } from "framer-motion";
import { useState } from "react";


const MyProjects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <section className="bg-color-sec1and2 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="heading-section">
              
              <div className="all-badge">portfolio</div>
              <h1 className="h1">
                Featured <span className="text-main-color">Projects</span>{" "}
              </h1>{" "}
              {/* <h3 className="h3">A Journey Through My Digital Creations</h3> */}
              <div className="flex justify-center mt-3">
  <div className="h-[3px] w-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full animate-pulse"></div>
</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="">
              {" "}
              <Project showAll={showAll} />
            </div>
            <div className="mt-10 flex justify-center">
              <button onClick={() => setShowAll(!showAll)} className="btn btn-white">
                {showAll ? "Show Less" : "View More Projects"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default MyProjects;
