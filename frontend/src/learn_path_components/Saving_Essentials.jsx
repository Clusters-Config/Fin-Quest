import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Savings Calculator Component
const SavingsCalculator = () => {
  const [goal, setGoal] = useState("");
  const [monthlySaving, setMonthlySaving] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");
  const [investmentType, setInvestmentType] = useState("sip");
  const [amountSaved, setAmountSaved] = useState(null);

  const calculateSavings = () => {
    if (goal && monthlySaving && interestRate && years) {
      let totalAmount = 0;

      if (investmentType === "sip") {
        const monthlyInterestRate = interestRate / 12 / 100;
        const numberOfMonths = years * 12;
        totalAmount =
          (monthlySaving *
            ((Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1) /
              monthlyInterestRate)) *
          (1 + monthlyInterestRate);
      } else if (investmentType === "bank") {
        totalAmount = monthlySaving * Math.pow(1 + interestRate / 100, years);
      } else if (investmentType === "swp") {
        const monthlyInterestRate = interestRate / 12 / 100;
        const numberOfMonths = years * 12;
        let finalAmount = parseFloat(goal);
        const monthlyWithdrawal = parseFloat(monthlySaving);
        for (let i = 0; i < numberOfMonths; i++) {
          finalAmount *= 1 + monthlyInterestRate;
          finalAmount -= monthlyWithdrawal;
        }
        totalAmount = finalAmount;
      }

      setAmountSaved(totalAmount);
    }
  };

  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Savings Calculator</h3>

      <label className="text-gray-600 block mb-1">Investment Type:</label>
      <select
        className="border border-gray-400 p-2 rounded-lg w-full mb-3"
        value={investmentType}
        onChange={(e) => setInvestmentType(e.target.value)}
      >
        <option value="sip">SIP (Systematic Investment Plan)</option>
        <option value="bank">Bank Savings Account</option>
        <option value="swp">SWP (Systematic Withdrawal Plan)</option>
      </select>

      <label className="text-gray-600 block mb-1">Savings Goal (₹):</label>
      <input
        type="number"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="border border-gray-400 p-2 rounded-lg w-full mb-3"
      />

      <label className="text-gray-600 block mb-1">
        {investmentType === "swp" ? "Monthly Withdrawal (₹):" : "Monthly Savings (₹):"}
      </label>
      <input
        type="number"
        value={monthlySaving}
        onChange={(e) => setMonthlySaving(e.target.value)}
        className="border border-gray-400 p-2 rounded-lg w-full mb-3"
      />

      <label className="text-gray-600 block mb-1">Annual Interest Rate (%):</label>
      <input
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        className="border border-gray-400 p-2 rounded-lg w-full mb-3"
      />

      <label className="text-gray-600 block mb-1">Number of Years:</label>
      <input
        type="number"
        value={years}
        onChange={(e) => setYears(e.target.value)}
        className="border border-gray-400 p-2 rounded-lg w-full mb-3"
      />

      <button
        onClick={calculateSavings}
        className="mt-2 bg-[#F39C12] hover:bg-[#F1C40F] text-white px-6 py-2 rounded-lg font-bold w-full shadow"
      >
        Calculate
      </button>

      {amountSaved !== null && (
        <div className="mt-3 text-lg text-gray-700 font-medium">
          Total after {years} years: ₹{amountSaved.toFixed(2)}
        </div>
      )}
    </div>
  );
};

const SavingEssentials = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const contentSections = [
    {
      title: "Why is Saving Important for Students?",
      content: `Saving money as a student builds financial discipline, prepares for future expenses, and helps reach goals. Learning to save early ensures a secure future.`,
    },
    {
      title: "Understanding the Basics of Saving",
      content: `Saving means setting aside money for future use. Like a jar you fill over time, it grows. Save for emergencies, big purchases, or long-term goals.`,
    },
    {
      title: "Different Saving Avenues",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li><b>SIP</b>: Invest monthly in mutual funds for potential higher returns.</li>
          <li><b>Bank Savings</b>: Low-risk, liquid, earns interest.</li>
          <li><b>Insurance</b>: Combines savings with protection benefits.</li>
        </ul>
      ),
    },
    {
      title: "Savings Calculator",
      content: <SavingsCalculator />,
    },
    {
      title: "How to Start Saving",
      content: `Start small, make a budget, set goals, and track progress. Even small amounts saved regularly can make a big difference.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F5] p-8 flex justify-center items-center relative">
      <div className="w-full max-w-[1200px] aspect-[3/2] relative">
        {/* Book Container */}
        <div className="absolute inset-0 flex bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Left Page Edge */}
          <div className="w-[80px] bg-gradient-to-r from-gray-200 to-white" />
          
          {/* Main Content */}
          <div className="flex-1 p-12 relative">
            {/* Header */}
            <div className="text-center mb-8 border-b pb-4">
              <h1 className="text-3xl font-serif text-gray-800">Essential Savings for Students</h1>
              <p className="text-sm text-gray-500 mt-2">Build your financial future, one rupee at a time</p>
            </div>

            {/* Animated Page Content */}
            <div className="h-[calc(100%-160px)] overflow-y-auto pr-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">{contentSections[page].title}</h2>
                  <div className="text-gray-600 leading-relaxed">
                    {contentSections[page].content}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className={`px-4 py-2 rounded-lg ${page === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"}`}
              >
                Previous
              </button>
              <span className="text-sm text-gray-500">{page + 1} / {contentSections.length}</span>
              <button
                onClick={() => setPage((p) => Math.min(contentSections.length - 1, p + 1))}
                disabled={page === contentSections.length - 1}
                className={`px-4 py-2 rounded-lg ${page === contentSections.length - 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"}`}
              >
                Next
              </button>
            </div>
          </div>

          {/* Right Page Edge */}
          <div className="w-[40px] bg-gradient-to-l from-gray-200 to-white" />
        </div>

        {/* Quiz Button */}
        <button
          onClick={() =>
            navigate("/QuizApp/Saving_Essentials", {
              state: { mod: 1, page: "resultpage", path: "path1", mods: "mod2", type: "finance" },
            })
          }
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-[#F39C12] text-white px-8 py-3 rounded-full hover:bg-[#F1C40F] transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Take the Quiz!
        </button>
      </div>
    </div>
  );
};

export default SavingEssentials;
