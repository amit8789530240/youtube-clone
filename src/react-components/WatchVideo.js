import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { hideNavBar } from "../redux-store/viewNavBarSlice";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");
  const dispatcher = useDispatch();
  dispatcher(hideNavBar());
  return (
    <>
      <iframe
        className="rounded-xl w-[70%] h-[80%] m-4"
        src={"https://www.youtube.com/embed/" + videoID}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default WatchVideo;
