import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState } from 'react';

import { Send, MessageCircle } from "lucide-react";

function Chat() {
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY; // ⚠️ keep API keys in .env for safety!
  const genAI = new GoogleGenerativeAI(API_KEY);

  const [chat, setChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const projectContext = `
   You are a helpful assistant for the Fin-Quest web application.
     Your role is to answer questions about the Fin-Quest project and guide users through the application.
     The application helps users with financial literacy and planning.

     Here are the available pages and their routes:
     - Homepage: "/"
     - Learning Paths: "/learning-paths"
     - Game: "/game"
     - Login/Signup: "/login"
     - Simulations: "/simulations"
     - Features: "/features"
     - FinFlux (Financial News): "/fin-flux"
     - Side Hustle Finder: "/side-hustle-finder"
     - Community: "/community"
     - Financial Assistant: "/financial-assistant"
     - Terminology: "/learning-paths/terminology"
     - Credit & Debit: "/learning-paths/credit-debit"
     - Accounting Basics: "/learning-paths/accounting"
     - Pillars of Accounting: "/learning-paths/pillars-of-accounting"
     - Saving Essentials: "/learning-paths/saving-essentials"
     - Budgeting Basics: "/learning-paths/budgeting-basics"
     - Interest Types: "/learning-paths/simple-vs-compound-interest"
     - Loan Impacts: "/learning-paths/loan-impacts"
     - Financial Goals: "/learning-paths/goals-finance"

     When a user asks a question, you must determine if it is related to Fin-Quest.
     - If it is related, provide a helpful answer. If they ask where to find something, suggest the correct page and route.
     - If the question is not related to Fin-Quest, politely decline and state that you can only answer questions about this project. For example, say: "I can only answer questions related to the Fin-Quest application."
     Do not answer any questions about coding, your own configuration, or any other topic outside of Fin-Quest's features.
  `;

  async function main(value) {
    if (!value) return;
    setIsLoading(true);
    setMessages((prev) => [...prev, { user: value }]);
    setInput("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const chatSession = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: projectContext }],
          },
          {
            role: "model",
            parts: [
              {
                text: "Okay, I understand. I am the Fin-Quest assistant and will only answer questions about this project.",
              },
            ],
          },
          ...messages.map((msg) => ({
            role: msg.user ? "user" : "model",
            parts: [{ text: msg.user || msg.bot }],
          })),
        ],
      });

      const result = await chatSession.sendMessage(value);
      const response = await result.response;
      const text = response.text();
      setMessages((prev) => [...prev, { bot: text }]);
    } catch (error) {
      console.error("Error generating content:", error);
      setMessages((prev) => [
        ...prev,
        { bot: "⚠️ Sorry, I'm having trouble connecting." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setChat(!chat)}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full p-4 shadow-lg hover:scale-110 transition"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      {chat && (
        <div className="absolute bottom-16 right-0 w-80 h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Fin-Quest Assistant</h2>
            <button onClick={() => setChat(false)} className="text-sm hover:opacity-80">
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-3 space-y-3 bg-gray-50">
            <ul className="space-y-2">
              {messages.map((mess, key) => (
                <li
                  key={key}
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm shadow ${
                    mess.user
                      ? "ml-auto bg-blue-500 text-white"
                      : "mr-auto bg-white text-gray-800 border"
                  }`}
                >
                  {mess.bot || mess.user}
                </li>
              ))}
              {isLoading && (
                <li className="mr-auto bg-gray-200 px-3 py-2 rounded-xl text-sm shadow animate-pulse">
                  ...
                </li>
              )}
            </ul>
          </div>

          {/* Input Area */}
          <div className="border-t p-2 bg-white flex items-center">
            <input
              type="text"
              className="flex-grow rounded-full border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && main(input)}
            />
            <button
              onClick={() => main(input)}
              disabled={isLoading}
              className="ml-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;




// function Chat() {
//   const API_KEY = "AIzaSyBW0NRxqvRNvgSylLPbR4J3jAaJZlb-U2k";
//   const genAI = new GoogleGenerativeAI(API_KEY);

//   const [chat, setChat] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const projectContext = `
//     You are a helpful assistant for the Fin-Quest web application.
//     Your role is to answer questions about the Fin-Quest project and guide users through the application.
//     The application helps users with financial literacy and planning.

//     Here are the available pages and their routes:
//     - Homepage: "/"
//     - Learning Paths: "/learning-paths"
//     - Game: "/game"
//     - Login/Signup: "/login"
//     - Simulations: "/simulations"
//     - Features: "/features"
//     - FinFlux (Financial News): "/fin-flux"
//     - Side Hustle Finder: "/side-hustle-finder"
//     - Community: "/community"
//     - Financial Assistant: "/financial-assistant"
//     - Terminology: "/learning-paths/terminology"
//     - Credit & Debit: "/learning-paths/credit-debit"
//     - Accounting Basics: "/learning-paths/accounting"
//     - Pillars of Accounting: "/learning-paths/pillars-of-accounting"
//     - Saving Essentials: "/learning-paths/saving-essentials"
//     - Budgeting Basics: "/learning-paths/budgeting-basics"
//     - Interest Types: "/learning-paths/simple-vs-compound-interest"
//     - Loan Impacts: "/learning-paths/loan-impacts"
//     - Financial Goals: "/learning-paths/goals-finance"

//     When a user asks a question, you must determine if it is related to Fin-Quest.
//     - If it is related, provide a helpful answer. If they ask where to find something, suggest the correct page and route.
//     - If the question is not related to Fin-Quest, politely decline and state that you can only answer questions about this project. For example, say: "I can only answer questions related to the Fin-Quest application."
//     Do not answer any questions about coding, your own configuration, or any other topic outside of Fin-Quest's features.
//   `;

//   async function main(value) {
//     if (!value) return;
//     setIsLoading(true);
//     setMessages((prev) => [...prev, { user: value }]);
//     setInput("");

//     try {
//       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//       const chatSession = model.startChat({
//         history: [
//           {
//             role: "user",
//             parts: [{ text: projectContext }],
//           },
//           {
//             role: "model",
//             parts: [{ text: "Okay, I understand. I am the Fin-Quest assistant and will only answer questions about this project." }],
//           },
//           ...messages.map(msg => ({
//             role: msg.user ? "user" : "model",
//             parts: [{ text: msg.user || msg.bot }],
//           }))
//         ],
//       });
//       const result = await chatSession.sendMessage(value);
//       const response = await result.response;
//       const text = response.text();
//       setMessages((prev) => [...prev, { bot: text }]);
//     } catch (error) {
//       console.error("Error generating content:", error);
//       setMessages((prev) => [...prev, { bot: "Sorry, I'm having trouble connecting." }]);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <div className="fixed bottom-10 right-10 z-50 ">
//       <svg onClick={() => setChat(!chat)} className="border border-black rounded-full w-14 h-14 p-1 active:scale-125 transition-all duration-50 bg-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024"><path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
//       </svg>

//       {chat && (
//         <div className=" border-gray-200 border rounded-md h-[350px] w-[300px] absolute bottom-16 right-0 bg-white flex flex-col overflow-hidden">
//           <div className="flex-grow overflow-y-auto p-2">
//             <ul>
//               {
//                 messages.map((mess, key) => (
//                 <li
//                   className={`mt-2 p-2 rounded-lg w-auto max-w-[80%] ${mess.user ? 'ml-auto bg-green-200 text-right' : 'mr-auto bg-gray-200 text-left'}`}
//                   key={key}
//                 >
//                   <code className="text-sm">{mess.bot || mess.user}</code>
//                 </li>
//               ))}
//               {isLoading && <li className="mt-2 p-2 rounded-lg max-w-[80%] mr-auto bg-gray-200 text-left">...</li>}
//             </ul>
//           </div>
//           <div className="flex border-t border-black">
//             <input
//               type="text"
//               className="flex-grow outline-none p-2 w-[70%]"
//               placeholder="Type your message"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && main(input)}
//             />
//             <button
//               className="border-l border-black cursor-pointer px-3 py-1"
//               onClick={() => main(input)}
//               disabled={isLoading}
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Chat;

// import { GoogleGenerativeAI } from "@google/generative-ai";
// import React, { useState } from "react";