import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faQuestionCircle, faChartLine, faWallet } from '@fortawesome/free-solid-svg-icons';

const FinancialToolsPage = () => {
    const navigate = useNavigate();

    const financialTools = [
        {
            name: "SIP Calculator",
            description: "Calculate returns on systematic investment plans",
            users: "12.5k",
            icon: faCalculator,
        },
        {
            name: "Risk Tolerance Quiz",
            description: "Assess your investment risk profile",
            users: "8.9k",
            icon: faQuestionCircle,
        },
        {
            name: "Portfolio Tracker",
            description: "Track and analyze your investments",
            users: "15.2k",
            icon: faChartLine,
        },
        {
            name: "Budget Planner",
            description: "Plan and manage your monthly budget",
            users: "22.1k",
            icon: faWallet,
        },
    ];

    return (
        <div className="font-sans bg-white min-h-screen">
            {/* Header */}
            <header className="text-center py-10">
                <h1 className="text-2xl font-bold mb-1">Finance Forum</h1>
                <p className="text-sm text-gray-500">Explore powerful tools to manage your finances</p>
            </header>

            {/* Tabs */}
            <div className="max-w-5xl mx-auto">
                {/* Tabs */}
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

                {/* Financial Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-5xl mb-10">
                    {financialTools.map((tool, index) => (
                        <div key={index} className="border rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all cursor-pointer bg-gray-50">
                            <FontAwesomeIcon icon={tool.icon} className="text-3xl mb-2 text-blue-600" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
                            <p className="text-xs text-gray-500 mb-4">{tool.users} users</p>
                            <button className="w-full py-2 text-sm font-medium bg-blue-900 text-white rounded hover:bg-blue-800">
                                Open Tool
                            </button>
                        </div>
                    ))}
                </div>

                {/* Real-time Widgets */}
                <div className="grid lg:grid-cols-3 gap-6 mt-12">
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-emerald-700 mb-4">Market Overview</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between"><span>S&P 500</span><span className="text-emerald-600">+1.24%</span></div>
                            <div className="flex justify-between"><span>NASDAQ</span><span className="text-emerald-600">+0.89%</span></div>
                            <div className="flex justify-between"><span>DOW</span><span className="text-red-600">-0.15%</span></div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-orange-700 mb-4">Crypto Prices</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between"><span>Bitcoin</span><span className="text-emerald-600">$42,350</span></div>
                            <div className="flex justify-between"><span>Ethereum</span><span className="text-emerald-600">$2,891</span></div>
                            <div className="flex justify-between"><span>Cardano</span><span className="text-red-600">$0.45</span></div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-blue-700 mb-4">Economic Indicators</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between"><span>USD/EUR</span><span>1.0842</span></div>
                            <div className="flex justify-between"><span>Gold</span><span className="text-emerald-600">$2,031</span></div>
                            <div className="flex justify-between"><span>Oil (WTI)</span><span className="text-red-600">$78.23</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialToolsPage;
