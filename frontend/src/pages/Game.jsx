import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation

function GamifiedAdventures() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleGameRedirect = () => {
    navigate("/ProfitLossLadder"); // Redirect to ProfitLossLadder page
  };

  const handleChallengeRedirect = () => {
    navigate("/DailyChallenges"); // Redirect to DailyChallenges page
  };

  const handleProfileRedirect = () => {
    navigate("/GameProfile"); // Redirect to Profile page
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#002147] text-white p-6 text-center shadow-md flex items-center justify-between relative">
        {/* Profile Icon */}
        <button
          onClick={handleProfileRedirect}
          className="text-white absolute top-1/2 transform -translate-y-1/2 right-4"
        >
           <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10" // Increased size of icon
            >
              <circle cx="12" cy="7" r="4" stroke="none" fill="currentColor" />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7"
              />
            </svg>

        </button>

        <div className="text-center flex-grow">
          <h1 className="text-3xl md:text-4xl font-bold">Gamification Adventure</h1>
          <p className="text-lg mt-2">
            Challenge yourself, earn rewards, and level up your financial skills
            through fun, interactive experiences!
          </p>
        </div>
      </header>

      <main className="flex-grow px-6 py-10">
        {/* Leaderboards */}
        <section className="bg-[#F4F4F4] shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#002147] mb-4">Leaderboards</h2>
          <ul className="space-y-2">
            <li className="flex justify-between text-[#6C757D]">
              <span>1. Alex Johnson</span>
              <span>1200 XP</span>
            </li>
            <li className="flex justify-between text-[#6C757D]">
              <span>2. Mia Singh</span>
              <span>1150 XP</span>
            </li>
            <li className="flex justify-between text-[#6C757D]">
              <span>3. Daniel Lee</span>
              <span>1100 XP</span>
            </li>
            <li className="flex justify-between text-[#6C757D]">
              <span>4. Alice</span>
              <span>450 XP</span>
            </li>
          </ul>
        </section>

        {/* Achievement Badges */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#002147] mb-4">Achievement Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#F4F4F4] shadow-md text-center rounded-lg py-4">
              <img
                src="../src/assets/QuizMaster.jpg" // Replace with your image path
                alt="Quiz Master"
                className="w-18 h-18 mx-auto mb-2" // Adjust the size as per your preference
              />
              <h3 className="text-[#002147] font-bold">Quiz Master</h3>
            </div>
            <div className="bg-[#F4F4F4] shadow-md text-center rounded-lg py-4">
              <img
                src="../src/assets/SavingGuru.jpg" // Replace with your image path
                alt="Savings Guru"
                className="w-18 h-18 mx-auto mb-2"
              />
              <h3 className="text-[#002147] font-bold">Savings Guru</h3>
            </div>
            <div className="bg-[#F4F4F4] shadow-md text-center rounded-lg py-4">
              <img
                src="../src/assets/BudgetPlanner.jpg" // Replace with your image path
                alt="Budget Planner"
                className="w-18 h-18 mx-auto mb-2"
              />
              <h3 className="text-[#002147] font-bold">Budget Planner</h3>
            </div>
            <div className="bg-[#F4F4F4] shadow-md text-center rounded-lg py-4">
              <img
                src="../src/assets/FinancialExpert.jpg" // Replace with your image path
                alt="Financial Expert"
                className="w-18 h-18 mx-auto mb-2"
              />
              <h3 className="text-[#002147] font-bold">Financial Expert</h3>
            </div>
          </div>
        </section>

        {/* Daily Challenges */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#002147] mb-4">Daily Challenges</h2>
          <p className="text-[#6C757D] mb-4">
            Learn about compound interest and complete today’s challenge!
          </p>
          <button
            onClick={handleChallengeRedirect} // Use the navigate function here
            className="bg-[#F39C12] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#e67e22] transition duration-300"
          >
            Complete Challenge
          </button>
        </section>

        {/* Streak Tracker */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#002147] mb-4">Streak Tracker</h2>
          <p className="text-[#6C757D]">
            <span className="font-bold">Current Streak:</span> 5 Days
          </p>
          <p className="text-[#6C757D] mt-2">
            Log in daily to maintain your streak and earn bonus XP!
          </p>
        </section>

        {/* Game Icon Section */}
        <section className="text-center mt-8">
          <h2 className="text-2xl font-bold text-[#002147] mb-4">Play Profit-Loss Ladder</h2>
          <button
            onClick={handleGameRedirect}
            className="bg-[#002147] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#F39C12] transition duration-300"
          >
            🎲 Start the Game
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#002147] text-white p-6 text-center mt-8">
        <p className="text-lg">🚀 Keep up the great work and keep leveling up your financial skills!</p>
      </footer>
    </div>
  );
}

export default GamifiedAdventures;
