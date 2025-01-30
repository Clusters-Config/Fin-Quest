import React, { useState } from "react";
import { FaMoneyBillWave, FaPiggyBank, FaCoins, FaCalculator } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";

const InputField = ({ label, placeholder, onChange }) => (
  <div className="flex flex-col">
    <label className="text-sm font-semibold mb-1">{label}</label>
    <input
      type="number"
      placeholder={placeholder}
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F39C12] transition duration-300"
      onChange={(e) => onChange(Number(e.target.value))}
    />
  </div>
);

const Simulations = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [budget, setBudget] = useState(0);
  const [dailyAllowance, setDailyAllowance] = useState(0);
  const [dailyExpenses, setDailyExpenses] = useState(0);
  const [monthlyAllowance, setMonthlyAllowance] = useState(0);
  
  const [debt, setDebt] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [remainingDebt, setRemainingDebt] = useState(0);

  const [currentSavings, setCurrentSavings] = useState(0);
  const [savingsGoal, setSavingsGoal] = useState(0);
  const [savingsProgress, setSavingsProgress] = useState(0);

  const [popupVisible, setPopupVisible] = useState({
    budget: false,
    dailyMode: false,
    debt: false,
    savings: false,
  });

  const [isDailyMode, setIsDailyMode] = useState(false);

  const popupAnimation = (visible) =>
    useSpring({
      opacity: visible ? 1 : 0,
      transform: visible ? "scale(1)" : "scale(0.8)",
      config: { tension: 250, friction: 30 },
    });

  const calculateMonthlyBudget = () => {
    const calculatedBudget = income - expenses > 0 ? income - expenses : 0;
    setBudget(calculatedBudget);

    const calculatedDailyAllowance = calculatedBudget / 30; // Assuming 30 days in a month
    setDailyAllowance(calculatedDailyAllowance.toFixed(2));

    setPopupVisible((prev) => ({ ...prev, budget: true }));
  };

  const calculateMonthlyAllowance = () => {
    const calculatedAllowance = dailyExpenses * 30; // Calculate monthly allowance from daily expenses
    setMonthlyAllowance(calculatedAllowance.toFixed(2));

    setPopupVisible((prev) => ({ ...prev, dailyMode: true }));
  };

  const simulateDebt = () => {
    const updatedDebt = debt - monthlyPayment;
    setRemainingDebt(updatedDebt > 0 ? updatedDebt.toFixed(2) : 0);
    setPopupVisible((prev) => ({ ...prev, debt: true }));
  };

  const trackSavings = () => {
    const progress = (currentSavings / savingsGoal) * 100;
    setSavingsProgress(progress > 100 ? 100 : progress.toFixed(2));
    setPopupVisible((prev) => ({ ...prev, savings: true }));
  };

  return (
    <div className="bg-gradient-to-b from-[#F8FAFC] to-[#FFFFFF] min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-5xl p-8">
        <header className="bg-[#002147] text-white text-center py-6 rounded-t-xl">
          <h1 className="text-3xl font-semibold flex items-center justify-center gap-3">
            <FaCalculator /> Real-World Financial Simulations
          </h1>
          <p className="text-lg mt-2">
            Simulate financial decisions and track your goals effortlessly.
          </p>
        </header>

        <div className="space-y-10 mt-8">
          {/* Monthly Budgeting / Daily Allowance */}
          <div className="bg-[#F4F4F4] shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#002147]">
              <FaMoneyBillWave /> {isDailyMode ? "Daily Expenses & Monthly Allowance" : "Monthly Budgeting"}
            </h2>
            <h4 className="text-sm mb-4 text-[#6C757D]">
              {isDailyMode
                ? "Calculate your monthly allowance based on daily expenses."
                : "Plan your income and expenses for financial stability."}
            </h4>
            <div className="flex justify-between items-center mb-6">
              <span className="text-[#6C757D]">Switch to {isDailyMode ? "Monthly" : "Daily"} Mode</span>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isDailyMode}
                  onChange={() => setIsDailyMode(!isDailyMode)}
                />
                <span
                  className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
                    isDailyMode ? "bg-[#F39C12]" : ""
                  }`}
                >
                  <span
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
                      isDailyMode ? "translate-x-5" : ""
                    }`}
                  ></span>
                </span>
              </label>
            </div>
            <div className="space-y-6">
              {isDailyMode ? (
                <>
                  <InputField
                    label="Daily Expenses ($)"
                    placeholder="Enter Daily Expenses"
                    onChange={setDailyExpenses}
                  />
                  <button
                    onClick={calculateMonthlyAllowance}
                    className="bg-[#F39C12] text-white py-2 px-6 rounded-lg hover:bg-[#e67e22] transition duration-300 w-full"
                  >
                    <FaCalculator /> Calculate Monthly Allowance
                  </button>
                  <animated.div
                    style={popupAnimation(popupVisible.dailyMode)}
                    className="mt-4 p-4 bg-[#002147] text-white rounded-lg shadow-lg"
                  >
                    <p className="text-lg font-semibold">
                      Monthly Allowance: ${monthlyAllowance}
                    </p>
                  </animated.div>
                </>
              ) : (
                <>
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
                    onClick={calculateMonthlyBudget}
                    className="bg-[#F39C12] text-white py-2 px-6 rounded-lg hover:bg-[#e67e22] transition duration-300 w-full"
                  >
                    <FaCalculator /> Generate Budget
                  </button>
                  <animated.div
                    style={popupAnimation(popupVisible.budget)}
                    className="mt-4 p-4 bg-[#002147] text-white rounded-lg shadow-lg"
                  >
                    <p className="text-lg font-semibold">Budget: ${budget}</p>
                    <p className="text-lg font-semibold">Daily Allowance: ${dailyAllowance}</p>
                  </animated.div>
                </>
              )}
            </div>
          </div>

          {/* Debt Management */}
          <div className="bg-[#F4F4F4] shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#002147]">
              <FaPiggyBank /> Debt Management
            </h2>
            <h4 className="text-sm mb-4 text-[#6C757D]">Manage and repay debts efficiently.</h4>
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
                className="bg-[#F39C12] text-white py-2 px-6 rounded-lg hover:bg-[#e67e22] transition duration-300 w-full"
              >
                <FaCalculator /> Simulate Repayment
              </button>
              <animated.div
                style={popupAnimation(popupVisible.debt)}
                className="mt-4 p-4 bg-[#002147] text-white rounded-lg shadow-lg"
              >
                <p className="text-lg font-semibold">Remaining Debt: ${remainingDebt}</p>
              </animated.div>
            </div>
          </div>

          {/* Savings Goal Tracker */}
          <div className="bg-[#F4F4F4] shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#002147]">
              <FaCoins /> Savings Goal Tracker
            </h2>
            <h4 className="text-sm mb-4 text-[#6C757D]">
              Set savings goals and track your progress.
            </h4>
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
                className="bg-[#F39C12] text-white py-2 px-6 rounded-lg hover:bg-[#e67e22] transition duration-300 w-full"
              >
                <FaCoins /> Track Progress
              </button>
              <animated.div
                style={popupAnimation(popupVisible.savings)}
                className="mt-4 p-4 bg-[#002147] text-white rounded-lg shadow-lg"
              >
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
