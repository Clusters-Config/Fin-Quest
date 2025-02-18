import React, { useState } from "react";
import { FaReact } from "react-icons/fa6";
// import "./styles.css";
import _ from "lodash";
<link rel="stylesheet" href="/frontend/index.css" />


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
    <div className="login_container">
      <div className="login_title">
        <FaReact className="login_icon" />
        <h1>Chat App</h1>
      </div>
      <div className="login_form">
        <input
          type="text"
          placeholder="Enter a Unique Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleUser}>Login</button>
      </div>
    </div>
  );
};

export default UserLogin;
