import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

const ResultPage = () => {
  const location = useLocation();
  const { score, total, mod, page, path, mods, type } = location.state || { score: 0, total: 0 };
  const [email, setemail] = useState("")
  let userscore = score * 10

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("https://fin-quest-y9ub.onrender.com/verify", { withCredentials: true })
      .then(res => {
        setemail(res.data.email)
      })
  })
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.post(`https://fin-quest-y9ub.onrender.com/${page}`, { userscore, email, mod, path, mods, type })
  })

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
