import React from "react";

const SubscribeCard = () => {
  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto text-center m-20">
        <h3 className="text-green-500 font-semibold mb-4">SUBSCRIBE</h3>
        <h1 className="text-[30px] font-bold mb-4">
          Subscribe to get the latest <br />
          news about us
        </h1>
        <p className="font-light mb-4">
          Please drop your email below to get daily update about what we do
        </p>
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="p-3 border border-gray-400 rounded-lg w-[450px]"
        />
        <button className="inline-block p-2 bg-orange-500 rounded-lg ml-[-100px] text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeCard;
