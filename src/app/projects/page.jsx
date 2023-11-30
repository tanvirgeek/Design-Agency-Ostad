import AllProjectsComponent from "@/components/AllProjectsComponent";
import BreadCrump from "@/components/BreadCrump";
import React from "react";

const Projects = () => {
  return (
    <>
      <BreadCrump pageName="All Projects" />
      <AllProjectsComponent />
    </>
  );
};

export default Projects;
