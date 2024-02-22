import React from "react";

export default function Contact() {
  return (
    <div className="py-5 px-32 flex justify-between items-center text-start gap-x-32 ">
      <div>
        <div className="w-72 h-72 bg-black"></div>
      </div>
      <div>
        <h2 className="mb-2 text-xl"> Contact Details</h2>
        <hr className="h-px my-4 bg-violet-500 border-0" />
        <div>
          <p className="my-3 ">
            <span className="text-fuchsia-500">Phone:</span>
            07065564902
          </p>
          <p className="my-3 ">
            <span className="text-fuchsia-500">Address:</span>
            07065564902
          </p>
          <p className="my-3 ">
            <span className="text-fuchsia-500">Email:</span>
            olayitanfumi16@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
