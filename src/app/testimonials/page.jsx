import BreadCrump from "@/components/BreadCrump";
import SubscribeCard from "@/components/SubscribeCard";
import TestimonialComponent from "@/components/TestimonialComponent";
import React from "react";

const Testimonials = () => {
  return (
    <>
      <BreadCrump pageName="Testimonial" />
      <TestimonialComponent />
      <SubscribeCard />
    </>
  );
};

export default Testimonials;
