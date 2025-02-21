import React, { useState } from "react";

const PlanRecommender = () => {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [debtPayments, setDebtPayments] = useState("");
  const [housingCost, setHousingCost] = useState("");
  const [familyStatus, setFamilyStatus] = useState("bachelor");
  const [recommendations, setRecommendations] = useState([]);

  const generateRecommendations = () => {
    if (!monthlyIncome || !monthlyExpenses || !currentSavings || !debtPayments || !housingCost) {
      alert("Please fill in all required fields.");
      return;
    }

    const income = parseFloat(monthlyIncome);
    const expenses = parseFloat(monthlyExpenses);
    const savings = parseFloat(currentSavings);
    const debt = parseFloat(debtPayments);
    const housing = parseFloat(housingCost);
    const newRecommendations = [];

    // 50/30/20 Rule
    const needs = income * 0.5;
    const wants = income * 0.3;
    const savingsTarget = income * 0.2;
    if (expenses > needs + wants) {
      newRecommendations.push("Your expenses exceed recommended limits. Aim to follow the 50/30/20 rule.");
    }

    // Emergency Fund Rule
    const emergencyFundMonths = savings / expenses;
    if (emergencyFundMonths < 6) {
      newRecommendations.push("Build your emergency fund to cover at least 6 months of expenses.");
    }

    // Debt-to-Income Ratio (DTI)
    const dti = (debt / income) * 100;
    if (dti > 36) {
      newRecommendations.push("Your debt-to-income ratio is high. Reduce debt to maintain financial stability.");
    }

    // 28/36 Housing Rule
    if (housing > income * 0.28) {
      newRecommendations.push("Your housing cost exceeds the recommended 28% of income. Consider adjusting.");
    }
    if (dti > 36) {
      newRecommendations.push("Your total debt payments should not exceed 36% of your income.");
    }

    // Retirement Savings Rule (15% of Income)
    const retirementSavingsTarget = income * 0.15;
    if (savings < retirementSavingsTarget) {
      newRecommendations.push("Consider saving at least 15% of your income for retirement.");
    }

    // Time Value of Money (Invest Early)
    newRecommendations.push("Investing early helps maximize your wealth through compound interest.");

    // Recommendations based on Family Status
    if (familyStatus === "family") {
      newRecommendations.push("Plan for family-related expenses such as education, healthcare, and insurance.");
      newRecommendations.push("Ensure you have adequate life and health insurance coverage.");
    } else {
      newRecommendations.push("Focus on building wealth early and establishing strong financial habits.");
    }

    setRecommendations(newRecommendations);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Plan Recommender</h2>
        <p className="text-gray-600 mb-6">Enter your financial details to receive customized recommendations.</p>
      </div>
      <div className="grid gap-4">
        <div className="space-y-2">
          <label className="block font-medium">Family Status</label>
          <select
            className="w-full p-2 border rounded"
            value={familyStatus}
            onChange={(e) => setFamilyStatus(e.target.value)}
          >
            <option value="bachelor">Bachelor</option>
            <option value="family">Family Person</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Monthly Income</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Monthly Expenses</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Current Savings</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Monthly Debt Payments</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={debtPayments}
            onChange={(e) => setDebtPayments(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Housing Cost (Rent/Mortgage)</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={housingCost}
            onChange={(e) => setHousingCost(e.target.value)}
          />
        </div>
        <button onClick={generateRecommendations} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Get Recommendations
        </button>
        {recommendations.length > 0 && (
          <div className="mt-6 space-y-4">
            <h3 className="font-semibold">Recommended Plans:</h3>
            <ul className="space-y-2">
              {recommendations.map((rec, index) => (
                <li key={index} className="p-3 bg-gray-100 rounded text-sm">{rec}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanRecommender;
