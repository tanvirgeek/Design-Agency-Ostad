import Image from "next/image";
import React from "react";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
  if (!res.ok) {
    throw new Error("Something went Wrong while fetching FeaturedProject");
  }
  return res.json();
}

const FeaturedCard = async () => {
  const JSON = await getData();
  return (
    <div className="w-full bg-themeColor py-20">
      <div className="w-10/12 mx-auto">
        <h3 className="text-green-700 text-[15px] mb-1 font-bold">
          Featured Project
        </h3>
        <h1 className="text-[30px] font-bold mb-4">
          We provide the Perfect Solution <br /> to your business growth
        </h1>
        <div className="grid grid-cols-3 gap-3">
          <div className="row-span-2">
            <div className="relative h-[400px] w-full p-3 rounded-lg overflow-hidden">
              <Image
                src={JSON[0]["image"]}
                alt="All Projects Image"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-sm mt-1">April 09, 2022</span>
            <h2 className="font-bold">{JSON[0]["title"]}</h2>
          </div>
          <div>
            <div className="relative h-[200px] w-full p-3 rounded-lg overflow-hidden">
              <Image
                src={JSON[1]["image"]}
                alt="All Projects Image"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-sm mt-1">April 09, 2022</span>
            <h2 className="font-bold py-1">{JSON[1]["title"]}</h2>
          </div>
          <div>
            <div className="relative h-[200px] w-full p-3 rounded-lg overflow-hidden">
              <Image
                src={JSON[2]["image"]}
                alt="All Projects Image"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-sm mt-1">April 09, 2022</span>
            <h2 className="font-bold py-1">{JSON[2]["title"]}</h2>
          </div>
          <div>
            <div className="relative h-[200px] w-full p-3 rounded-lg overflow-hidden">
              <Image
                src={JSON[3]["image"]}
                alt="All Projects Image"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-sm mt-1">April 09, 2022</span>
            <h2 className="font-bold py-1">{JSON[3]["title"]}</h2>
          </div>
          <div>
            <div className="relative h-[200px] w-full p-3 rounded-lg overflow-hidden">
              <Image
                src={JSON[4]["image"]}
                alt="All Projects Image"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-sm mt-1">April 09, 2022</span>
            <h2 className="font-bold py-1">{JSON[4]["title"]}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
