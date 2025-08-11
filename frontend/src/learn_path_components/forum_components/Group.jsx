import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  BookOpenIcon,
  VideoIcon,
  FileTextIcon,
  BarChart2Icon,
  DownloadIcon,
  BookmarkIcon,
  UsersIcon,
  CalendarIcon,
} from "lucide-react";

const groupDetails = {
  title: "Investment Strategies",
  description:
    "Learn and discuss various investment approaches and portfolio management techniques",
  tags: ["1,247 members", "Intermediate", "Investing"],
};

const materials = [
  {
    id: 1,
    type: "article",
    icon: <BookOpenIcon size={16} />,
    title: "Portfolio Diversification Strategies",
    description: "Learn how to build a balanced investment portfolio",
    author: "Sarah Johnson",
    duration: "8 min read",
  },
  {
    id: 2,
    type: "video",
    icon: <VideoIcon size={16} />,
    title: "Market Analysis Techniques",
    description: "Video tutorial on technical and fundamental analysis",
    author: "Mike Chen",
    duration: "45 min",
  },
  {
    id: 3,
    type: "document",
    icon: <FileTextIcon size={16} />,
    title: "Risk Assessment Framework",
    description: "Comprehensive guide to evaluating investment risks",
    author: "Emma Davis",
    duration: "24 pages",
  },
  {
    id: 4,
    type: "chart",
    icon: <BarChart2Icon size={16} />,
    title: "Market Trends Q1 2024",
    description: "Visual analysis of recent market performance",
    author: "David Park",
    duration: "8 charts",
  },
];

const events = [
  {
    id: 1,
    type: "Webinar",
    title: "Market Outlook 2024",
    presenter: "Dr. Rachel Smith",
    date: "Dec 15, 2024",
    time: "2:00 PM EST",
  },
  {
    id: 2,
    type: "Live Session",
    title: "Portfolio Review Session",
    presenter: "Financial Advisors Panel",
    date: "Dec 18, 2024",
    time: "7:00 PM EST",
  },
];

const GroupPage = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Materials");

  return (
    <div className="min-h-screen bg-[#f5f9f6] text-foreground px-6 py-8">
      <button
        onClick={() => navigate("/ForumPage")}
        className="text-sm text-muted-foreground mb-4"
      >
        ← Back to Forum
      </button>

      <div className="flex justify-between items-start flex-wrap md:flex-nowrap gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-[#1a1a1a]">
            {groupDetails.title}
          </h1>
          <p className="text-muted-foreground mb-3 max-w-2xl">
            {groupDetails.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {groupDetails.tags.map((tag, index) => (
              <span
                key={index}
                className={`${
                  index === 0
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                } text-sm px-3 py-1 rounded-full font-medium`}
              >
                {index === 0 && (
                  <UsersIcon size={14} className="inline mr-1" />
                )}{" "}
                {tag}
              </span>
            ))}
          </div>
        </div>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600"
          onClick={() => navigate("/ForumPage")}
        >
          Leave Group
        </button>
      </div>

      <div className="flex gap-4 border-b text-muted-foreground text-sm font-medium mb-6">
        {["Materials", "Events", "Members"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              if (tab === "Members") {
                navigate("/Experts");
              } else {
                setActiveTab(tab);
              }
            }}
            className={`pb-2 px-1 border-b-2 transition-all duration-200 ${
              activeTab === tab
                ? "border-blue-600 text-foreground"
                : "border-transparent hover:border-muted-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Materials" && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-md transition border"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  {item.icon} {item.type}
                </span>
                <button className="hover:text-blue-600">
                  <BookmarkIcon size={16} /> Save
                </button>
              </div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-muted-foreground mb-2 text-sm">
                {item.description}
              </p>
              <p className="text-sm text-muted-foreground">
                By {item.author} • {item.duration}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Events" && (
        <div className="flex flex-wrap gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-1 min-w-[300px] max-w-[48%] bg-white p-4 rounded-xl shadow hover:shadow-md transition border"
            >
              <div className="flex justify-between mb-2">
                <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  {event.type}
                </span>
                <CalendarIcon size={16} />
              </div>
              <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Presented by {event.presenter}
              </p>
              <div className="flex text-sm text-muted-foreground gap-4 mb-4">
                <span>📅 {event.date}</span>
                <span>🕑 {event.time}</span>
              </div>
              <button className="w-full bg-blue-900 text-white py-2 rounded-md font-medium hover:bg-blue-800">
                Register for Event
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GroupPage;
