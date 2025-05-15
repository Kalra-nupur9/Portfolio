import uiUx from "../assets/images/ui_ux.jpg";
import frontEnd from "../assets/images/frontend.jpg";
import shopify from "../assets/images/shopify.jpg";
import backend from "../assets/images/backEnd.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


interface Service {
  image: string;
  title: string;
  description: string;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      image: uiUx,
      title: "UI/UX Design",
      description: "Creating visually appealing and user-friendly designs.",
    },
    {
      image: frontEnd,
      title: "Front-End Development",
      description: "Building fast and responsive websites using React & Next.js.",
    },
    {
      image: shopify,
      title: "Shopify Development",
      description: "Custom Shopify themes and store optimization.",
    },
    {
      image: backend,
      title: "Backend Development",
      description: "Building secure and scalable backend solutions.",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // run animation once
    threshold: 0.2, 
  });

  return (
    <div className="bg-color">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="heading-section h1">Here’s What I Do</h2>

        <div className="grid gap-6 p-4 sm:p-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="rounded-lg bg-white border border-main-red p-2 shadow-lg">
              <img src={service.image} alt={service.title} className="h-60 w-full " />
              <h3 className="h3">{service.title}</h3>
              <p className="para">{service.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
