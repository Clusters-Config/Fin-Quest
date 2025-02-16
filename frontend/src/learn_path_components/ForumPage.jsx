// Forum Page - Added
import React, { useState } from "react";
import { FaPaperPlane, FaPlus, FaUsers, FaVideo } from "react-icons/fa";

function ForumPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { user: "John", text: "Hi, what are the best tips for saving money?", reaction: "" },
    { user: "Jane", text: "Check out the budgeting techniques webinar next week!", reaction: "" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [leaderboard, setLeaderboard] = useState([
    { name: "John", points: 150 },
    { name: "Jane", points: 120 },
  ]);
  const [poll, setPoll] = useState({
    question: "What topic should our next webinar cover?",
    options: [
      { text: "Investing Basics", votes: 10 },
      { text: "Tax Planning", votes: 5 },
    ],
  });

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { user: "You", text: message, reaction: "" }]);
      setMessage("");
    }
  };

  const filteredMessages = messages.filter((msg) =>
    msg.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const vote = (index) => {
    const updatedPoll = { ...poll };
    updatedPoll.options[index].votes += 1;
    setPoll(updatedPoll);
  };

  const addReaction = (index, reaction) => {
    const updatedMessages = [...messages];
    updatedMessages[index].reaction = reaction;
    setMessages(updatedMessages);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    alert(`File uploaded: ${file.name}`);
    // Add actual file upload logic here
  };

  return (
    <div className={`${darkMode ? "bg-[#212529] text-[#E9ECEF]" : "bg-[#F8FAFC] text-[#333333]"} min-h-screen p-6`}>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 dark:bg-[#343a40]">
        <div className="flex justify-between mb-8">
          <h1 className="text-3xl font-bold text-center text-[#3A6A89] dark:text-[#F39C12]">
            Peer-to-Peer Learning Forum
          </h1>
        </div>
        

        {/* Webinar Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#F39C12] mb-4 dark:text-[#F39C12]">
            Upcoming Webinars
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between p-4 bg-[#F4F4F4] rounded-lg shadow-sm dark:bg-[#343a40]">
              <div>
                <h3 className="font-bold text-[#3A6A89] dark:text-[#F39C12]">
                  Financial Planning for Beginners
                </h3>
                <p className="text-sm text-[#6C757D] dark:text-[#6C757D]">
                  Jan 30, 2025 - 5:00 PM
                </p>
              </div>
              <button className="px-4 py-2 bg-[#002147] text-white rounded-md hover:bg-[#F39C12]">
                Join Webinar
              </button>
            </li>
          </ul>
        </div>

        {/* Discussion Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#3A6A89] mb-4">
            Discussion Threads
          </h2>
          <div className="bg-[#F4F4F4] p-4 rounded-lg max-h-64 overflow-y-auto">
            {/* {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 mb-2 rounded-md ${
                  msg.user === "You" ? "bg-[#F39C12] text-right" : "bg-[#002147] text-white"
                }`}
              >
                <strong>{msg.user}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="flex mt-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded-l-md focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-[#002147] text-white rounded-r-md hover:bg-[#F39C12]"
            >
              <FaPaperPlane />
            </button> */}
            <div className="flex justify-center">
            <button className="bg-[#002147] text-white rounded p-3 hover:bg-[#F39C12] transition:3s ease justify-center justify-items-center">Join Global Chat</button>
            </div>
          </div>
        </div>

        {/* Poll Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#8E44AD] mb-4 dark:text-[#8E44AD]">
            Polls
          </h2>
          <div className="bg-[#F4F4F4] p-6 rounded-lg shadow-md dark:bg-[#343a40]">
            <h3 className="font-bold text-[#3A6A89] dark:text-[#F39C12] text-lg mb-4">
              {poll.question}
            </h3>
            <ul className="space-y-4">
              {poll.options.map((option, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-[#F39C12] dark:bg-[#343a40] dark:hover:bg-[#6C757D]"
                >
                  <span className="text-[#3A6A89] dark:text-[#F39C12]">{option.text}</span>
                  <button
                    onClick={() => vote(index)}
                    className="px-4 py-2 bg-[#F39C12] text-white rounded-lg hover:bg-[#F39C12] transition"
                  >
                    Vote ({option.votes})
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* File Sharing */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#6C757D] mb-4 dark:text-[#6C757D]">
            Share Files - Regarding Financial Aspects
          </h2>
          <input
            type="/pdf"
            onChange={handleFileUpload}
            className="p-2 border rounded w-full dark:bg-[#343a40] dark:text-white"
          />
        </div>
        

        {/* Leaderboard */}
        {/* <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#F39C12] mb-4 dark:text-[#F39C12]">
            Top Contributors
          </h2>
          <div className="bg-[#F4F4F4] rounded-lg shadow-lg p-4 dark:bg-[#343a40]">
            <ul className="space-y-4">
              {leaderboard.map((user, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-[#F39C12] dark:bg-[#343a40] dark:hover:bg-[#6C757D]"
                >
                  <span className="font-semibold text-[#3A6A89] dark:text-[#F39C12]">
                    {user.name}
                  </span>
                  <span className="text-[#6C757D] font-medium dark:text-[#6C757D]">
                    {user.points} points
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ForumPage;

