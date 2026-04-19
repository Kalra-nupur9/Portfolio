import { motion } from "framer-motion";
import ContactDetails from "./ContactDetails";

const ContactModal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-card-bg p-6 rounded-xl w-[90%] max-w-3xl relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl"
        >
          ✕
        </button>

        <ContactDetails />
      </motion.div>
    </div>
  );
};

export default ContactModal;