import React from "react";
import { useNavigate } from "react-router-dom";

const Experts = () => {
    const navigate = useNavigate();

    const experts = [
        {
            initials: "DJW",
            name: "Dr. James Wilson",
            title: "CFA, Portfolio Manager",
            expertise: "Equity Research, Portfolio Management",
            rating: 4.9,
            sessions: 127,
            available: true,
        },
        {
            initials: "MS",
            name: "Maria Santos",
            title: "Senior Investment Analyst",
            expertise: "Fixed Income, Risk Assessment",
            rating: 4.8,
            sessions: 89,
            available: false,
        },
        {
            initials: "AC",
            name: "Alex Chen",
            title: "Fintech Entrepreneur",
            expertise: "Blockchain, Digital Banking",
            rating: 4.7,
            sessions: 156,
            available: true,
        },
        {
            initials: "LT",
            name: "Laura Thompson",
            title: "Chartered Market Technician",
            expertise: "Technical Analysis, Market Trends",
            rating: 4.6,
            sessions: 102,
            available: true,
        },
        {
            initials: "RK",
            name: "Rajesh Kumar",
            title: "CFO, FinEdge Corp",
            expertise: "Corporate Finance, Strategic Planning",
            rating: 4.8,
            sessions: 95,
            available: false,
        },
        {
            initials: "EM",
            name: "Emily Martinez",
            title: "Financial Coach",
            expertise: "Personal Finance, Wealth Management",
            rating: 4.9,
            sessions: 134,
            available: true,
        },
        {
            initials: "HB",
            name: "Harold Becker",
            title: "Economist, World Insights",
            expertise: "Macroeconomics, Global Markets",
            rating: 4.7,
            sessions: 88,
            available: true,
        },
        {
            initials: "YS",
            name: "Yuki Sato",
            title: "Quantitative Analyst",
            expertise: "Data Modeling, Derivatives",
            rating: 4.5,
            sessions: 76,
            available: false,
        },
        {
            initials: "RS",
            name: "Ravi Shah",
            title: "Investment Strategist",
            expertise: "Asset Allocation, Global Markets",
            rating: 4.6,
            sessions: 98,
            available: true,
        },
        {
            initials: "LT",
            name: "Linda Thompson",
            title: "Certified Financial Planner",
            expertise: "Wealth Management, Retirement Planning",
            rating: 4.9,
            sessions: 142,
            available: false,
        },

    ];

    return (
        <div className="font-sans bg-white min-h-screen">
            {/* Header */}
            <header className="text-center py-10">
                <h1 className="text-2xl font-bold mb-1">Finance Forum</h1>
                <p className="text-sm text-gray-500">
                    Professional peer-to-peer collaboration platform for finance
                    enthusiasts
                </p>
            </header>

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

            {/* Stats */}
            <div className="flex gap-10 justify-center mb-6 text-sm">
                <div>
                    <p className="text-gray-400 uppercase">Active Members</p>
                    <p className="text-xl font-bold text-blue-900">7,352</p>
                </div>
                <div>
                    <p className="text-gray-400 uppercase">Live Discussions</p>
                    <p className="text-xl font-bold text-green-600">24</p>
                </div>
            </div>

            {/* Expert Cards */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
                {experts.map((expert, index) => (
                    <div
                        key={index}
                        className="border rounded-lg p-6 w-80 text-center shadow-sm"
                    >
                        <div className="mx-auto mb-4 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                            {expert.initials}
                        </div>
                        <h3 className="text-base font-semibold text-gray-900">
                            {expert.name}
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">{expert.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{expert.expertise}</p>
                        <div className="flex justify-center items-center mt-2 text-sm">
                            <span className="text-yellow-500">★</span>
                            <span className="ml-1 text-gray-700">{expert.rating}</span>
                            <span className="ml-2 text-gray-400">
                                {expert.sessions} sessions
                            </span>
                        </div>
                        <div
                            className={`mt-2 text-sm ${expert.available ? "text-green-600" : "text-red-600"
                                }`}
                        >
                            {expert.available ? "Available" : "Busy"}
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <button
                                className={`w-full py-2 text-sm font-medium rounded ${expert.available
                                        ? "bg-blue-900 text-white hover:bg-blue-800"
                                        : "bg-gray-300 text-white cursor-not-allowed"
                                    }`}
                                disabled={!expert.available}
                            >
                                Book Session
                            </button>
                            <button className="w-full py-2 text-sm border border-gray-400 rounded hover:bg-blue-900 hover:text-white">
                                Message
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experts;
