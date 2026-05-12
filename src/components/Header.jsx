import React from "react";
import Nav from "./Nav";
import Wura from "../assets/wura.png";

function header() {
  return (
    <header className="hero-header">
      <Nav />
      <div className="hero-main">
        <div className="hero-copy">
          <h1 className="hero-title lg:text-3xl font-bold text-xl tracking-widest mb-6">
            <span className="hero-title-line">I&apos;M </span>
            <span className="hero-title-accent">WURAOLA ADEMOLA</span>
          </h1>
          <h2 className="hero-subtitle mb-3 lg:text-xl text-xl flex items-start tracking-widest">
            Frontend Engineer
          </h2>
          <p className="hero-desc">
            {" "}
            I'm a passionate front-end developer based in Nigeria with a love
            for crafting beautiful and intuitive user experiences. My journey in
            web development started with a fascination for design and the
            desiren to bring creative ideas to life through code. Over the
            years, I've honed my skills to specialize in building responsive,
            user-friendly websites and applications. I write languages like
            HTML, CSS, React JavaScript. I make use of tool like Git,npm and
            Yarn
          </p>
        </div>
        <div className="hero-image-wrap">
          <img src={Wura} alt="" className="hero-image" />
        </div>
      </div>
    </header>
  );
}

export default header;
