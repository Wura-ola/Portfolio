import React from "react";
import Nav from "./Nav";
import Hero from "../assets/image2.svg";

function header() {
  return (
    <header className=" ">
      <Nav />
      <div className=" header text-white px-10 py-5 flex justify-center items-center align-middle h-screen">
        <div className="text-white ">
          <p className="text-2xl tracking-widest">Hello Everyone</p>
          <h1 className="text-5xl tracking-widest">I'M WURAOLA ADEMOLA</h1>
          <h2 className="text-xl tracking-widest">Frontend Developer</h2>
        </div>
      </div>
    </header>
  );
}

export default header;
