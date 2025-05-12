// import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FootLogo from "../assets/images/footLogo.png";
const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="mx-auto">
        <div className="footer-container">
          {/* Links */}
          <div className="footer-menu">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/skills">Skills</a>
            {/* <a href="/feedback ">Feedback</a>
            <a href="/pricing ">Pricing</a>
            <a href="/faqs ">FAQs</a> */}
            <a href="/contactme">Contact Me</a>
          </div>

          {/* socials */}
          {/* <div className="socials">
            <FaInstagram className="text-white text-3xl cursor-pointer hover:text-pink-200" />

            <a href="/" target="_blank">
              <FaGithub className="" />
            </a>
            <a href="/" target="_blank">
              <FaLinkedin />
            </a>

            <a href="/" target="_blank">
              {" "}
              <FaXTwitter />
            </a>
          </div> */}
        </div>

        <a  href="/" className="flex justify-center">
          <img src={FootLogo} alt="" className="w-40" />
        </a>
        <p className="text-pink-300">© 2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
