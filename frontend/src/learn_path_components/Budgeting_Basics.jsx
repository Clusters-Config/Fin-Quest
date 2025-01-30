import React from "react";
import { Link } from "react-router-dom";

const BudgetBasics = () => {
  return (
    <div className="bg-gradient-to-b from-[#F4F4F4] to-[#FFFFFF] min-h-screen p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold text-[#002147] text-center mb-8 animate__animated animate__fadeIn">
          Budget Basics
        </h1>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8 animate__animated animate__fadeIn">
          <h2 className="text-2xl font-semibold text-[#002147] mb-4">
            Introduction to Budgeting
          </h2>
          <p className="text-[#6C757D] whitespace-pre-line mb-6">
            Budgeting is a way to plan your spending and saving to ensure you have enough money for what you need and want. It's like creating a roadmap for your money. For students, budgeting helps manage allowances and earnings wisely, making it easier to save for special things or avoid running out of cash.
          </p>

          <h2 className="text-2xl font-semibold text-[#002147] mb-4">
            Why Budgeting is Important
          </h2>
          <p className="text-[#6C757D] whitespace-pre-line mb-6">
            Budgeting helps you: 
            <ul className="list-disc pl-6">
              <li>Avoid overspending.</li>
              <li>Save for future goals.</li>
              <li>Understand where your money goes.</li>
              <li>Build good financial habits early.</li>
            </ul>
            Budgeting teaches you to live within your means and prepares you for larger financial responsibilities in the future.
          </p>

          <h2 className="text-2xl font-semibold text-[#002147] mb-4">
            How to Create a Simple Budget
          </h2>
          <p className="text-[#6C757D] whitespace-pre-line mb-6">
            To create a budget, follow these steps:
            <ul className="list-disc pl-6">
              <li>Write down your income (e.g., allowance, part-time job earnings).</li>
              <li>List all your expenses (e.g., snacks, school supplies, hobbies).</li>
              <li>Subtract your expenses from your income.</li>
              <li>Save the leftover money for future needs or emergencies.</li>
            </ul>
            Remember, always prioritize needs over wants!
          </p>
        </div>

        {/* Types of Budgets */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8 animate__animated animate__fadeIn">
          <h2 className="text-2xl font-semibold text-[#002147] mb-4">
            Types of Budgets
          </h2>
          <p className="text-[#6C757D] whitespace-pre-line mb-6">
            There are different types of budgets you can create based on your needs:
            <ul className="list-disc pl-6">
              <li><strong>Zero-Based Budget:</strong> Every dollar is assigned a specific purpose (e.g., savings, expenses) until your income is exhausted.</li>
              <li><strong>50/30/20 Rule:</strong> Allocate 50% of your income to needs, 30% to wants, and 20% to savings or debt repayment.</li>
              <li><strong>Envelope System:</strong> Budgeting by placing a set amount of cash in envelopes for different categories (e.g., groceries, entertainment).</li>
            </ul>
          </p>
        </div>

        {/* Budgeting for Students */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8 animate__animated animate__fadeIn">
          <h2 className="text-2xl font-semibold text-[#002147] mb-4">
            Budgeting for Students
          </h2>
          <p className="text-[#6C757D] whitespace-pre-line mb-6">
            As a student, it can be difficult to manage your finances, but budgeting will help you stay on track. Here's how students can make the most of their budget:
            <ul className="list-disc pl-6">
              <li>Track all sources of income (allowance, part-time jobs, scholarships, etc.)</li>
              <li>List all monthly expenses (books, transportation, snacks, etc.)</li>
              <li>Save for emergencies and unexpected costs like medical bills or laptop repairs.</li>
              <li>Use student discounts and coupons whenever possible to save money on daily purchases.</li>
            </ul>
          </p>
        </div>

        {/* Tips for Smart Budgeting (Extended) */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8 animate__animated animate__fadeIn">
          <h2 className="text-2xl font-semibold text-[#002147] mb-4">
            Tips for Smart Budgeting
          </h2>
          <p className="text-[#6C757D] whitespace-pre-line mb-6">
            Here are more tips to help you stay on track with your budget:
            <ul className="list-disc pl-6">
              <li>Review your budget monthly to see if your spending habits align with your goals.</li>
              <li>Use budgeting apps to track your expenses and savings.</li>
              <li>Avoid impulse buying by setting a "cooling off" period before making big purchases.</li>
              <li>Always have a financial cushion or emergency fund.</li>
              <li>Set realistic goals and break them into smaller, achievable steps.</li>
            </ul>
          </p>
        </div>

        {/* Real-Life Budgeting Examples */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8 animate__animated animate__fadeIn">
          <h2 className="text-2xl font-semibold text-[#002147] mb-4">
            Real-Life Budgeting Examples
          </h2>
          <p className="text-[#6C757D] whitespace-pre-line mb-6">
            Here are a few examples of real people using budgets to reach their financial goals:
            <ul className="list-disc pl-6">
              <li><strong>Sarah, a College Student:</strong> Sarah creates a zero-based budget to track her monthly expenses. She uses an app to make sure her groceries, transport, and tuition are covered while still setting aside some savings each month.</li>
              <li><strong>John, a Young Professional:</strong> John uses the 50/30/20 rule to budget his salary. 50% goes to his rent and essentials, 30% for discretionary spending (travel, entertainment), and 20% goes straight into his savings account.</li>
            </ul>
          </p>
        </div>

        {/* Common Budgeting Mistakes to Avoid */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8 animate__animated animate__fadeIn">
          <h2 className="text-2xl font-semibold text-[#002147] mb-4">
            Common Budgeting Mistakes to Avoid
          </h2>
          <p className="text-[#6C757D] whitespace-pre-line mb-6">
            When budgeting, avoid these common mistakes:
            <ul className="list-disc pl-6">
              <li>Not tracking every expense.</li>
              <li>Underestimating irregular expenses (e.g., medical bills or car repairs).</li>
              <li>Not accounting for inflation or rising prices.</li>
              <li>Being too strict with yourself and not allowing for occasional treats.</li>
            </ul>
          </p>
        </div>

        {/* Additional Resources for Budgeting */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8 animate__animated animate__fadeIn">
          <h2 className="text-2xl font-semibold text-[#002147] mb-4">
            Additional Resources for Budgeting
          </h2>
          <p className="text-[#6C757D] whitespace-pre-line mb-6">
            For further reading and resources on budgeting, check out these helpful tools:
            <ul className="list-disc pl-6">
              <li><a href="https://www.youneedabudget.com" className="text-[#F39C12] hover:underline">You Need A Budget (YNAB)</a></li>
              <li><a href="https://mint.intuit.com" className="text-[#F39C12] hover:underline">Mint (Budgeting App)</a></li>
              <li><a href="https://www.daveramsey.com/budgeting" className="text-[#F39C12] hover:underline">Dave Ramsey's Budgeting Guide</a></li>
            </ul>
          </p>
        </div>
      </div>

      {/* Take Quiz Button */}
      <div className="flex justify-center mt-auto mb-4">
        <Link to="/QuizApp/Budgeting_Basics">
          <button className="bg-[#F39C12] hover:bg-[#002147] text-white px-6 py-3 rounded-lg font-bold text-xl transform transition-all duration-300 hover:scale-105 border-2 border-solid border-[#F39C12] hover:border-[#002147]">
            Take Quiz <i className="fas fa-check-circle ml-2"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BudgetBasics;
