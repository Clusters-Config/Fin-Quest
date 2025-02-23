import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const AccountingTypesModule = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  
  // Navigation constants
  const mod = 1;
  const page = "resultpage";
  const path = "path1";
  const mods = "mod2";
  const type = "account";
  // Content sections for pagination
  const contentSections = [
    {
      title: "What is Accounting?",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-6">
            Accounting is the process of recording, summarizing, and analyzing financial transactions to provide useful information
            for decision-making. It is a vital component of every business and plays a key role in helping organizations track their
            financial performance.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Objectives of Accounting</h3>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>To maintain a record of financial transactions</li>
            <li>To summarize and analyze financial data</li>
            <li>To ensure compliance with tax laws</li>
            <li>To provide insights for decision-making</li>
          </ul>
        </>
      )
    },
    {
      title: "Personal Accounts",
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of Personal Accounts</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">Natural Persons</h4>
              <p className="text-gray-600">Accounts related to individual persons (e.g., Suresh's A/c, Anil's A/c)</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Artificial Persons</h4>
              <p className="text-gray-600">Accounts related to entities (e.g., companies, partnerships)</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Representative Persons</h4>
              <p className="text-gray-600">Accounts representing groups (e.g., Salary Payable A/c)</p>
            </div>
          </div>
        </>
      )
    },
    {
      title: "Real Accounts",
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of Real Accounts</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Tangible Real Accounts</h4>
              <p className="text-gray-600 mb-2">Accounts related to physical assets:</p>
              <ul className="list-disc ml-6 text-gray-600">
                <li>Machinery Account</li>
                <li>Cash Account</li>
                <li>Stock Account</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Intangible Real Accounts</h4>
              <p className="text-gray-600 mb-2">Accounts related to non-physical assets:</p>
              <ul className="list-disc ml-6 text-gray-600">
                <li>Goodwill Account</li>
                <li>Trademark Account</li>
                <li>Patents & Copyrights Account</li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      title: "Nominal Accounts",
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Understanding Nominal Accounts</h3>
          <p className="text-gray-600 mb-4">
            These accounts represent expenses, losses, incomes, and gains of a business.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Common Examples:</h4>
            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li>Salary and Wages Account</li>
              <li>Rent Account</li>
              <li>Commission Received Account</li>
              <li>Gain from Sales Account</li>
            </ul>
          </div>
        </>
      )
    },
    {
      title: "Types of Accounting",
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Major Accounting Types</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">Financial Accounting</h4>
              <p className="text-gray-600">Focuses on preparing financial statements for external users following GAAP or IFRS.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Managerial Accounting</h4>
              <p className="text-gray-600">Involves internal reports for management decision-making.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Cost Accounting</h4>
              <p className="text-gray-600">Tracks and analyzes costs associated with production.</p>
            </div>
          </div>
        </>
      )
    },
    {
      title: "Specialized Accounting Types",
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Other Important Types</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">Tax Accounting</h4>
              <p className="text-gray-600">Focuses on tax compliance and minimizing tax liabilities.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Auditing</h4>
              <p className="text-gray-600">Examines financial records to ensure accuracy and compliance.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Forensic Accounting</h4>
              <p className="text-gray-600">Investigates fraud and financial crimes using accounting principles.</p>
            </div>
          </div>
        </>
      )
    }
  ];
  const handleQuizButtonClick = () => {
    navigate('/QuizApp/Accounting', {
      state: { mod, page, path, mods, type }
    });
  };
  return (
    <div className="min-h-screen bg-[#F4F4F5] p-8 flex justify-center items-center">
      <div className="w-full max-w-[1200px] aspect-[3/2] relative">
        {/* Book Container */}
        <div className="absolute inset-0 flex bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Left Page Edge */}
          <div className="w-[80px] h-full bg-gradient-to-r from-gray-200 to-white">
            <div className="h-full w-1/2 bg-gradient-to-r from-gray-300 to-transparent" />
          </div>
          {/* Main Content */}
          <div className="flex-1 p-12 relative">
            {/* Header */}
            <div className="text-center mb-8 border-b pb-4">
              <h1 className="text-3xl font-serif text-gray-800">Understanding Accounting</h1>
              <p className="text-sm text-gray-500 mt-2">Types and Classifications</p>
            </div>
            {/* Page Content with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-[calc(100%-160px)] overflow-y-auto pr-4"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  {contentSections[currentPage].title}
                </h2>
                {contentSections[currentPage].content}
              </motion.div>
            </AnimatePresence>
            {/* Navigation */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
              <button
                onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                disabled={currentPage === 0}
                className={`px-4 py-2 text-sm rounded ${
                  currentPage === 0
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                ← Previous Page
              </button>
              <span className="text-sm text-gray-500">
                Page {currentPage + 1} of {contentSections.length}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(contentSections.length - 1, p + 1))}
                disabled={currentPage === contentSections.length - 1}
                className={`px-4 py-2 text-sm rounded ${
                  currentPage === contentSections.length - 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                Next Page →
              </button>
            </div>
          </div>
          {/* Right Page Edge */}
          <div className="w-[40px] h-full bg-gradient-to-l from-gray-200 to-white" />
        </div>
        {/* Quiz Button */}
        <button
          onClick={handleQuizButtonClick}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 
                   bg-[#F39C12] text-white px-8 py-3 rounded-full
                   hover:bg-[#F1C40F] transition-colors duration-200
                   shadow-lg hover:shadow-xl"
        >
          Take the Accounting Quiz
        </button>
      </div>
    </div>
  );
};
export default AccountingTypesModule;