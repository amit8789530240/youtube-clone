import React, { useEffect, useState } from "react";
import { api_key, videoListAPIEndpoint } from "../constants/yt-apis";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showNavBar } from "../redux-store/viewNavBarSlice";

const Body = () => {
  const [videoListAPIResponse, setVideoListAPIResponse] = useState([]);
  const dispatcher = useDispatch();
  dispatcher(showNavBar());
  const callYoutubeAPI = async () => {
    try {
      const response = await fetch(videoListAPIEndpoint + api_key);
      const json = await response.json();

      setVideoListAPIResponse((prev) => [...Object.values(json?.items || [])]);
    } catch (error) {
      console.error("Failed to fetch video details:", error);
    }
  };
  useEffect(() => {
    callYoutubeAPI();
  }, []);

  return (
    // <div className='bg-gray-200'>Body</div>
    // <VideoCard keys={0} item={videoListAPIResponse[0]} />
    <div
      key="videolibrary"
      className="w-full flex flex-wrap justify-start gap-4 overflow-y-auto"
    >
      {videoListAPIResponse.map((itm, idx) => (
        <Link key={"linkfor_" + itm?.id} to={"/watch?v=" + itm?.id}>
          <VideoCard key={itm?.id} item={itm} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default Body;
