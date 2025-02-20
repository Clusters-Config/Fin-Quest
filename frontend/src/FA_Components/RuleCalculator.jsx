import React, { useState } from "react";

const RuleCalculator = () => {
  const [selectedRule, setSelectedRule] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [result, setResult] = useState({});

  const ruleDescriptions = {
    "50-30-20": "The 50-30-20 rule suggests allocating 50% of income to needs, 30% to wants, and 20% to savings.\n\nFormula: Needs = Income * 50%, Wants = Income * 30%, Savings = Income * 20%",
    "emergency-fund": "An emergency fund should cover at least 6 months of expenses to provide financial security.\n\nFormula: Target Emergency Fund = Monthly Income * 6",
    "housing-rule": "The housing rule suggests that housing costs should not exceed 28% of income, and total debt should not exceed 36% of income.\n\nFormula: Max Housing Cost = Income * 28%, Max Total Debt = Income * 36%",
    "debt-to-income": "The debt-to-income ratio measures total debt payments as a percentage of income. A ratio below 36% is considered healthy.\n\nFormula: Debt-to-Income Ratio = (Total Debt / Income) * 100%",
    "retirement-savings": "It is recommended to save at least 15% of income for retirement to ensure financial stability in later years.\n\nFormula: Retirement Savings = Income * 15%"
  };

  const calculateResults = () => {
    if (!selectedRule || !monthlyIncome) {
      alert("Please fill in all required fields");
      return;
    }

    const income = parseFloat(monthlyIncome);
    let calculatedResult = {};

    switch (selectedRule) {
      case "50-30-20":
        calculatedResult = {
          needs: income * 0.5,
          wants: income * 0.3,
          savings: income * 0.2,
        };
        break;
      case "emergency-fund":
        calculatedResult = {
          target: income * 6,
        };
        break;
      case "housing-rule":
        calculatedResult = {
          maxHousing: income * 0.28,
          maxTotalDebt: income * 0.36,
        };
        break;
      case "debt-to-income":
        calculatedResult = {
          debtRatio: (income * 0.36).toFixed(2),
        };
        break;
      case "retirement-savings":
        calculatedResult = {
          retirementSavings: income * 0.15,
        };
        break;
      default:
        calculatedResult = {};
    }
    setResult(calculatedResult);
  };

  return (
    <div className="space-y-6 max-w-lg mx-auto p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Financial Rule Calculator</h2>
      <p className="text-gray-600 mb-6 text-center">
        Select a financial rule and enter your income to calculate recommendations.
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="rule" className="block font-medium">Select Financial Rule</label>
          <select 
            id="rule" 
            value={selectedRule} 
            onChange={(e) => setSelectedRule(e.target.value)} 
            className="w-full p-2 border rounded"
          >
            <option value="">Choose a rule</option>
            <option value="50-30-20">50-30-20 Rule</option>
            <option value="emergency-fund">Emergency Fund Rule</option>
            <option value="housing-rule">Housing Rule</option>
            <option value="debt-to-income">Debt-to-Income Ratio</option>
            <option value="retirement-savings">Retirement Savings Rule</option>
          </select>
          {selectedRule && (
            <div className="mt-2 p-2 bg-gray-200 rounded-md">
              <p className="text-gray-700 text-sm">{ruleDescriptions[selectedRule]}</p>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="income" className="block font-medium">Monthly Income</label>
          <input
            id="income"
            type="number"
            placeholder="Enter your monthly income"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <button 
          onClick={calculateResults} 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Calculate
        </button>
      </div>

      {Object.keys(result).length > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold mb-2">Results:</h3>
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center py-1">
              <span className="capitalize">{key}:</span>
              <span className="font-medium">${value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RuleCalculator;
