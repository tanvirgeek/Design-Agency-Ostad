import Image from "next/image";
import React from "react";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllProject");
  if (!res.ok) {
    throw new Error("Something went Wrong while fetching AllProject");
  }
  return res.json();
}

const AllProjectsComponent = async () => {
  const JSON = await getData();
  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto">
        <h3 className="text-green-700 text-[15px] mb-1 font-bold">
          All Projects
        </h3>
        <h1 className="text-[30px] font-bold mb-4">
          Better Agency/SEO Solution <br />
          At Your Fingertips
        </h1>
        <div className="grid grid-cols-2 gap-5">
          {JSON.map((item, index) => {
            return (
              <a href={item["live"]} target="_blank" key={index}>
                <div className="h-[400px] rounded overflow-hidden shadow-md p-5">
                  <div className="h-[70px]">
                    <div className="text-[20px] font-semibold mb-4 text-center">
                      {item["title"]}
                    </div>
                  </div>

                  <div className="relative h-[300px] w-full p-3 rounded-lg overflow-hidden">
                    <Image
                      src={item["image"]}
                      alt="All Projects Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProjectsComponent;
