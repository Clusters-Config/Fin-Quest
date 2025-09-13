import React from 'react'
import logo from "../assets/fin-logo-3.jpg"; // FinQuest Logo
import { Link } from "react-router-dom";
// import { UserCircle } from "phosphor-react";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
  const [username, setusername] = useState();
  const [useremail, setuseremail] = useState();
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("https://fin-quest-y9ub.onrender.com/verify", { withCredentials: true }).then((res) => {

      setuseremail(res.data?.email);
      setusername(res.data?.username);
    });
  }, []);


  return (
    <div>
      <nav className="bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 px-6 py-4 shadow-md flex justify-between items-center fixed w-full top-0 z-50 ">
        <div className="flex items-center space-x-2 text-[#002147] ">
          <img
            src={logo}
            alt="FinQuest Logo"
            className="w-12 h-12 rounded-full drop-shadow-lg sm:w-10 sm:h-10"
          />
          <span className="text-2xl font-bold sm:text-2xl text-white sm:hidden">FinQuest</span>
        </div>

        <div className="flex items-center gap-4">
          {useremail ? (
            <>
              <p className="text-white text-2xl font-bold ">
                {username.charAt(0).toUpperCase() + username.slice(1)}
              </p>

            </>
          ) : (
            <>

            </>
          )}
        </div>

      </nav>
    </div>
  )
}

export default Header