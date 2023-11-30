import Image from "next/image";
import React from "react";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TeamList");
  if (!res.ok) {
    throw new Error("Something went Wrong while fetching projects");
  }
  return res.json();
}

const TeamMembers = async () => {
  const JSON = await getData();
  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto">
        <h3 className="text-green-700 text-[15px] mb-1 font-bold">
          OUR TEAM MEMBERS
        </h3>
        <h1 className="text-[30px] font-bold mb-4">
          Check our awesome team <br />
          members
        </h1>

        <div className="grid grid-cols-3 gap-5">
          {JSON.map((item, index) => {
            return (
              <div
                key={index}
                className="h-[400px] rounded overflow-hidden shadow-md"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={item["image"]}
                    alt="Team Image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white py-4 text-center rounded-b-lg overflow-hidden font-bold">
                  {item["name"]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
