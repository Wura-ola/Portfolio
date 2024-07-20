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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aut
          dicta ad sit repudiandae reiciendis explicabo cupiditate, obcaecati
          quam nostrum sapiente culpa labore repellat voluptatibus esse laborum,
          nesciunt dolorum exercitationem minus, in quia? Eligendi aspernatur
          error voluptatum, quo quisquam nulla maiores animi quaerat incidunt.
          Animi delectus esse eaque sunt expedita, magnam iure atque voluptatem
          minima, at cum voluptates nesciunt ducimus.
        </p>
        <div>
          <button className="lg:px-16 px-10 py-2 border-none bg-violet-500 text-white text-md mr-5  ease-in-out hover:-translate-y-1 hover:scale-100 duration-300">
            Hire Me
          </button>
          <button className="hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:text-white  hover:-translate-y-1  duration-300 ease-in-out lg:px-8 px-4 py-2 border border-violet-500  text-black text-md mr-5">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
