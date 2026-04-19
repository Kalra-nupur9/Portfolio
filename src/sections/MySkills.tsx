import TechStack from "../components/TechStack";
import { motion } from "framer-motion";
const MySkills = () => {
  return (
    <>
      <div className="bg-color p-5 sm:p-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="skills-container">
            <div className="">
              {/* skill details */}
              <div>
                <div className="mb-10">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h1 className="text-4xl text-center font-semibold text-white uppercase sm:text-5xl md:text-6xl">Where <span className="text-main-color"> Design</span> Meets <span className="text-cyan-color"> Development</span></h1>

                    
                    
                    <div className="mt-3 flex justify-center">
                      <div className="h-[3px] w-16 animate-pulse rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"></div>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="space-y-4">
                    <p className="para">
                      I am a passionate and self-motivated software developer with hands-on
                      experience in building and deploying websites. I’ve worked as a freelancer,
                      honing my skills in full-stack web development, and have successfully
                      delivered projects tailored to meet client needs. My journey in web
                      development is driven by a strong commitment to creating intuitive and
                      impactful user experiences.
                    </p>
                    <p className="para">
                      My tech stack includes HTML, CSS, JavaScript, React, Next.js, Node.js,
                      MongoDB, and TypeScript with version control expertise in Git and GitHub. I’ve
                      developed e-commerce platforms, dynamic portfolios, and other responsive
                      projects that emphasize scalability and user-focused design.
                    </p>
                    <p className="para">
                      I’ve also completed practice projects like a task manager with React, a blog
                      platform with Next.js, and RESTful APIs using Node.js and Express, further
                      enhancing my technical proficiency, debugging, and problem-solving skills.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            

           
          </div>
          
        </motion.div>
      </div>
      <TechStack/>
    </>
  );
};

export default MySkills;
