import React, { useState } from "react";
import RuleCalculator from "../FA_Components/RuleCalculator";
import PlanRecommender from "../FA_Components/PlanRecommender";
import Trends from "../FA_Components/Trends";
import Particles from "./Particles";

const FinancialDashboard = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fixed Particle Background */}
      <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={["#black", "black", "black"]}
          particleCount={400}
          particleSpread={7}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <div className=" mx-auto px-6 py-10 max-w-7xl min-h-screen flex flex-col items-center relative z-10 animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-black drop-shadow-md">Financial Assistant</h1>
          <p className="text-lg text-gray-500 italic mt-2">Calculate, Plan, and Track Your Finances</p>
        </div>

        {/* Selection Panel */}
        <div className="w-full max-w-xl p-8 rounded-xl shadow-lg border border-gray-200 bg-gray-400 bg-opacity-30 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-500">Choose a tool to get started</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Rule Calculator", key: "calculator", label: "Calculate" },
              { name: "Plan Recommender", key: "recommender", label: "Plan" },
              { name: "Trends", key: "trends", label: "Track" },
            ].map((tool) => (
              <div
                key={tool.key}
                className={`p-6 border rounded-xl shadow-md bg-black bg-opacity-40 backdrop-blur-lg text-white transition transform hover:scale-105 hover:shadow-xl ${
                  activeTab === tool.key ? "border-blue-400" : "border-gray-400"
                }`}
              >
                <h2 className="text-lg font-bold text-center mb-3">{tool.name}</h2>
                <button
                  className={`w-full py-2 text-lg font-semibold rounded-lg transition ${
                    activeTab === tool.key
                      ? "border-2 border-blue-400 text-blue-400"
                      : "border border-gray-600 text-white hover:border-blue-400 hover:text-blue-400"
                  }`}
                  onClick={() => setActiveTab(tool.key)}
                >
                  {tool.label}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Section */}
        {activeTab && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
            <div className="p-8 rounded-xl shadow-2xl max-w-3xl w-full relative animate-slide-in flex flex-col max-h-[90vh] overflow-y-auto bg-gray-700 bg-opacity-40 backdrop-blur-lg border border-gray-400">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={() => setActiveTab(null)}>
                ✖
              </button>
              <div className="p-4">
                {activeTab === "calculator" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-white">Rule Calculator</h2>
                    <p className="text-gray-300 mb-4">
                      The Rule Calculator helps you understand and apply various financial rules, such as the 50/30/20 budgeting rule, rule of 72 for investments, and debt-to-income ratios.
                    </p>
                  </div>
                )}
                {activeTab === "recommender" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-white">Plan Recommender</h2>
                    <p className="text-gray-300 mb-4">
                      The Plan Recommender provides personalized financial planning strategies based on your income, expenses, and savings goals.
                    </p>
                  </div>
                )}
                {activeTab === "trends" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-white">Trends Analysis</h2>
                    <p className="text-gray-300 mb-4">
                      Tracking financial trends over time helps in identifying spending patterns, investment growth, and potential areas for financial improvement.
                    </p>
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
    </div>
  );
};

export default FinancialDashboard;
