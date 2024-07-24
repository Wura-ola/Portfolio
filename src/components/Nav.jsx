import React from "react";
import Hamburger from "../assets/icons8-hamburger.svg";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <nav className=" fixed w-full bg-white flex justify-between lg:items-center lg:px-32 md:py-5  py-10 px-5 md:gap-0">
      <div className="lg:flex   lg:justify-between lg:w-full">
        <h1 className="text-black text-xl  ">
          <span className="gradient-text-violet">W</span>
          uraola.
        </h1>

        <li className={`mobile_menu ${isOpen ? "is-open" : ""}`}>
          <ul className="  lg:flex  lg:items-center lg:gap-6 ">
            <li>
              <a
                href="#"
                className="  transition ease-in duration-300 hover:ease-out hover:text-fuchsia-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="transition ease-in duration-300 hover:ease-out hover:text-fuchsia-500"
              >
                About
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-fuchsia-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-fuchsia-500">
                Contact Me
              </a>
            </li>
          </ul>
        </li>
      </div>

      <div className="toggle_bar  ">
        <img src={Hamburger} alt="" onClick={toggleMenu} />
      </div>
    </nav>
  );
}

export default Nav;
