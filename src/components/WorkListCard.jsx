import Image from "next/image";
import React from "react";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/WorkList");
  if (!res.ok) {
    throw new Error("Something went Wrong while fetching Worklist");
  }
  return res.json();
}

const WorkListCard = async () => {
  const JSON = await getData();
  return (
    <div className="w-full my-20">
      <div className="w-10/12 mx-auto">
        <h3 className="text-green-700 text-[15px] mb-1 font-bold">WORKLIST</h3>
        <h1 className="text-[30px] font-bold mb-4">
          We provide the Perfect Solution to <br /> your business growth
        </h1>
        <div className="flex gap-3 mt-3">
          {JSON.map((item, index) => {
            return (
              <div key={index} className="my-3">
                <Image src={"/Heart.png"} alt="Heart" width={100} height={60} />
                <h2 className="font-semibold my-2">{item["title"]}</h2>
                <p className="mb-4">{item["des"]}</p>
                <span className="font-bold">Learn More &rarr;</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkListCard;
