import Image from "next/image";
import React from "react";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/HeroList");
  if (!res.ok) {
    throw new Error("Something went Wrong while fetching projects");
  }
  return res.json();
}

const Hero = async () => {
  const data = await getData();
  return (
    <div className="w-full bg-themeColor">
      <div className="w-10/12 mx-auto flex p-5">
        <div className="flex-1">
          <h1 className="font-bold text-[50px]">{data["title"]}</h1>
          <h2 className="my-10">{data["description"]}</h2>
          <button className="bg-green-600 px-5 py-2 text-white rounded-lg">
            Get Started
          </button>
        </div>
        <div className="flex-1 h-[400px] mb-5">
          <div className="flex w-full h-1/2 gap-5 mb-5">
            <div className="relative flex-1 p-2">
              <Image
                src={data["image1"]}
                alt="Hero Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative flex-1 p-2">
              <Image
                src={data["image2"]}
                alt="Hero Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex w-full h-1/2 gap-5">
            <div className="relative flex-1 p-2">
              <Image
                src={data["image3"]}
                alt="Hero Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative flex-1 p-2">
              <Image
                src={data["image4"]}
                alt="Hero Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
