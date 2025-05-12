import  { useState } from "react";
import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { RiContactsBook3Line } from "react-icons/ri";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import LogoImage from "../assets/images/logo.png"
function Navbar() {
  const [isClick, setisClick] = useState(false);
  const ToggleNavMenu = () => {
    setisClick(!isClick);
  };
  return (
    <nav id="navBar" className="bg-color">
      <div className="nav-space">
        <div className="nav-bar">
         <Link to="/" className=" ">
            <img src={LogoImage} alt="" className="w-40 "/>
          </Link>
          

          <div className="hidden w-3/4 md:block">
            <div className="nav-menu">
             <Link to="/" className="nav-item">
                Home
              </Link>
             <Link to="/projects" className="nav-item">
                Projects
              </Link>
             <Link to="/skills" className="nav-item">
                Skills
              </Link>
             {/* <Link to="/feedback" className="nav-item">
                Feedback
              </Link>
             <Link to="/pricing" className="nav-item">
                Pricing
              </Link>
              
             <Link to="/faqs" className="nav-item">
                FAQs
              </Link> */}
             <Link to="/contactme" className="nav-item">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              className="toggle-btn"
              onClick={ToggleNavMenu}
            >
              {isClick ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden  flex justify-end">
          <div className="w-full -space-y-1">
           <Link to="/" className="media-nav-items">
              Home <FaHome />
            </Link>
           <Link to="/projects" className="media-nav-items">
              Projects <GoProjectRoadmap />
            </Link>
           <Link to="/skills" className="media-nav-items">
              Skills <GiSkills />
            </Link>
           <Link to="/feedback" className="media-nav-items">
              Feedback <RiCustomerService2Line />

            </Link>
           <Link to="/pricing" className="media-nav-items">
              Pricing   

            </Link>
           <Link to="/faqs" className="media-nav-items">
                FAQs
              </Link>
           <Link to="/contactme" className="media-nav-items">
              Contact Me <RiContactsBook3Line />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
