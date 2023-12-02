import BreadCrump from "@/components/BreadCrump";
import SubscribeCard from "@/components/SubscribeCard";
import TeamMembers from "@/components/TeamMembers";
import React from "react";

const Team = () => {
  return (
    <>
      <BreadCrump pageName="Team" />
      <TeamMembers />
      <SubscribeCard />
    </>
  );
};

export default Team;
