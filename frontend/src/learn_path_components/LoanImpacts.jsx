import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Loan Calculator Component
const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateLoan = () => {
    if (loanAmount && interestRate && loanTerm) {
      const rate = interestRate / 100 / 12;
      const months = loanTerm * 12;
      const payment =
        (loanAmount * rate) / (1 - Math.pow(1 + rate, -months));
      setMonthlyPayment(payment.toFixed(2));
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800">Loan Calculator</h3>
      <div className="mt-4">
        <label className="text-gray-600">Loan Amount ($)</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-gray-600">Interest Rate (Annual %)</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-gray-600">Loan Term (Years)</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-lg w-full mt-2"
        />
      </div>
      <button
        onClick={calculateLoan}
        className="mt-4 bg-[#F39C12] hover:bg-[#F1C40F] text-white px-6 py-2 rounded-lg font-bold"
      >
        Calculate Monthly Payment
      </button>
      {monthlyPayment && (
        <div className="mt-4 text-lg text-gray-700">
          Your estimated monthly payment is ${monthlyPayment}.
        </div>
      )}
    </div>
  );
};

const LoanImpacts = () => {
  const navigate = useNavigate();

  const page = "resultpage";
  const path = "path2";
  const mods = "mod3";
  const type = "finance";

  const handleQuizRedirect = () => {
    navigate("/QuizApp/LoanImpacts", {
      state: { page, path, mods, type },
    });
  };

  const contentSections = [
    {
      title: "What is a Loan?",
      content: (
        <p className="text-gray-600 leading-relaxed">
          A loan is a sum of money that you borrow from a lender, like a bank or a financial institution,
          which you will have to repay with interest over time. Loans can help you afford big expenses
          like buying a house, paying for education, or starting a business, but they also come with
          financial responsibilities.
        </p>
      ),
    },
    {
      title: "Types of Loans",
      content: (
        <>
          <p className="text-gray-600 mb-3">
            There are several types of loans available, each serving a different purpose:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-600">
            <li>Personal Loans: Unsecured loans for general purposes like home repairs or medical bills.</li>
            <li>Student Loans: Loans to cover tuition and education-related expenses.</li>
            <li>Mortgage Loans: Used to purchase property or homes, with the property itself acting as collateral.</li>
            <li>Auto Loans: Specifically for purchasing a car, often secured by the vehicle itself.</li>
            <li>Home Equity Loans: Borrow against the equity in your home for improvements or debt consolidation.</li>
            <li>Business Loans: For expansion, operations, or capital investment.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Impacts of Borrowing",
      content: (
        <>
          <p className="text-gray-600 mb-3">
            While borrowing can be helpful for big expenses, loans also come with significant impacts:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-600">
            <li><strong>Interest Rates:</strong> Can significantly increase the repayment amount.</li>
            <li><strong>Debt Accumulation:</strong> Poor management can harm your credit score.</li>
            <li><strong>Financial Strain:</strong> Payments can strain your budget.</li>
            <li><strong>Long-Term Commitment:</strong> Some loans last decades.</li>
            <li><strong>Impact on Credit Score:</strong> Timely payments help, missed ones hurt.</li>
            <li><strong>Risk of Foreclosure or Repossession:</strong> Lenders can seize collateral.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Loan Calculator",
      content: <LoanCalculator />,
    },
    {
      title: "How to Manage Loans Effectively",
      content: (
        <>
          <p className="text-gray-600 mb-3">
            To avoid the negative impacts of loans, it’s important to manage them carefully:
          </p>
          <ol className="list-decimal ml-6 space-y-2 text-gray-600">
            <li>Understand your loan terms.</li>
            <li>Set a budget.</li>
            <li>Pay on time.</li>
            <li>Consider refinancing.</li>
            <li>Make extra payments.</li>
            <li>Consolidate loans where possible.</li>
          </ol>
        </>
      ),
    },
    {
      title: "Additional Considerations",
      content: (
        <>
          <p className="text-gray-600 mb-3">
            Before you take out a loan, consider the following:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-600">
            <li><strong>Purpose of the Loan:</strong> Ensure it aligns with your goals.</li>
            <li><strong>Loan Affordability:</strong> Can you handle the payments?</li>
            <li><strong>Emergency Fund:</strong> Keep a safety cushion.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Key Takeaways",
      content: (
        <p className="text-gray-600 leading-relaxed">
          Loans can help fund major purchases but also bring responsibilities. Understand the terms,
          and manage them wisely to avoid financial strain.
        </p>
      ),
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="min-h-screen bg-[#F4F4F5] p-8 flex justify-center items-center relative">
      {/* Book Container */}
      <div className="w-full max-w-[1200px] aspect-[3/2] relative">
        <div className="absolute inset-0 flex bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Left Page Edge */}
          <div className="w-[80px] bg-gradient-to-r from-gray-200 to-white" />
          
          {/* Main Content */}
          <div className="flex-1 p-12 relative">
            {/* Header */}
            <div className="text-center mb-8 border-b pb-4">
              <h1 className="text-3xl font-serif text-gray-800">
                Understanding Loans and Their Impacts
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                Learn about loans, their types, impacts, and how to manage them wisely.
              </p>
            </div>

            {/* Animated Page Content */}
            <div className="h-[calc(100%-160px)] overflow-y-auto pr-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    {contentSections[currentPage].title}
                  </h2>
                  {contentSections[currentPage].content}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
              <button
                onClick={() => setCurrentPage((p) => p - 1)}
                disabled={currentPage === 0}
                className={`px-4 py-2 rounded ${
                  currentPage === 0
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                Previous
              </button>
              <span className="text-sm text-gray-500">
                Page {currentPage + 1} of {contentSections.length}
              </span>
              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={currentPage === contentSections.length - 1}
                className={`px-4 py-2 rounded ${
                  currentPage === contentSections.length - 1
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

export default LoanImpacts;
