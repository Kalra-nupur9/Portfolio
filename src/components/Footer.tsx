// import { FaInstagram } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FootLogo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="mx-auto">
        <div className="footer-container">
          {/* Links */}
          <div className="footer-menu">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
            <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>Projects</Link>
            <Link to="/skills" onClick={() => window.scrollTo(0, 0)}>Skills</Link>
            {/*<Link to="/feedback ">Feedback</Link>
               <Link to="/pricing ">Pricing</Link>
                <Link to="/faqs ">FAQs</Link> */}
            <Link to="/contactme" onClick={() => window.scrollTo(0, 0)}>Contact Me</Link>
          </div>

          {/* socials */}
          {/* <div className="socials">
            <FaInstagram className="text-white text-3xl cursor-pointer hover:text-pink-200" />

            <Link to="/" target="_blank">
              <FaGithub className="" />
            </Link>
            <Link to="/" target="_blank">
              <FaLinkedin />
            </Link>

            <Link to="/" target="_blank">
              {" "}
              <FaXTwitter />
            </Link>
          </div> */}
        </div>

        <Link to="/" className="flex justify-center">
          <img src={FootLogo} alt="" className="w-40" />
        </Link>
        <p className="text-pink-300">© 2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
