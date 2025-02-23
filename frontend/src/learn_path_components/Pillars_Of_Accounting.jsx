import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const PillarsOfAccountingModule = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  
  // Navigation constants
  const mod = 1;
  const page = "resultpage";
  const path = "path2";
  const mods = "mod2";
  const type = "account";
  // Content sections for pagination
  const contentSections = [
    {
      title: "The 4 Pillars of Accounting",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-6">
            Accounting is the backbone of any business, providing essential financial data for decision-making, regulatory compliance, and performance analysis. These four fundamental pillars help shape the accounting practices that ensure accuracy, consistency, and transparency in financial reporting.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">The Four Pillars:</h4>
            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li>Relevance</li>
              <li>Reliability</li>
              <li>Comparability</li>
              <li>Consistency</li>
            </ul>
          </div>
        </>
      )
    },
    {
      title: "1. Relevance",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Relevance is one of the key principles behind good accounting. Financial information must be relevant to users who rely on it for decision-making. This means that financial statements should provide information that can influence decisions.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Key Aspects of Relevance:</h4>
            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li>Information must be timely</li>
              <li>Capable of influencing decisions</li>
              <li>Important for predictions and evaluations</li>
              <li>Must meet materiality threshold</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed">
            The materiality concept ensures that only significant information that could affect decision-making is included in financial reports.
          </p>
        </>
      )
    },
    {
      title: "2. Reliability",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Reliability ensures that financial information presented is accurate, complete, and dependable. Users rely on this information to make important decisions.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">Key Components:</h4>
              <ul className="list-disc ml-6 text-gray-600">
                <li>Consistent application of methods</li>
                <li>Freedom from errors and bias</li>
                <li>Complete and accurate records</li>
                <li>Verifiable through documentation</li>
              </ul>
            </div>
            <p className="text-gray-600 italic">
              "Financial statements should reflect the true financial position without exaggeration or omission."
            </p>
          </div>
        </>
      )
    },
    {
      title: "3. Comparability",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Comparability is crucial for analyzing financial data across different companies or time periods. It enables meaningful comparison and analysis.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Benefits of Comparability:</h4>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Facilitates company-to-company comparison</li>
              <li>Enables year-over-year analysis</li>
              <li>Supports better forecasting</li>
              <li>Helps in strategic planning</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Standardized accounting methods ensure that stakeholders can make informed decisions by comparing like with like.
          </p>
        </>
      )
    },
    {
      title: "4. Consistency",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Consistency refers to using the same accounting methods and procedures across reporting periods, making it easier to identify trends and evaluate performance.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">Important Aspects:</h4>
              <ul className="list-disc ml-6 text-gray-600">
                <li>Maintaining same methods over time</li>
                <li>Proper disclosure of changes</li>
                <li>Clear explanation of effects</li>
                <li>Transparency in reporting</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 italic">
                "When changes are necessary, transparency ensures users can still make meaningful comparisons."
              </p>
            </div>
          </div>
        </>
      )
    },
    {
      title: "Conclusion",
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Why These Pillars Matter</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The four pillars of accounting form the foundation for all sound accounting practices. They ensure that financial information is:
          </p>
          <ul className="list-disc ml-6 mb-6 text-gray-600 space-y-2">
            <li>Useful for decision-making</li>
            <li>Accurate and reliable</li>
            <li>Comparable across periods and entities</li>
            <li>Consistent in application</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            When these pillars are applied effectively, they enable businesses to maintain transparency and accountability.
          </p>
        </>
      )
    }
  ];
  const handleQuizButtonClick = () => {
    navigate('/QuizApp/Pillars_Of_Accounting', {
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
              <h1 className="text-3xl font-serif text-gray-800">The Four Pillars</h1>
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
          Take the Pillars of Accounting Quiz
        </button>
      </div>
    </div>
  );
};
export default PillarsOfAccountingModule;