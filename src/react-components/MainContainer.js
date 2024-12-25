import React from "react";
import LeftNavigation from "./LeftNavigation";
import Body from "./Body";

const MainContainer = () => {
  return (
    <div id="MainContainer" className="flex overflow-hidden">
      <LeftNavigation />
      <Body />
    </div>
  );
};

export default MainContainer;
