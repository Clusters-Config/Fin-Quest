import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Icon for the profile
import axios from "axios";

const Learning_paths = () => {
  const [openSection, setOpenSection] = useState({}); // Track opened sections by category
  const [username, setusername] = useState("");
  const [uusername, setuusername] = useState("");
  const [email, setemail] = useState("");
  const [progress, setprogress] = useState();

  const navigate = useNavigate();

  const handleToggle = (category, sectionId) => {
    setOpenSection(prevState => ({
      ...prevState,
      [category]: prevState[category] === sectionId ? null : sectionId,
    }));
  };

  const handleTopicClick = (route) => {
    navigate(route);
  };

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:4047/verify").then((res) => {
      setuusername(res.data.username);
    });
  }, []);

  useEffect(() => {
    setusername(uusername);
  }, [uusername]);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:4047/verify").then((res) => {
      setemail(res.data.email);
    });
  }, []);

  useEffect(() => {
    axios.post("http://localhost:4047/finduserlearning", { email }).then((res) => {
      setprogress(res.data.module[0].mod1.path1);
    });
  }, [email]);

  // Timeline Data with Categories (Accounting and Finance)
  const timelineData = [
    {
      category: "Accounting Essentials",
      modules: [
        {
          id: 1,
          title: "Accounting for Beginners: Key Terms & Transactions",
          topics: [
            { name: "Accounting Glossary", route: "/TerminologyPage" },
            { name: "The Concepts Of ‘DEBIT’ AND ‘CREDIT’", route: "/Credit_Debit" },
          ],
        },
        {
          id: 2,
          title: "Fundamentals of Accounting",
          topics: [
            { name: "Accounting Overview", route: "/Accounting" },
            { name: "Pillars of Accounting", route: "/Pillars_Of_Accounting" },
          ],
        },
      ],
    },
    {
      category: "Finance Essentials",
      modules: [
        {
          id: 1,
          title: "Basic Financial Concepts",
          topics: [
            { name: "Finance Principles", route: "/Finance_Principles" },
            { name: "Goal Of Financial Management", route: "/Goals_Finance" },
          ],
        },
        {
          id: 2,
          title: "Practical Finance: Saving & Budgeting",
          topics: [
            { name: "Saving Essentials", route: "/Saving_Essentials" },
            { name: "Budgeting Basics", route: "/Budgeting_Basics" },
          ],
        },
        {
          id: 3,
          title: "Understanding Interest Rates",
          topics: [
            { name: "Simple vs. Compound Interest", route: "/SimpleVsCompoundInterest" },
            { name: "Impact on Loans", route: "/LoanImpacts" },
          ],
        },
        {
          id: 4,
          title: "Investment Basics",
          topics: [
            { name: "Deposit plans", route: "/DepositEssentials" },
            { name: "Mutual Funds", route: "/MutualFundEssentials" },
            { name: "Stock Market", route: "/StockMarketBasics" },
          ],
        },
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
    navigate(groupRoute);
  };

  const sampleGroups = [
    { name: "Dive In", route: "/ForumPage" },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-10">
      {/* Navbar */}
      <nav className="bg-[#002147] p-4 w-full fixed top-0 left-0 z-10 flex justify-between items-center">
        <h1 className="text-white text-lg font-extrabold">Learning Hub</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/ProfilePage")}
            className="text-white text-2xl"
          >
            <FaUserCircle />
          </button>
        </div>
      </nav>

      {/* Header Section */}
      <div className="mt-16">
        <h1 className="text-center text-2xl sm:text-xl mt-10 pt-10 text-[#002147] font-extrabold">
          {username.toUpperCase()}'s Learning Path
        </h1>
        <p className="text-center text-sm sm:text-base mt-3 text-[#6C757D]">
          Embark on a journey designed to make you a financial expert, step by step!
        </p>
      </div>

      {/* Progress Tracker */}
      <div className="my-10">
        <h2 className="ml-6 sm:ml-2 text-xl text-[#002147] font-bold">Progress Tracker</h2>
        <div className="bg-white py-6 mt-4 rounded-lg">
          <div className="bg-[#F4F4F4] rounded-full h-6 sm:h-7 my-2 mx-4 sm:mx-10">
            <div className="bg-[#F39C12] h-6 sm:h-7 rounded-full w-9/12">
              <h3 className="text-center text-white text-xs sm:text-sm pt-1">70% Completed</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Timeline */}
      <div>
        <h1 className="ml-6 sm:ml-2 mt-12 text-xl text-[#002147] font-bold">Learning Timeline</h1>
        <div className="bg-white w-full max-w-6xl mx-auto rounded-xl mt-6 pb-6 shadow-md">
          {timelineData.map((category) => (
            <div key={category.category} className="border border-[#6C757D] rounded-lg mt-4 p-4">
              {/* Category Header */}
              <h2 className="text-xl text-[#002147] font-extrabold">{category.category}</h2>
              {category.modules.map((section) => (
                <div key={section.id} className="mt-4">
                  {/* Section Header */}
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => handleToggle(category.category, section.id)}
                  >
                    <div
                      className={`w-9 h-9 ${openSection[category.category] === section.id ? "bg-[#002147]" : "bg-[#6C757D]"} rounded-full mx-6`}
                    >
                      <h1 className="py-1 text-white text-center">{section.id}</h1>
                    </div>
                    <div className="ml-4">
                      <h1 className="text-lg font-extrabold text-[#002147]">{section.title}</h1>
                    </div>
                  </div>

                  {/* Subtopics Dropdown */}
                  {openSection[category.category] === section.id && (
                    <div className="ml-16 mt-4">
                      {section.topics.map((topic, idx) => (
                        <div
                          key={idx}
                          className="cursor-pointer text-lg text-[#002147] hover:text-[#F39C12] mt-2"
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
          ))}
        </div>
      </div>

      {/* Peer-to-Peer Learning Section */}
      <h1 className="ml-6 sm:ml-2 mt-12 text-xl text-[#002147] font-bold">Peer-to-Peer Learning & Collaboration</h1>
      <div className="bg-white w-full max-w-6xl mx-auto rounded-xl mt-6 pb-6 shadow-md">
        <div className="border border-[#6C757D] rounded-lg mt-4 p-4">
          {/* Study Groups Section */}
          <h2 className="text-lg font-bold text-[#002147]">Engage With Peers</h2>
          <div className="mt-4 space-y-4">
            {sampleGroups.map((group, index) => (
              <button
                key={index}
                className="bg-[#002147] text-white px-4 py-2 rounded-md w-full hover:bg-[#F39C12]"
                onClick={() => handleJoinGroup(group.route)}
              >
                {group.name}
              </button>
            ))}
          </div>

          {/* Discussion Section */}
          <div className="mt-8">
            <h2 className="text-lg font-bold text-[#002147]">Discussion Board</h2>
            <textarea
              className="w-full p-2 border border-[#6C757D] rounded-md mt-4"
              rows="4"
              placeholder="Post your thoughts or questions here..."
              value={discussion}
              onChange={(e) => setDiscussion(e.target.value)}
            />
            <button
              onClick={handlePostDiscussion}
              className="bg-[#F39C12] text-[#002147] px-4 py-2 rounded-md mt-4"
            >
              Post Discussion
            </button>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[#002147]">Comments</h3>
              <div className="mt-4">
                {discussions.map((comment, idx) => (
                  <p key={idx} className="text-sm text-[#6C757D]">
                    * {comment}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#002147] text-white py-4 px-6 text-center mt-10 w-full">
        <p className="text-sm mt-2">&copy; 2025 Fin-Quest. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Learning_paths;
