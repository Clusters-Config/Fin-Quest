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
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen p-6`}>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 dark:bg-gray-800">
        <div className="flex justify-between mb-8">
          <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-300">
            Peer-to-Peer Learning Forum
          </h1>
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-800 text-white rounded-md dark:bg-gray-600"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button> */}
        </div>

        {/* Search Bar
        <input
          type="text"
          placeholder="Search discussions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded mb-4 w-full dark:bg-gray-700 dark:text-white"
        /> */}

        {/* Webinar Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4 dark:text-green-400">
            Upcoming Webinars
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
              <div>
                <h3 className="font-bold text-gray-800 dark:text-gray-200">
                  Financial Planning for Beginners
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Jan 30, 2025 - 5:00 PM
                </p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Join Webinar
              </button>
            </li>
          </ul>
        </div>

          {/* Discussion Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Discussion Threads
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg max-h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 mb-2 rounded-md ${
                  msg.user === "You" ? "bg-blue-100 text-right" : "bg-green-100"
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
              className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>

      {/* Poll Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 dark:text-purple-400">
          Polls
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="font-bold text-blue-600 dark:text-blue-300 text-lg mb-4">
            {poll.question}
          </h3>
          <ul className="space-y-4">
            {poll.options.map((option, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <span className="text-gray-800 dark:text-gray-200">{option.text}</span>
                <button
                  onClick={() => vote(index)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
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
          <h2 className="text-2xl font-semibold text-gray-600 mb-4 dark:text-gray-300">
            Share Files
          </h2>
          <input
            type="file"
            onChange={handleFileUpload}
            className="p-2 border rounded w-full dark:bg-gray-700 dark:text-white"
          />
        </div>

         {/* Leaderboard */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4 dark:text-yellow-400">
            Top Contributors
          </h2>
          <div className="bg-gray-100 rounded-lg shadow-lg p-4 dark:bg-gray-800">
            <ul className="space-y-4">
              {leaderboard.map((user, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-yellow-50 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    {user.name}
                  </span>
                  <span className="text-gray-600 font-medium dark:text-gray-400">
                    {user.points} points
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForumPage;
