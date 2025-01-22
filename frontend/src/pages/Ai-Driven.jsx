
import ChatbotIcon from "../components/ChatbotIcon";
import ChatForm from "../components/ChatForm";
import {useEffect, useRef, useState} from "react";
import ChatMessage from "../components/ChatMessage";


function Ai_Driven() {
  const [chatHistory, setChatHistory] = useState([]);
  const chatBodyRef =useRef();
  
  const generateBotResponse = async (history) =>{
    //Helper function to update chat History 
    const updateHistory = (text) => {
      setChatHistory((prev) => [...prev.filter((msg) => msg.text !== "Analyzing..."),{role: "model",text},]);

    };

    // Format chat History for API Request
    history = history.map(({role, text}) => ({role,parts: [{text}]}));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "Ai_Drivenlication/json" },
      body: JSON.stringify({contents:  history }),
    }


    try{
      // Make the API call to get the bot's respond
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if(!response.ok) throw new Error(data.error.message || "Something went Wrong!");
      

      // Clean and Update chat history with bot's respond
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim();

      updateHistory(apiResponseText);
    }catch(error){
      console.log(error);
    }
  };

  useEffect(()=>{
    // Auto - Scrol whenever chat history updates
    chatBodyRef.current.scrollTo({ top : chatBodyRef.current.scrollHeight , behaviour:"smooth"});
  },[chatHistory]);


  return (
    <div className="w-full h-screen flex items-center justify-center bg-opacity-10 bg-black">
  <div className="relative w-[420px] bg-white rounded-xl shadow-[0_0_128px_0_rgba(0,0,0,0.1),0_32px_64px_-48px_rgba(0,0,0,0.5)]">
    
    {/* Chatbot Header */}
    <div className="flex items-center justify-between p-[15px_22px] bg-[#81B9DB]">
      <div className="flex items-center gap-2">
        <ChatbotIcon />
        <h2 className="text-black text-xl font-semibold">FinQuest</h2>
      </div>
      <button className="h-10 w-10 rounded-full bg-transparent text-white text-xl hover:bg-[#679BB8] transition-all duration-200">
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </button>
    </div>

    {/* Chatbot Body */}
    <div ref={chatBodyRef} className="flex flex-col gap-5 p-[25px_22px] mb-[82px] overflow-y-auto h-[460px] bg-gradient-to-b from-[#679BB8] to-[#FFFFFF]">
      <div className="flex gap-2 items-center">
        <ChatbotIcon />
        <p className="p-[12px_16px] max-w-[75%] bg-[#81B9DB] text-white rounded-[13px_13px_13px_3px] break-words whitespace-pre-line text-base">
          Hello! <br /> Welcome to Fin-Quest <br />Ask your Queries?
        </p>
      </div>

      {/* Render the chat history Dynamically */}
      {chatHistory.map((chat, index) => (
        <ChatMessage key={index} chat={chat} />
      ))}
    </div>

    {/* Chatbot Footer */}
    <div className="absolute bottom-0 w-full bg-[#F7FCFC] p-[15px_22px_20px]">
      <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
    </div>

  </div>
</div>

  );
};

export default Ai_Driven;