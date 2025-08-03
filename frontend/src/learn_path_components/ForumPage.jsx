// Forum Page - Redesigned to Match Reference UI
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChartLine,
  FaUniversity,
  FaShieldAlt,
  FaPiggyBank,
  FaHandHoldingUsd,
} from "react-icons/fa";

function ForumPage() {
  const navigate = useNavigate();

  const groups = [
    {
      title: "Investment Strategies",
      description:
        "Learn and share proven investment techniques and portfolio management strategies",
      members: 1247,
      posts: 45,
      experts: 8,
      tag: "High",
      icon: <FaChartLine className="text-green-500 text-xl" />,
    },
    {
      title: "Cryptocurrency & DeFi",
      description:
        "Explore digital assets, blockchain technology, and decentralized finance protocols",
      members: 892,
      posts: 67,
      experts: 5,
      tag: "Very High",
      icon: <FaUniversity className="text-orange-400 text-xl" />,
    },
    {
      title: "Stock Market Analysis",
      description:
        "Technical and fundamental analysis of stocks, market trends, and trading strategies",
      members: 1556,
      posts: 38,
      experts: 12,
      tag: "High",
      icon: <FaChartLine className="text-blue-500 text-xl" />,
    },
    {
      title: "Personal Finance & Budgeting",
      description:
        "Master personal financial planning, budgeting, and wealth building strategies",
      members: 2134,
      posts: 29,
      experts: 6,
      tag: "Medium",
      icon: <FaPiggyBank className="text-purple-500 text-xl" />,
    },
    {
      title: "Fintech Startups",
      description:
        "Innovation in financial technology, startup discussions, and career opportunities",
      members: 634,
      posts: 22,
      experts: 4,
      tag: "Medium",
      icon: <FaHandHoldingUsd className="text-cyan-600 text-xl" />,
    },
    {
      title: "Risk Management",
      description:
        "Learn about financial risk assessment, hedging strategies, and portfolio protection",
      members: 789,
      posts: 31,
      experts: 9,
      tag: "Medium",
      icon: <FaShieldAlt className="text-red-500 text-xl" />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-1">Finance Forum</h1>
        <p className="text-sm text-gray-600 mb-6">
          Professional peer-to-peer collaboration platform for finance enthusiasts
        </p>

        <div className="flex justify-center gap-4 mb-8 text-sm font-medium text-gray-600">
          {[
            { name: "Groups", path: "/ForumPage" },
            { name: "Webinars", path: "/Webinar" },
            { name: "Experts", path: "/Experts" },
            { name: "Tools", path: "/Tools" },
            { name: "Discussionboard", path: "/Discussionboard" },

          ].map((tab) => (
            <button
              key={tab.name}
              onClick={() => navigate(tab.path)}
              className={`px-4 py-2 rounded-md border text-gray-600 bg-gray-50 hover:border-b-2 hover:border-blue-600 transition duration-200 ${window.location.pathname === tab.path
                  ? "border-b-2 border-blue-900 text-blue-900 bg-gray-100"
                  : ""
                }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex gap-10 mb-6 text-sm">
          <div>
            <p className="text-gray-400 uppercase">Active Members</p>
            <p className="text-xl font-bold text-blue-900">7,352</p>
          </div>
          <div>
            <p className="text-gray-400 uppercase">Live Discussions</p>
            <p className="text-xl font-bold text-green-600">24</p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {group.icon}
                  <h2 className="text-lg font-semibold text-gray-800">
                    {group.title}
                  </h2>
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${group.tag === "High"
                      ? "bg-green-100 text-green-600"
                      : group.tag === "Very High"
                        ? "bg-red-100 text-red-500"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                >
                  {group.tag}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{group.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <span>👥 {group.members} members</span>
                <span>📝 {group.posts} posts</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                {group.experts} experts available
              </p>
              <button className="w-full py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition">
                Join Group
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ForumPage;
