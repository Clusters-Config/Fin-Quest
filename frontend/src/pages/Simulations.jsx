import React, { useState } from "react";
import { FaMoneyBillWave, FaChartLine, FaPiggyBank, FaCoins, FaCalculator } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";

const InputField = ({ label, placeholder, onChange }) => (
  <div className="flex flex-col">
    <label className="text-sm font-semibold mb-1">{label}</label>
    <input
      type="number"
      placeholder={placeholder}
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
      onChange={(e) => onChange(Number(e.target.value))}
    />
  </div>
);

const Simulations = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [budget, setBudget] = useState(0);

  const [investment, setInvestment] = useState(0);
  const [duration, setDuration] = useState(0);
  const [investmentGrowth, setInvestmentGrowth] = useState(0);

  const [debt, setDebt] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [remainingDebt, setRemainingDebt] = useState(0);

  const [currentSavings, setCurrentSavings] = useState(0);
  const [savingsGoal, setSavingsGoal] = useState(0);
  const [savingsProgress, setSavingsProgress] = useState(0);

  const [popupVisible, setPopupVisible] = useState({
    budget: false,
    investment: false,
    debt: false,
    savings: false,
  });

  // Animation for the popup
  const popupAnimation = (visible) => 
    useSpring({
      opacity: visible ? 1 : 0,
      transform: visible ? "scale(1)" : "scale(0.8)",
      config: { tension: 250, friction: 30 },
    });

  const calculateBudget = () => {
    const calculatedBudget = income - expenses > 0 ? income - expenses : 0;
    setBudget(calculatedBudget);
    setPopupVisible((prev) => ({ ...prev, budget: true })); // Show the budget popup
  };

  const simulateInvestment = () => {
    if (duration < 0 || investment < 0) {
      setInvestmentGrowth(0);
    } else {
      setInvestmentGrowth((investment * Math.pow(1.05, duration)).toFixed(2));
    }
    setPopupVisible((prev) => ({ ...prev, investment: true })); // Show the investment popup
  };

  const simulateDebt = () => {
    const updatedDebt = debt - monthlyPayment;
    setRemainingDebt(updatedDebt > 0 ? updatedDebt.toFixed(2) : 0);
    setPopupVisible((prev) => ({ ...prev, debt: true })); // Show the debt popup
  };

  const trackSavings = () => {
    const progress = (currentSavings / savingsGoal) * 100;
    setSavingsProgress(progress > 100 ? 100 : progress.toFixed(2));
    setPopupVisible((prev) => ({ ...prev, savings: true })); // Show the savings popup
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-5xl p-8">
        <header className="bg-green-600 text-white text-center py-6 rounded-t-xl">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-3">
            <FaCalculator /> Real-World Financial Simulations
          </h1>
          <p className="text-lg mt-2">Simulate financial decisions and track your goals effortlessly.</p>
        </header>

        <div className="space-y-10 mt-8">
          {/* Monthly Budgeting */}
          <div className="bg-gray-50 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaMoneyBillWave /> Monthly Budgeting
            </h2>
            <h4 className="text-sm mb-4">Plan your income and expenses for financial stability.</h4>
            <div className="space-y-6">
              <InputField
                label="Monthly Income ($)"
                placeholder="Enter Monthly Income"
                onChange={setIncome}
              />
              <InputField
                label="Monthly Expenses ($)"
                placeholder="Enter Monthly Expenses"
                onChange={setExpenses}
              />
              <button
                onClick={calculateBudget}
                className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300 w-full"
              >
                <FaCalculator /> Generate Budget
              </button>
              <animated.div style={popupAnimation(popupVisible.budget)} className="mt-4 p-4 bg-green-600 text-white rounded-lg shadow-lg">
                <p className="text-lg font-semibold">Budget: ${budget}</p>
              </animated.div>
            </div>
          </div>

          {/* Investment Plan */}
          <div className="bg-gray-50 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaChartLine /> Investment Plan
            </h2>
            <h4 className="text-sm mb-4">Simulate your investments and visualize growth.</h4>
            <div className="space-y-6">
              <InputField
                label="Investment Amount ($)"
                placeholder="Enter Investment Amount"
                onChange={setInvestment}
              />
              <InputField
                label="Investment Duration (years)"
                placeholder="Enter Duration"
                onChange={setDuration}
              />
              <button
                onClick={simulateInvestment}
                className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300 w-full"
              >
                <FaCoins /> Simulate Growth
              </button>
              <animated.div style={popupAnimation(popupVisible.investment)} className="mt-4 p-4 bg-blue-600 text-white rounded-lg shadow-lg">
                <p className="text-lg font-semibold">Future Value: ${investmentGrowth}</p>
              </animated.div>
            </div>
          </div>

          {/* Debt Management */}
          <div className="bg-gray-50 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaPiggyBank /> Debt Management
            </h2>
            <h4 className="text-sm mb-4">Manage and repay debts efficiently.</h4>
            <div className="space-y-6">
              <InputField
                label="Total Debt Amount ($)"
                placeholder="Enter Total Debt"
                onChange={setDebt}
              />
              <InputField
                label="Monthly Payment ($)"
                placeholder="Enter Monthly Payment"
                onChange={setMonthlyPayment}
              />
              <button
                onClick={simulateDebt}
                className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition duration-300 w-full"
              >
                <FaCalculator /> Simulate Repayment
              </button>
              <animated.div style={popupAnimation(popupVisible.debt)} className="mt-4 p-4 bg-red-600 text-white rounded-lg shadow-lg">
                <p className="text-lg font-semibold">Remaining Debt: ${remainingDebt}</p>
              </animated.div>
            </div>
          </div>

          {/* Savings Goal Tracker */}
          <div className="bg-gray-50 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaCoins /> Savings Goal Tracker
            </h2>
            <h4 className="text-sm mb-4">Set savings goals and track your progress.</h4>
            <div className="space-y-6">
              <InputField
                label="Current Savings ($)"
                placeholder="Enter Current Savings"
                onChange={setCurrentSavings}
              />
              <InputField
                label="Savings Goal ($)"
                placeholder="Enter Savings Goal"
                onChange={setSavingsGoal}
              />
              <button
                onClick={trackSavings}
                className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition duration-300 w-full"
              >
                <FaCoins /> Track Progress
              </button>
              <animated.div style={popupAnimation(popupVisible.savings)} className="mt-4 p-4 bg-teal-600 text-white rounded-lg shadow-lg">
                <p className="text-lg font-semibold">Progress: {savingsProgress}%</p>
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulations;