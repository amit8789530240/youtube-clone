import React, { useEffect, useState } from "react";
import { api_key } from "../constants/yt-apis";
import { useSearchParams } from "react-router-dom";

const EachComment = ({
  authorProfileImageUrl,
  authorDisplayName,
  publishedAt,
  comment,
  authorURL,
}) => {
  return (
    <div className="flex-col my-4">
      <div className="items-center flex">
        <img
          alt="DP"
          src={authorProfileImageUrl}
          className="w-7 h-7 rounded-full"
        />
        <a href={authorURL}>
          <span className="mx-2 text-sm font-bold">{authorDisplayName}</span>
        </a>
        <span className="text-sm font-semibold text-slate-500">
          {Math.round(
            (Date.now() - new Date(publishedAt)) / (1000 * 60 * 60 * 24)
          ) + " days ago"}
        </span>
      </div>
      <div>
        <p className="text-left px-3 mx-8 text-sm">{comment}</p>
      </div>
    </div>
  );
};

const Comments = () => {
  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");
  const [commentList, setCommentList] = useState([]);
  const fetchComments = async () => {
    console.log("api call from comments component");
    try {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/commentThreads?key=" +
          api_key +
          "&textFormat=plainText&part=snippet,replies&videoId=" +
          videoID +
          "&maxResults=50"
      );
      const data = await response.json();
      const commentsJSON = data?.items;
      //console.log(data);
      setCommentList([...Object.values(commentsJSON || [])]);
    } catch (error) {
      console.log("Failed to fetch comments list", error);
    }
  };
  useEffect(() => {
    fetchComments();
    console.log("Comment-useeffect");
  }, [videoID]);

  return (
    <div className="max-h-screen overflow-y-auto ">
      {commentList.map((comment) => {
        return (
          <>
            <EachComment
              key={comment?.id}
              authorProfileImageUrl={
                comment?.snippet?.topLevelComment?.snippet
                  ?.authorProfileImageUrl
              }
              authorDisplayName={
                comment?.snippet?.topLevelComment?.snippet?.authorDisplayName
              }
              publishedAt={
                comment?.snippet?.topLevelComment?.snippet?.publishedAt
              }
              comment={comment?.snippet?.topLevelComment?.snippet?.textDisplay}
              authorURL={
                comment?.snippet?.topLevelComment?.snippet?.authorChannelUrl
              }
            />

            <div className="ml-10 pl-5 border-l-2 border-slate-600">
              {comment?.replies?.comments.map((reply) => {
                return (
                  <EachComment
                    authorProfileImageUrl={
                      reply?.snippet?.authorProfileImageUrl
                    }
                    authorDisplayName={reply?.snippet?.authorDisplayName}
                    publishedAt={reply?.snippet?.publishedAt}
                    comment={reply?.snippet?.textDisplay}
                    authorURL={reply?.snippet?.authorChannelUrl}
                  />
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Comments;
