import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Deposit Calculator Component
const DepositCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rateOfInterest, setRateOfInterest] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateDeposit = () => {
    if (principal && rateOfInterest && timePeriod) {
      const rate = rateOfInterest / 100;
      const maturityVal = principal * Math.pow(1 + rate, timePeriod);
      setMaturityAmount(maturityVal.toFixed(2));
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Deposit Calculator (INR)
      </h3>
      <label className="block text-gray-600 mt-2">Initial Deposit (INR):</label>
      <input
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        className="border p-2 rounded-lg w-full"
      />
      <label className="block text-gray-600 mt-4">Rate of Interest (%):</label>
      <input
        type="number"
        value={rateOfInterest}
        onChange={(e) => setRateOfInterest(e.target.value)}
        className="border p-2 rounded-lg w-full"
      />
      <label className="block text-gray-600 mt-4">Time Period (Years):</label>
      <input
        type="number"
        value={timePeriod}
        onChange={(e) => setTimePeriod(e.target.value)}
        className="border p-2 rounded-lg w-full"
      />
      <button
        onClick={calculateDeposit}
        className="mt-4 bg-[#F39C12] hover:bg-[#F1C40F] text-white px-6 py-2 rounded-lg font-bold"
      >
        Calculate Maturity Amount
      </button>
      {maturityAmount && (
        <div className="mt-4 text-lg text-gray-700">
          Your deposit will grow to approximately ₹{maturityAmount}.
        </div>
      )}
    </div>
  );
};

const DepositEssentials = () => {
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);

  const contentSections = [
    {
      title: "What are Deposits?",
      content: (
        <p className="text-gray-600 leading-relaxed">
          Deposits are sums of money that you place in a financial institution
          for safekeeping. They can earn interest over time, making them a safe
          way to grow your savings.
        </p>
      ),
    },
    {
      title: "Types of Deposits",
      content: (
        <ul className="list-disc ml-6 space-y-2 text-gray-600">
          <li><strong>Fixed Deposits:</strong> Lump sum for fixed tenure, guaranteed interest.</li>
          <li><strong>Recurring Deposits:</strong> Fixed amount every month for a period.</li>
          <li><strong>Demand Deposits:</strong> Withdraw anytime, e.g., savings account.</li>
          <li><strong>Term Deposits:</strong> Similar to FDs but fixed term maturity.</li>
        </ul>
      ),
    },
    {
      title: "Benefits of Deposits",
      content: (
        <ul className="list-disc ml-6 space-y-2 text-gray-600">
          <li><strong>Security:</strong> Often insured.</li>
          <li><strong>Guaranteed Returns:</strong> Predictable interest rates.</li>
          <li><strong>Liquidity:</strong> Easy access for certain accounts.</li>
          <li><strong>Easy to Manage:</strong> Minimal effort after setup.</li>
        </ul>
      ),
    },
    {
      title: "Deposit Calculator",
      content: <DepositCalculator />,
    },
    {
      title: "How to Start Depositing Money",
      content: (
        <ol className="list-decimal ml-6 space-y-2 text-gray-600">
          <li>Research deposit options.</li>
          <li>Choose a trusted institution.</li>
          <li>Deposit and let it grow.</li>
          <li>Review periodically.</li>
        </ol>
      ),
    },
    {
      title: "Key Takeaways",
      content: (
        <p className="text-gray-600 leading-relaxed">
          Deposits are reliable, safe, and can help you grow your wealth with
          minimal risk when chosen wisely.
        </p>
      ),
    },
  ];

  const handleQuizRedirect = () => {
    navigate("/QuizApp/DepositEssentials", {
      state: { page: "resultpage", path: "path1", mods: "mod4", type: "finance" },
    });
  };

  return (
    <div className="min-h-screen bg-[#F4F4F5] p-8 flex justify-center items-center">
      <div className="w-full max-w-[1200px] aspect-[3/2] relative">
        <div className="absolute inset-0 flex bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Left Edge */}
          <div className="w-[80px] bg-gradient-to-r from-gray-200 to-white" />

          {/* Main Content */}
          <div className="flex-1 p-12 relative">
            <header className="text-center mb-8 border-b pb-4">
              <h1 className="text-3xl font-serif text-gray-800">
                Understanding Deposits
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                A safe way to save and grow your money
              </p>
            </header>

            {/* Page Content */}
            <div className="h-[calc(100%-160px)] overflow-y-auto pr-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={pageIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    {contentSections[pageIndex].title}
                  </h2>
                  {contentSections[pageIndex].content}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
              <button
                onClick={() => setPageIndex((p) => p - 1)}
                disabled={pageIndex === 0}
                className={`px-4 py-2 rounded-lg ${
                  pageIndex === 0
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                Previous
              </button>
              <span className="text-sm text-gray-500">
                Page {pageIndex + 1} of {contentSections.length}
              </span>
              <button
                onClick={() => setPageIndex((p) => p + 1)}
                disabled={pageIndex === contentSections.length - 1}
                className={`px-4 py-2 rounded-lg ${
                  pageIndex === contentSections.length - 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                Next
              </button>
            </div>
          </div>

          {/* Right Edge */}
          <div className="w-[40px] bg-gradient-to-l from-gray-200 to-white" />
        </div>

        {/* Quiz Button */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <button
            onClick={handleQuizRedirect}
            className="bg-[#F39C12] text-white px-8 py-3 rounded-full hover:bg-[#F1C40F] transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Take the Quiz!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepositEssentials;
