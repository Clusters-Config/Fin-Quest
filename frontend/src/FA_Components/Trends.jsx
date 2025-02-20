import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Trends = () => {
  const [monthlyInputs, setMonthlyInputs] = useState({
    Jan: { savings: "", expenses: "", investment: "" },
    Feb: { savings: "", expenses: "", investment: "" },
    Mar: { savings: "", expenses: "", investment: "" },
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    const generateData = () => {
      const months = ["Apr", "May", "Jun"];
      return months.map((month) => ({
        name: month,
        savings: Math.floor(Math.random() * 2000) + 3000,
        expenses: Math.floor(Math.random() * 1500) + 2000,
        investment: Math.floor(Math.random() * 1000) + 1000,
      }));
    };
    setData(generateData());
  }, []);

  const handleInputChange = (month, field, value) => {
    setMonthlyInputs((prev) => ({
      ...prev,
      [month]: { ...prev[month], [field]: value },
    }));
  };

  const generateGraph = () => {
    const userData = Object.entries(monthlyInputs).map(([month, values]) => ({
      name: month,
      savings: parseFloat(values.savings) || 0,
      expenses: parseFloat(values.expenses) || 0,
      investment: parseFloat(values.investment) || 0,
    }));
    setData([...userData, ...data]);
  };

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-semibold mb-4">Financial Trends</h2>
      <p className="text-gray-600 mb-6">Enter your financial data to track trends.</p>

      <div className="grid gap-6">
        {Object.entries(monthlyInputs).map(([month, values]) => (
          <div key={month} className="border p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-3">{month}</h3>
            <div className="grid gap-4">
              {["savings", "expenses", "investment"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={`${month}-${field}`}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    id={`${month}-${field}`}
                    type="number"
                    value={values[field]}
                    onChange={(e) => handleInputChange(month, field, e.target.value)}
                    placeholder={`Enter ${field} amount`}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={generateGraph} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Generate Graph
        </button>
      </div>

      {data.length > 0 && (
        <>
          <div className="h-[400px] w-full mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="savings" stroke="#10B981" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="investment" stroke="#F59E0B" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default Trends;
