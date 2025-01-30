import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Simple Mutual Fund Calculator Component
const MutualFundCalculator = () => {
  const [investment, setInvestment] = useState("");
  const [rateOfReturn, setRateOfReturn] = useState("");
  const [years, setYears] = useState("");
  const [futureValue, setFutureValue] = useState(null);

  const calculateInvestment = () => {
    if (investment && rateOfReturn && years) {
      const rate = rateOfReturn / 100;
      const futureVal =
        investment * Math.pow(1 + rate, years); // Simple compound interest formula
      setFutureValue(futureVal.toFixed(2));
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-[#002147]">Mutual Fund Calculator</h3>
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
        <label className="text-[#6C757D]">Rate of Return (Annual %):</label>
        <input
          type="number"
          value={rateOfReturn}
          onChange={(e) => setRateOfReturn(e.target.value)}
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-[#6C757D]">Investment Period (Years):</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
        />
      </div>
      <button
        onClick={calculateInvestment}
        className="mt-4 bg-[#F39C12] hover:bg-[#F1C40F] text-white px-6 py-2 rounded-lg font-bold"
      >
        Calculate Future Value
      </button>
      {futureValue && (
        <div className="mt-4 text-lg text-[#6C757D]">
          Your investment will grow to approximately ${futureValue}.
        </div>
      )}
    </div>
  );
};

const MutualFundEssentials = () => {
  const navigate = useNavigate();

  const handleQuizRedirect = () => {
    navigate("/QuizApp/MutualFundEssentials"); // Replace "/quiz" with the route for your Quiz page on Mutual Funds
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#F4F4F4] to-[#F8FAFC] min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-[#002147] text-center my-6">
        Mutual Funds: A Smart Investment for Your Future
      </h1>

      {/* Content Section */}
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-5xl mx-auto">

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">What are Mutual Funds?</h2>
          <p className="text-[#6C757D] mt-3">
            Mutual funds are investment vehicles that pool money from many investors to invest in a diversified portfolio of
            stocks, bonds, or other securities. They are managed by professional fund managers, which means they offer
            a way for individuals to invest in a variety of assets without having to do all the research or manage the
            investments themselves.
          </p>
        </section>

        {/* Types of Mutual Funds */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Types of Mutual Funds</h2>
          <p className="text-[#6C757D] mt-3">
            There are several types of mutual funds, each focusing on a different investment strategy:
          </p>
          <ul className="list-disc list-inside mt-3 text-[#6C757D]">
            <li><strong>Equity Funds:</strong> Invest primarily in stocks, aiming for higher returns but higher risk.</li>
            <li><strong>Bond Funds:</strong> Invest in bonds or other fixed-income securities, offering lower risk but also lower returns.</li>
            <li><strong>Index Funds:</strong> Track a specific market index (like the S&P 500), offering low fees and diversification.</li>
            <li><strong>Money Market Funds:</strong> Invest in short-term, low-risk securities, providing lower returns but more stability.</li>
          </ul>
        </section>

        {/* Mutual Fund Benefits */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Benefits of Investing in Mutual Funds</h2>
          <p className="text-[#6C757D] mt-3">
            Investing in mutual funds comes with several key advantages:
          </p>
          <ul className="list-disc list-inside mt-3 text-[#6C757D]">
            <li><strong>Diversification:</strong> Your money is spread across different securities, reducing risk.</li>
            <li><strong>Professional Management:</strong> Fund managers do the research and decision-making for you.</li>
            <li><strong>Accessibility:</strong> You can invest in mutual funds with relatively small amounts of money.</li>
            <li><strong>Liquidity:</strong> Mutual funds can be bought and sold daily, providing flexibility.</li>
          </ul>
        </section>

        {/* Mutual Fund Calculator */}
        <MutualFundCalculator />

        {/* How to Start Investing in Mutual Funds */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">How to Start Investing in Mutual Funds</h2>
          <p className="text-[#6C757D] mt-3">
            Getting started with mutual funds is relatively easy. Here’s how you can begin:
          </p>
          <ol className="list-decimal list-inside mt-3 text-[#6C757D]">
            <li>Research different mutual funds based on your investment goals, risk tolerance, and time horizon.</li>
            <li>Open an account with a brokerage or mutual fund company.</li>
            <li>Start with a small amount and gradually increase your investment as you learn more.</li>
            <li>Review your investments periodically and make adjustments as needed.</li>
          </ol>
        </section>

        {/* Key Takeaways */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Key Takeaways</h2>
          <p className="text-[#6C757D] mt-3">
            Mutual funds are an excellent way to invest, especially for beginners. They provide diversification, professional
            management, and flexibility. By starting early and being consistent with your investments, you can grow your
            wealth over time and achieve your financial goals.
          </p>
        </section>

        {/* Quiz Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleQuizRedirect}
            className="bg-[#F39C12] hover:bg-[#F1C40F] text-white px-6 py-3 rounded-lg font-bold text-xl"
          >
            Take the Quiz!
          </button>
        </div>
      </div>
    </div>
  );
};

export default MutualFundEssentials;
