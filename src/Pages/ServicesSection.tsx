import { Code, Palette, Zap, Target, Wrench, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: " UI/UX Design Prototyping",
      description:
        "Modern, responsive, and unique websites crafted from scratch to perfectly match your brand identity.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Business Website Development",
      description:
        "Complete websites for small businesses, portfolios, or startups—built using the latest technologies.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Website Redesign & Optimization",
      description: "Upgrade outdated websites for better speed, mobile experience, and design.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Landing Page Design",
      description: "High-converting landing pages for products, services, or events.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Maintenance & Updates",
      description:
        "Ongoing support to keep your website secure, up-to-date, and running smoothly without interruptions.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Form Integrations & Contact Systems",
      description:
        "Seamless integration of contact forms, newsletter signups, and third-party tools—hassle-free.",
      gradient: "from-teal-500 to-blue-500",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="bg-color px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={headerVariants} className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 uppercase md:text-7xl">
              What I Can Do
              <span className="h5 ps-3"> For You</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              I specialize in creating exceptional digital experiences that help businesses grow
              online. From custom designs to full-stack development, I've got you covered.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="group relative transform rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                ></div>

                {/* Icon Container */}
                <div
                  className={`inline-flex rounded-xl bg-gradient-to-br p-4 ${service.gradient} mb-6 text-white transition-transform duration-300 group-hover:scale-110`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-blue-dark mb-3 text-lg group-hover:text-gray-800 sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600 group-hover:text-gray-700">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={ctaVariants}
            className="mt-16 flex flex-col items-center justify-center"
          >
            <p className="text-center text-lg text-gray-600">Ready to bring your vision to life?</p>

            <Link to="/contactme" className="btn btn-blue flex items-center justify-center">
              Let's Work Together
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
