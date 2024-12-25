import React from 'react'
const VideoCard = (props) => {
  return (
    <div
      key={props?.item?.id}
      className="flex flex-col bg-white shadow-lg rounded-lg m-1 p-2 w-[250px] h-auto"
    >
      <img
        src={props?.item?.snippet?.thumbnails?.high?.url}
        className="w-full h-[170px] rounded-md object-cover"
        alt="Video Thumbnail"
      />
      <div className="text-left mt-2">
        <p className="font-semibold text-sm line-clamp-2">
          {props?.item?.snippet?.localized?.title}
        </p>
        <p className="text-gray-500 text-sm">{props?.item?.snippet?.channelTitle}</p>
        <p className="text-gray-700 text-sm">
          {Number(props?.item?.statistics?.viewCount / 1000000).toFixed(1) + "M views"}
        </p>
      </div>
    </div>
  );
};

export default VideoCard