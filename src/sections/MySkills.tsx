import TechStack from "../components/TechStack";
import { motion } from "framer-motion";
import { AnimatedCounter } from "../components/AnimatedCounter";
const STATS = [
  { value: 20, suffix: "+", label: "Projects Shipped" },
  { value: 3, suffix: "+", label: "Years Building" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Client Focus" },
];
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
                    <div className="heading-section">
                      <div className="all-badge">About Me</div>
                      <h1 className="h1">
                        Where <span className="text-main-color"> Design</span> Meets{" "}
                        <span className="text-cyan-color"> Development</span>{" "}
                      </h1>{" "}
                      {/* <h3 className="h3">A Journey Through My Digital Creations</h3> */}
                      <div className="mt-3 flex justify-center">
                        <div className="h-[3px] w-16 animate-pulse rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mt-16 grid gap-8 lg:grid-cols-5">
                    {/* Bio card */}
                    <div className="lg:col-span-3">
                      <div className="glass-strong relative h-full overflow-hidden rounded-3xl p-8 sm:p-10 border border-main-color hover:shadow-[0_0_25px_rgba(124,58,237,0.4)]">
                        <div className="animate-float-slow pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[oklch(0.62_0.24_295/0.25)] blur-3xl" />
                        <div
                          className="animate-float-slow pointer-events-none absolute -bottom-24 -left-16 h-60 w-60 rounded-full bg-[oklch(0.78_0.15_200/0.20)] blur-3xl"
                          style={{ animationDelay: "2s" }}
                        />

                        <p className="text-gray-500 text-base leading-relaxed sm:text-lg">
                          I'm a passionate, self-motivated software developer with hands-on
                          experience building and shipping{" "}
                          <span className="text-main-color font-semibold">
                            production-ready websites
                          </span>
                          . As a freelancer I've sharpened my full-stack skills, delivering polished
                          products tailored to real client needs.
                        </p>
                        <p className="text-gray-500  mt-5 text-base leading-relaxed sm:text-lg">
                          My toolkit spans{" "}
                          <span className="text-gray-100  font-semibold">
                            React, Next.js, Node.js, MongoDB
                          </span>{" "}
                          and
                          <span className="text-gray-500  font-semibold"> TypeScript</span> — plus
                          solid Git/GitHub workflows. I've built e-commerce platforms, dynamic
                          portfolios, and responsive apps focused on scalability and user
                          experience.
                        </p>
                        <p className="text-gray-500 mt-5 text-base leading-relaxed sm:text-lg">
                          Side-projects like a React task manager, a Next.js blog, and Express REST
                          APIs keep my debugging and problem-solving sharp.
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 lg:col-span-2">
                      {STATS.map((stat, i) => (
                        <div
                          key={stat.label}
                          className="border border-main-color hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] group relative overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-brand)] opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
                          <div className="text-main-color text-4xl font-black tracking-tight sm:text-5xl">
                            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                          </div>
                          <div className="text-gray-500 /60 mt-2 text-xs font-medium tracking-wider uppercase">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <TechStack />
    </>
  );
};

export default MySkills;
