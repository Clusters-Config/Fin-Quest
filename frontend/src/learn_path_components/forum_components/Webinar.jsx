// Webinars Page – Redesigned to Match Reference UI
import React from "react";
import { FaCalendarAlt, FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const webinars = [
    {
        title: "Advanced Options Trading Strategies",
        speaker: "Sarah Chen, CFA",
        date: "2024-08-15",
        time: "2:00 PM EST",
        attendees: 234,
        tag: "Live",
    },
    {
        title: "Crypto Portfolio Diversification",
        speaker: "Mike Rodriguez",
        date: "2024-08-18",
        time: "4:00 PM EST",
        attendees: 189,
        tag: "Live",
    },
    {
        title: "ESG Investing Fundamentals",
        speaker: "Dr. Emily Watson",
        date: "2024-08-22",
        time: "1:00 PM EST",
        attendees: 156,
        tag: "Workshop",
    },
];

const recordings = [
    {
        title: "Cryptocurrency Market Analysis",
    },
    {
        title: "Personal Finance Masterclass",
        highlight: true,
    },
    {
        title: "Trading Psychology Workshop",
    },
];

const Webinars = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen px-4 py-10 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-2">
                <h1 className="text-3xl font-bold text-blue-900">Finance Forum</h1>
                <p className="text-sm text-gray-500">
                    Professional peer-to-peer collaboration platform for finance enthusiasts
                </p>
            </div>

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

            {/* Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Upcoming Webinars */}
                <div className="bg-white border rounded-lg p-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <span>📅</span> Upcoming Live Sessions
                    </h2>
                    <div className="space-y-4">
                        {webinars.map((session, index) => (
                            <div
                                key={index}
                                className="border rounded-md p-4 hover:shadow transition"
                            >
                                <h3 className="font-semibold text-gray-900 mb-1">
                                    {session.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-1">{session.speaker}</p>
                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                    <span className="flex items-center gap-1">
                                        <FaCalendarAlt /> {session.date}
                                    </span>
                                    <span>{session.time}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-600">
                                        {session.attendees} registered
                                    </span>
                                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                                        {session.tag}
                                    </span>
                                </div>
                                <button className="mt-3 w-full py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition text-sm">
                                    RSVP Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Recordings */}
                <div className="bg-white border rounded-lg p-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <span>▶️</span> Recent Recordings
                    </h2>
                    <div className="space-y-3">
                        {recordings.map((rec, idx) => (
                            <div
                                key={idx}
                                className={`p-4 rounded-md border flex justify-between items-center cursor-pointer hover:shadow transition text-sm ${rec.highlight ? "bg-yellow-100" : ""
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <FaPlayCircle className="text-gray-500" />
                                    <div>
                                        <p className="text-gray-900 font-medium">{rec.title}</p>
                                        <p className="text-gray-500 text-xs">2 hours • 1.2k views</p>
                                    </div>
                                </div>
                                <span className="text-xs">↗</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Webinars;
