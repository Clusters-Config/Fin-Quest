import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Update chat history with the user's message
    setChatHistory((history) => [...history, { role: "user", text: userMessage }]);

    setTimeout(() => { 
      // Add a "Thinking..." placeholder for the bot's response
      setChatHistory((history) => [...history, { role: "model", text: "Analyzing..." }]);

      // Call the function to generate the bot's response 
      generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);  
    }, 600);
  };

  return (
    <form className="flex items-center bg-white border-[1px] border-[#D9E4DD] rounded-full shadow-md" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="w-full h-[47px] px-[17px] text-[#333333] text-base focus:outline-none"
        required
      />
      <button className="h-9 w-9 rounded-full bg-[#81B9DB] text-white flex-shrink-0 border-none outline-none text-xl transition-all duration-200 hover:bg-[#679BB8]">
        <ion-icon name="arrow-up-outline"></ion-icon>
      </button>
    </form>
  );
};

export default ChatForm;
