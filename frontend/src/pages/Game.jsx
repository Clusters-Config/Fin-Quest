import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import Calendar from 'react-calendar'; // Import react-calendar for calendar popup
import 'react-calendar/dist/Calendar.css'; // Import default styles for react-calendar

function GamifiedAdventures() {
  const navigate = useNavigate(); // Initialize navigate function

  const [showCalendar, setShowCalendar] = useState(false); // State to control the calendar popup
  const [showNotification, setShowNotification] = useState(false); // State to control the notification popup

  const handleGameRedirect = (game) => {
    // Redirect to the selected game page
    navigate(`/${game}`);
    setShowNotification(false); // Close the notification once a game is selected
  };

  const handleChallengeRedirect = () => {
    navigate("/DailyChallenges"); // Redirect to DailyChallenges page
  };

  const handleProfileRedirect = () => {
    navigate("/GameProfile"); // Redirect to Profile page
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar); // Toggle the visibility of the calendar popup
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification); // Toggle the visibility of the game notification
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#002147] text-white p-6 text-center shadow-md flex items-center justify-between relative">
        <div className="text-center flex-grow">
          <h1 className="text-3xl md:text-4xl font-bold">Gamification Adventure</h1>
          <p className="text-lg mt-2">
            Challenge yourself, earn rewards, and level up your financial skills
            through fun, interactive experiences!
          </p>
        </div>
      </header>

      <main className="flex-grow px-6 py-10">
        {/* Daily Challenges */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#002147] mb-4">Daily Challenges</h2>
          <p className="text-[#6C757D] mb-4">
            Learn about compound interest and complete today’s challenge!
          </p>
          <button
            onClick={handleChallengeRedirect} 
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
          <button
            onClick={toggleCalendar} // Open the calendar when clicked
            className="bg-[#F39C12] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#e67e22] transition duration-300 mt-4"
          >
            View Streak Calendar
          </button>
        </section>

        {/* Game Icon Section */}
        <section className="text-center mt-8">
          <h2 className="text-2xl font-bold text-[#002147] mb-4">Play Profit-Loss Ladder</h2>
          <button
            onClick={toggleNotification} // Show the game notification when clicked
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

      {/* Calendar Popup */}
      {showCalendar && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-11/12 sm:w-1/2">
            <h3 className="text-xl font-bold mb-4">Streak Calendar</h3>
            <Calendar
              onChange={() => {}}
              value={new Date()}
              tileClassName="streak-tile"
            />
            <button
              onClick={toggleCalendar}
              className="bg-[#F39C12] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#e67e22] transition duration-300 mt-4"
            >
              Close Calendar
            </button>
          </div>
        </div>
      )}

      {/* Game Notification Popup */}
      {showNotification && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-11/12 sm:w-1/2">
            <h3 className="text-xl font-bold mb-4">Choose a Game</h3>
            <div className="space-y-4">
              <button
                onClick={() => handleGameRedirect("ProfitLossLadder")}
                className="w-full py-2 px-4 bg-[#002147] text-white rounded-lg shadow-md hover:bg-[#F39C12] transition duration-300"
              >
                Profit-Loss Ladder
              </button>
              <button
                onClick={() => handleGameRedirect("BudgetingGame")}
                className="w-full py-2 px-4 bg-[#002147] text-white rounded-lg shadow-md hover:bg-[#F39C12] transition duration-300"
              >
                Budgeting Game
              </button>
              <button
                onClick={() => handleGameRedirect("SavingsChallenge")}
                className="w-full py-2 px-4 bg-[#002147] text-white rounded-lg shadow-md hover:bg-[#F39C12] transition duration-300"
              >
                Savings Challenge
              </button>
            </div>
            <button
              onClick={toggleNotification}
              className="bg-[#F39C12] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#e67e22] transition duration-300 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GamifiedAdventures;
