import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { CheckCircle, AlertCircle, DollarSign, ArrowRight } from "lucide-react";

const StressTracker = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    emergencySavings: 0,
    monthlyIncome: 0,
    monthlyExpenses: 0,
    totalDebt: 0,
  });

  const handleInputChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
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
      emergencySavings: 0,
      monthlyIncome: 0,
      monthlyExpenses: 0,
      totalDebt: 0,
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 animate-fadeIn">
            <label className="block text-sm font-medium text-gray-700">
              Emergency Savings
              <div className="mt-1 relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="number"
                  name="emergencySavings"
                  value={formData.emergencySavings || ""}
                  onChange={handleInputChange}
                  className="pl-10 w-full rounded-lg border border-gray-200 bg-white py-2.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your total savings"
                />
              </div>
            </label>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-fadeIn">
            <label className="block text-sm font-medium text-gray-700">
              Monthly Income
              <div className="mt-1 relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="number"
                  name="monthlyIncome"
                  value={formData.monthlyIncome || ""}
                  onChange={handleInputChange}
                  className="pl-10 w-full rounded-lg border border-gray-200 bg-white py-2.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your monthly income"
                />
              </div>
            </label>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 animate-fadeIn">
            <label className="block text-sm font-medium text-gray-700">
              Monthly Expenses
              <div className="mt-1 relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="number"
                  name="monthlyExpenses"
                  value={formData.monthlyExpenses || ""}
                  onChange={handleInputChange}
                  className="pl-10 w-full rounded-lg border border-gray-200 bg-white py-2.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your monthly expenses"
                />
              </div>
            </label>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4 animate-fadeIn">
            <label className="block text-sm font-medium text-gray-700">
              Total Debt
              <div className="mt-1 relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="number"
                  name="totalDebt"
                  value={formData.totalDebt || ""}
                  onChange={handleInputChange}
                  className="pl-10 w-full rounded-lg border border-gray-200 bg-white py-2.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your total debt"
                />
              </div>
            </label>
          </div>
        );
    }
  };

  // Calculating financial metrics
  const monthsOfSavings = formData.emergencySavings / formData.monthlyExpenses;
  const debtToIncomeRatio = (formData.totalDebt / (formData.monthlyIncome * 12)) * 100;
  const savingsRate = ((formData.monthlyIncome - formData.monthlyExpenses) / formData.monthlyIncome) * 100;

  // Calculate Stress Level dynamically based on user input
  const getStressLevel = () => {
    let score = 0;

    // Emergency Fund (At least 6 months of expenses)
    if (monthsOfSavings >= 6) score += 33;

    // Debt-to-Income Ratio (less than 36%)
    if (debtToIncomeRatio < 36) score += 33;

    // Savings Rate (At least 20%)
    if (savingsRate > 20) score += 34;

    return score;
  };

  const chartData = [
    {
      name: "Emergency Fund",
      value: monthsOfSavings,
      target: 6,
    },
    {
      name: "Debt/Income",
      value: debtToIncomeRatio,
      target: 36,
    },
    {
      name: "Savings Rate",
      value: savingsRate,
      target: 20,
    },
  ];

  const recommendations = [
    {
      title: "Emergency Fund",
      icon: monthsOfSavings >= 6 ? CheckCircle : AlertCircle,
      message:
        monthsOfSavings >= 6
          ? "Great job! You have a solid emergency fund."
          : "Try to build up at least 6 months of expenses in savings.",
      status: monthsOfSavings >= 6 ? "success" : "warning",
    },
    {
      title: "Debt Management",
      icon: debtToIncomeRatio < 36 ? CheckCircle : AlertCircle,
      message:
        debtToIncomeRatio < 36
          ? "Your debt level is manageable."
          : "Consider debt consolidation or accelerated repayment strategies.",
      status: debtToIncomeRatio < 36 ? "success" : "warning",
    },
    {
      title: "Savings Rate",
      icon: savingsRate > 20 ? CheckCircle : AlertCircle,
      message:
        savingsRate > 20
          ? "Excellent saving habits!"
          : "Look for ways to increase your savings rate to at least 20%.",
      status: savingsRate > 20 ? "success" : "warning",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Financial Stress Test</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Evaluate your financial resilience with our comprehensive stress test. We'll analyze your
            savings, income, and debt to provide personalized recommendations.
          </p>
        </div>

        {!showResults ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-8">
            <div className="flex justify-between mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-[22%] h-1 rounded-full transition-all duration-300 ${step <= currentStep ? "bg-primary" : "bg-gray-200"}`}
                />
              ))}
            </div>
            {renderStep()}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition-all"
            >
              {currentStep === 4 ? "View Results" : "Continue"}
              <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Financial Health Score</h2>
                <button
                  onClick={handleStartOver}
                  className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Start Over
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-24 h-24 rounded-full border-8 flex items-center justify-center text-2xl font-bold"
                  style={{
                    borderColor: `hsl(${getStressLevel() * 1.2}, 70%, 50%)`,
                  }}
                >
                  {getStressLevel()}%
                </div>
                <div>
                  <p className="text-lg font-medium">
                    {getStressLevel() >= 80
                      ? "Excellent Financial Health"
                      : getStressLevel() >= 60
                      ? "Good Financial Health"
                      : "Needs Attention"}
                  </p>
                  <p className="text-gray-600">Based on your financial metrics</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Key Metrics</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#6B8E6B" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${rec.status === "success" ? "border-green-200 bg-green-50" : "border-yellow-200 bg-yellow-50"}`}
                  >
                    <div className="flex items-start gap-3">
                      <rec.icon
                        className={rec.status === "success" ? "text-green-500" : "text-yellow-500"}
                        size={20}
                      />
                      <div>
                        <h3 className="font-medium mb-1">{rec.title}</h3>
                        <p className="text-sm text-gray-600">{rec.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StressTracker;