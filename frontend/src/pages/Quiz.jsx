import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrophy, FaBolt, FaClock } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

const QuizDashboard = () => {
  const navigate = useNavigate();

  const goToQuizApp = () => {
    navigate("/QuizApp");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-green-500 text-white py-8 text-center">
        <FaTrophy className="mx-auto text-5xl mb-3" />
        <h1 className="text-3xl font-bold">Smart Financial Quizzes</h1>
        <p className="mt-2 text-lg max-w-2xl mx-auto">
          Challenge yourself with adaptive quizzes that test your financial knowledge and help you learn faster
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Featured Quiz Categories */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Featured Quiz Categories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Quiz Card */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm">Easy</span>
              </div>
              <h3 className="text-lg font-semibold">Personal Finance Basics</h3>
              <p className="text-gray-600 text-sm mt-1">
                Test your knowledge of budgeting, savings, and financial planning
              </p>
              <div className="flex items-center text-gray-500 text-sm mt-3 space-x-4">
                <span>15 questions</span>
                <span className="flex items-center"><FaClock className="mr-1" /> 10 min</span>
              </div>
              <button 
                onClick={goToQuizApp} 
                className="mt-4 w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
              >
                Start Quiz
              </button>
            </div>

            {/* Quiz Card */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-green-400 text-white px-3 py-1 rounded-full text-sm">Medium</span>
              </div>
              <h3 className="text-lg font-semibold">Investment Fundamentals</h3>
              <p className="text-gray-600 text-sm mt-1">
                Challenge yourself with stocks, bonds, and portfolio management
              </p>
              <div className="flex items-center text-gray-500 text-sm mt-3 space-x-4">
                <span>20 questions</span>
                <span className="flex items-center"><FaClock className="mr-1" /> 15 min</span>
              </div>
              <button 
                onClick={goToQuizApp} 
                className="mt-4 w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
              >
                Start Quiz
              </button>
            </div>

            {/* Quiz Card */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm">Hard</span>
              </div>
              <h3 className="text-lg font-semibold">Advanced Trading</h3>
              <p className="text-gray-600 text-sm mt-1">
                Master complex trading strategies and market analysis
              </p>
              <div className="flex items-center text-gray-500 text-sm mt-3 space-x-4">
                <span>25 questions</span>
                <span className="flex items-center"><FaClock className="mr-1" /> 20 min</span>
              </div>
              <button 
                onClick={goToQuizApp} 
                className="mt-4 w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
              >
                Start Quiz
              </button>
            </div>
          </div>

          {/* Quick Challenge */}
          <div className="bg-yellow-100 border border-yellow-300 p-6 rounded-lg mt-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold flex items-center">
                <FaBolt className="mr-2 text-yellow-500" /> Quick Challenge
              </h3>
              <p className="text-gray-600 text-sm">
                Take a 5-minute rapid-fire quiz on today’s financial topic
              </p>
            </div>
            <button 
              onClick={goToQuizApp} 
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Start Quick Quiz
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          
          {/* Recent Scores */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Scores</h3>
            <div className="flex justify-between text-sm mb-2">
              <span>Investment Basics</span>
              <span className="text-yellow-500 font-bold">85%</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Budgeting 101</span>
              <span className="text-green-500 font-bold">92%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Stock Market Quiz</span>
              <span className="text-orange-500 font-bold">78%</span>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Leaderboard</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li className="flex justify-between"><span>Alex Johnson</span><span>2450</span></li>
              <li className="flex justify-between"><span>Sarah Chen</span><span>2380</span></li>
              <li className="flex justify-between"><span>Mike Davis</span><span>2290</span></li>
              <li className="flex justify-between font-bold"><span>You</span><span>2120</span></li>
            </ol>
          </div>

          {/* Quiz Master */}
          <div className="bg-green-50 p-6 rounded-lg border border-green-300">
            <h3 className="text-lg font-semibold flex items-center">
              <MdCheckCircle className="mr-2 text-green-500" /> Quiz Master
            </h3>
            <p className="text-sm text-gray-600">Complete 10 quizzes with 80%+ score</p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "70%" }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">7/10 completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDashboard;
