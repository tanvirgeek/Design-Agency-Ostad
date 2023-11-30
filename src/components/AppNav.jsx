import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppNav = () => {
  return (
    <div className="w-full bg-themeColor">
      <div className="w-10/12 p-4 flex justify-between mx-auto flex-col md:flex-row">
        <div className="relative w-[117px] h-[33px] md:w-[176px] md:h-[50px]">
          <Image
            src={"/logo-web-agency.png"}
            alt="LOGO"
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 300px, 300px"
            className="top-0 left-0 w-full h-full"
          />
        </div>
        <div className="flex justify-between md:gap-10 gap-4 items-center cursor-pointer">
          <div>
            <Link href={"/"}>Home</Link>
          </div>
          <div>
            <Link href={"/team"}>Team</Link>
          </div>
          <div>
            <Link href={"/services"}>Services</Link>
          </div>
          <div>
            <Link href={"/projects"}>Projects</Link>
          </div>
          <div>
            <Link href={"/testimonials"}>Testimonial</Link>
          </div>
          <button className="px-5 py-2 border border-green-500 rounded-lg">
            Login
          </button>
          <button className="bg-green-600 px-5 py-2 text-white rounded-lg">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppNav;
