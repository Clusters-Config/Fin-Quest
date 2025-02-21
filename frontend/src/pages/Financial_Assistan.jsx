import React, { useState } from "react";
import RuleCalculator from "../FA_Components/RuleCalculator";
import PlanRecommender from "../FA_Components/PlanRecommender";
import Trends from "../FA_Components/Trends";

const FinancialDashboard = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="container mx-auto px-6 py-10 max-w-7xl min-h-screen flex flex-col items-center animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md">Financial Assistant</h1>
        <p className="text-lg text-gray-700 italic mt-2">Calculate, Plan, and Track Your Finances</p>
      </div>

      {/* Selection Panel */}
      <div className="w-full max-w-3xl p-6 rounded-xl shadow-lg border">
        <h2 className="text-2xl font-semibold text-center mb-6">Choose a tool to get started</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[{ name: "Rule Calculator", key: "calculator", label: "Calculate" },
            { name: "Plan Recommender", key: "recommender", label: "Plan" },
            { name: "Trends", key: "trends", label: "Track" }].map((tool) => (
            <div key={tool.key} className={`p-6 border rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-xl ${activeTab === tool.key ? "border-blue-500" : ""}`}>
              <h2 className="text-lg font-bold text-center mb-3">{tool.name}</h2>
              <button
                className={`w-full py-2 text-lg font-semibold rounded-lg transition ${activeTab === tool.key ? "border-2 border-blue-500 text-blue-500" : "border border-gray-300 text-gray-900 hover:border-blue-500 hover:text-blue-500"}`}
                onClick={() => setActiveTab(tool.key)}
              >
                {tool.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Content Section with Movable Dialog */}
      {activeTab && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-3xl w-full relative animate-slide-in flex flex-col max-h-[90vh] overflow-y-auto">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" onClick={() => setActiveTab("")}>✖</button>
            <div className="p-4">
              {activeTab === "calculator" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Rule Calculator</h2>
                  <p className="text-gray-600 mb-4">The Rule Calculator helps you understand and apply various financial rules, such as the 50/30/20 budgeting rule, rule of 72 for investments, and debt-to-income ratios. By using this tool, you can analyze your financial situation and optimize it based on proven financial principles.</p>
                </div>
              )}
              {activeTab === "recommender" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Plan Recommender</h2>
                  <p className="text-gray-600 mb-4">The Plan Recommender provides personalized financial planning strategies based on your income, expenses, and savings goals. Whether you're looking to save for retirement, a big purchase, or investment opportunities, this tool guides you toward an optimized financial plan.</p>
                </div>
              )}
              {activeTab === "trends" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Trends Analysis</h2>
                  <p className="text-gray-600 mb-4">Tracking financial trends over time helps in identifying spending patterns, investment growth, and potential areas for financial improvement. With real-time visualization, this tool assists in making informed financial decisions.</p>
                </div>
              )}
            </div>
            <div className="p-4 flex justify-center items-center">
              {activeTab === "calculator" && <RuleCalculator />}
              {activeTab === "recommender" && <PlanRecommender />}
              {activeTab === "trends" && <Trends />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialDashboard;
