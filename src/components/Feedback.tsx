import ClientFeedback from "./ClientFeedback";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Feedback = () => {

  const navigate = useNavigate();
  return (
    <div className="px-20">
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
          <div className="heading-section">
            <h1 className="h1">Client Feedback</h1>
            <h3 className="h3">Thank You for Trusting Me </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ClientFeedback />
        </motion.div>

        

       
      </motion.div>
    </div>
  );
};

export default Feedback;
