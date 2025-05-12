import Project from "../components/Project";
import { motion } from "framer-motion";

const MyProjects = () => {
  return (
    <>
      <section className="bg-color">
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
            <h1 className="h1">MY PROJECTS</h1>{" "}
            <h3 className="h3">A Journey Through My Digital Creations</h3>
          </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="">
              {" "}
              <Project />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default MyProjects;
