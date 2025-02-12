import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Simple Deposit Calculator Component
const DepositCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rateOfInterest, setRateOfInterest] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateDeposit = () => {
    if (principal && rateOfInterest && timePeriod) {
      const rate = rateOfInterest / 100;
      const maturityVal = 
        principal * Math.pow(1 + rate, timePeriod); // Simple compound interest formula for Deposit
      setMaturityAmount(maturityVal.toFixed(2));
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-[#002147]">Deposit Calculator (INR)</h3>
      <div className="mt-4">
        <label className="text-[#6C757D]">Initial Deposit (INR):</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-[#6C757D]">Rate of Interest (Annual %):</label>
        <input
          type="number"
          value={rateOfInterest}
          onChange={(e) => setRateOfInterest(e.target.value)}
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-[#6C757D]">Time Period (Years):</label>
        <input
          type="number"
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
        />
      </div>
      <button
        onClick={calculateDeposit}
        className="mt-4 bg-[#F39C12] hover:bg-[#F1C40F] text-white px-6 py-2 rounded-lg font-bold"
      >
        Calculate Maturity Amount
      </button>
      {maturityAmount && (
        <div className="mt-4 text-lg text-[#6C757D]">
          Your deposit will grow to approximately ₹{maturityAmount}.
        </div>
      )}
    </div>
  );
};

const DepositEssentials = () => {
  const navigate = useNavigate();
  const page = "resultpage";
  const path = "path1"
  const mods = "mod5"

  const handleQuizRedirect = () => {
    navigate("/QuizApp/DepositEssentials",{state:{ page:page,path:path,mods:mods}}); // Replace with the route for your Deposit Quiz page
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#F4F4F4] to-[#F8FAFC] min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-[#002147] text-center my-6">
        Understanding Deposits: A Safe Way to Save and Grow Your Money
      </h1>

      {/* Content Section */}
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-5xl mx-auto">

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">What are Deposits?</h2>
          <p className="text-[#6C757D] mt-3">
            Deposits are sums of money that you place in a financial institution, such as a bank or credit union, for safekeeping. 
            These funds can earn interest over time, making deposits an excellent option for growing your savings with minimal risk.
          </p>
        </section>

        {/* Types of Deposits */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Types of Deposits</h2>
          <p className="text-[#6C757D] mt-3">
            There are several types of deposits that vary based on the duration and interest they offer:
          </p>
          <ul className="list-disc list-inside mt-3 text-[#6C757D]">
            <li><strong>Fixed Deposits:</strong> A deposit where you invest a lump sum amount for a fixed tenure, and it earns a guaranteed rate of interest.</li>
            <li><strong>Recurring Deposits:</strong> A deposit where you invest a fixed amount every month for a predetermined period to earn interest.</li>
            <li><strong>Demand Deposits:</strong> Deposits that can be withdrawn at any time, such as a checking or savings account.</li>
            <li><strong>Term Deposits:</strong> Similar to fixed deposits, but these are made for a specific term, with the principal returning at maturity along with interest.</li>
          </ul>
        </section>

        {/* Benefits of Deposits */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Benefits of Depositing Money</h2>
          <p className="text-[#6C757D] mt-3">
            Depositing your money offers several advantages, especially for those looking for safe and stable growth:
          </p>
          <ul className="list-disc list-inside mt-3 text-[#6C757D]">
            <li><strong>Security:</strong> Deposits are typically insured (such as FDIC insurance), ensuring your money is safe even if the bank fails.</li>
            <li><strong>Guaranteed Returns:</strong> Fixed and term deposits offer guaranteed returns at a specified interest rate, making them low-risk investments.</li>
            <li><strong>Liquidity:</strong> Demand deposits and savings accounts allow quick access to your funds whenever needed.</li>
            <li><strong>Easy to Manage:</strong> Deposits are easy to open and manage, requiring little to no effort once set up.</li>
          </ul>
        </section>

        {/* Deposit Calculator */}
        <DepositCalculator />

        {/* How to Start with Deposits */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">How to Start Depositing Money</h2>
          <p className="text-[#6C757D] mt-3">
            Getting started with deposits is straightforward. Here are the basic steps:
          </p>
          <ol className="list-decimal list-inside mt-3 text-[#6C757D]">
            <li>Research different deposit options based on your financial goals and time horizon.</li>
            <li>Choose a trusted financial institution (bank or credit union) and open the account or deposit you prefer.</li>
            <li>Deposit your money and let it earn interest over the agreed period.</li>
            <li>Review your deposit options periodically to ensure they are meeting your financial needs.</li>
          </ol>
        </section>

        {/* Key Takeaways */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Key Takeaways</h2>
          <p className="text-[#6C757D] mt-3">
            Deposits are a reliable and safe way to save and grow your money. By understanding the different types of deposits and their benefits,
            you can make informed decisions to strengthen your financial position while minimizing risk.
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

export default DepositEssentials;
