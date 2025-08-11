import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const BudgetBasics = () => {
  const mod = 1;
  const page = "resultpage";
  const path = "path2";
  const mods = "mod2";
  const type = "finance";
  const navigate = useNavigate();

  const handleQuizRedirect = () => {
    navigate("/QuizApp/Budgeting_Basics", {
      state: { mod, page, path, mods, type },
    });
  };

  // Content split into sections (pages)
  const contentSections = [
    {
      title: "Introduction to Budgeting",
      content: (
        <>
          <p>
            Budgeting is a way to plan your spending and saving to ensure you
            have enough money for what you need and want. It's like creating a
            roadmap for your money. For students, budgeting helps manage
            allowances and earnings wisely, making it easier to save for special
            things or avoid running out of cash.
          </p>
        </>
      ),
    },
    {
      title: "Why Budgeting is Important",
      content: (
        <>
          <ul className="list-disc ml-6 space-y-2">
            <li>Avoid overspending.</li>
            <li>Save for future goals.</li>
            <li>Understand where your money goes.</li>
            <li>Build good financial habits early.</li>
          </ul>
          <p>
            Budgeting teaches you to live within your means and prepares you for
            larger financial responsibilities in the future.
          </p>
        </>
      ),
    },
    {
      title: "How to Create a Simple Budget",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Write down your income (e.g., allowance, part-time job earnings).
          </li>
          <li>
            List all your expenses (e.g., snacks, school supplies, hobbies).
          </li>
          <li>Subtract your expenses from your income.</li>
          <li>
            Save the leftover money for future needs or emergencies. Remember,
            always prioritize needs over wants!
          </li>
        </ul>
      ),
    },
    {
      title: "Types of Budgets",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Zero-Based Budget:</strong> Every dollar is assigned a
            specific purpose (e.g., savings, expenses) until your income is
            exhausted.
          </li>
          <li>
            <strong>50/30/20 Rule:</strong> Allocate 50% of your income to
            needs, 30% to wants, and 20% to savings or debt repayment.
          </li>
          <li>
            <strong>Envelope System:</strong> Budgeting by placing a set amount
            of cash in envelopes for different categories (e.g., groceries,
            entertainment).
          </li>
        </ul>
      ),
    },
    {
      title: "Budgeting for Students",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Track all sources of income (allowance, part-time jobs,
            scholarships, etc.)
          </li>
          <li>List all monthly expenses (books, transportation, snacks, etc.)</li>
          <li>
            Save for emergencies and unexpected costs like medical bills or
            laptop repairs.
          </li>
          <li>
            Use student discounts and coupons whenever possible to save money on
            daily purchases.
          </li>
        </ul>
      ),
    },
    {
      title: "Tips for Smart Budgeting",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Review your budget monthly to see if your spending habits align with
            your goals.
          </li>
          <li>Use budgeting apps to track your expenses and savings.</li>
          <li>
            Avoid impulse buying by setting a "cooling off" period before making
            big purchases.
          </li>
          <li>Always have a financial cushion or emergency fund.</li>
          <li>
            Set realistic goals and break them into smaller, achievable steps.
          </li>
        </ul>
      ),
    },
    {
      title: "Real-Life Budgeting Examples",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Sarah, a College Student:</strong> Sarah creates a
            zero-based budget to track her monthly expenses. She uses an app to
            make sure her groceries, transport, and tuition are covered while
            still setting aside some savings each month.
          </li>
          <li>
            <strong>John, a Young Professional:</strong> John uses the 50/30/20
            rule to budget his salary. 50% goes to his rent and essentials, 30%
            for discretionary spending, and 20% goes into savings.
          </li>
        </ul>
      ),
    },
    {
      title: "Common Budgeting Mistakes to Avoid",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>Not tracking every expense.</li>
          <li>
            Underestimating irregular expenses (e.g., medical bills or car
            repairs).
          </li>
          <li>Not accounting for inflation or rising prices.</li>
          <li>
            Being too strict with yourself and not allowing for occasional
            treats.
          </li>
        </ul>
      ),
    },
    {
      title: "Additional Resources for Budgeting",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a
              href="https://www.youneedabudget.com"
              className="text-[#F39C12] hover:underline"
            >
              You Need A Budget (YNAB)
            </a>
          </li>
          <li>
            <a
              href="https://mint.intuit.com"
              className="text-[#F39C12] hover:underline"
            >
              Mint (Budgeting App)
            </a>
          </li>
          <li>
            <a
              href="https://www.daveramsey.com/budgeting"
              className="text-[#F39C12] hover:underline"
            >
              Dave Ramsey's Budgeting Guide
            </a>
          </li>
        </ul>
      ),
    },
  ];

  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#F4F4F5] p-8 flex justify-center items-center relative">
      <div className="w-full max-w-[1200px] aspect-[3/2] relative">
        <div className="absolute inset-0 flex bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Left Page Edge */}
          <div className="w-[80px] bg-gradient-to-r from-gray-200 to-white"></div>

          {/* Main Content */}
          <div className="flex-1 p-12 relative flex flex-col">
            {/* Header */}
            <div className="text-center mb-8 border-b pb-4">
              <h1 className="text-3xl font-serif text-gray-800">
                Budget Basics
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                Learn how to manage money wisely
              </p>
            </div>

            {/* Animated Content */}
            <div className="flex-1 h-[calc(100%-160px)] overflow-y-auto pr-4">
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
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    {contentSections[pageIndex].content}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
              <button
                onClick={() =>
                  setPageIndex((prev) => Math.max(prev - 1, 0))
                }
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
                  setPageIndex((prev) =>
                    Math.min(prev + 1, contentSections.length - 1)
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
          <div className="w-[40px] bg-gradient-to-l from-gray-200 to-white"></div>
        </div>

        {/* Quiz Button */}
        <button
          onClick={handleQuizRedirect}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-[#F39C12] text-white px-8 py-3 rounded-full hover:bg-[#F1C40F] transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Take Quiz
        </button>
      </div>
    </div>
  );
};

export default BudgetBasics;
