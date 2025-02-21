import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { CheckCircle, AlertCircle, DollarSign, ArrowRight, Target, Wallet, PiggyBank, LineChart, ShieldCheck } from "lucide-react";

const StressTracker = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    age: 0,
    monthlyIncome: 0,
    monthlyExpenses: 0,
    currentSavings: 0,
    totalDebt: 0,
    goals: {
      house: false,
      education: false,
      retirement: false,
      emergency: false,
      other: "",
    },
    riskTolerance: "medium",
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    
    if (name.startsWith("goals.")) {
      const goalName = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        goals: {
          ...prev.goals,
          [goalName]: type === "checkbox" ? e.target.checked : value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "number" ? parseFloat(value) || 0 : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleStartOver = () => {
    setShowResults(false);
    setCurrentStep(1);
    setFormData({
      age: 0,
      monthlyIncome: 0,
      monthlyExpenses: 0,
      currentSavings: 0,
      totalDebt: 0,
      goals: {
        house: false,
        education: false,
        retirement: false,
        emergency: false,
        other: "",
      },
      riskTolerance: "medium",
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Age
              <input
                type="number"
                name="age"
                value={formData.age || ""}
                onChange={handleInputChange}
                className="mt-1 w-full rounded-lg border border-gray-200 bg-white py-2.5 px-3 text-sm"
                placeholder="Enter your age"
              />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Monthly Income
              <div className="mt-1 relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="number"
                  name="monthlyIncome"
                  value={formData.monthlyIncome || ""}
                  onChange={handleInputChange}
                  className="pl-10 w-full rounded-lg border border-gray-200 bg-white py-2.5 text-sm"
                  placeholder="Enter your monthly income"
                />
              </div>
            </label>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Current Savings
              <div className="mt-1 relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="number"
                  name="currentSavings"
                  value={formData.currentSavings || ""}
                  onChange={handleInputChange}
                  className="pl-10 w-full rounded-lg border border-gray-200 bg-white py-2.5 text-sm"
                  placeholder="Enter your current savings"
                />
              </div>
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Monthly Expenses
              <div className="mt-1 relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="number"
                  name="monthlyExpenses"
                  value={formData.monthlyExpenses || ""}
                  onChange={handleInputChange}
                  className="pl-10 w-full rounded-lg border border-gray-200 bg-white py-2.5 text-sm"
                  placeholder="Enter your monthly expenses"
                />
              </div>
            </label>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="font-medium mb-2">Financial Goals</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="goals.house"
                  checked={formData.goals.house}
                  onChange={handleInputChange}
                  className="rounded border-gray-300"
                />
                <span>Buy a House</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="goals.education"
                  checked={formData.goals.education}
                  onChange={handleInputChange}
                  className="rounded border-gray-300"
                />
                <span>Education</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="goals.retirement"
                  checked={formData.goals.retirement}
                  onChange={handleInputChange}
                  className="rounded border-gray-300"
                />
                <span>Retirement Planning</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="goals.emergency"
                  checked={formData.goals.emergency}
                  onChange={handleInputChange}
                  className="rounded border-gray-300"
                />
                <span>Emergency Fund</span>
              </label>
              <label className="block mt-4">
                <span className="text-sm">Other Goals</span>
                <input
                  type="text"
                  name="goals.other"
                  value={formData.goals.other}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-lg border border-gray-200 bg-white py-2.5 px-3 text-sm"
                  placeholder="Specify other financial goals"
                />
              </label>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Total Debt
              <div className="mt-1 relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="number"
                  name="totalDebt"
                  value={formData.totalDebt || ""}
                  onChange={handleInputChange}
                  className="pl-10 w-full rounded-lg border border-gray-200 bg-white py-2.5 text-sm"
                  placeholder="Enter your total debt"
                />
              </div>
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Risk Tolerance
              <select
                name="riskTolerance"
                value={formData.riskTolerance}
                onChange={handleInputChange}
                className="mt-1 w-full rounded-lg border border-gray-200 bg-white py-2.5 px-3 text-sm"
              >
                <option value="low">Conservative (Low Risk)</option>
                <option value="medium">Moderate (Medium Risk)</option>
                <option value="high">Aggressive (High Risk)</option>
              </select>
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  const calculateRecommendations = () => {
    const monthlyInvestment = formData.monthlyIncome * 0.2;
    const emergencyFund = formData.monthlyExpenses * 6;
    const debtPayment = formData.totalDebt > 0 ? formData.monthlyIncome * 0.3 : 0;
    const retirementAge = 65;
    const yearsToRetirement = retirementAge - formData.age;

    return {
      savings: {
        emergency: Math.max(0, emergencyFund - formData.currentSavings),
        monthly: formData.monthlyIncome * 0.2,
      },
      investments: {
        monthly: monthlyInvestment,
        strategy: getInvestmentStrategy(formData.riskTolerance, formData.age),
      },
      debt: {
        monthlyPayment: debtPayment,
        monthsToDebtFree: debtPayment > 0 ? Math.ceil(formData.totalDebt / debtPayment) : 0,
      },
      retirement: {
        yearsToRetirement,
        monthlyNeeded: formData.monthlyExpenses * 0.8,
      },
    };
  };

  const getInvestmentStrategy = (risk, age) => {
    const strategies = {
      low: {
        stocks: 30,
        bonds: 60,
        cash: 10,
      },
      medium: {
        stocks: 60,
        bonds: 30,
        cash: 10,
      },
      high: {
        stocks: 80,
        bonds: 15,
        cash: 5,
      },
    };

    return strategies[risk];
  };

  const recommendations = calculateRecommendations();

  const chartData = [
    {
      name: "Emergency Fund",
      current: formData.currentSavings,
      target: recommendations.savings.emergency + formData.currentSavings,
    },
    {
      name: "Monthly Savings",
      current: formData.monthlyIncome - formData.monthlyExpenses,
      target: recommendations.savings.monthly,
    },
    {
      name: "Debt Payment",
      current: recommendations.debt.monthlyPayment,
      target: formData.totalDebt,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Personalized Financial Roadmap</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create your customized financial plan based on your goals, income, and risk tolerance.
          </p>
        </div>
  
        {!showResults ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-8">
            <div className="flex justify-between mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-[22%] h-1 rounded-full transition-all duration-300 ${
                    step <= currentStep ? "bg-primary" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            {renderStep()}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition-all"
            >
              {currentStep === 4 ? "Generate Roadmap" : "Continue"}
              <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Your Financial Roadmap</h2>
                <button
                  onClick={handleStartOver}
                  className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Start Over
                </button>
              </div>
  
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <PiggyBank className="w-8 h-8 text-blue-500 mb-2" />
                  <h3 className="font-semibold mb-1">Monthly Savings</h3>
                  <p className="text-2xl font-bold text-blue-600">${recommendations.savings.monthly}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <LineChart className="w-8 h-8 text-green-500 mb-2" />
                  <h3 className="font-semibold mb-1">Investment Split</h3>
                  <p className="text-sm">
                    {recommendations.investments.strategy.stocks}% Stocks
                    <br />
                    {recommendations.investments.strategy.bonds}% Bonds
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <Target className="w-8 h-8 text-yellow-500 mb-2" />
                  <h3 className="font-semibold mb-1">Emergency Fund</h3>
                  <p className="text-2xl font-bold text-yellow-600">${recommendations.savings.emergency}</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <ShieldCheck className="w-8 h-8 text-purple-500 mb-2" />
                  <h3 className="font-semibold mb-1">Debt Free In</h3>
                  <p className="text-2xl font-bold text-purple-600">{recommendations.debt.monthsToDebtFree} months</p>
                </div>
              </div>
  
              <div className="h-[300px] mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="current" fill="#4F46E5" name="Current" />
                    <Bar dataKey="target" fill="#9333EA" name="Target" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
  
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Savings Strategy</h3>
                  <p className="text-gray-600">
                    Aim to save ${recommendations.savings.monthly} monthly. Build an emergency fund of ${recommendations.savings.emergency} over time.
                  </p>
                </div>
  
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold mb-2">Investment Plan</h3>
                  <p className="text-gray-600">
                    Given your {formData.riskTolerance} risk tolerance, focus on a{" "}
                    {recommendations.investments.strategy.stocks}/{recommendations.investments.strategy.bonds} stocks/bonds split.
                  </p>
                </div>
  
                {formData.totalDebt > 0 && (
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold mb-2">Debt Management</h3>
                    <p className="text-gray-600">
                      Allocate ${recommendations.debt.monthlyPayment} monthly to debt repayment. You'll be debt-free in {recommendations.debt.monthsToDebtFree} months.
                    </p>
                  </div>
                )}
  
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold mb-2">Retirement Planning</h3>
                  <p className="text-gray-600">
                    With {recommendations.retirement.yearsToRetirement} years until retirement, aim to save ${recommendations.retirement.monthlyNeeded} monthly for retirement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

  export default StressTracker;