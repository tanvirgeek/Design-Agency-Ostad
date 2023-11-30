"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BreadCrump = (props) => {
  const router = useRouter();
  return (
    <div className="w-10/12 mx-auto h-[150px]">
      <h1 className="text-[40px] font-bold">{props.pageName}</h1>
      <div className="flex justify-start gap-3">
        <span
          onClick={() => {
            router.replace("/");
          }}
          className="font-bold cursor-pointer"
        >
          Home
        </span>
        <span className="font-bold">&gt;</span>
        <span className="font-bold text-green-600">{props.pageName}</span>
      </div>
    </div>
  );
};

export default BreadCrump;
