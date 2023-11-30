import Image from "next/image";
import React from "react";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TestimonialList");
  if (!res.ok) {
    throw new Error("Something went Wrong while fetching AllProject");
  }
  return res.json();
}

const TestimonialComponent = async () => {
  const JSON = await getData();
  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto">
        <h3 className="text-green-700 text-[15px] mb-1 font-bold">
          Testimonial List
        </h3>
        <h1 className="text-[30px] font-bold mb-4">
          Better Agency/SEO Solution <br />
          At Your Fingertips
        </h1>
        <div className="grid grid-cols-3 gap-3 my-2">
          {JSON.map((item, index) => {
            return (
              <div
                key={index}
                className="h-[400px] rounded overflow-hidden shadow-md p-5"
              >
                <div>
                  <div className="text-[20px] font-semibold mb-4 text-center">
                    {item["name"]}
                  </div>
                  <div className="text-[14px] text-center">
                    {item["designation"]}
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
