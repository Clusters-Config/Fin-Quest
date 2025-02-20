import React, { useState } from "react";
import RuleCalculator from "../FA_Components/RuleCalculator";
import PlanRecommender from "../FA_Components/PlanRecommender";
import Trends from "../FA_Components/Trends";

const FinancialDashboard = () => {
  const [activeTab, setActiveTab] = useState("calculator");

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Financial Assistant</h1>
        <p className="text-muted-foreground">Calculate, Plan, and Track Your Finances</p>
      </div>

      <div className="flex justify-center mb-6">
        <button 
          className={`px-4 py-2 mx-2 rounded ${activeTab === "calculator" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
          onClick={() => setActiveTab("calculator")}
        >
          Calculator
        </button>
        <button 
          className={`px-4 py-2 mx-2 rounded ${activeTab === "recommender" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
          onClick={() => setActiveTab("PlanRecommender")}
        >
          Recommender
        </button>
        <button 
          className={`px-4 py-2 mx-2 rounded ${activeTab === "trends" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
          onClick={() => setActiveTab("trends")}
        >
          Trends
        </button>
      </div>

      <div className="p-6 border rounded-lg shadow-md bg-white">
        {activeTab === "calculator" && <RuleCalculator />}
        {activeTab === "PlanRecommender" && <PlanRecommender />}
        {activeTab === "trends" && <Trends />}
      </div>
    </div>
  );
};

export default FinancialDashboard;
