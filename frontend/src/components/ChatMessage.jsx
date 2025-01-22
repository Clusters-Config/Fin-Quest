import ChatbotIcon from "./ChatbotIcon";

const ChatMessage = ({ chat }) => {
  return (
    <div className={`flex gap-2 items-center ${chat.role === "model" ? "flex-col" : "flex-col-reverse"}`}>
      {chat.role === "model" && <ChatbotIcon />}
      <p className={`p-[12px_16px] max-w-[75%] text-base whitespace-pre-line break-words ${
        chat.role === "model" 
          ? "bg-[#679BB8] text-white rounded-[13px_13px_13px_3px]" 
          : "bg-[#679BB8] text-black rounded-[13px_13px_3px_13px]"}`}>
        {chat.text}
      </p>
    </div>
  );
};

export default ChatMessage;
