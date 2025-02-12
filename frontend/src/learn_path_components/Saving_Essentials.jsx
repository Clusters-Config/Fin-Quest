import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

      // For SIP or Bank Savings interest calculation
      if (investmentType === "sip") {
        // Formula for SIP returns: FV = P * [(1 + r)^n - 1] / r
        const monthlyInterestRate = interestRate / 12 / 100; // Monthly interest rate
        const numberOfMonths = years * 12; // Total months
        totalAmount =
          (monthlySaving *
            ((Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1) /
              monthlyInterestRate)) *
          (1 + monthlyInterestRate); // Future Value of SIP
      } else if (investmentType === "bank") {
        // Formula for simple compound interest: A = P(1 + r/n)^(nt)
        const compoundInterest = (principal, rate, time) => {
          const amount =
            principal *
            Math.pow(1 + rate / 100, time); // Compound Interest formula
          return amount;
        };
        totalAmount = compoundInterest(monthlySaving, interestRate, years);
      } else if (investmentType === "swp") {
        // For SWP, assume the user withdraws a fixed amount each month
        // SWP calculation: Use compound interest for balance and subtract withdrawals over time

        // Convert interest rate to monthly rate
        const monthlyInterestRate = interestRate / 12 / 100;

        // Total number of months for the investment
        const numberOfMonths = years * 12;

        // Initial investment for SWP
        let initialInvestment = parseFloat(goal); // Assuming goal is the lump sum initial investment for SWP

        // Monthly withdrawal
        const monthlyWithdrawal = parseFloat(monthlySaving);

        // Calculate the future value of the initial investment with compound interest
        let finalAmount = initialInvestment;

        for (let i = 0; i < numberOfMonths; i++) {
          // Apply interest
          finalAmount *= (1 + monthlyInterestRate);
          // Withdraw monthly
          finalAmount -= monthlyWithdrawal;
        }

        totalAmount = finalAmount;
      }

      setAmountSaved(totalAmount);
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-[#002147]">Savings Calculator</h3>

      {/* Select Investment Type */}
      <div className="mt-4">
        <label className="text-[#6C757D]">Select the investment type:</label>
        <select
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
          value={investmentType}
          onChange={(e) => setInvestmentType(e.target.value)}
        >
          <option value="sip">SIP (Systematic Investment Plan)</option>
          <option value="bank">Bank Savings Account</option>
          <option value="swp">SWP (Systematic Withdrawal Plan)</option>
        </select>
      </div>

      {/* Goal */}
      <div className="mt-4">
        <label className="text-[#6C757D]">Enter your savings goal: ₹</label>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
        />
      </div>

      {/* Dynamic Input based on Investment Type */}
      <div className="mt-4">
        <label className="text-[#6C757D]">
          {investmentType === "swp"
            ? "Enter the monthly withdrawal amount: ₹"
            : "Enter the monthly savings amount: ₹"}
        </label>
        <input
          type="number"
          value={monthlySaving}
          onChange={(e) => setMonthlySaving(e.target.value)}
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
        />
      </div>

      {/* Interest Rate */}
      <div className="mt-4">
        <label className="text-[#6C757D]">Enter the expected annual interest rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
        />
      </div>

      {/* Number of Years */}
      <div className="mt-4">
        <label className="text-[#6C757D]">Enter the number of years:</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
        />
      </div>

      <button
        onClick={calculateSavings}
        className="mt-4 bg-[#F39C12] hover:bg-[#A8DADC] text-white px-6 py-2 rounded-lg font-bold"
      >
        Calculate Savings
      </button>

      {amountSaved && (
        <div className="mt-4 text-lg text-[#6C757D]">
          Total savings after {years} years: ₹{amountSaved.toFixed(2)}
        </div>
      )}
    </div>
  );
};

 


const SavingEssentials = () => {
  const navigate = useNavigate();
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [savingProgress, setSavingProgress] = useState(20);
  const mod = 1;
  const page = "resultpage";
  const path = "path1"
  const mods = "mod3" // Percentage progress for demonstration

  const handleQuizRedirect = () => {
    navigate("/QuizApp/Saving_Essentials",{state:{mod:mod, page:page,path:path,mods:mods}}); // Replace "/quiz" with the route of your Quiz page
  };

  const handleDownloadTracker = () => {
    const link = document.createElement("a");
    link.href = "/path-to-your-pdf/savings-tracker.pdf"; // Link to a downloadable tracker PDF
    link.download = "savings-tracker.pdf";
    link.click();
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#F4F4F4] to-[#F8FAFC] min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-[#002147] text-center my-6">
        Essential Savings for Students
      </h1>

      {/* Content Section */}
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-5xl mx-auto">

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">
            Why is Saving Important for Students?
          </h2>
          <p className="text-[#6C757D] mt-3">
            Saving money as a student can help you build financial discipline,
            prepare for future expenses, and reach your goals, whether it’s buying
            your first car, going on a school trip, or saving for college.
            Learning how to save now will set you up for a more financially
            
            secure future!
          </p>
        </section>

        {/* Understanding the Basics of Saving */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Understanding the Basics of Saving</h2>
          <p className="text-[#6C757D] mt-3">
            Saving money means putting aside some of the money you earn or receive
            so that you can use it later. Think of it like a savings jar: you add
            coins to it little by little, and over time, you end up with a good
            amount of money. But why should you save?
          </p>
          <ul className="list-disc list-inside mt-3 text-[#6C757D]">
            <li>Be ready for emergencies like a lost wallet or an unexpected expense.</li>
            <li>Work towards buying something you really want, like a laptop or a bike.</li>
            <li>Save for larger goals like going to college or traveling.</li>
          </ul>
        </section>

        {/* Avenues Section */}
      <div className="mt-8 text-[#6C757D]">
      <h2 className="text-3xl font-semibold text-[#002147]">Different Saving Avenues</h2>
        <p className="mt-3">
          There are several avenues through which you can save and invest your money. Here are some common options:
        </p>
        <ul className="list-disc list-inside mt-3">
          <li>
            <strong>SIP (Systematic Investment Plan)</strong>: A method of investing in mutual funds through monthly contributions. It allows you to invest small amounts regularly and potentially grow your wealth over time. SIPs can provide higher returns but come with market risks.
          </li>
          <li>
            <strong>Bank Savings Account</strong>: A simple option where your savings earn interest. The interest rates are generally lower, but it offers safety and liquidity.
          </li>
          <li>
            <strong>Insurance</strong>: Insurance savings products, like life insurance or endowment policies, combine savings and protection. They provide financial security for your future and can offer returns after a certain period.
          </li>
        </ul>
      </div>
      

        {/* Savings Calculator */}
        <SavingsCalculator />

        {/* How to Start Saving */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">How to Start Saving</h2>
          <p className="text-[#6C757D] mt-3">
            Starting small is the key! You don’t need a lot of money to begin saving.
            Even saving a little bit every month will build up over time. Here are some
            steps you can follow to start your savings journey:
          </p>
          <ol className="list-decimal list-inside mt-3 text-[#6C757D]">
            <li>Create a budget to track how much you’re spending versus how much you’re saving.</li>
            <li>Set specific goals, like saving ₹1000 per week for a month, or saving for a particular item.</li>
            <li>Put your money into a safe place, such as a savings account or a piggy bank, so you don’t spend it right away.</li>
            <li>Review your progress and adjust your goals if needed!</li>
          </ol>
        </section>

        

        {/* Budgeting for Students */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Budgeting: The Secret to Saving</h2>
          <p className="text-[#6C757D] mt-3">
            Budgeting is like planning out how to use your money wisely. It helps you know exactly how much you can save
            and how much you can spend. Here are some tips:
          </p>
          <ul className="list-disc list-inside mt-3 text-[#6C757D]">
            <li>Track all your income and expenses, like allowances, gifts, or part-time job earnings.</li>
            <li>Separate your money into categories: savings, spending, and entertainment.</li>
            <li>Review your spending to see where you can cut back, like spending less on snacks or going out with friends.</li>
          </ul>
        </section>

        {/* Saving for Big Goals */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Saving for Big Goals</h2>
          <p className="text-[#6C757D] mt-3">
            As a student, you might have some big goals—like saving for a school trip, new tech gadgets, or your college tuition. 
            Setting a goal helps you stay focused and motivated. Here’s how you can do it:
          </p>
          <ul className="list-disc list-inside mt-3 text-[#6C757D]">
            <li>Choose a goal that’s important to you and figure out how much you need to save.</li>
            <li>Break your goal into smaller steps—like saving ₹2000 a month for a new phone.</li>
            <li>Stay consistent. Even small, regular savings can add up to a big amount!</li>
          </ul>
        </section>

        {/* Fun Facts about Saving */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Fun Facts About Saving!</h2>
          <p className="text-[#6C757D] mt-3">
            Here are some fun facts that might make saving even more exciting:
          </p>
          <ul className="list-disc list-inside mt-3 text-[#6C757D]">
            <li>The first banknotes were used in China over 1,000 years ago!</li>
            <li>Saving just ₹200 a week can add up to over ₹10,000 in a year.</li>
            <li>Did you know? The first piggy banks were made from clay in the 1800s.</li>
          </ul>
        </section>
        

        {/* Key Takeaways */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Key Takeaways</h2>
          <p className="text-[#6C757D] mt-3">
            Remember, saving is all about creating a habit. Start with small steps, keep track of your goals, and over time,
            you’ll build up enough money for your needs and dreams. The earlier you start, the better!
          </p>
        </section>

        {/* Quiz Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleQuizRedirect}
            className="bg-[#F39C12] hover:bg-[#A8DADC] text-white px-6 py-3 rounded-lg font-bold text-xl"
          >
            Take the Quiz!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavingEssentials;
