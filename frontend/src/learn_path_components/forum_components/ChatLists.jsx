import React, { useEffect, useRef } from "react";


const ChatLists = ({ chats }) => {
  const endOfMessages = useRef(null);
  const user = localStorage.getItem("user");

  function ChatMessage({ message, username, avatar, isSender }) {
    return (
      <div className={isSender ? "chat_sender" : "chat_receiver"}>
        <img src={avatar} alt="Avatar" />
        <p>
          <strong>{username}</strong> <br />
          {message}
        </p>
      </div>
    );
  }

  useEffect(() => {
    console.log("🖥️ Updating chat display...");
    endOfMessages.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <div className="chats_list">
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
