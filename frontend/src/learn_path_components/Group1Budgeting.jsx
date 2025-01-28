import React, { useState, useEffect } from "react";

const Group1Budgeting = () => {
  const [discussion, setDiscussion] = useState("");
  const [discussions, setDiscussions] = useState([]);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [notifications, setNotifications] = useState(0);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null); // To track completed tasks
  const [username, setUsername] = useState(""); // Username state for the current user

  // Set the username either dynamically or statically
  useEffect(() => {
    const user = prompt("Please enter your username", "User"); // Example for prompt, you can replace it with actual profile logic
    setUsername(user);
  }, []);

  const handlePostDiscussion = () => {
    if (discussion.trim()) {
      setDiscussions([...discussions, { message: discussion, likes: 0, user: username }]);
      setDiscussion("");
    }
  };

  const handleEditDiscussion = (index) => {
    const updatedDiscussions = [...discussions];
    const newMessage = prompt("Edit your discussion:", updatedDiscussions[index].message);
    if (newMessage) {
      updatedDiscussions[index].message = newMessage;
      setDiscussions(updatedDiscussions);
    }
  };

  const handleRemoveDiscussion = (index) => {
    const updatedDiscussions = [...discussions];
    updatedDiscussions.splice(index, 1);
    setDiscussions(updatedDiscussions);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { taskName: task, completed: false }]);
      setTask("");
    }
  };

  const handleToggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { message: newMessage, sender: username }]);
      setNewMessage("");
      setNotifications(notifications + 1); // Increment notifications when a message is sent
    }
  };

  const handleLikeDiscussion = (index) => {
    const updatedDiscussions = [...discussions];
    updatedDiscussions[index].likes += 1;
    setDiscussions(updatedDiscussions);
  };

  // Simulate receiving a message (for demo purposes)
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { message: "New message from your group!", sender: "Member" },
        ]);
        setNotifications(notifications + 1);
      }
    }, 5000); // New message simulation every 5 seconds

    return () => clearInterval(interval);
  }, [notifications]);

  return (
    <div className="px-4 sm:px-6 lg:px-10 bg-gray-50 min-h-screen">
      <h1 className="text-center text-3xl font-extrabold text-purple-800 mt-8">
        Group 1: Budgeting Basics
      </h1>
      <p className="text-center text-sm sm:text-base mt-3 text-gray-700">
        Welcome to the Budgeting Basics study group! Discuss, learn, and share everything about budgeting.
      </p>

      {/* Chat Feature */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold text-blue-800">Group Chat</h2>
        <div className="mt-4 p-4 border rounded-lg h-60 overflow-y-auto bg-gray-100">
          {messages.map((message, idx) => (
            <div key={idx} className="mb-2">
              <strong className="text-gray-800">{message.sender}:</strong> {message.message}
            </div>
          ))}
        </div>
        <div className="flex mt-4">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
        </div>
        {notifications > 0 && (
          <div className="mt-2 text-sm text-red-500">
            {notifications} new message{notifications > 1 ? "s" : ""}
          </div>
        )}
      </div>

      {/* Tasks/Assignments Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold text-blue-800">Your Tasks/Assignments</h2>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddTask}
            className="bg-green-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-700 transition-colors"
          >
            Add Task
          </button>
        </div>
        <ul className="mt-4 space-y-2">
          {tasks.map((task, idx) => (
            <li
              key={idx}
              className={`text-sm text-gray-700 ${task.completed ? "line-through text-gray-500" : ""}`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTaskCompletion(idx)}
                  className="mr-2"
                />
                {task.taskName}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Discussion Board Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold text-blue-800">Discussion Board</h2>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
          placeholder="Post your thoughts or questions here..."
          value={discussion}
          onChange={(e) => setDiscussion(e.target.value)}
        />
        <button
          onClick={handlePostDiscussion}
          className="bg-green-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-700 transition-colors"
        >
          Post Discussion
        </button>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-800">Comments</h3>
          <div className="mt-4 space-y-4">
            {discussions.map((comment, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <p className="text-sm text-gray-700 flex-1">
                  <strong>{comment.user}:</strong> {comment.message}
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleLikeDiscussion(idx)}
                    className="text-blue-600 hover:underline"
                  >
                    👍 {comment.likes}
                  </button>
                  <button
                    onClick={() => handleEditDiscussion(idx)}
                    className="text-blue-600 hover:underline"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleRemoveDiscussion(idx)}
                    className="text-red-600 hover:underline"
                  >
                    🗑️ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group1Budgeting;
