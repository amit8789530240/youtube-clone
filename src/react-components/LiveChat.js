import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushLiveComment } from "../redux-store/liveChatSlice";
import { generateRandomComment } from "../utils/helper";

const LiveChat = () => {
  const [myLiveCommentText, setMyLiveCommentText] = useState("");
  const liveMessages = useSelector(
    (store) => store.liveChatSlice.liveChatMessages
  );
  const dispatcher = useDispatch();
  let interval = useRef(null);
  // let interval2 = useRef(null);
  useEffect(() => {
    interval.current = setInterval(() => {
      dispatcher(pushLiveComment(generateRandomComment()));
      console.log("interval");
    }, 500);

    return () => {
      clearInterval(interval.current);
      console.log("interval cleared");
    };
  }, []);

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    // Scroll the container to the bottom whenever liveMessages change
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      const isAtBottom =
        container.scrollHeight - container.scrollTop - 100 <=
        container.clientHeight;

      // Auto-scroll only if the user is at or near the bottom
      if (isAtBottom) {
        container.scrollTop = container.scrollHeight;
      }
    }
  }, [liveMessages]);

  return (
    <div className="h-full">
      <div className="h-[90%] flex flex-col-reverse" id="123">
        <div
          className="overflow-y-scroll"
          id="456"
          ref={messagesContainerRef}
          // onScroll={() => {
          //   if (
          //     messagesContainerRef.current.scrollHeight -
          //       messagesContainerRef.current.scrollTop ===
          //     messagesContainerRef.current.clientHeight
          //   ) {
          //     clearInterval(interval.current);
          //     interval2.current = setInterval(() => {
          //       dispatcher(pushLiveComment(generateRandomComment()));
          //       console.log("interval2");
          //     }, 1000);
          //     messagesContainerRef.current.scrollTop =
          //       messagesContainerRef.current.scrollHeight;
          //   } else {
          //     clearInterval(interval2.current);
          //     clearInterval(interval.current);
          //     console.log("interval2 + interval1 cleared");
          //   }
          // }}
        >
          {liveMessages.map((item, index) => {
            return (
              <div className="flex flex-nowrap">
                <p className="font-semibold px-2 break-words">
                  {" "}
                  {item.person}:{" "}
                </p>
                <p className="text-start break-words px-2 text-sm">
                  {item.comment}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex  h-[10%] items-center">
        <form
          className="w-full m-0"
          onSubmit={(e) => {
            e.preventDefault();
            dispatcher(
              pushLiveComment({
                person: "Annonymous",
                comment: myLiveCommentText,
              })
            );
            setMyLiveCommentText("");
          }}
        >
          <input
            className=" rounded-3xl border-2 w-[100%] ml-1 px-2 border-slate-500"
            type="text"
            value={myLiveCommentText}
            onChange={(e) => setMyLiveCommentText(e.target.value)}
          ></input>
        </form>
        <img
          className="w-[10%] h-5 px-2"
          alt="send live comment"
          src="/assets/send_message_icon.png"
          onClick={() => {
            dispatcher(
              pushLiveComment({
                person: "Annonymous",
                comment: myLiveCommentText,
              })
            );
            setMyLiveCommentText("");
          }}
        />
        <button onClick={() => clearInterval(interval.current)}>stop</button>
      </div>
    </div>
  );
};

export default LiveChat;
