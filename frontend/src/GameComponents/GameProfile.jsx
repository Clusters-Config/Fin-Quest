import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation

function GameProfile() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    // Redirect to a page where the user can edit their profile
    navigate("/Profile");
  };

  const handleReturnToHome = () => {
    // Go back to the main gamified adventures page
    navigate("/GamifiedAdventures");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#002147] text-white p-6 text-center shadow-md flex items-center justify-between">
        {/* <button onClick={handleReturnToHome} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button> */}
        <div className="flex-grow">
          <h1 className="text-3xl md:text-4xl font-bold">My Profile</h1>
        </div>
      </header>

      {/* Profile Info */}
      <main className="flex-grow px-6 py-10">
        <section className="bg-[#F4F4F4] p-6 rounded-lg shadow-lg mb-8">
          <div className="flex items-center space-x-4">
            <img
              src="../src/assets/boy.jpeg" // User's profile image
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-[#F39C12] shadow-md"
            />
            <div>
              <h2 className="text-2xl font-bold text-[#002147]">Alex Johnson</h2>
              <p className="text-lg text-[#6C757D]">Financial Gamer</p>
              <button
                onClick={handleEditProfile}
                className="mt-4 bg-[#F39C12] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#e67e22] transition duration-300"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </section>

        {/* Daily Challenges */}
        <section className="bg-white p-6 shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-[#002147] mb-4">Daily Challenges</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-[#6C757D]">Challenge 1: Compound Interest</p>
              <p className="text-[#28A745]">Completed</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#6C757D]">Challenge 2: Budget Planning</p>
              <p className="text-[#FFC107]">In Progress</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#6C757D]">Challenge 3: Risk vs Reward</p>
              <p className="text-[#DC3545]">Not Started</p>
            </div>
          </div>
        </section>

        {/* Performance */}
        <section className="bg-[#F4F4F4] p-6 shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-[#002147] mb-4">Performance</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-[#6C757D]">XP Earned:</p>
              <p className="font-bold text-[#002147]">1200 XP</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#6C757D]">Total Challenges Completed:</p>
              <p className="font-bold text-[#002147]">15</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#6C757D]">Current Streak:</p>
              <p className="font-bold text-[#002147]">5 Days</p>
            </div>
          </div>
        </section>

        {/* Achievement Badges */}
        <section className="bg-white p-6 shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-[#002147] mb-4">Achievement Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#F4F4F4] shadow-md text-center rounded-lg py-4">
              <img
                src="../src/assets/QuizMaster.jpg"
                alt="Quiz Master"
                className="w-18 h-18 mx-auto mb-2"
              />
              <h3 className="text-[#002147] font-bold">Quiz Master</h3>
            </div>
            
            <div className="bg-[#F4F4F4] shadow-md text-center rounded-lg py-4">
              <img
                src="../src/assets/BudgetPlanner.jpg"
                alt="Budget Planner"
                className="w-18 h-18 mx-auto mb-2"
              />
              <h3 className="text-[#002147] font-bold">Budget Planner</h3>
            </div>
              {/* Additional badges can go here */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#002147] text-white p-6 text-center mt-8">
        <p className="text-lg">🚀  The road to success is dotted with many tempting parking spaces!</p>
      </footer>
    </div>
  );
}

export default GameProfile;
