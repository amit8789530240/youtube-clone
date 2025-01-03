import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { hideNavBar } from "../redux-store/viewNavBarSlice";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import RelatedVideos from "./RelatedVideos";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");
  const dispatcher = useDispatch();
  dispatcher(hideNavBar());
  return (
    <div
      id="watchpage container"
      className="w-full h-full flex-col overflow-y-auto"
    >
      <div id="iframe and live-chat conatiner" className="h-[80%] w-full flex">
        <div id="iframe container" className="w-[70%] h-full my-4">
          <iframe
            className="rounded-xl w-full h-full px-1"
            src={"https://www.youtube.com/embed/" + videoID}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div
          id="live chat container"
          className="bg-yellow-50 shadow-xl border-l-2 h-full w-[30%] my-4"
        >
          <LiveChat />
        </div>
      </div>
      <p className="font-extrabold text-start mt-5 px-4">Comments</p>
      <div
        id="comments and related videos container container"
        className=" w-full flex"
      >
        <div id="comments container" className="w-[69%] mx-4 bg-red-400 mb-2">
          <Comments videoID={videoID} />
        </div>
        <div
          id="realted videos container"
          className="bg-green-300 mb-2 w-[30%]"
        >
          <RelatedVideos />
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
