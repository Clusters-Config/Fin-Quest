import React from 'react'
import logo from "../assets/fin-logo.jpg"; // FinQuest Logo

const Header = () => {
  return (
    <div>
        <nav className="bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 px-6 py-4 shadow-md flex justify-between items-center fixed w-full top-0 z-50 ">
        <div className="flex items-center space-x-2 text-[#002147] ">
          <img
            src={logo}
            alt="FinQuest Logo"
            className="w-12 h-12 rounded-full drop-shadow-lg"
          />
          <span className="text-2xl font-bold sm:hidden text-white">FinQuest</span>
        </div>
        
        
      </nav>
    </div>
  )
}

export default Header