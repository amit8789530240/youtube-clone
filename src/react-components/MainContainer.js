import React from "react";
import LeftNavigation from "./LeftNavigation";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const viewLeftNavigation = useSelector(
    (store) => store.viewNavBarSlice.visible
  );

  return (
    <div id="MainContainer" className="flex overflow-hidden h-full w-full">
      {/* <span>{viewLeftNavigation ? "true" : "false"}</span> */}
      {viewLeftNavigation && <LeftNavigation />}
      <Outlet /> {/* <Body /> */}
    </div>
  );
};

export default MainContainer;
