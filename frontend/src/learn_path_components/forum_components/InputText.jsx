import React, { useState } from "react";

const InputText = ({ addMessage }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) {
      console.log("⚠️ Cannot send empty message.");
      return;
    }
    console.log("📤 User typing:", message);
    addMessage(message);
    setMessage("");
  };

  return (
    <div className="flex items-center mt-4 bg-white p-4 rounded-lg shadow-md">
      <textarea
        name="message"
        id="message"
        rows="2"
        placeholder="Input Message ..."
        className="flex-grow h-12 border rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <button
        onClick={sendMessage}
        className="ml-4 bg-blue-900 text-white rounded-lg w-12 h-12 flex items-center justify-center hover:bg-blue-600 transition"
      >
        Send
      </button>
    </div>
  );
};

export default InputText;
