import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TrendingUp,
  Bitcoin,
  PiggyBank,
  Calendar,
  LineChart,
  BookOpen,
  Trophy,
  Zap,
  Users,
  Star,
  Target,
} from "lucide-react";

export default function FinanceQuest() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-green-600 flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">FinanceQuest</h1>
              <p className="text-xs text-gray-500">Gamified Financial Learning</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
              <Users className="w-4 h-4" /> 10,000+ Learners
            </span>
            <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
              <Star className="w-4 h-4" /> 4.9 Rating
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Master Finance Through{" "}
          <span className="text-green-600">Games</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Learn financial concepts, trading strategies, and investment principles
          through interactive games designed for students and professionals.
        </p>
        <div className="flex justify-center gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-green-600" /> Interactive Learning
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-600" /> Achievement System
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-purple-600" /> Real-time Simulation
          </div>
        </div>
      </section>

      {/* Game Cards */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-16">
        {/* Stock Prediction */}
        <div className="bg-white shadow rounded-lg p-6 border-t-4 border-green-600">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Most Popular</span>
          </div>
          <h3 className="text-lg font-bold mb-2">Stock Prediction Challenge</h3>
          <p className="text-sm text-gray-600 mb-4">
            Analyze chart patterns and predict stock price movements. Build your trading intuition!
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-4">
            <li>📊 Pattern Recognition</li>
            <li>📈 Technical Analysis</li>
            <li>🏆 Score & Streak System</li>
          </ul>
          <button  className="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700">
            Play Now
          </button>
        </div>

        {/* Crypto Trading */}
        <div className="bg-white shadow rounded-lg p-6 border-t-4 border-blue-600">
          <div className="flex items-center justify-between mb-3">
            <Bitcoin className="w-6 h-6 text-blue-600" />
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Hot</span>
          </div>
          <h3 className="text-lg font-bold mb-2">Crypto Trading Simulator</h3>
          <p className="text-sm text-gray-600 mb-4">
            Trade cryptocurrencies with virtual money. Learn DeFi and blockchain concepts.
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-4">
            <li>💰 Real-time Prices</li>
            <li>📂 Portfolio Management</li>
            <li>⚡ Fast-paced Trading</li>
          </ul>
          <button onClick={() => navigate("/ProfitLossLadder")} className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700">
            Start Trading
          </button>
        </div>

        {/* Personal Finance */}
        <div className="bg-white shadow rounded-lg p-6 border-t-4 border-purple-600">
          <div className="flex items-center justify-between mb-3">
            <PiggyBank className="w-6 h-6 text-purple-600" />
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">New</span>
          </div>
          <h3 className="text-lg font-bold mb-2">Personal Finance Challenge</h3>
          <p className="text-sm text-gray-600 mb-4">
            Master budgeting skills and learn to manage money like a financial expert.
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-4">
            <li>📊 Budget Planning</li>
            <li>🎯 Savings Goals</li>
            <li>💡 Smart Decisions</li>
          </ul>
          <button className="w-full bg-purple-600 text-white py-2 rounded-md font-medium hover:bg-purple-700">
            Start Budgeting
          </button>
        </div>

        {/* Daily Quest */}
        <div className="bg-white shadow rounded-lg p-6 border-t-4 border-pink-600">
          <div className="flex items-center justify-between mb-3">
            <Calendar className="w-6 h-6 text-pink-600" />
            <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">Daily</span>
          </div>
          <h3 className="text-lg font-bold mb-2">Daily Financial Quest</h3>
          <p className="text-sm text-gray-600 mb-4">
            Answer daily questions and test your financial knowledge. HackerRank-style challenges!
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-4">
            <li>📝 5 Questions Daily</li>
            <li>📚 Knowledge Testing</li>
            <li>🔥 Streak Building</li>
          </ul>
          <button className="w-full bg-pink-600 text-white py-2 rounded-md font-medium hover:bg-pink-700">
            Start Quest
          </button>
        </div>

        {/* Coming Soon */}
        <div className="bg-gray-100 text-gray-400 shadow rounded-lg p-6 border-t-4 border-gray-300">
          <div className="flex items-center justify-between mb-3">
            <LineChart className="w-6 h-6" />
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">Coming Soon</span>
          </div>
          <h3 className="text-lg font-bold mb-2">Investment Portfolio Builder</h3>
          <p className="text-sm mb-4">
            Learn diversification by building balanced investment portfolios.
          </p>
          <ul className="text-sm space-y-1 mb-4">
            <li>📊 Asset Allocation</li>
            <li>📉 Risk Management</li>
            <li>📈 Performance Tracking</li>
          </ul>
          <button disabled className="w-full bg-gray-300 text-gray-600 py-2 rounded-md font-medium cursor-not-allowed">
            Coming Soon
          </button>
        </div>
      </section>
    </div>
  );
}
