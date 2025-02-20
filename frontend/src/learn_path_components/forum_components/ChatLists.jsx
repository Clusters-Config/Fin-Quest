import React, { useEffect, useRef } from "react";

const ChatLists = ({ chats }) => {
  const endOfMessages = useRef(null);
  const user = localStorage.getItem("user");

  function ChatMessage({ message, username, avatar, isSender }) {
    return (
      <div
        className={`flex items-center my-3 ${
          isSender ? "justify-end text-right" : "justify-start text-left"
        }`}
      >
        <img
          src={avatar}
          alt="Avatar"
          className="w-10 h-10 rounded-full shadow-md mx-2"
        />
        <div
          className={`p-3 rounded-lg shadow-sm text-sm ${
            isSender
              ? "bg-blue-900 text-white"
              : "bg-gray-100 text-gray-800 border border-gray-300"
          }`}
        >
          <strong>{username}</strong>
          <br />
          {message}
        </div>
      </div>
    );
  }

  useEffect(() => {
    endOfMessages.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <div className="h-80 overflow-y-auto bg-gray-100 p-4 rounded-lg shadow-md">
      {chats.map((chat, index) => (
        <ChatMessage
          key={index}
          message={chat.message}
          username={chat.username}
          avatar={chat.avatar}
          isSender={chat.username === user}
        />
      ))}
      <div ref={endOfMessages}></div>
    </div>
  );
};

export default ChatLists;
