import "./App.css";

import ContactMe from "./Pages/ContactMe";
import Footer from "./components/Footer";

import MyProject from "./Pages/MyProject";
import MySkills from "./Pages/MySkills";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Feedback from "./Pages/Feedback";

import Faqs from "./Pages/Faqs";
import Pricing from "./components/Pricing";
import NotFound from "./Pages/NotFound";
import FeedbackAdmin from "./Pages/FeedbackAdmin";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddFeedback from "./Pages/AddFeedback";

function App() {
  return (


    <>
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/feedbackAdmin" element={<FeedbackAdmin />} />
        <Route path="/projects" element={<MyProject />} />
        <Route path="/skills" element={<MySkills />} />
        {/* <Route path="/faqs" element={<Faqs />} />
        <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="/contactme" element={<ContactMe />} />
        {/* <Route path="/addFeedback" element={<AddFeedback/>} /> */}
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <Footer />
    </Router>
     <ToastContainer position="top-center" autoClose={3000} /></>
  );
}

export default App;
