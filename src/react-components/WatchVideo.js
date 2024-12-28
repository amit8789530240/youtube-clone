import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");
  return (
    <>
      <iframe
        className="rounded-2xl w-[70%]"
        width="100%"
        height="100%"
        src={"https://www.youtube.com/embed/" + videoID}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default WatchVideo;
