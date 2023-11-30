import React from "react";

export const Footer = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="w-10/12 py-10 flex justify-between mx-auto">
        <div className="flex-1 flex flex-col gap-12">
          <h1 className="font-bold text-[30px]">WEB LOGO</h1>
          <p className="font-thin">
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </p>
          <p className="font-semibold">
            Copyright Design Agency {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex-1">
          <div className="mx-auto md:w-6/12 flex flex-col gap-6">
            <h1>Quick Links</h1>
            <div>Service</div>
            <div>Portfolio</div>
            <div>About us</div>
            <div>Contact us</div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-full md:w-6/12 mx-auto">
            <h1 className="mb-6">Address</h1>
            <p className="font-thin text-sm">
              Design Agency Head Office. <br /> Airport Road United Arab Emirate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
