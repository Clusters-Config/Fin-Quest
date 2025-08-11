import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const FinancePrinciple = () => {
  const [cashOutlay, setCashOutlay] = useState("");
  const [cashBenefits, setCashBenefits] = useState("");
  const [discountRate, setDiscountRate] = useState("");
  const [years, setYears] = useState("");
  const [npv, setNpv] = useState(null);

  const page = "resultpage";
  const path = "path1";
  const mods = "mod1";
  const type = "finance";

  const navigate = useNavigate();

  // Calculate NPV
  const calculateNPV = () => {
    if (cashOutlay && cashBenefits && discountRate && years) {
      const cashBenefitsArray = cashBenefits.split(",").map(Number);
      let presentValue = 0;
      for (let i = 0; i < cashBenefitsArray.length; i++) {
        presentValue += cashBenefitsArray[i] / Math.pow(1 + discountRate / 100, i + 1);
      }
      const npvResult = presentValue - parseFloat(cashOutlay);
      setNpv(npvResult);
    }
  };

  const handleQuizRedirect = () => {
    navigate("/QuizApp/Finance_Principles", {
      state: { page, path, mods, type }
    });
  };

  // Content pages (book style)
  const contentSections = [
    {
      title: "The Fundamental Principle of Finance",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-6">
            A business proposal raises the value of the firm only if the present value of the future stream of net cash benefits
            exceeds the initial outlay. The Net Present Value (NPV) helps determine this by comparing the present value of future
            cash inflows with the initial investment required.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The key question to ask before making a business decision is: will this decision raise the market value of the firm?
            This principle applies whether it’s a new investment, acquisition, or restructuring. The value increases if the present
            value of benefits exceeds the cost.
          </p>
        </>
      )
    },
    {
      title: "NPV Formula and Meaning",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            The formula for NPV is:
          </p>
          <pre className="bg-gray-50 p-4 rounded-lg mb-6 overflow-x-auto text-sm font-mono">
{`NPV = ∑(Cash Benefit / (1 + Discount Rate) ^ Year) - Initial Outlay`}
          </pre>
          <ul className="list-disc ml-6 mb-6 text-gray-600 space-y-2">
            <li><strong>Cash Benefits</strong>: Expected inflows from the project.</li>
            <li><strong>Discount Rate</strong>: Rate to discount future inflows to present value.</li>
            <li><strong>Initial Outlay</strong>: Upfront investment required.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            If the NPV is positive, the proposal is expected to increase the firm’s value. A negative NPV indicates a potential decrease.
          </p>
        </>
      )
    },
    {
      title: "Calculate Your NPV",
      content: (
        <>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600">Initial Cash Outlay (₹):</label>
              <input
                type="number"
                value={cashOutlay}
                onChange={(e) => setCashOutlay(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600">Future Cash Benefits (comma separated):</label>
              <input
                type="text"
                value={cashBenefits}
                onChange={(e) => setCashBenefits(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full"
                placeholder="e.g. 5000, 6000, 7000, 8000"
              />
            </div>
            <div>
              <label className="block text-gray-600">Discount Rate (%):</label>
              <input
                type="number"
                value={discountRate}
                onChange={(e) => setDiscountRate(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600">Number of Years:</label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
            </div>
            <button
              onClick={calculateNPV}
              className="bg-[#F39C12] text-white px-6 py-2 rounded-lg hover:bg-[#F1C40F] transition-colors duration-200"
            >
              Calculate NPV
            </button>
            {npv !== null && (
              <div className="mt-4 text-lg text-gray-600">
                Net Present Value (NPV): ₹{npv.toFixed(2)}
              </div>
            )}
          </div>
        </>
      )
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);

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
              <h1 className="text-3xl font-serif text-gray-800">Fundamental Principle of Finance</h1>
              <p className="text-sm text-gray-500 mt-2">Understanding NPV</p>
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
                onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                disabled={currentPage === 0}
                className={`px-4 py-2 text-sm rounded ${
                  currentPage === 0
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                ← Previous Page
              </button>
              <span className="text-sm text-gray-500">
                Page {currentPage + 1} of {contentSections.length}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(contentSections.length - 1, p + 1))}
                disabled={currentPage === contentSections.length - 1}
                className={`px-4 py-2 text-sm rounded ${
                  currentPage === contentSections.length - 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
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
          onClick={handleQuizRedirect}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 
                   bg-[#F39C12] text-white px-8 py-3 rounded-full
                   hover:bg-[#F1C40F] transition-colors duration-200
                   shadow-lg hover:shadow-xl"
        >
          Take the Finance Principles Quiz
        </button>
      </div>
    </div>
  );
};

export default FinancePrinciple;
