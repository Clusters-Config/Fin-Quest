import React, { useState } from "react";

const PlanRecommender = () => {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const generateRecommendations = () => {
    if (!monthlyIncome || !monthlyExpenses || !currentSavings) {
      alert("Please fill in all required fields.");
      return;
    }

    const income = parseFloat(monthlyIncome);
    const expenses = parseFloat(monthlyExpenses);
    const savings = parseFloat(currentSavings);
    const newRecommendations = [];

    // Basic financial health checks
    const savingsRate = ((income - expenses) / income) * 100;
    const emergencyFundMonths = savings / expenses;

    if (savingsRate < 20) {
      newRecommendations.push(
        "Consider following the 50/30/20 rule to increase your savings rate to at least 20%."
      );
    }
    if (emergencyFundMonths < 6) {
      newRecommendations.push(
        "Build your emergency fund to cover at least 6 months of expenses."
      );
    }
    if (expenses > income * 0.7) {
      newRecommendations.push(
        "Your expenses are high relative to income. Review your budget using the 50/30/20 rule."
      );
    }

    setRecommendations(newRecommendations);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Plan Recommender</h2>
        <p className="text-gray-600 mb-6">
          Enter your financial information to receive personalized recommendations.
        </p>
      </div>

      <div className="grid gap-4">
        <div className="space-y-2">
          <label htmlFor="monthlyIncome" className="block font-medium">
            Monthly Income
          </label>
          <input
            id="monthlyIncome"
            type="number"
            placeholder="Enter your monthly income"
            className="w-full p-2 border rounded"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="monthlyExpenses" className="block font-medium">
            Monthly Expenses
          </label>
          <input
            id="monthlyExpenses"
            type="number"
            placeholder="Enter your monthly expenses"
            className="w-full p-2 border rounded"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="currentSavings" className="block font-medium">
            Current Savings
          </label>
          <input
            id="currentSavings"
            type="number"
            placeholder="Enter your current savings"
            className="w-full p-2 border rounded"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
          />
        </div>

        <button
          onClick={generateRecommendations}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Get Recommendations
        </button>

        {recommendations.length > 0 && (
          <div className="mt-6 space-y-4">
            <h3 className="font-semibold">Recommended Plans:</h3>
            <ul className="space-y-2">
              {recommendations.map((rec, index) => (
                <li key={index} className="p-3 bg-gray-100 rounded text-sm">
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanRecommender;
