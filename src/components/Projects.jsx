import React from "react";
import Project1 from "../assets/Project1.jpg";
import Project2 from "../assets/Project2.jpg";
import Project3 from "../assets/Project3.jpg";
import Project4 from "../assets/Project4.jpg";
import clipboard from "../assets/clipboard.jpg";
import Project6 from "../assets/Project6.jpg";
function Projects() {
  return (
    <div className="py-5 lg:px-32 px-5" id="projects">
      <h2 className="mb-5 text-xl text-start">Recent Project</h2>
      <hr className="h-px my-4 bg-violet-500 border-0 w-1/2" />

      <div className=" grid md:grid-cols-3 gap-4">
        <div className=" shadow-md">
          <a href="https://tdt-foods-master-master.vercel.app/" target="_blank">
            <img src={Project1} alt="" />
          </a>
        </div>
        <div className=" shadow-md">
          <a
            href="https://interactive-comments-section-main-five.vercel.app/"
            target="_blank"
          >
            <img src={Project2} alt="" />
          </a>
        </div>
        <div className=" shadow-md">
          <a href="https://lafiya.vercel.app/" target="_blank">
            <img src={Project3} alt="" />
          </a>
        </div>
        <div className="mb-4 shadow-md">
          <a href="https://form-seven-cyan.vercel.app/" target="_blank">
            <img src={Project4} alt="" />
          </a>
        </div>
        <div className="mb-4 shadow-md">
          <a
            href="https://clipboard-landing-page-ebon.vercel.app/"
            target="_blank"
          >
            <img src={clipboard} alt="" />
          </a>
        </div>
        <div className="mb-4 shadow-md">
          <a
            href="https://loop-studio-landing-page-ten.vercel.app/"
            target="_blank"
          >
            <img src={Project6} alt="" />
          </a>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Projects;
