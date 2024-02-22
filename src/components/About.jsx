import React from "react";

export default function About() {
  return (
    <div className="py-5 px-32 flex justify-between items-center text-start gap-x-48 ">
      <div>
        <div className="w-60 h-72 bg-black"></div>
      </div>
      <div>
        <h2 className="mb-6 text-xl"> About Me</h2>
        <hr className="h-px my-8 bg-violet-500 border-0" />
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aut
          dicta ad sit repudiandae reiciendis explicabo cupiditate, obcaecati
          quam nostrum sapiente culpa labore repellat voluptatibus esse laborum,
          nesciunt dolorum exercitationem minus, in quia? Eligendi aspernatur
          error voluptatum, quo quisquam nulla maiores animi quaerat incidunt.
          Animi delectus esse eaque sunt expedita, magnam iure atque voluptatem
          minima, at cum voluptates nesciunt ducimus.
        </p>
        <div>
          <button className="px-16 py-2 border-none bg-violet-500 text-white text-md mr-5 ">
            Hire Me
          </button>
          <button className="hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:text-white px-8 py-2 border border-violet-500  text-black text-md mr-5">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
