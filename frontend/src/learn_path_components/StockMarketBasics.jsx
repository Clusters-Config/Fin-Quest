import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const StockInvestmentCalculator = () => {
  const [investment, setInvestment] = useState("");
  const [growthRate, setGrowthRate] = useState("");
  const [years, setYears] = useState("");
  const [futureValue, setFutureValue] = useState(null);

  const calculateFutureValue = () => {
    if (investment && growthRate && years) {
      const future = investment * Math.pow(1 + growthRate / 100, years);
      setFutureValue(future.toFixed(2));
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-[#002147]">Stock Investment Calculator</h3>
      <div className="mt-4">
        <label className="text-[#6C757D]">Initial Investment: $</label>
        <input
          type="number"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-[#6C757D]">Expected Annual Growth Rate (%)</label>
        <input
          type="number"
          value={growthRate}
          onChange={(e) => setGrowthRate(e.target.value)}
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-[#6C757D]">Number of Years</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
        />
      </div>
      <button
        onClick={calculateFutureValue}
        className="mt-4 bg-[#F39C12] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#F1C40F] transition-colors"
      >
        Calculate Future Value
      </button>
      {futureValue && (
        <div className="mt-4 text-lg text-[#6C757D]">
          Your investment will grow to approximately ${futureValue} in {years} years.
        </div>
      )}
    </div>
  );
};

const StockMarketBasics = () => {
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);

  const pages = [
    // Page 1
    <div key="page1" className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is the Stock Market?</h2>
        <p className="text-gray-600 leading-relaxed">
          The stock market is a place where buyers and sellers come together to trade shares of companies...
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Should You Invest?</h2>
        <p className="text-gray-600 leading-relaxed">
          Investing in the stock market can help you achieve long-term financial goals, such as saving for retirement...
        </p>
      </section>
    </div>,

    // Page 2
    <div key="page2" className="space-y-8">
      <StockInvestmentCalculator />
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Understanding Stocks</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-600">
          <li><strong>Common Stock:</strong> Voting rights and potential dividends.</li>
          <li><strong>Preferred Stock:</strong> Fixed dividends, no voting rights.</li>
          <li><strong>Primary Market:</strong> IPOs where shares are first issued.</li>
          <li><strong>Secondary Market:</strong> Where existing shares are traded.</li>
        </ul>
      </section>
    </div>,

    // Page 3
    <div key="page3" className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Start Investing</h2>
        <ol className="list-decimal ml-6 space-y-2 text-gray-600">
          <li>Open a brokerage account.</li>
          <li>Decide on your investment strategy.</li>
          <li>Start small and diversify.</li>
          <li>Monitor your portfolio regularly.</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Managing Risks</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-600">
          <li>Diversify across sectors.</li>
          <li>Focus on long-term goals.</li>
          <li>Invest only what you can afford to lose.</li>
        </ul>
      </section>
    </div>,

    // Page 4
    <div key="page4" className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Takeaways</h2>
        <p className="text-gray-600 leading-relaxed">
          The stock market offers opportunities for wealth creation, but comes with risks. Start small, diversify, and keep a long-term mindset.
        </p>
      </section>
    </div>
  ];

  const handleQuizRedirect = () => {
    navigate("/QuizApp/StockMarketBasics", { state: { page: "resultpage", path: "path3", mods: "mod4", type: "finance" } });
  };

  return (
    <div className="min-h-screen bg-[#F4F4F5] p-8 flex justify-center items-center">
      <div className="w-full max-w-[1200px] aspect-[3/2] relative">
        {/* Book Container */}
        <div className="absolute inset-0 flex bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Left Spine */}
          <div className="w-[80px] bg-gradient-to-r from-gray-200 to-white" />
          {/* Main Content */}
          <div className="flex-1 p-12 relative">
            {/* Header */}
            <div className="text-center mb-8 border-b pb-4">
              <h1 className="text-3xl font-serif text-gray-800">Stock Market Basics for Beginners</h1>
              <p className="text-sm text-gray-500 mt-2">Understand the fundamentals of stock market investing</p>
            </div>

            {/* Animated Page Content */}
            <div className="h-[calc(100%-160px)] overflow-y-auto pr-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={pageIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {pages[pageIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
              <button
                disabled={pageIndex === 0}
                onClick={() => setPageIndex((prev) => prev - 1)}
                className={`${pageIndex === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-gray-800 hover:bg-gray-50 px-4 py-2 rounded-lg"}`}
              >
                Previous
              </button>
              <span className="text-sm text-gray-500">Page {pageIndex + 1} of {pages.length}</span>
              <button
                disabled={pageIndex === pages.length - 1}
                onClick={() => setPageIndex((prev) => prev + 1)}
                className={`${pageIndex === pages.length - 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-gray-800 hover:bg-gray-50 px-4 py-2 rounded-lg"}`}
              >
                Next
              </button>
            </div>
          </div>
          {/* Right Spine */}
          <div className="w-[40px] bg-gradient-to-l from-gray-200 to-white" />
        </div>

        {/* Quiz Button */}
        {pageIndex === pages.length - 1 && (
          <button
            onClick={handleQuizRedirect}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-[#F39C12] text-white px-8 py-3 rounded-full hover:bg-[#F1C40F] transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Take the Quiz!
          </button>
        )}
      </div>
    </div>
  );
};

export default StockMarketBasics;
