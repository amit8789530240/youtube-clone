import React from "react";
import { Link } from "react-router-dom";

const LeftNavigation = () => {
  const nav_icons_urls = {
    home_icon_url: "assets/yt_home_icon.png",
    shorts_icon_url: "assets/yt_shorts_icon.png",
    subscriotion_icon_url: "assets/yt_subscription_icon.png",
  };

  return (
    <div className="bg-slate-100 border-r-4 w-[20%] overflow-y-auto">
      <ul className="border-b-2 mt-2 ml-2 pb-4">
        <li className="h-8 flex items-end">
          {" "}
          <Link to="/">
            <img
              src={nav_icons_urls.home_icon_url}
              alt="Goto Youtube Home"
              className="w-5 h-5 mt-3 ml-2"
            />{" "}
          </Link>
          <Link to="/">
            <button className="self-end ml-2 text-l">Home</button>
          </Link>{" "}
        </li>
        <li className="h-8 flex items-end">
          {" "}
          <img
            src={nav_icons_urls.shorts_icon_url}
            className="w-5 h-5 mt-3 ml-2"
          />{" "}
          <button className="self-end ml-2 text-l">Shorts</button>{" "}
        </li>
        <li className="h-8 flex items-end">
          {" "}
          <img
            src={nav_icons_urls.subscriotion_icon_url}
            className="w-5 h-5 mt-3 ml-2"
          />{" "}
          <button className="self-end ml-2 text-l">Subscription</button>{" "}
        </li>
      </ul>
      <ul className="border-b-2 mt-2 ml-2 pb-4 text-left">
        {" "}
        <span className="">You {">"}</span>
        <li className="h-8 flex items-end">History</li>
        <li className="h-8 flex items-end">Playlist</li>
        <li className="h-8 flex items-end">You Videos</li>
        <li className="h-8 flex items-end">Your Courses</li>
        <li className="h-8 flex items-end">Watch Later</li>
      </ul>
      <ul className="border-b-2 mt-2 ml-2 pb-4 text-left">
        {" "}
        <span className="">Subscriptions</span>
        <li className="h-8 flex items-end">Sample Subscription</li>
        <li className="h-8 flex items-end">Sample Subscription</li>
        <li className="h-8 flex items-end">Sample Subscription</li>
        <li className="h-8 flex items-end">Sample Subscription</li>
        <li className="h-8 flex items-end">Sample Subscription</li>
        <li className="h-8 flex items-end">Sample Subscription</li>
        <li className="h-8 flex items-end">Sample Subscription</li>
      </ul>
      <ul className="border-b-2 mt-2 ml-2 pb-4 text-left">
        {" "}
        <span className="">Explore</span>
        <li className="h-8 flex items-end">Trending</li>
        <li className="h-8 flex items-end">Shopping</li>
        <li className="h-8 flex items-end">Music</li>
        <li className="h-8 flex items-end">Movies</li>
        <li className="h-8 flex items-end">Live</li>
        <li className="h-8 flex items-end">Gaming</li>
        <li className="h-8 flex items-end">News</li>
        <li className="h-8 flex items-end">Sports</li>
        <li className="h-8 flex items-end">Courses</li>
        <li className="h-8 flex items-end">Fashion & Beauty</li>
        <li className="h-8 flex items-end">Podcasts</li>
      </ul>
      <ul className="border-b-2 mt-2 ml-2 pb-4 text-left">
        {" "}
        <span className="">More+</span>
        <li className="h-8 flex items-end">Settings</li>
        <li className="h-8 flex items-end">Report Hisory</li>
        <li className="h-8 flex items-end">Help</li>
        <li className="h-8 flex items-end">Send Feedback</li>
      </ul>
    </div>
  );
};

export default LeftNavigation;
