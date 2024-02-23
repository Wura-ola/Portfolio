import React from "react";
import ME from "../assets/ME.svg";
export default function Contact() {
  return (
    <div className="py-5 px-32 flex justify-between items-center text-start gap-x-30 ">
      <div className="flex">
        <div className="w-60 h-60 bg-black"></div>
        <img src={ME} alt="" className="-m-36" />
      </div>
      <div>
        <h2 className="mb-2 text-xl"> Contact Details</h2>
        <hr className="h-px my-4 bg-violet-500 border-0" />
        <div>
          <p className="my-3 ">
            <span className="text-fuchsia-500 mr-3">Phone:</span>
            07065564902
          </p>
          <p className="my-3 ">
            <span className="text-fuchsia-500 mr-3">Address:</span>
            The Destiny Trust, Bogije Ibeju-Lekki, Lagos, Nigeria.
          </p>
          <p className="my-3 ">
            <span className="text-fuchsia-500 mr-3">Email:</span>
            olayitanfumi16@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
