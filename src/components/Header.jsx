import React from "react";
import Nav from "./Nav";

function header() {
  return (
    <header className=" ">
      <Nav />
      <div className=" header text-white px-10 py-5 flex justify-center items-center align-middle h-screen">
        <div className="text-white items-center">
          <h1 className="lg:text-5xl font-bold text-xl tracking-widest mb-6">
            I'M WURAOLA ADEMOLA
          </h1>
          <h2 className=" lg:text-2xl text-xl flex items-start tracking-widest">
            Frontend Engineer
          </h2>
        </div>
      </div>
    </header>
  );
}

export default header;
