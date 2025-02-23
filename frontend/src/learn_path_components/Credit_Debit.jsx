import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const CreditDebitModule = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  
  // Navigation constants
  const mod = 0;
  const page = "resultpage";
  const path = "path2";
  const mods = "mod1";
  const type = "account";
  // Content sections for pagination
  const contentSections = [
    {
      title: "Understanding Credit and Debit in Accounting",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-6">
            Credit and Debit are fundamental concepts in accounting. These terms refer to entries made in an organization's
            accounting records (the ledger), used to track financial transactions. Understanding how to apply credits and debits
            is essential for maintaining accurate financial records.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">The Double-Entry Accounting System</h3>
          <p className="text-gray-600 leading-relaxed">
            The double-entry accounting system is the basis for understanding credits and debits. Under this system, each financial
            transaction involves both a debit and a credit entry, and the sum of debits must always equal the sum of credits.
            This ensures that the accounting equation remains balanced: <strong>Assets = Liabilities + Equity</strong>.
          </p>
        </>
      )
    },
    {
      title: "Credit and Its Applications",
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Credit</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            A credit entry represents an increase in liabilities, equity, or revenue, and a decrease in assets or expenses.
            The most common credit entries are:
          </p>
          <ul className="list-disc ml-6 mb-6 text-gray-600 space-y-2">
            <li>When a company borrows money from a bank, a liability account like "Loans Payable" is credited.</li>
            <li>When a company generates revenue from selling goods or services, a revenue account is credited.</li>
            <li>If a company issues new stock, its equity account (such as "Common Stock") is credited.</li>
          </ul>
        </>
      )
    },
    {
      title: "Debit and Its Applications",
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Debit</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            A debit entry represents an increase in assets or expenses, and a decrease in liabilities or equity. Some examples include:
          </p>
          <ul className="list-disc ml-6 mb-6 text-gray-600 space-y-2">
            <li>When a company receives cash, the "Cash" account is debited (increase in assets).</li>
            <li>If a company purchases supplies or equipment, the corresponding asset account is debited.</li>
            <li>When a company incurs an expense, such as rent or utilities, the expense account is debited.</li>
          </ul>
        </>
      )
    },
    {
      title: "The Account Concept",
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">The Account Concept in Accounting</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            One must get conversant with accounting terms before embarking on learning actual record-keeping based on the rules. 
            An "Account" is defined as a summarized record of transactions related to a person or thing.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-gray-600 italic">
              "When a business transaction happens, one must identify the 'account' that will be affected and then apply the rules to decide the accounting treatment."
            </p>
          </div>
        </>
      )
    },
    {
      title: "Example and Balance",
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Example of a Cash Account</h3>
          <pre className="bg-gray-50 p-4 rounded-lg mb-6 overflow-x-auto text-sm font-mono">
            {`Dr. Cash Account          Cr.
Particulars          Amount  | Particulars     Amount
-------------------------|----------------------
Opening balance   100,000  | Purchases      50,000
Sales             25,000  | Rent           15,000
                         | Closing bal.    60,000
-------------------------|----------------------
Total            125,000  | Total         125,000`}
          </pre>
          <p className="text-gray-600 leading-relaxed">
            The debit side shows cash inflows, while the credit side shows outflows. The closing balance represents available cash.
          </p>
        </>
      )
    },
    {
      title: "Common Mistakes and Tips",
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Common Mistakes in Using Debits and Credits</h3>
          <ul className="list-disc ml-6 mb-6 text-gray-600 space-y-2">
            <li>Mixing up the effects of debits and credits on accounts</li>
            <li>Failing to balance debits and credits in each transaction</li>
            <li>Incorrectly classifying accounts</li>
          </ul>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Pro Tips:</h4>
            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li>Always ensure your debits equal your credits</li>
              <li>Use T-accounts to visualize transactions</li>
              <li>Double-check account classifications</li>
            </ul>
          </div>
        </>
      )
    }
  ];
  const handleQuizButtonClick = () => {
    navigate('/QuizApp/Credit_Debit', {
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
              <h1 className="text-3xl font-serif text-gray-800">Credit and Debit</h1>
              <p className="text-sm text-gray-500 mt-2">Fundamentals of Accounting</p>
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
          Take the Credit & Debit Quiz
        </button>
      </div>
    </div>
  );
};
export default CreditDebitModule;