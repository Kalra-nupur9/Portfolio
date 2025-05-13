import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
const ContactMe = () => {
  return (
    <div className="bg-color p-6">
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
          {/* <div className="heading-section">
            <h1 className="h1">CONTACT ME</h1>
            <h3 className="h3"> Questions, Thoughts, Or Just Want to Say Hello?</h3>
          </div> */}
        </motion.div>

        <div className="items-top flex w-full flex-col justify-evenly gap-4 sm:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <ContactDetails />
              </div>
            </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
            
            <ContactForm />
          </div>
          </motion.div> */}
         
        </div>
      </motion.div>
    </div>
  );
};

export default ContactMe;
