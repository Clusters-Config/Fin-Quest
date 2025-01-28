import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Learning_paths = () => {
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();

  const handleToggle = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const handleTopicClick = (route) => {
    navigate(route);
  };

  const timelineData = [
    {
      id: 1,
      title: "Basic Financial Concepts",
      topics: [
        { name: "Saving Essentials", route: "/Saving_Essentials" },
        { name: "Budgeting Basics", route: "/Budgeting_Basics" },
      ],
    },
    {
      id: 2,
      title: "Understanding Interest Rates",
      topics: [
        { name: "Simple vs. Compound Interest", route: "/SimpleVsCompoundInterest" },
        { name: "Impact on Loans", route: "/LoanImpacts" },
      ],
    },
    {
      id: 3,
      title: "Investment Basics",
      topics: [
        { name: "Mutual Funds", route: "/MutualFundEssentials" },
        { name: "Stock Market", route: "/StockMarketBasics" },
      ],
    },
  ];

  // Peer-to-Peer Collaboration section
  const [discussion, setDiscussion] = useState("");
  const [discussions, setDiscussions] = useState([]);
  const [studyGroups, setStudyGroups] = useState([]);

  const handlePostDiscussion = () => {
    if (discussion.trim()) {
      setDiscussions([...discussions, discussion]);
      setDiscussion("");
    }
  };

  const handleJoinGroup = (groupRoute) => {
    // Navigate to the group page
    navigate(groupRoute);
  };

  const sampleGroups = [
    { name: "Dive In", route: "/ForumPage" },
    // { name: "Group 2: Investment", route: "/group2-investment" },
    // { name: "Group 3: Interest Rates", route: "/group3-interest-rates" },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-10">
      {/* Header Section */}
      <div>
        <h1 className="text-center text-2xl sm:text-xl mt-8 text-purple-800 font-extrabold">
          Your Personalized Learning Path
        </h1>
        <p className="text-center text-sm sm:text-base mt-3">
          Embark on a journey designed to make you a financial expert, step by step!
        </p>
      </div>

      {/* Progress Tracker */}
      <div className="my-10">
        <h2 className="ml-6 sm:ml-2 text-xl text-blue-900 font-bold">Progress Tracker</h2>
        <div className="bg-white py-6 mt-4 rounded-lg">
          <div className="bg-gray-300 rounded-full h-6 sm:h-7 my-2 mx-4 sm:mx-10">
            <div className="bg-green-600 h-6 sm:h-7 rounded-full w-9/12">
              <h3 className="text-center text-white text-xs sm:text-sm pt-1">70% Completed</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Timeline */}
      <div>
        <h1 className="ml-6 sm:ml-2 mt-12 text-xl text-blue-900 font-bold">Learning Timeline</h1>
        <div className="bg-white w-full max-w-6xl mx-auto rounded-xl mt-6 pb-6 shadow-md">
          {timelineData.map((section) => (
            <div key={section.id} className="border border-gray-300 rounded-lg mt-4 p-4">
              {/* Section Header */}
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleToggle(section.id)}
              >
                <div
                  className={`w-9 h-9 ${openSection === section.id ? "bg-blue-600" : "bg-gray-600"} rounded-full mx-6`}
                >
                  <h1 className="py-1 text-white text-center">{section.id}</h1>
                </div>
                <div className="ml-4">
                  <h1 className="text-lg font-extrabold">{section.title}</h1>
                </div>
              </div>

              {/* Subtopics Dropdown */}
              {openSection === section.id && (
                <div className="ml-16 mt-4">
                  {section.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="cursor-pointer text-lg text-black hover:text-blue-800 mt-2"
                      onClick={() => handleTopicClick(topic.route)}
                    >
                      <span className="font-bold">--</span> {topic.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Peer-to-Peer Learning Section */}
      <h1 className="ml-6 sm:ml-2 mt-12 text-xl text-blue-900 font-bold">Peer-to-Peer Learning & Collaboration</h1>
      <div className="bg-white w-full max-w-6xl mx-auto rounded-xl mt-6 pb-6 shadow-md">
        <div className="border border-gray-300 rounded-lg mt-4 p-4">
          {/* Study Groups Section */}
          <h2 className="text-lg font-bold">Engage With Peers</h2>
          <div className="mt-4 space-y-4">
            {sampleGroups.map((group, index) => (
              <button
                key={index}
                className="bg-blue-800 text-white px-4 py-2 rounded-md w-full"
                onClick={() => handleJoinGroup(group.route)}
              >
                {group.name}
              </button>
            ))}
          </div>

          {/* Discussion Section */}
          <div className="mt-8">
            <h2 className="text-lg font-bold">Discussion Board</h2>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md mt-4"
              rows="4"
              placeholder="Post your thoughts or questions here..."
              value={discussion}
              onChange={(e) => setDiscussion(e.target.value)}
            />
            <button
              onClick={handlePostDiscussion}
              className="bg-green-600 text-white px-4 py-2 rounded-md mt-4"
            >
              Post Discussion
            </button>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-blue-800">Comments</h3>
              <div className="mt-4">
                {discussions.map((comment, idx) => (
                  <p key={idx} className="text-sm text-gray-700">
                    * {comment}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning_paths;
