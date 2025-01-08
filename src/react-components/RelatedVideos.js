import React, { useEffect, useState } from "react";
import { api_key } from "../constants/yt-apis";
import { Link, useSearchParams } from "react-router-dom";

const RelatedVideoCard = ({ title, channelName, thumbnailURL, videoID }) => {
  return (
    <Link to={"/watch?v=" + videoID}>
      <div className="flex my-2 w-full h-[80px]">
        <div className="w-[30%]">
          <img
            src={thumbnailURL}
            alt="thumbnail"
            className="w-full h-full rounded-xl"
          ></img>
        </div>
        <div className="flex flex-col items-start w-[70%] pl-3">
          <p className="text-start text-sm">{title}</p>
          <p className="text-start font-semibold ring-slate-700">
            {channelName}
          </p>
        </div>
      </div>
    </Link>
  );
};

const RelatedVideos = () => {
  console.log("RELATED VIDEOS CALLED");
  const [searchParams] = useSearchParams();
  const [videoListFromCurrentChannel, setVideoListFromCurrentChannel] =
    useState([]);
  const videoID = searchParams.get("v");
  console.log("VIDEO ID=", videoID);

  const fetchVideosFromCurrentChannel = async () => {
    console.log("Api call from  related video component");
    const response = await fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=" +
        videoID +
        "&key=" +
        api_key
    );
    const json = await response.json();
    const channelID = json?.items[0]?.snippet?.channelId;

    console.log("channel id inside=", channelID);
    const response2 = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" +
        channelID +
        "&type=video&maxResults=50&key=" +
        api_key
    );
    const json2 = await response2.json();
    const data = json2?.items;
    console.log("related videos=", data);
    setVideoListFromCurrentChannel([...Object.values(data)]);
  };

  useEffect(() => {
    fetchVideosFromCurrentChannel();
    console.log("Related Videos-useeffect");
  }, [videoID]);
  return (
    <div
      className="max-h-screen overflow-y-scroll bg-gray-100 rounded-xl shadow-2xl"
      id="related videos container"
    >
      {console.log("final result value=", videoListFromCurrentChannel)}
      {videoListFromCurrentChannel.map((item) => (
        <RelatedVideoCard
          key={item?.id?.videoId}
          title={item?.snippet?.title}
          channelName={item?.snippet?.channelTitle}
          thumbnailURL={item?.snippet?.thumbnails?.high?.url}
          videoID={item.id?.videoId}
        />
      ))}
    </div>
  );
};

export default RelatedVideos;
