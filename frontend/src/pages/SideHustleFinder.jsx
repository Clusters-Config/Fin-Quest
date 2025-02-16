import React, { useState } from "react";

// Sample activity data
const activityData = [
  { id: 1, title: "Personal Finance Basics Course", type: "Course", skills: ["Finance", "Budgeting", "Investing"], link: "#", category: "Maths & Biology" },
  { id: 2, title: "Entrepreneurship Bootcamp", type: "Bootcamp", skills: ["Business", "Startup", "Marketing"], link: "#", category: "Arts & Science" },
  { id: 3, title: "Start Your Own Business Challenge", type: "Competition", skills: ["Business", "Marketing", "Strategy"], link: "#", category: "Arts & Science" },
  { id: 4, title: "Stock Market Simulation", type: "Competition", skills: ["Finance", "Investing", "Stock Market"], link: "#", category: "Maths & Biology" },
  { id: 5, title: "Social Media Marketing for Small Businesses", type: "Workshop", skills: ["Marketing", "Social Media", "Business"], link: "#", category: "Arts & Science" },
  { id: 6, title: "Building Your First Budget", type: "Course", skills: ["Finance", "Budgeting", "Planning"], link: "#", category: "Maths & Biology" },
  { id: 7, title: "Financial Literacy for Teens", type: "Course", skills: ["Finance", "Money Management", "Saving"], link: "#", category: "Maths & Computer" },
  { id: 8, title: "Startup Idea Pitch Competition", type: "Competition", skills: ["Entrepreneurship", "Pitching", "Business"], link: "#", category: "Arts & Science" },
  { id: 9, title: "Online Business Development for Students", type: "Workshop", skills: ["Business", "E-commerce", "Marketing"], link: "#", category: "Arts & Science" },
  { id: 10, title: "Investing 101 for Beginners", type: "Course", skills: ["Investing", "Stock Market", "Finance"], link: "#", category: "Maths & Biology" },
  { id: 11, title: "Introduction to Coding with Python", type: "Course", skills: ["Programming", "Python", "Problem Solving"], link: "#", category: "Maths & Computer" },
  { id: 12, title: "Hackathon: Build Your First App", type: "Competition", skills: ["Programming", "App Development", "Teamwork"], link: "#", category: "Maths & Computer" },
];

// Sample case study data
const caseStudies = [
  { id: 1, name: "Rahul Sharma", story: "Started a small online clothing store using Shopify at age 16 and now runs a successful e-commerce business.", lessons: "Starting small and focusing on your target audience can help you build a strong foundation for a business." },
  { id: 2, name: "Ananya Rao", story: "Won a startup pitch competition with an idea for a student-led tutoring platform, which led to a partnership with a local education center.", lessons: "Having a clear vision and being able to pitch it effectively is crucial to starting a business." },
];

const SideHustleFinder = () => {
  const [selectedCategory, setSelectedCategory] = useState("Maths & Biology");
  const [filteredActivities, setFilteredActivities] = useState(
    activityData.filter((activity) => activity.category === selectedCategory)
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFilteredActivities(activityData.filter((activity) => activity.category === category));
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4]"> 
      {/* Main Content */}
      <div className="p-6">
        <h2 className="text-4xl font-bold text-[#002147] text-center mb-8">Student Financial & Business Opportunities 🚀</h2>

        {/* Category Buttons */}
        <div className="flex justify-center space-x-8 mb-8">
          {["Maths & Biology", "Maths & Computer", "Arts & Science"].map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`p-3 rounded-lg text-white transition duration-300 ease-in-out hover:bg-[#F39C12] ${
                selectedCategory === category ? "bg-[#002147]" : "bg-[#6C757D]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Activity Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300 ease-in-out"
              >
                <h4 className="text-lg font-semibold text-[#002147]">{activity.title}</h4>
                <p className="text-sm text-[#6C757D]">{activity.type}</p>
                <a href={activity.link} className="text-[#F39C12] hover:underline mt-2 block">
                  Learn More
                </a>
              </div>
            ))
          ) : (
            <p className="text-[#6C757D]">No opportunities found. Try another category.</p>
          )}
        </div>

        {/* Case Studies Section */}
        <div className="mt-12 bg-[#F8FAFC] p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#002147] mb-6">Success Stories</h3>
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-lg shadow-lg mb-6"
            >
              <h4 className="text-lg font-semibold text-[#002147]">{caseStudy.name}</h4>
              <p className="text-[#6C757D]">{caseStudy.story}</p>
              <p className="italic text-[#6C757D]">Lesson: {caseStudy.lessons}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#002147] text-white text-center p-4 mt-12">
        <p>&copy; 2025 Fin-Quest. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SideHustleFinder;
