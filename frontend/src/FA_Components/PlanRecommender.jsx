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

    // 1. **Financial Health Checkup**
    if (expenses > income) {
      newRecommendations.push("Your expenses exceed your income. Consider reducing unnecessary spending.");
    } else {
      newRecommendations.push("Your expenses are within your income limit. Keep up the good financial habits.");
    }

    // 2. **Emergency Fund**
    if (savings < expenses * 3) {
      newRecommendations.push("You should aim to build an emergency fund that covers at least 3 months of your expenses.");
    } else {
      newRecommendations.push("Your emergency fund is in a good place. Consider increasing it to 6 months for better security.");
    }

    // 3. **Debt Payments**
    if (debt > income * 0.36) {
      newRecommendations.push("Your debt payments exceed 36% of your income. Try to reduce your debt to improve financial stability.");
    } else {
      newRecommendations.push("Your debt-to-income ratio is within the healthy range. Keep managing your debt wisely.");
    }

    // 4. **Housing Costs**
    if (housing > income * 0.28) {
      newRecommendations.push("Your housing cost exceeds 28% of your income. Consider adjusting your housing expenses.");
    } else {
      newRecommendations.push("Your housing costs are within the recommended limit. Stay on track with your budgeting.");
    }

    // 5. **Retirement Savings**
    if (savings < income * 0.15) {
      newRecommendations.push("Consider saving at least 15% of your income for retirement to ensure long-term financial stability.");
    } else {
      newRecommendations.push("You're doing well on your retirement savings. Keep contributing consistently.");
    }

    // 6. **Investing Early**
    if (savings < income * 0.20) {
      newRecommendations.push("Consider increasing your savings or investment rate to take advantage of compound interest.");
    }

    // 7. **Recommendations Based on Family Status**
    if (familyStatus === "family") {
      newRecommendations.push("You may want to factor in additional costs for family-related expenses like education and healthcare.");
      newRecommendations.push("Ensure you have life insurance and sufficient health coverage for your family’s future.");
    } else {
      newRecommendations.push("As a bachelor, you can focus on building wealth and financial independence early.");
    }

    // 8. **Overall Financial Well-being**
    if (income > expenses + debt + housing) {
      newRecommendations.push("You are in a strong financial position. Continue building your savings and investments.");
    } else {
      newRecommendations.push("You might want to revisit your budget to ensure you are saving enough for the future.");
    }

    setRecommendations(newRecommendations);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Plan Recommender</h2>
        <p className="text-gray-300 mb-6">Enter your financial details (in Rupees) to receive customized recommendations.</p>
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
          <label className="block font-medium">Monthly Income (in Rupees)</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Monthly Expenses (in Rupees)</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Current Savings (in Rupees)</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Monthly Debt Payments (in Rupees)</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={debtPayments}
            onChange={(e) => setDebtPayments(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Housing Cost (Rent/Mortgage) (in Rupees)</label>
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
