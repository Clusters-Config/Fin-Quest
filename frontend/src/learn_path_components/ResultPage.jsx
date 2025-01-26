import React from "react";
import { useLocation, Link } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A8DADC] to-[#F1FAEE] p-6 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-80 text-center animate__animated animate__fadeIn">
        <h2 className="text-3xl font-bold text-[#457B9D] mb-4">Your Result</h2>
        <div className="mb-6">
          <p className="text-xl text-gray-700">You answered {score} out of {total} questions correctly!</p>
        </div>
        <div className="flex justify-center items-center mb-6">
          <div
            className="bg-[#457B9D] text-white rounded-full p-4"
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            {Math.round((score / total) * 100)}%
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg text-gray-600">Great job! Keep up the good work and keep learning!</p>
        </div>
        <div>
          <Link to="/" className="text-[#457B9D] underline text-lg">Go back to homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
