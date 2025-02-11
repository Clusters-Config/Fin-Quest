import React, { useState } from "react";

const activityData = [
  { id: 1, title: "Personal Finance Basics Course", type: "Course", skills: ["Finance", "Budgeting", "Investing"], link: "#" },
  { id: 2, title: "Entrepreneurship Bootcamp", type: "Bootcamp", skills: ["Business", "Startup", "Marketing"], link: "#" },
  { id: 3, title: "Start Your Own Business Challenge", type: "Competition", skills: ["Business", "Marketing", "Strategy"], link: "#" },
  { id: 4, title: "Stock Market Simulation", type: "Competition", skills: ["Finance", "Investing", "Stock Market"], link: "#" },
  { id: 5, title: "Social Media Marketing for Small Businesses", type: "Workshop", skills: ["Marketing", "Social Media", "Business"], link: "#" },
  { id: 6, title: "Building Your First Budget", type: "Course", skills: ["Finance", "Budgeting", "Planning"], link: "#" },
  { id: 7, title: "Financial Literacy for Teens", type: "Course", skills: ["Finance", "Money Management", "Saving"], link: "#" },
  { id: 8, title: "Startup Idea Pitch Competition", type: "Competition", skills: ["Entrepreneurship", "Pitching", "Business"], link: "#" },
  { id: 9, title: "Online Business Development for Students", type: "Workshop", skills: ["Business", "E-commerce", "Marketing"], link: "#" },
  { id: 10, title: "Investing 101 for Beginners", type: "Course", skills: ["Investing", "Stock Market", "Finance"], link: "#" },
];

const caseStudies = [
  {
    id: 1,
    name: "Rahul Sharma",
    story: "Started a small online clothing store using Shopify at age 16 and now runs a successful e-commerce business.",
    lessons: "Starting small and focusing on your target audience can help you build a strong foundation for a business.",
  },
  {
    id: 2,
    name: "Ananya Rao",
    story: "Won a startup pitch competition with an idea for a student-led tutoring platform, which led to a partnership with a local education center.",
    lessons: "Having a clear vision and being able to pitch it effectively is crucial to starting a business.",
  },
];

const SideHustleFinder = () => {
  const [skill, setSkill] = useState("");
  const [filteredActivities, setFilteredActivities] = useState(activityData);

  const handleSearch = () => {
    const results = activityData.filter((activity) =>
      activity.skills.some((s) => s.toLowerCase().includes(skill.toLowerCase()))
    );
    setFilteredActivities(results);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Student Financial & Business Opportunities 🚀</h2>

      {/* Input for Skill Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter your skill (e.g. Marketing, Finance)"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="p-3 w-full border rounded-md"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-3 mt-2 rounded-md w-full">
          Find Opportunities
        </button>
      </div>

      {/* Activity Listings */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Matching Opportunities</h3>
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <div key={activity.id} className="p-4 bg-white shadow-md rounded-md mb-3">
              <h4 className="text-lg font-semibold">{activity.title}</h4>
              <p className="text-sm text-gray-600">{activity.type}</p>
              <a href={activity.link} className="text-blue-500 underline">
                Learn More
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No opportunities found. Try another skill.</p>
        )}
      </div>

      {/* Case Studies */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3">Success Stories</h3>
        {caseStudies.map((caseStudy) => (
          <div key={caseStudy.id} className="p-4 bg-white shadow-md rounded-md mb-3">
            <h4 className="font-semibold">{caseStudy.name}</h4>
            <p>{caseStudy.story}</p>
            <p className="italic text-gray-500">Lesson: {caseStudy.lessons}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideHustleFinder;
