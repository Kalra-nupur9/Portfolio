import { useState } from "react";
import ContactDetails from "../components/ContactDetails";
import { motion } from "framer-motion";

const ContactMe = () => {
  const [showModal, setShowModal] = useState(true); // default open

  return (
    <div className="bg-color p-6">

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-5xl"
          >
            <ContactDetails onClose={() => setShowModal(false)} />
          </motion.div>

        </div>
      )}

    </div>
  );
};

export default ContactMe;