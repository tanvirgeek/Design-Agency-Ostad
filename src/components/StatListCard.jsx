import Image from "next/image";
import React from "react";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/StatList");
  if (!res.ok) {
    throw new Error("Something went Wrong while fetching Allservices");
  }
  return res.json();
}

const StatListCard = async () => {
  const JSON = await getData();
  const statImage = () => {
    return (
      <div className="p-6 bg-themeColor rounded-md m-2 flex">
        <Image
          src={"/stats.png"}
          alt="Stat"
          width={60}
          height={60}
          className="justify-end"
        />
      </div>
    );
  };
  return (
    <div className="w-full py-20">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row gap-3 justify-between">
          <div className="p-5 md:px-20 text-center shadow-md rounded-md">
            {statImage()}
            <h2 className="font-bold">{JSON["followers"]}</h2>
            <h3>Followers</h3>
          </div>

          <div className="p-5 md:px-20 text-center shadow-md rounded-md">
            {statImage()}
            <h2 className="font-bold">{JSON["solved"]}</h2>
            <h3>Solved Problems</h3>
          </div>

          <div className="p-5 md:px-20 text-center shadow-md rounded-md">
            {statImage()}
            <h2 className="font-bold">{JSON["customers"]}</h2>
            <h3>Happy Customers</h3>
          </div>

          <div className="p-5 md:px-20 text-center shadow-md rounded-md">
            {statImage()}
            <h2 className="font-bold">{JSON["projects"]}</h2>
            <h3>Projects</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatListCard;
