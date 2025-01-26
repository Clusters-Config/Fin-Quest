import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Simple Stock Investment Calculator Component
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
      <h3 className="text-2xl font-semibold text-[#457B9D]">Stock Investment Calculator</h3>
      <div className="mt-4">
        <label className="text-gray-700">Initial Investment: $</label>
        <input
          type="number"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-gray-700">Expected Annual Growth Rate (%)</label>
        <input
          type="number"
          value={growthRate}
          onChange={(e) => setGrowthRate(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-gray-700">Number of Years</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-lg w-full mt-2"
        />
      </div>
      <button
        onClick={calculateFutureValue}
        className="mt-4 bg-[#457B9D] hover:bg-[#A8DADC] text-white px-6 py-2 rounded-lg font-bold"
      >
        Calculate Future Value
      </button>
      {futureValue && (
        <div className="mt-4 text-lg text-gray-700">
          Your investment will grow to approximately ${futureValue} in {years} years.
        </div>
      )}
    </div>
  );
};

const StockMarketBasics = () => {
  const navigate = useNavigate();
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleQuizRedirect = () => {
    navigate("/QuizApp/StockMarketBasics"); // Replace "/quiz2" with the route of your Stock Market Quiz page
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#457B9D] to-[#9ACBD0] min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-[#1D3557] text-center my-6">
        Stock Market Basics for Beginners
      </h1>

      {/* Content Section */}
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-5xl mx-auto">

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#457B9D]">What is the Stock Market?</h2>
          <p className="text-gray-700 mt-3">
            The stock market is a place where buyers and sellers come together to trade shares of companies. By investing in stocks, you own a small part of a company, and your investment can grow as the company does well. The stock market can be an exciting way to build wealth over time, but it’s important to understand how it works before diving in.
          </p>
        </section>

        {/* Why Should You Invest? */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#457B9D]">Why Should You Invest?</h2>
          <p className="text-gray-700 mt-3">
            Investing in the stock market can help you achieve long-term financial goals, such as saving for retirement or buying a home. Over time, stocks have historically provided higher returns than traditional savings accounts or bonds. However, they also carry higher risks, so it’s important to know how to manage your investments wisely.
          </p>
        </section>

        {/* Stock Investment Calculator */}
        <StockInvestmentCalculator />

        {/* Understanding Stocks */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#457B9D]">Understanding Stocks</h2>
          <p className="text-gray-700 mt-3">
            Stocks represent ownership in a company. When you purchase shares, you become a shareholder. There are two main types of stocks:
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li><strong>Common Stock:</strong> This gives you voting rights and potential dividends.</li>
            <li><strong>Preferred Stock:</strong> This typically doesn’t come with voting rights, but offers fixed dividends.</li>
          </ul>
        </section>

        {/* How to Start Investing */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#457B9D]">How to Start Investing</h2>
          <p className="text-gray-700 mt-3">
            Here’s how you can start your journey in the stock market:
          </p>
          <ol className="list-decimal list-inside mt-3 text-gray-700">
            <li>Open a brokerage account. This is where you'll buy and sell stocks.</li>
            <li>Decide on your investment strategy, whether that’s individual stocks, index funds, or ETFs.</li>
            <li>Start small and diversify. Don’t put all your money in one stock or sector.</li>
            <li>Monitor your portfolio regularly but avoid making rash decisions based on short-term market changes.</li>
          </ol>
        </section>

        {/* Risk Management */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#457B9D]">Managing Risks</h2>
          <p className="text-gray-700 mt-3">
            The stock market can be volatile, but you can manage risk by diversifying your investments and having a long-term perspective. Some tips include:
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>Diversify your portfolio by investing in different sectors or industries.</li>
            <li>Don't panic during market downturns—focus on your long-term goals.</li>
            <li>Invest only what you can afford to lose and stick to a strategy that aligns with your risk tolerance.</li>
          </ul>
        </section>

        {/* Key Takeaways */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#457B9D]">Key Takeaways</h2>
          <p className="text-gray-700 mt-3">
            The stock market offers great opportunities for long-term wealth creation, but it also involves risks. By understanding the basics, starting small, and diversifying your investments, you can work towards achieving your financial goals while managing risk effectively.
          </p>
        </section>

        {/* Quiz Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleQuizRedirect}
            className="bg-[#457B9D] hover:bg-[#A8DADC] text-white px-6 py-3 rounded-lg font-bold text-xl"
          >
            Take the Quiz!
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockMarketBasics;
