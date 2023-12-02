import Allservices from "@/components/Allservices";
import BreadCrump from "@/components/BreadCrump";
import SubscribeCard from "@/components/SubscribeCard";
import React from "react";

const Services = () => {
  return (
    <>
      <BreadCrump pageName="Services" />
      <Allservices />
      <SubscribeCard />
    </>
  );
};

export default Services;
