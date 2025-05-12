import React, { useState } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast } from 'react-toastify';

const CallToAction = () => {
  const [email, setEmail] = useState<string>("");

  // prevent invalid email entries
  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // triggered when the form is submitted
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // prevents the default form submission
    e.preventDefault();

    if (!isValidEmail(email)) {
      // error alert
      toast.error("Please Check the Email is not Correct!");
    
      return;
    }


    toast.success("Your email has been submitted! Please wait, I'll contact you via email. Soon <3");

    // reset to an empty string.
    setEmail("");
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // run animation once
    threshold: 0.2,
  });

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
              {/* bg balls */}
              <div className="absolute top-0 left-0 rounded-full bg-pink-300 p-24 opacity-50 md:left-10"></div>
              <div className="absolute right-10 bottom-5 rounded-full bg-pink-300 p-16 opacity-50 md:right-20"></div>
              <div className="absolute top-10 left-20 rounded-full bg-pink-400 p-10 opacity-50 md:left-40"></div>
              <div className="absolute right-30 bottom-15 rounded-full bg-pink-600 p-24 opacity-50 md:right-60"></div>
              <div className="absolute top-20 left-40 rounded-full bg-white p-16 opacity-50 md:left-80"></div>
              <div className="absolute right-50 bottom-25 rounded-full bg-pink-400 p-12 opacity-50 md:right-96"></div>
              <div className="absolute top-30 left-60 rounded-full bg-pink-300 p-24 opacity-50 md:left-96"></div>
              <div className="absolute right-70 bottom-35 rounded-full bg-pink-300 p-16 opacity-50"></div>
              <div className="absolute top-40 left-80 rounded-full bg-pink-600 p-12 opacity-50"></div>

              {/* Content section*/}
              <section>
                <div className="action-content">
                  <header>
                    <h2 className="h2">Let’s Connect & Build Something Amazing! </h2>
                    <p className="para max-w-3xl">
                      Whether you need a stunning website, a seamless user experience, or expert web
                      development services, I'm here to help. Drop your email below, and I'll reach
                      out to discuss how we can turn your vision into reality.{" "}
                    </p>
                  </header>

                  <p className="quote">
                    "Great things start with a simple conversation. Let’s talk!"
                  </p>
                </div>
              </section>

              {/* Email Subscription Form */}
              <main>
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
              </main>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CallToAction;
