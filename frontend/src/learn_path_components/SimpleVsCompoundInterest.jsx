import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Simple Interest vs Compound Interest Seminar Page
const SimpleVsCompoundInterest = () => {
  const navigate = useNavigate();
  const page = "resultpage";
  const path = "path1"
  const mods = "mod3"
  const type = "finance"

  // Function to handle quiz redirection
  const handleQuizRedirect = () => {
    navigate("/QuizApp/SimpleVsCompoundInterest",{state:{ page:page,path:path,mods:mods,type:type}}); // Replace with actual route for your quiz page
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#F4F4F4] to-[#F8FAFC] min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-[#002147] text-center my-6">
        Simple vs. Compound Interest: Understanding the Basics
      </h1>

      {/* Content Section */}
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-5xl mx-auto">

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">What is Interest?</h2>
          <p className="text-[#6C757D] mt-3">
            Interest is the cost of borrowing money, or the reward for lending it.
            It’s usually expressed as a percentage of the principal (the original amount of money). 
            There are two main types of interest: Simple Interest and Compound Interest. Let’s dive into both.
          </p>
        </section>

        {/* Simple Interest Explained */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Simple Interest</h2>
          <p className="text-[#6C757D] mt-3">
            Simple interest is calculated only on the principal amount, or the original sum of money that is invested or borrowed.
            It is straightforward and doesn’t take into account any interest earned or paid over time.
          </p>
          <p className="text-[#6C757D] mt-3">
            The formula for Simple Interest is:
            <strong>Simple Interest = P × R × T</strong>
            <ul className="list-inside mt-3 text-[#6C757D]">
              <li><strong>P</strong> = Principal amount</li>
              <li><strong>R</strong> = Rate of interest per period</li>
              <li><strong>T</strong> = Time the money is invested or borrowed for</li>
            </ul>
          </p>
          <p className="text-[#6C757D] mt-3">
            Example: If you borrow $1,000 for 3 years at an interest rate of 5% per year, the simple interest would be:
            <strong>$1,000 × 5% × 3 years = $150</strong>
          </p>
        </section>

        {/* Compound Interest Explained */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Compound Interest</h2>
          <p className="text-[#6C757D] mt-3">
            Compound interest, on the other hand, is calculated on the initial principal and also on the accumulated interest from previous periods.
            This means you earn “interest on interest,” and it can lead to a faster growth of your investment.
          </p>
          <p className="text-[#6C757D] mt-3">
            The formula for Compound Interest is:
            <strong>Compound Interest = P × (1 + R/n)^(n × T) - P</strong>
            <ul className="list-inside mt-3 text-[#6C757D]">
              <li><strong>P</strong> = Principal amount</li>
              <li><strong>R</strong> = Rate of interest per period</li>
              <li><strong>T</strong> = Time the money is invested for</li>
              <li><strong>n</strong> = Number of times interest is compounded per year</li>
            </ul>
          </p>
          <p className="text-[#6C757D] mt-3">
            Example: If you invest $1,000 for 3 years at an interest rate of 5%, compounded annually, the compound interest would be:
            <strong>$1,000 × (1 + 0.05/1)^(1 × 3) - $1,000 = $157.63</strong>
          </p>
        </section>

        {/* Key Differences */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Key Differences Between Simple and Compound Interest</h2>
          <ul className="list-disc list-inside mt-3 text-[#6C757D]">
            <li><strong>Simple Interest</strong> is calculated only on the initial principal amount.</li>
            <li><strong>Compound Interest</strong> is calculated on both the principal and the accumulated interest.</li>
            <li><strong>Growth:</strong> Compound interest grows faster than simple interest due to the “interest on interest” factor.</li>
            <li><strong>Time:</strong> Compound interest benefits more from longer investment periods compared to simple interest.</li>
          </ul>
        </section>

        {/* Practical Example */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Practical Example</h2>
          <p className="text-[#6C757D] mt-3">
            Let’s compare simple and compound interest with an example of investing $1,000 at 5% annual interest for 3 years:
          </p>
          <ul className="list-inside mt-3 text-[#6C757D]">
            <li><strong>Simple Interest</strong>: $1,000 × 5% × 3 years = $150</li>
            <li><strong>Compound Interest</strong>: $1,000 × (1 + 0.05/1)^(1 × 3) - $1,000 = $157.63</li>
          </ul>
          <p className="text-[#6C757D] mt-3">
            As you can see, compound interest gives a higher return after the same amount of time. The more frequently interest is compounded, the more it grows.
          </p>
        </section>

        {/* When to Use Simple vs Compound Interest */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">When to Use Simple vs. Compound Interest</h2>
          <p className="text-[#6C757D] mt-3">
            Simple interest is often used for short-term loans or investments, while compound interest is better for long-term investments and savings accounts where interest is reinvested.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Key Takeaways</h2>
          <p className="text-[#6C757D] mt-3">
            - Simple interest is easier to calculate and is used for short-term borrowing or lending.<br />
            - Compound interest is a more powerful tool for growing investments over time due to the reinvestment of earned interest.<br />
            - Always consider the time frame and frequency of compounding when choosing between simple and compound interest.
          </p>
        </section>

        {/* Quiz Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleQuizRedirect}
            className="bg-[#F39C12] hover:bg-[#F39C12] text-white px-6 py-3 rounded-lg font-bold text-xl"
          >
            Take the Quiz to Test Your Knowledge!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleVsCompoundInterest;
