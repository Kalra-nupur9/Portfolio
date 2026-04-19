import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

import ContactDetails from "./ContactDetails";
const CallToAction = () => {
  const [email, setEmail] = useState<string>("");
  const [openContact, setOpenContact] = useState(false);

  // prevent invalid email entries
  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // triggered when the form is submitted
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // prevents the default form submission
    e.preventDefault();

    if (!isValidEmail(email)) {
      // error alert
      toast.error("Please Check the Email is not Correct!");

      return;
    }

    try {
      const res = await fetch("https://portfolio-backend-0gej.onrender.com/api/submit-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        toast.success("Email saved! I’ll contact you soon.");
        setEmail("");
      } else {
        toast.error("Something went wrong, try again later.");
      }
    } catch (err) {
      toast.error("Server not responding");
    }

    // reset to an empty string.
    setEmail("");
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // run animation once
    threshold: 0.2,
  });
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
    <>
      <div className="bg-color">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="action-bg">
            <div className="action-card">
              <div className="hero-bg"></div>
              <div className="hero-bg"></div>
              <div className="hero-bg"></div>
              <div className="hero-bg"></div>
              {/* bg balls */}
              {/* <div className="absolute top-0 left-0 rounded-full bg-pink-300 p-24 opacity-50 md:left-10"></div>
              <div className="absolute right-10 bottom-5 rounded-full bg-pink-300 p-16 opacity-50 md:right-20"></div>
              <div className="absolute top-10 left-20 rounded-full bg-pink-400 p-10 opacity-50 md:left-40"></div>
              <div className="absolute right-30 bottom-15 rounded-full bg-pink-600 p-24 opacity-50 md:right-60"></div>
              <div className="absolute top-20 left-40 rounded-full bg-white p-16 opacity-50 md:left-80"></div>
              <div className="absolute right-50 bottom-25 rounded-full bg-pink-400 p-12 opacity-50 md:right-96"></div>
              <div className="absolute top-30 left-60 rounded-full bg-pink-300 p-24 opacity-50 md:left-96"></div>
              <div className="absolute right-70 bottom-35 rounded-full bg-pink-300 p-16 opacity-50"></div>
              <div className="absolute top-40 left-80 rounded-full bg-pink-600 p-12 opacity-50"></div> */}

              {/* Content section*/}
              <section>
                <div className="action-content">
                  <header className="flex flex-col items-center text-center">
                    <div className="cta-badge">
                      <FaCircle className="text-[8px]" />
                      <span>Available for Freelance</span>
                    </div>
                    <h2 className="h2 text-center">Let’s Connect & Build Something Amazing! </h2>
                    <p className="para-center">
                      Whether you need a stunning website, a seamless user experience, or expert web
                      development services, I'm here to help. Drop your email, and I'll reach out to
                      discuss how we can turn your vision into reality.{" "}
                    </p>
                  </header>

                  <p className="quote">
                    "Great things start with a simple conversation. Let’s talk!"
                  </p>
                  <motion.div
                    variants={ctaVariants}
                    className="flex flex-col items-center justify-center"
                  >
                    {/* <p className="text-center text-lg text-gray-600">Ready to bring your vision to life?</p> */}

                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button onClick={() => setOpenContact(true)} className="btn btn-red">
                        Let's Work Together
                        <svg
                          className="ml-2 h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>

                      <a
                        href="mailto:nupurk.work@gmail.com?subject=Project Inquiry&body=Hi Nupur,"
                        className="btn btn-white"
                      >
                        Email Me
                      </a>
                    </div>
                  </motion.div>
                </div>
                {/*MODAL */}
                {openContact && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
                    onClick={() => setOpenContact(false)}
                  >
                    <div
                      className="max-h-[90vh] w-full max-w-6xl overflow-y-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ContactDetails onClose={() => setOpenContact(false)} />
                    </div>
                  </div>
                )}
              </section>

              {/* Email Subscription Form */}
              {/* <main>
                <form className="action-form" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="emailId"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    className="input"
                  />
                  <button type="submit" className="btn btn-blue">
                    Submit Now
                  </button>
                </form>
              </main> */}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CallToAction;
