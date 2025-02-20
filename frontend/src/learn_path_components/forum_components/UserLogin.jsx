import React, { useState } from "react";
import { FaReact } from "react-icons/fa6";
import _ from "lodash";

const UserLogin = ({ setUser }) => {
  const [userName, setUserName] = useState("");

  const handleUser = () => {
    if (!userName.trim()) {
      console.log("⚠️ Username is required!");
      return;
    }
    console.log("✅ User logged in:", userName);

    localStorage.setItem("user", userName);
    localStorage.setItem(
      "avatar",
      `https://picsum.photos/id/${_.random(1, 1000)}/200/300`
    );
    setUser(userName);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white p-6">
      <div className="text-center mb-6">
        <FaReact className="text-5xl text-blue-300 mb-2" />
        <h1 className="text-2xl font-bold">Chat App</h1>
      </div>
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <input
          type="text"
          placeholder="Enter a Unique Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          onClick={handleUser}
          className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
