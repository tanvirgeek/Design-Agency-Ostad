import Image from "next/image";
import React from "react";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");
  if (!res.ok) {
    throw new Error("Something went Wrong while fetching Allservices");
  }
  return res.json();
}
const Allservices = async () => {
  const JSON = await getData();
  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto">
        <h3 className="text-green-700 text-[15px] mb-1 font-bold">
          OUR ALL SERVICES
        </h3>
        <h1 className="text-[30px] font-bold mb-4">
          We Provide Best Web design <br />
          services
        </h1>
        <div className="grid grid-cols-2 gap-5">
          {JSON.map((item, index) => {
            return (
              <div
                key={index}
                className="h-[400px] rounded overflow-hidden shadow-md p-5"
              >
                <div className="h-[90px]">
                  <div className="text-[20px] font-semibold mb-4">
                    {item["title"]}
                  </div>
                  <div className="text-[14px]">{item["tag"]}</div>
                </div>
                <div className="relative h-[250px]">
                  <div className="flex gap-2">
                    <div className="relative h-[120px] flex-[2]">
                      <Image
                        src={item["image1"]}
                        alt="Team Image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[120px] flex-[1]">
                      <Image
                        src={item["image2"]}
                        alt="Team Image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <div className="relative h-[120px] flex-1">
                      <Image
                        src={item["image3"]}
                        alt="Team Image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[120px] flex-1">
                      <Image
                        src={item["image4"]}
                        alt="Team Image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Allservices;
