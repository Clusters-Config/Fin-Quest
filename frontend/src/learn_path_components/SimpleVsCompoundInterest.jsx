import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SimpleVsCompoundInterest = () => {
  const navigate = useNavigate();
  const page = "resultpage";
  const path = "path1";
  const mods = "mod3";
  const type = "finance";

  const handleQuizRedirect = () => {
    navigate("/QuizApp/SimpleVsCompoundInterest", {
      state: { page, path, mods, type },
    });
  };

  const contentSections = [
    {
      title: "What is Interest?",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Interest is the cost of borrowing money, or the reward for lending it.
            It’s usually expressed as a percentage of the principal (the original amount of money).
            There are two main types of interest: Simple Interest and Compound Interest. Let’s dive into both.
          </p>
        </>
      ),
    },
    {
      title: "Simple Interest",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Simple interest is calculated only on the principal amount, or the original sum of money that is invested or borrowed.
            It is straightforward and doesn’t take into account any interest earned or paid over time.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Formula:</strong> Simple Interest = P × R × T
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-600">
            <li><strong>P</strong> = Principal amount</li>
            <li><strong>R</strong> = Rate of interest per period</li>
            <li><strong>T</strong> = Time invested or borrowed</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            Example: If you borrow $1,000 for 3 years at an interest rate of 5% per year, the simple interest would be:
            <strong> $150</strong>
          </p>
        </>
      ),
    },
    {
      title: "Compound Interest",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Compound interest is calculated on the initial principal and also on the accumulated interest from previous periods.
            This means you earn “interest on interest,” leading to faster growth.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Formula:</strong> Compound Interest = P × (1 + R/n)^(n × T) - P
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-600">
            <li><strong>P</strong> = Principal amount</li>
            <li><strong>R</strong> = Rate of interest per period</li>
            <li><strong>T</strong> = Time invested</li>
            <li><strong>n</strong> = Times interest is compounded per year</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            Example: $1,000 for 3 years at 5% annually → <strong>$157.63</strong> interest.
          </p>
        </>
      ),
    },
    {
      title: "Key Differences",
      content: (
        <ul className="list-disc ml-6 space-y-2 text-gray-600">
          <li>Simple Interest → only on principal.</li>
          <li>Compound Interest → on principal + accumulated interest.</li>
          <li>Compound grows faster due to “interest on interest”.</li>
          <li>Longer time benefits compound interest more.</li>
        </ul>
      ),
    },
    {
      title: "Practical Example",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Comparing $1,000 at 5% annual interest for 3 years:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-600">
            <li>Simple Interest: $150</li>
            <li>Compound Interest: $157.63</li>
          </ul>
        </>
      ),
    },
    {
      title: "When to Use",
      content: (
        <p className="text-gray-600 leading-relaxed">
          Simple interest → short-term loans/investments.  
          Compound interest → long-term growth where interest is reinvested.
        </p>
      ),
    },
    {
      title: "Key Takeaways",
      content: (
        <p className="text-gray-600 leading-relaxed">
          - Simple interest is straightforward for short-term borrowing/lending.  
          - Compound interest grows investments faster due to reinvestment.  
          - Time and compounding frequency matter a lot.
        </p>
      ),
    },
  ];

  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#F4F4F5] p-8 flex justify-center items-center relative">
      <div className="w-full max-w-[1200px] aspect-[3/2] relative">
        {/* Book Container */}
        <div className="absolute inset-0 flex bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="w-[80px] bg-gradient-to-r from-gray-200 to-white" />
          <div className="flex-1 p-12 relative flex flex-col">
            {/* Header */}
            <div className="text-center mb-8 border-b pb-4">
              <h1 className="text-3xl font-serif text-gray-800">
                Simple vs. Compound Interest
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                Understanding the Basics
              </p>
            </div>

            {/* Content */}
            <div className="flex-1 h-[calc(100%-160px)] overflow-y-auto pr-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={pageIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    {contentSections[pageIndex].title}
                  </h2>
                  {contentSections[pageIndex].content}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
              <button
                onClick={() => setPageIndex((p) => p - 1)}
                disabled={pageIndex === 0}
                className={`px-4 py-2 rounded-lg ${
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
                onClick={() => setPageIndex((p) => p + 1)}
                disabled={pageIndex === contentSections.length - 1}
                className={`px-4 py-2 rounded-lg ${
                  pageIndex === contentSections.length - 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                Next
              </button>
            </div>
          </div>
          <div className="w-[40px] bg-gradient-to-l from-gray-200 to-white" />
        </div>

        {/* Quiz Button */}
        <button
          onClick={handleQuizRedirect}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-[#F39C12] text-white px-8 py-3 rounded-full hover:bg-[#F1C40F] transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Take the Quiz to Test Your Knowledge!
        </button>
      </div>
    </div>
  );
};

export default SimpleVsCompoundInterest;
