import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MutualFundCalculator = () => {
  const [investment, setInvestment] = useState("");
  const [rateOfReturn, setRateOfReturn] = useState("");
  const [years, setYears] = useState("");
  const [futureValue, setFutureValue] = useState(null);

  const calculateInvestment = () => {
    if (investment && rateOfReturn && years) {
      const rate = rateOfReturn / 100;
      const futureVal = investment * Math.pow(1 + rate, years);
      setFutureValue(futureVal.toFixed(2));
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Mutual Fund Calculator
      </h3>
      <div className="mt-4">
        <label className="text-gray-600">Initial Investment: $</label>
        <input
          type="number"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-gray-600">Rate of Return (Annual %):</label>
        <input
          type="number"
          value={rateOfReturn}
          onChange={(e) => setRateOfReturn(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-gray-600">Investment Period (Years):</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-lg w-full mt-2"
        />
      </div>
      <button
        onClick={calculateInvestment}
        className="mt-4 bg-[#F39C12] hover:bg-[#F1C40F] text-white px-6 py-2 rounded-lg font-bold"
      >
        Calculate Future Value
      </button>
      {futureValue && (
        <div className="mt-4 text-lg text-gray-600">
          Your investment will grow to approximately ${futureValue}.
        </div>
      )}
    </div>
  );
};

const MutualFundEssentials = () => {
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);

  const contentSections = [
    {
      title: "What are Mutual Funds?",
      content: (
        <p>
          Mutual funds are investment vehicles that pool money from many
          investors to invest in a diversified portfolio of stocks, bonds, or
          other securities. They are managed by professional fund managers,
          offering a way for individuals to invest without having to research
          or manage the investments themselves.
        </p>
      ),
    },
    {
      title: "Types of Mutual Funds",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Equity Funds:</strong> Invest in stocks, aiming for higher
            returns but higher risk.
          </li>
          <li>
            <strong>Bond Funds:</strong> Invest in bonds or fixed-income
            securities, with lower risk but lower returns.
          </li>
          <li>
            <strong>Index Funds:</strong> Track a specific market index, with
            low fees and diversification.
          </li>
          <li>
            <strong>Money Market Funds:</strong> Invest in short-term,
            low-risk securities for stability.
          </li>
        </ul>
      ),
    },
    {
      title: "Benefits of Investing in Mutual Funds",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Diversification:</strong> Spreads risk across different
            securities.
          </li>
          <li>
            <strong>Professional Management:</strong> Experts make investment
            decisions for you.
          </li>
          <li>
            <strong>Accessibility:</strong> Start with small amounts.
          </li>
          <li>
            <strong>Liquidity:</strong> Buy or sell daily with flexibility.
          </li>
        </ul>
      ),
    },
    {
      title: "Mutual Fund Calculator",
      content: <MutualFundCalculator />,
    },
    {
      title: "How to Start Investing",
      content: (
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            Research different mutual funds based on your goals, risk tolerance,
            and time horizon.
          </li>
          <li>Open an account with a brokerage or mutual fund company.</li>
          <li>Start with a small amount and increase over time.</li>
          <li>Review and adjust periodically.</li>
        </ol>
      ),
    },
    {
      title: "Key Takeaways",
      content: (
        <p>
          Mutual funds are excellent for beginners, offering diversification,
          management, and flexibility. Starting early and being consistent can
          grow your wealth over time.
        </p>
      ),
    },
  ];

  const handleQuizRedirect = () => {
    navigate("/QuizApp/MutualFundEssentials", {
      state: {
        page: "resultpage",
        path: "path2",
        mods: "mod4",
        type: "finance",
      },
    });
  };

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
              <h1 className="text-3xl font-serif text-gray-800">
                Mutual Funds: A Smart Investment for Your Future
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                Learn the essentials of mutual funds and how they can help you
                achieve financial freedom.
              </p>
            </div>

            {/* Animated Content */}
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
                  <div className="text-gray-600 leading-relaxed">
                    {contentSections[pageIndex].content}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
              <button
                onClick={() => setPageIndex((p) => Math.max(p - 1, 0))}
                disabled={pageIndex === 0}
                className={`px-4 py-2 rounded ${
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
                onClick={() =>
                  setPageIndex((p) =>
                    Math.min(p + 1, contentSections.length - 1)
                  )
                }
                disabled={pageIndex === contentSections.length - 1}
                className={`px-4 py-2 rounded ${
                  pageIndex === contentSections.length - 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
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
          onClick={handleQuizRedirect}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-[#F39C12] text-white px-8 py-3 rounded-full hover:bg-[#F1C40F] transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Take the Quiz!
        </button>
      </div>
    </div>
  );
};

export default MutualFundEssentials;
