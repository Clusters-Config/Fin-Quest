import React from "react";
import { useLocation, Link } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F4F4] to-[#F8FAFC] p-6 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-80 text-center animate__animated animate__fadeIn">
        <h2 className="text-3xl font-bold text-[#002147] mb-4">Your Result</h2>
        <div className="mb-6">
          <p className="text-xl text-[#6C757D]">You answered {score} out of {total} questions correctly!</p>
        </div>
        <div className="flex justify-center items-center mb-6">
          <div
            className="bg-[#002147] text-white rounded-full p-4"
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            {Math.round((score / total) * 100)}%
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg text-[#6C757D]">Great job! Keep up the good work and keep learning!</p>
        </div>
        <div>
          <Link to="/" className="text-[#F39C12] underline text-lg">Go back to homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
