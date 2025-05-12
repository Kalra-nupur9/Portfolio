import { FaCheckDouble } from "react-icons/fa6";
import { motion } from "framer-motion";
const Pricing=()=> {
  const pricingPlans = [
    {
      title: "Basic Website",
      price: "₹10,000 - ₹25,000",
      features: [
        "1–5 Pages",
        "Responsive Design",
        "Basic SEO Optimization",
        "Delivery in 5–10 Days",
      ],
    },
    {
      title: "Standard Website",
      price: "₹30,000 - ₹60,000",
      features: [
        "5–10 Pages",
        "Custom UI/UX Design",
        "Advanced SEO & Speed Optimization",
        "Basic CMS Integration",
        "Delivery in 10–20 Days",
      ],
      highlight: true,
    },
    {
      title: "Premium Web App",
      price: "₹70,000+",
      features: [
        "Fully Custom Web Application",
        "Frontend & Backend Development",
        "API Integration & Database Management",
        "Performance & Security Optimization",
        "Delivery in 20–40 Days",
      ],
    },
  ];

  return (
    <div className="bg-color">

<motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="heading-section">
          <h1 className="h1">Pricing</h1>
          <h3 className="h3">Get Yourself the best deal. NOW!!!!</h3>
        </div>
      <div className="p-1 sm:p-0">
        <div className="plans-div">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-card ">
              <h3 className="h3">{plan.title}</h3>
              <p className="price-tag">{plan.price}</p>
              <ul className="features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="features-li">
                    <FaCheckDouble className="included-check" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-red">Get Started</button>
            </div>
          ))}
        </div>
      </div>

      <div className=" p-1 sm:px-18 sm:py-10">
        {" "}
       <p className="note-div"> <span className=" font-bold text-lg">NOTE:</span> Before we begin, please be aware that the project scope, timelines, revisions, payment
        terms, and post-delivery support will be discussed and agreed upon in advance. Any
        additional work beyond the initial agreement may incur extra charges. <a href="terms&conditions" className=" link"> terms & conditions</a> For more details, feel
        free to reach out <a href="/contactme" className="link" target="_blank">Click Here</a></p>
      </div>
        </motion.div>
       
    </div>
  );
}

export default Pricing;
