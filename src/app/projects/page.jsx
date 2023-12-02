import AllProjectsComponent from "@/components/AllProjectsComponent";
import BreadCrump from "@/components/BreadCrump";
import SubscribeCard from "@/components/SubscribeCard";
import React from "react";

const Projects = () => {
  return (
    <>
      <BreadCrump pageName="All Projects" />
      <AllProjectsComponent />
      <SubscribeCard />
    </>
  );
};

export default Projects;
