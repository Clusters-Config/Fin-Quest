import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [username, setusername] = useState()
  const [text, settext] = useState("")
  const [user, setuser] = useState([])

  useState(() => {
    axios.defaults.withCredentials = true
    axios.get("https://fin-quest-y9ub.onrender.com/verify", { withCredentials: true })
      .then(res => {
        setusername(res.data.username)
      })

  }, [username])


  const handleSendMessage = (e) => {
    e.preventDefault();
    axios.post(" https://fin-quest-y9ub.onrender.com/globalchat", { username, text })
      .then()
    settext("")
  };

  useEffect(() => {
    axios.get(" https://fin-quest-y9ub.onrender.com/findglobalchat")
      .then(res => {
        setMessages(res.data)
        let user = messages.map((element) => {
          return element.username
        })
        setuser(user)

      })
  })

  return (
    <div className="flex flex-col items-center justify-center h-64 bg-gray-100 mt-28">
      <div className="w-full max-w-3xl  bg-white shadow-lg rounded-lg">
        {/* Header */}
        {/* <div className="bg-blue-600 text-white p-4 rounded-t-lg text-center">
          <h1 className="text-lg font-bold">Global Chat</h1>
        </div> */}

        {/* Chat Messages */}
        <div className="h-80 overflow-y-auto p-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-3 p-2 rounded-lg ${msg?.username === `${username}`
                ? "bg-blue-100 text-blue-800 ml-auto max-w-[80%]"
                : "bg-gray-200 text-gray-800 max-w-[80%]"
                }`}
            >
              <p className="text-sm">
                <strong>{msg?.username}:</strong> {msg?.text}
              </p>
            </div>
          ))}
        </div>

        {/* Input Field */}
        <form
          onSubmit={handleSendMessage}
          className="flex items-center p-4 border-t bg-white"
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={text}
            onChange={(e) => settext(e.target.value)}
            className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
