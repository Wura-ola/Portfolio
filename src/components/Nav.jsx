import React from "react";
import Hamburger from "../assets/icons8-hamburger.svg";
import { useState } from "react";
import SiteLogo from "./SiteLogo.jsx";
import ThemeToggleButton from "./ThemeToggleButton.jsx";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <nav className="site-nav fixed top-0 left-0 right-0 z-50">
      <div className="nav-bar-inner">
        <SiteLogo />

        <div className={`nav-bar-links mobile_menu ${isOpen ? "is-open" : ""}`}>
          <ul className="nav-links-list">
            <li>
              <a
                href="#"
                className="nav-link nav-link-active transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="nav-link transition-colors duration-200"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="nav-link transition-colors duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-link transition-colors duration-200"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-bar-end">
          <ThemeToggleButton />
          <button
            type="button"
            className="toggle_bar"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <img src={Hamburger} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
