import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Loan Calculator Component
const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateLoan = () => {
    if (loanAmount && interestRate && loanTerm) {
      // Using the loan formula to calculate monthly payment
      const rate = interestRate / 100 / 12;
      const months = loanTerm * 12;
      const payment =
        (loanAmount * rate) / (1 - Math.pow(1 + rate, -months));
      setMonthlyPayment(payment.toFixed(2));
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-[#002147]">Loan Calculator</h3>
      <div className="mt-4">
        <label className="text-[#6C757D]">Loan Amount: $</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-[#6C757D]">Interest Rate (Annual %):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-[#6C757D]">Loan Term (Years):</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
        />
      </div>
      <button
        onClick={calculateLoan}
        className="mt-4 bg-[#F39C12] hover:bg-[#F1C40F] text-white px-6 py-2 rounded-lg font-bold"
      >
        Calculate Monthly Payment
      </button>
      {monthlyPayment && (
        <div className="mt-4 text-lg text-[#6C757D]">
          Your estimated monthly payment is ${monthlyPayment}.
        </div>
      )}
    </div>
  );
};

const LoanImpacts = () => {
  const navigate = useNavigate();

  const handleQuizRedirect = () => {
    navigate("/QuizApp/LoanImpacts"); // Replace "/quiz2" with the route of your Quiz page for loans
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#F4F4F4] to-[#F8FAFC] min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-[#002147] text-center my-6">
        Understanding Loans and Their Impacts
      </h1>

      {/* Content Section */}
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-5xl mx-auto">

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">What is a Loan?</h2>
          <p className="text-[#6C757D] mt-3">
            A loan is a sum of money that you borrow from a lender, like a bank or a financial institution, which you will
            have to repay with interest over time. Loans can help you afford big expenses like buying a house, paying for education,
            or starting a business, but they also come with financial responsibilities.
          </p>
        </section>

        {/* Types of Loans */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Types of Loans</h2>
          <p className="text-[#6C757D] mt-3">
            There are several types of loans available, each serving a different purpose:
          </p>
          <ul className="list-disc list-inside mt-3 text-[#6C757D]">
            <li>Personal Loans: Unsecured loans for general purposes like home repairs or medical bills.</li>
            <li>Student Loans: Loans to cover the cost of tuition and education-related expenses.</li>
            <li>Mortgage Loans: Loans used to purchase property or homes, with the property itself acting as collateral.</li>
            <li>Auto Loans: Loans specifically for purchasing a car, often secured by the vehicle itself.</li>
            <li>Home Equity Loans: Loans that allow you to borrow against the equity in your home, usually for home improvement projects or debt consolidation.</li>
            <li>Business Loans: Loans provided to businesses for various purposes, such as expansion, operations, or capital investment.</li>
          </ul>
        </section>

        {/* Impacts of Borrowing */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Impacts of Borrowing</h2>
          <p className="text-[#6C757D] mt-3">
            While borrowing can be helpful for big expenses, loans also come with significant impacts on your finances:
          </p>
          <ul className="list-disc list-inside mt-3 text-[#6C757D]">
            <li><strong>Interest Rates:</strong> Loans typically come with interest rates that increase the amount you need to repay. High interest can make the total cost of borrowing significantly higher.</li>
            <li><strong>Debt Accumulation:</strong> If not managed carefully, borrowing can lead to debt accumulation, which could affect your credit score and limit your financial flexibility.</li>
            <li><strong>Financial Strain:</strong> Monthly loan payments can put a strain on your budget, especially if you don’t account for other expenses. It’s important to ensure that you can comfortably afford the repayments.</li>
            <li><strong>Long-Term Commitment:</strong> Loans can last for years, meaning you may be committing to long-term debt. If you borrow for a house or car, you'll be paying off your loan for many years.</li>
            <li><strong>Impact on Credit Score:</strong> Timely repayment can improve your credit score, while missed or late payments can significantly damage it.</li>
            <li><strong>Risk of Foreclosure or Repossession:</strong> If you fail to repay secured loans like mortgages or auto loans, the lender has the right to seize your property as collateral.</li>
          </ul>
        </section>

        {/* Loan Calculator */}
        <LoanCalculator />

        {/* How to Manage Loans Effectively */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">How to Manage Loans Effectively</h2>
          <p className="text-[#6C757D] mt-3">
            To avoid the negative impacts of loans, it’s important to manage them carefully:
          </p>
          <ol className="list-decimal list-inside mt-3 text-[#6C757D]">
            <li>Understand your loan terms: Always read the fine print of your loan agreement. Know your interest rate, monthly payments, and repayment schedule.</li>
            <li>Set a budget: Allocate enough of your income towards loan payments so you don’t miss any deadlines.</li>
            <li>Pay on time: Make sure to make timely payments to avoid late fees and negative effects on your credit score.</li>
            <li>Consider refinancing: If interest rates drop or if your financial situation improves, refinancing could lower your monthly payments.</li>
            <li>Make extra payments: Paying more than your monthly minimum can reduce your debt faster and lower the amount of interest you pay in the long run.</li>
            <li>Consolidate your loans: If you have multiple loans, consolidating them into one loan may reduce your monthly payments and simplify your finances.</li>
          </ol>
        </section>

        {/* Additional Considerations */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Additional Considerations When Borrowing</h2>
          <p className="text-[#6C757D] mt-3">
            Before you take out a loan, consider the following:
          </p>
          <ul className="list-disc list-inside mt-3 text-[#6C757D]">
            <li><strong>Purpose of the Loan:</strong> Make sure the loan aligns with your financial goals and needs. Ask yourself if the purchase or expense can be postponed or paid for in another way.</li>
            <li><strong>Loan Affordability:</strong> Assess whether you can afford the monthly payments without straining your budget. A loan that’s too large may lead to long-term financial challenges.</li>
            <li><strong>Emergency Fund:</strong> Ensure that you have a financial cushion or emergency fund in place, especially if the loan is for a non-essential purpose.</li>
          </ul>
        </section>

        {/* Key Takeaways */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Key Takeaways</h2>
          <p className="text-[#6C757D] mt-3">
            Loans can be useful tools for funding major purchases, but they also come with responsibilities. Always make sure you understand
            the terms of any loan you take out, and make plans for managing the payments. Responsible borrowing can help you achieve your
            goals without negatively impacting your financial future.
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

export default LoanImpacts;
