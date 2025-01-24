import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Learning_path2 from "./Learning_path2";

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
        { name: "Simple vs. Compound Interest", route: "/simple-vs-compound" },
        { name: "Impact on Loans", route: "/loans-impact" },
      ],
    },
    {
      id: 3,
      title: "Investment Basics",
      topics: [
        { name: "Mutual Funds", route: "/mutual-funds" },
        { name: "Stock Market", route: "/stock-market" },
      ],
    },
  ];

  return (
    <>
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
          <h2 className="ml-6 sm:ml-2 text-xl text-blue-900 font-bold">
            Progress Tracker
          </h2>
          <div className="bg-white py-6 mt-4 rounded-lg">
            <div className="bg-gray-300 rounded-full h-6 sm:h-7 my-2 mx-4 sm:mx-10">
              <div className="bg-green-600 h-6 sm:h-7 rounded-full w-9/12">
                <h3 className="text-center text-white text-xs sm:text-sm pt-1">
                  70% Completed
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Timeline */}
        <div>
          <h1 className="ml-6 sm:ml-2 mt-12 text-xl text-blue-900 font-bold">
            Learning Timeline
          </h1>
          <div className="bg-white w-full max-w-6xl mx-auto rounded-xl mt-6 pb-6 shadow-md">
            {timelineData.map((section) => (
              <div
                key={section.id}
                className="border border-gray-300 rounded-lg mt-4 p-4"
              >
                {/* Section Header */}
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleToggle(section.id)}
                >
                  <div
                    className={`w-9 h-9 ${
                      openSection === section.id ? "bg-blue-600" : "bg-gray-600"
                    } rounded-full mx-6`}
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
                        <span className="font-bold">--</span>  {topic.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Learning_path2 />
      </div>
    </>
  );
};

export default Learning_paths;