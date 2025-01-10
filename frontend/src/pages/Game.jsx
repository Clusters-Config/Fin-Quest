import React from "react";

function GamifiedAdventures() {
  return (
    <div className="bg-gradient-to-b from-[#F1FAEE] to-[#A8DADC] min-h-screen px-6 py-10">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
          Gamification Adventure
        </h1>
        <p className="text-lg text-[#457B9D] mt-2">
          Challenge yourself, earn rewards, and level up your financial skills
          through fun, interactive experiences!
        </p>
      </header>

      {/* Leaderboards */}
      <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#1D3557] mb-4">Leaderboards</h2>
        <ul className="space-y-2">
          <li className="flex justify-between text-[#457B9D]">
            <span>1. Alex Johnson</span>
            <span>1200 XP</span>
          </li>
          <li className="flex justify-between text-[#457B9D]">
            <span>2. Mia Singh</span>
            <span>1150 XP</span>
          </li>
          <li className="flex justify-between text-[#457B9D]">
            <span>3. Daniel Lee</span>
            <span>1100 XP</span>
          </li>
          <li className="flex justify-between text-[#457B9D]">
            <span>4. Alice</span>
            <span>450 XP</span>
          </li>
        </ul>
      </section>

      {/* Achievement Badges */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#1D3557] mb-4">
          Achievement Badges
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#F1FAEE] shadow-md text-center rounded-lg py-4">
            <h3 className="text-[#1D3557] font-bold">Quiz Master</h3>
          </div>
          <div className="bg-[#F1FAEE] shadow-md text-center rounded-lg py-4">
            <h3 className="text-[#1D3557] font-bold">Savings Guru</h3>
          </div>
          <div className="bg-[#F1FAEE] shadow-md text-center rounded-lg py-4">
            <h3 className="text-[#1D3557] font-bold">Budget Planner</h3>
          </div>
          <div className="bg-[#F1FAEE] shadow-md text-center rounded-lg py-4">
            <h3 className="text-[#1D3557] font-bold">Financial Expert</h3>
          </div>
        </div>
      </section>

      {/* Daily Challenges */}
      <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#1D3557] mb-4">
          Daily Challenges
        </h2>
        <p className="text-[#457B9D] mb-4">
          Learn about compound interest and complete today’s challenge!
        </p>
        <button className="bg-[#457B9D] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#1D3557] transition duration-300">
          Complete Challenge
        </button>
      </section>

      {/* Streak Tracker */}
      <section className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-[#1D3557] mb-4">
          Streak Tracker
        </h2>
        <p className="text-[#457B9D]">
          <span className="font-bold">Current Streak:</span> 5 Days
        </p>
        <p className="text-[#457B9D] mt-2">
          Log in daily to maintain your streak and earn bonus XP!
        </p>
      </section>
    </div>
  );
}

export default GamifiedAdventures;