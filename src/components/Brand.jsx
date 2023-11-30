import Image from "next/image";
import React from "react";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/BrandList");
  if (!res.ok) {
    throw new Error("Something went Wrong while fetching projects");
  }
  return res.json();
}

const Brand = async () => {
  const JSON = await getData();
  return (
    <div className="w-full py-10 bg-themeColor">
      <div className="w-full bg-themeGray py-5">
        <div className="w-10/12 flex mx-auto flex-col md:flex-row gap-5 md:gap-1">
          {JSON.map((item, index) => {
            return (
              <div key={index} className="flex-1 gap-5">
                <div className="relative w-[250px] h-[50px]">
                  <Image src={item["image"]} alt="Brand Image" fill />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brand;
