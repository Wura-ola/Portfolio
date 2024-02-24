import React from "react";
import Hamburger from "../assets/icons8-hamburger.svg";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    // <nav className="fixed w-full bg-white flex justify-between items-center px-32 py-5  ">
    //   <h1 className="text-black text-xl">
    //     <span className="gradient-text-violet">W</span>
    //     uraola.
    //   </h1>
    //   <li className={`mobile_menu ${isOpen ? "is-open" : ""}`}>
    //     <ul className=" flex justify-between items-center gap-4">
    //       <li>
    //         <a
    //           href="#"
    //           className="transition ease-in duration-300 hover:ease-out hover:text-fuchsia-500"
    //         >
    //           Home
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#"
    //           className="transition ease-in duration-300 hover:ease-out hover:text-fuchsia-500"
    //         >
    //           About
    //         </a>
    //       </li>

    //       <li>
    //         <a href="#" className="hover:text-fuchsia-500">
    //           Services
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" className="hover:text-fuchsia-500">
    //           Projects
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" className="hover:text-fuchsia-500">
    //           Contact Me
    //         </a>
    //       </li>
    //     </ul>
    //   </li>
    //   <div className="toggle_bar lg:hidden ">
    //     <img src={Hamburger} alt="" onClick={toggleMenu} />
    //   </div>

    // </nav>
    <nav className=" fixed w-full bg-white flex md:justify-between items-center lg:px-32 py-5 px-5 gap-44 md:gap-0">
      <h1 className="text-black text-xl ">
        <span className="gradient-text-violet">W</span>
        uraola.
      </h1>
      <li className={`mobile_menu ${isOpen ? "is-open" : ""}`}>
        <ul className=" hidden lg:flex  lg:items-center lg:gap-4 ">
          <li>
            <a
              href="#"
              className="transition ease-in duration-300 hover:ease-out hover:text-fuchsia-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition ease-in duration-300 hover:ease-out hover:text-fuchsia-500"
            >
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-fuchsia-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-fuchsia-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-fuchsia-500">
              Contact Me
            </a>
          </li>
        </ul>
      </li>
      <div className="toggle_bar lg:hidden ">
        <img src={Hamburger} alt="" onClick={toggleMenu} />
      </div>
    </nav>
  );
}

export default Nav;
