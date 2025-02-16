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
    <div className="inputtext_container">
      <textarea
        name="message"
        id="message"
        rows="4"
        placeholder="Input Message ..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default InputText;
