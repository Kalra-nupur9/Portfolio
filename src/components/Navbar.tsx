import { useState, useEffect } from "react";
// import { FaHome } from "react-icons/fa";
// import { GoProjectRoadmap } from "react-icons/go";
// import { GiSkills } from "react-icons/gi";
// import { RiContactsBook3Line } from "react-icons/ri";
// import { RiCustomerService2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
  const [isClick, setisClick] = useState(false);
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ✅ ALWAYS SHOW ON HOME
      if (currentScrollY < 100) {
        setShowNav(true);
        clearTimeout(timeout);
        return;
      }

      // 🔼 scrolling UP
      if (currentScrollY < lastScrollY) {
        setShowNav(true);

        clearTimeout(timeout);

        timeout = setTimeout(() => {
          setShowNav(false);
        }, 5000);
      }

      // 🔽 scrolling DOWN
      else if (currentScrollY > lastScrollY) {
        setShowNav(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const ToggleNavMenu = () => {
    setisClick(!isClick);
  };
  return (
    <nav
      id="navBar"
      className={`fixed top-6 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 transition-all duration-500 ${
        showNav ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      }`}
    >
      <div className="nav-space">
        <div className="nav-bar">
          <Link to="/" className=" ">
            {/* <img src={LogoImage} alt="" className="w-40" /> */}
            <h3 className="to-main-color from-cyan-color md:text-2xl; inline-block bg-gradient-to-l bg-clip-text text-2xl font-semibold text-transparent sm:text-2xl">
              NUPUR KALRA
            </h3>
          </Link>

          <div className="hidden w-3/4 md:block">
            <div className="nav-menu">
              <a href="#home" className="nav-item">
                Home
              </a>
              <a href="#projects" className="nav-item">
                Projects
              </a>
              <a href="#skills" className="nav-item">
                Skills
              </a>
              <a href="#services" className="nav-item">
                Services
              </a>
              <a href="#contact" className="nav-item">
                Contact
              </a>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button className="toggle-btn" onClick={ToggleNavMenu}>
              {isClick ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
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
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isClick ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full items-center justify-between -space-y-1 rounded-2xl border border-white/20 bg-white/10 px-6 py-1 pt-2 pb-4 backdrop-blur-xl">
          <a href="#home" className="media-nav-items" onClick={() => setisClick(false)}>
            Home
          </a>
          <a href="#projects" className="media-nav-items" onClick={() => setisClick(false)}>
            Projects
          </a>
          <a href="#skills" className="media-nav-items" onClick={() => setisClick(false)}>
            Skills
          </a>
          <a href="#services" className="media-nav-items" onClick={() => setisClick(false)}>
            Services
          </a>
          <a href="#contact" className="media-nav-items" onClick={() => setisClick(false)}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
