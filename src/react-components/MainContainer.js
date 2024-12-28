import React from "react";
import LeftNavigation from "./LeftNavigation";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div id="MainContainer" className="flex overflow-hidden">
      <LeftNavigation />
      <Outlet /> {/* <Body /> */}
    </div>
  );
};

export default MainContainer;
