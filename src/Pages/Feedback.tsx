import ClientFeedback from "../components/ClientFeedback";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Feedback = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-color">
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

        

        <div className="btn-div">
          <button className="btn btn-blue" onClick={() => navigate("/addFeedback")}>
            Add Feedback
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Feedback;
