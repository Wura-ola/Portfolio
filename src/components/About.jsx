import React from "react";
import ME from "../assets/ME.svg";

export default function About() {
  return (
    <div className="py-5 lg:px-32 p-5 lg:flex items-center text-start gap-x-48 ">
      <div className="flex">
        <div className=" hidden md:w-52 md:h-72 md:bg-black"></div>
        <img src={ME} alt="" className="md:-m-0 -m-34" />
      </div>
      <div id="about">
        <h2 className="mb-6 text-xl"> About Me</h2>
        <hr className="h-px my-8 bg-violet-500 border-0" />
        <p className="mb-6 lg:text-start text-12">
          I'm a passionate front-end developer based in Nigeria with a love for
          crafting beautiful and intuitive user experiences. My journey in web
          development started with a fascination for design and the desire to
          bring creative ideas to life through code. Over the years, I've honed
          my skills to specialize in building responsive, user-friendly websites
          and applications. I write languages like HTML, CSS, React JavaScript.
          I make use of tool like Git,npm and Yarn
        </p>
        <div>
          <button className="lg:px-16 px-10 py-2 border-none bg-violet-500 hover:bg-white  text-white text-md mr-5  hover:text-black hover:border hover:border-violet-500">
            Hire Me
          </button>
          {/* <button className="hover:bg-gradient-to-r from-violet-500 to-fuchsia-500  hover: duration-300 hover:ease-in-out lg:px- px-14 py-2 border border-violet-500  text-black text-md mr-5 hover:text-white">
            <a
              href="https://github.com/Wura-ola?tab=repositories"
              target="_blank"
            >
              GitHub
            </a>
          </button> */}
          <a
            href="https://github.com/Wura-ola?tab=repositories"
            target="_blank"
          >
            <button className="hover:bg-gradient-to-r from-violet-500 to-fuchsia-500  hover: duration-300 hover:ease-in-out lg:px-14 px-11 py-2 border border-violet-500  text-black text-md mr-5 hover:text-white">
              GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
