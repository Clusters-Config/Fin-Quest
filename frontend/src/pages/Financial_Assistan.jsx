import React, { useState, useEffect } from "react";
import {
  Loader2,
  BarChart,
  Calculator,
  Sparkles,
  X,
  Lightbulb,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import {marked} from 'marked';
import Chat from "../Services/Chat";
import Footer from "../Services/Footer";
import Header from "../Services/Header";
import { useLocation } from "react-router-dom";

// New functional Rule Calculator component with AI
const RuleCalculator = () => {
  const [activeRule, setActiveRule] = useState("50/30/20");
  const [income, setIncome] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [result, setResult] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const pathname = useLocation()

  // Function to fetch the AI-generated explanation for the selected rule
  const getExplanation = async (ruleName) => {
    setIsLoading(true);
    setExplanation("");
    setError(null);
    try {
      const prompt = `Explain the ${ruleName} rule in simple, easy-to-understand markdown format.
        - Start with a clear heading.
        - Use bullet points to break down the key concepts.
        - Provide a brief, practical example of how to use the rule.`;

      const payload = {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      };

      const apiKey = "AIzaSyANSrVxYkF3HY0vytxXfWtJeuBRF9B8AME";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        setExplanation(text);
      } else {
        throw new Error("No response from AI.");
      }
    } catch (e) {
      console.error("Failed to generate explanation:", e);
      setError("Failed to get an explanation. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Effect to fetch explanation when the active rule changes
  useEffect(() => {
    getExplanation(activeRule);
  }, [activeRule]);

  // Function to handle the rule calculation based on the active rule
  const calculateRule = () => {
    setError(null);
    setResult(null);

    if (activeRule === "50/30/20") {
      if (!income || isNaN(income) || income <= 0) {
        setError("Please enter a valid monthly income.");
        return;
      }
      const monthlyIncome = parseFloat(income);
      setResult({
        needs: monthlyIncome * 0.5,
        wants: monthlyIncome * 0.3,
        savings: monthlyIncome * 0.2,
      });
    } else if (activeRule === "Rule of 72") {
      if (!interestRate || isNaN(interestRate) || interestRate <= 0) {
        setError("Please enter a valid annual interest rate.");
        return;
      }
      const rate = parseFloat(interestRate);
      setResult({
        doublingTime: (72 / rate).toFixed(2),
      });
    }
  };
  

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <button
          onClick={() => { setActiveRule("50/30/20"); setResult(null); setError(null); }}
          className={`w-full md:w-1/2 py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${activeRule === "50/30/20"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
        >
          50/30/20 Rule
        </button>
        <button
          onClick={() => { setActiveRule("Rule of 72"); setResult(null); setError(null); }}
          className={`w-full md:w-1/2 py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${activeRule === "Rule of 72"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
        >
          Rule of 72
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        {activeRule === "50/30/20" ? (
          <div className="flex-grow w-full">
            <label htmlFor="income-input" className="font-medium text-gray-700 block mb-2">Monthly Income ($)</label>
            <input
              type="number"
              id="income-input"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 5000"
              required
            />
          </div>
        ) : (
          <div className="flex-grow w-full">
            <label htmlFor="rate-input" className="font-medium text-gray-700 block mb-2">Annual Interest Rate (%)</label>
            <input
              type="number"
              id="rate-input"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 8"
              required
            />
          </div>
        )}
        <button
          onClick={calculateRule}
          className="md:self-end w-full md:w-auto mt-4 md:mt-0 py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Calculate
        </button>
      </div>

      {error && <div className="p-4 bg-red-100 text-red-700 rounded-lg border border-red-200 mt-4">{error}</div>}

      {result && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {activeRule === "50/30/20" ? (
            <>
              <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                <h4 className="text-md font-bold text-blue-700 mb-1">50% Needs</h4>
                <p className="text-2xl font-bold text-gray-800">${result.needs.toFixed(2)}</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl border-2 border-green-200">
                <h4 className="text-md font-bold text-green-700 mb-1">30% Wants</h4>
                <p className="text-2xl font-bold text-gray-800">${result.wants.toFixed(2)}</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                <h4 className="text-md font-bold text-yellow-700 mb-1">20% Savings</h4>
                <p className="text-2xl font-bold text-gray-800">${result.savings.toFixed(2)}</p>
              </div>
            </>
          ) : (
            <div className="p-4 bg-purple-50 rounded-xl border-2 border-purple-200 md:col-span-3">
              <h4 className="text-md font-bold text-purple-700 mb-1">Time to Double Money</h4>
              <p className="text-2xl font-bold text-gray-800">{result.doublingTime} years</p>
            </div>
          )}
        </div>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200 mt-6">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          <p className="text-gray-600">Generating explanation...</p>
        </div>
      ) : (
        explanation && (
          <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-inner">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <Sparkles className="h-6 w-6 mr-2 text-yellow-500" />
              About the {activeRule}
            </h3>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: marked.parse(explanation) }} />
          </div>
        )
      )}
    </div>
  );
};

// New Trends Analysis component with Charts
const Trends = () => {
  const [data, setData] = useState("");
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState(null);

  // Parse the raw text data into a format for the charts
  const parseData = () => {
    if (!data.trim()) {
      setError("Please paste your financial data to analyze.");
      setParsedData(null);
      return;
    }
    setError(null);
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const spendingOverTime = [];
    const categoryTotals = {};
    let hasValidData = false;

    lines.forEach(line => {
      const parts = line.split(' - ');
      if (parts.length === 3) {
        const [date, category, amountStr] = parts;
        const amount = parseFloat(amountStr.replace(/[$,]/g, ''));
        if (!isNaN(amount)) {
          spendingOverTime.push({ date, category, amount });
          categoryTotals[category] = (categoryTotals[category] || 0) + amount;
          hasValidData = true;
        }
      }
    });

    if (!hasValidData) {
      setError("The data format is incorrect. Please use 'Date - Category - Amount' for each line.");
      setParsedData(null);
      return;
    }

    const spendingByCategory = Object.keys(categoryTotals).map(category => ({
      name: category,
      value: categoryTotals[category]
    }));

    setParsedData({ spendingOverTime, spendingByCategory });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="financial-data" className="font-medium text-gray-700">Paste your financial data for analysis</label>
          <textarea
            id="financial-data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            rows="8"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g.,
            1/15/2025 - Groceries - $120.50
            1/16/2025 - Coffee - $5.25
            1/17/2025 - Rent - $1500.00
            1/18/2025 - Gym Membership - $45.00
            "
            required
          />
          <p className="text-sm text-gray-500">Note: Please do not include any sensitive personal information.</p>
        </div>
        <button
          onClick={parseData}
          className="mt-2 py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Generate Charts
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg border border-red-200">
          <p>{error}</p>
        </div>
      )}

      {parsedData && parsedData.spendingOverTime.length > 0 && (
        <div className="mt-6 p-6 bg-white rounded-lg border border-gray-200 shadow-inner">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Spending Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={parsedData.spendingOverTime} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-800">Spending by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsBarChart data={parsedData.spendingByCategory} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

// New Plan Recommender component with AI integration
const PlanRecommender = () => {
  const [income, setIncome] = useState("");
  const [savings, setSavings] = useState("");
  const [expenses, setExpenses] = useState("");
  const [goals, setGoals] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!income || !savings || !expenses || !goals) {
      setError("Please fill out all fields.");
      return;
    }
    setIsLoading(true);
    setAiResponse("");
    setError(null);

    const makeApiCallWithRetry = async (retryCount = 0) => {
      try {
        // Updated prompt for a more concise response
        const prompt = `Given the user's monthly income of $${income}, monthly savings of $${savings}, monthly expenses of $${expenses}, and financial goals of "${goals}", generate a short and precise financial plan. Provide the plan as a simple bulleted list of actionable steps, without any additional introductory or concluding text.`;

        const payload = {
          contents: [{ role: "user", parts: [{ text: prompt }] }],
        };

        const apiKey = "AIzaSyANSrVxYkF3HY0vytxXfWtJeuBRF9B8AME";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          if (response.status === 429 && retryCount < 5) {
            const delay = Math.pow(2, retryCount) * 1000 + Math.random() * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));
            return makeApiCallWithRetry(retryCount + 1);
          }
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (text) {
          setAiResponse(text);
        } else {
          throw new Error("No response from AI.");
        }
      } catch (e) {
        console.error("Failed to generate plan:", e);
        setError("Failed to generate a plan. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    makeApiCallWithRetry();
  };

  return (
    <div className="flex flex-col gap-6">
            <Header />

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="income" className="font-medium text-gray-700">Monthly Income ($)</label>
          <input
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 5000"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="savings" className="font-medium text-gray-700">Monthly Savings ($)</label>
          <input
            type="number"
            id="savings"
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 1000"
            required
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="expenses" className="font-medium text-gray-700">Monthly Expenses ($)</label>
          <input
            type="number"
            id="expenses"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 3000"
            required
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="goals" className="font-medium text-gray-700">Financial Goals</label>
          <textarea
            id="goals"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            rows="3"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Save for a house down payment, pay off student loans..."
            required
          />
        </div>
        <button
          type="submit"
          className="md:col-span-2 mt-4 py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out disabled:bg-gray-400 flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
          Generate Plan
        </button>
      </form>

      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg border border-red-200">
          <p>{error}</p>
        </div>
      )}

      {aiResponse && (
        <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-inner">
          <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
            <Sparkles className="h-6 w-6 mr-2 text-yellow-500" />
            Your Personalized Financial Plan
          </h3>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: marked.parse(aiResponse) }} />
        </div>
      )}
    </div>
  );
};

// Main component
const FinancialDashboard = () => {
 const pathname = useLocation()
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

  const [activeTab, setActiveTab] = useState(null);

  const toolData = [
    { name: "Rule Calculator", key: "calculator", label: "Calculate", icon: <Calculator size={32} /> },
    { name: "Plan Recommender", key: "recommender", label: "Plan", icon: <Lightbulb size={32} /> },
    { name: "Trends Analysis", key: "trends", label: "Track", icon: <BarChart size={32} /> },
  ];

  const renderModalContent = () => {
    switch (activeTab) {
      case "calculator":
        return <RuleCalculator />;
      case "recommender":
        return <PlanRecommender />;
      case "trends":
        return <Trends />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-6">
            <Header />

    <div className="w-full min-h-screen bg-gray-100 font-sans flex flex-col items-center p-6 mt-30">
      <Chat/>
      {/* Header */}
      <div className="text-center my-12 max-w-4xl px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Master Your <span className="text-blue-600">Financial Future</span>
        </h1>
        <p className="text-xl text-gray-600">
          Unlock your potential with our powerful financial tools.
        </p>
      </div>

      {/* Tool Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {toolData.map((tool) => (
          <button
            key={tool.key}
            onClick={() => setActiveTab(tool.key)}
            className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-200"
          >
            <div className="p-4 rounded-full bg-blue-100 text-blue-600 mb-4 transition-colors duration-300">
              {tool.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {tool.name}
            </h2>
            <p className="text-gray-500 mb-6">
              {tool.key === "calculator" && "Effortlessly apply key financial rules."}
              {tool.key === "recommender" && "Get a personalized AI-powered financial plan."}
              {tool.key === "trends" && "Visualize and track your progress over time."}
            </p>
            <span className="text-blue-600 font-semibold flex items-center group-hover:underline transition-colors duration-300">
              {tool.label}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {/* Dialog Modal */}
      {activeTab && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-8 md:p-12 shadow-2xl relative animate-fade-in-up transition-all duration-300">
            {/* Close Button */}
            <button
              onClick={() => setActiveTab(null)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  {toolData.find(t => t.key === activeTab).icon}
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900">
                  {toolData.find(t => t.key === activeTab).name}
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                {toolData.find(t => t.key === activeTab).key === "calculator" && "Understand and apply key financial rules to manage your money effectively."}
                {toolData.find(t => t.key === activeTab).key === "recommender" && "Receive an intelligent, personalized financial plan tailored to your specific situation."}
                {toolData.find(t => t.key === activeTab).key === "trends" && "Visualize and track your progress over time."}
              </p>
              <div className="border-t border-gray-200 pt-6">
                {renderModalContent()}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script> */}
      <script src="https://unpkg.com/recharts/umd/Recharts.min.js"></script>

      
    </div>  <Footer/>
    </div>
  );
};

// Export the main component
export default FinancialDashboard;
