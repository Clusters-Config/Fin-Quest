import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Icon for the profile
import axios, { all } from "axios";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Parentheses } from "lucide-react";
import { element } from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
//import { FaUserCircle } from "react-icons/fa";
import { BookOpen } from "lucide-react";
import logo from "../assets/fin-logo.jpg"; // FinQuest Logo
import { Youtube, Twitter, Linkedin } from "lucide-react";




const Learning_paths = () => {
  const [openSection, setOpenSection] = useState({}); // Track opened sections by category
  const [username, setusername] = useState("null");
  const [uusername, setuusername] = useState("");
  const [email, setemail] = useState("");
  const [progress, setprogress] = useState(0);

  // const [modules, setModules] = useState([
  //     { name: "Module 1: Basic Terminologies", progress: Terminologies },
  //     { name: "Module 2: Fundamentals of Accounting", progress: 95 },
  //     { name: "Module 3: Basic Financial Concepts", progress: 30 },
  //     { name: "Module 4: Understanding Interest Rates", progress: 10 },
  //     { name: "Module 5: Investment Basics", progress: 0 },
  //   ]);

  const [Accounting1, setAccounting1] = useState();
  const [Accounting2, setAccounting2] = useState();
  const [Accounting, setAccounting] = useState();
  const [FAccounting1, setFAccounting1] = useState();
  const [FAccounting2, setFAccounting2] = useState();
  const [FAccounting, setFAccounting] = useState();
  const [Financial1, setFinancial1] = useState();
  const [Financial2, setFinancial2] = useState();
  const [Financial, setFinancial] = useState();
  const [Saving1, setSaving1] = useState();
  const [Saving2, setSaving2] = useState();
  const [Saving, setSaving] = useState();
  const [Interest1, setInterest1] = useState();
  const [Interest2, setInterest2] = useState();
  const [Interest, setInterest] = useState();
  const [Investment1, setInvestment1] = useState();
  const [Investment2, setInvestment2] = useState();
  const [Investment3, setInvestment3] = useState();
  const [Investment, setInvestment] = useState();
  const [discussion, setDiscussion] = useState("");
  const [discussions, setDiscussions] = useState([]);
  const [studyGroups, setStudyGroups] = useState([]);
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:4047/finduserlearning").then((res) => { });
  });

  const navigate = useNavigate();

  const handleToggle = (category, sectionId) => {
    setOpenSection((prevState) => ({
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
  });

  useEffect(() => {
    setusername(uusername);
  }, [uusername]);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:4047/verify").then((res) => {
      setemail(res.data.email);
    });
  });

  useEffect(() => {
    axios
      .post("http://localhost:4047/finduserlearning", { email })
      .then((res) => {
        setAccounting1(res?.data?.accouting[0]?.mod1.path1);
        setAccounting2(res?.data?.accouting[0]?.mod1.path2);
        setFAccounting1(res?.data?.accouting[0]?.mod2.path1);
        setFAccounting2(res?.data?.accouting[0]?.mod2.path2);
        setFinancial1(res?.data?.finance[0]?.mod1.path1);
        setFinancial2(res?.data?.finance[0]?.mod1.path2);
        setSaving1(res?.data?.finance[0]?.mod2.path1);
        setSaving2(res?.data?.finance[0]?.mod2.path2);
        setInterest1(res?.data?.finance[0]?.mod3.path1);
        setInterest2(res?.data?.finance[0]?.mod3.path2);
        setInvestment1(res?.data?.finance[0]?.mod4.path1);
        setInvestment2(res?.data?.finance[0]?.mod4.path2);
        setInvestment3(res?.data?.finance[0]?.mod4.path3);
      });
  });

  useEffect(() => {
    if (Accounting1 >= 70 && Accounting2 >= 70) {
      setAccounting(100);
    } else if (Accounting1 >= 70 || Accounting2 >= 70) {
      setAccounting(50);
    } else {
      setAccounting(0);
    }

    if (FAccounting1 >= 70 && FAccounting2 >= 70) {
      setFAccounting(100);
    } else if (FAccounting1 >= 70 || FAccounting2 >= 70) {
      setFAccounting(50);
    } else {
      setFAccounting(0);
    }

    if (Financial1 >= 70 && Financial2 >= 70) {
      setFinancial(100);
    } else if (Financial1 >= 70 || Financial2 >= 70) {
      setFinancial(50);
    } else {
      setFinancial(0);
    }

    if (Saving1 >= 70 && Saving2 >= 70) {
      setSaving(100);
    } else if (Saving1 >= 70 || Saving2 >= 70) {
      setSaving(50);
    } else {
      setSaving(0);
    }

    if (Interest1 >= 70 && Interest2 >= 70) {
      setInterest(100);
    } else if (Interest1 >= 70 || Interest2 >= 70) {
      setInterest(50);
    } else {
      setInterest(0);
    }

    if (Investment1 >= 70 && Investment2 >= 70 && Investment3 >= 70) {
      setInvestment(100);
    } else if (Investment1 >= 70 && Investment2 >= 70) {
      setInvestment(66);
    } else if (Investment1 >= 70 && Investment3 >= 70) {
      setInvestment(66);
    } else if (Investment2 >= 70 && Investment3 >= 70) {
      setInvestment(66);
    } else if (Investment2 >= 70 || Investment3 >= 70 || Investment1 >= 70) {
      setInvestment(33);
    } else {
      setInvestment(0);
    }
  });

  useEffect(() => {
    setprogress(
      Math.floor(
        (Accounting +
          FAccounting +
          Financial +
          Saving +
          Interest +
          Investment) /
        6
      )
    );
  });

  // useEffect(() => {

  //   setprogress(0)
  //   console.log(progress)
  // }, [progress])

  useEffect(() => {
    axios.get("http://localhost:4047/finddiscussion")
      .then(res => {
        let path = res.data
        let data = path.map((element) => {
          return ({
            email: element.comment,
            username: element.username
          })
        })
        setdata(data)


      })
  })


  // Timeline Data with Categories (Accounting and Finance)
  const timelineData = [
    {
      category: "Accounting Essentials",
      modules: [
        {
          id: 1,
          level: "Beginner",

          title: `Accounting for Beginners: Key Terms & Transactions `,
          duration: 2,
          rating: 4.8,
          progress: 50,
          topics: [
            { name: "Accounting Glossary", route: "/TerminologyPage" },
            {
              name: "The Concepts Of ‘DEBIT’ AND ‘CREDIT’",
              route: "/Credit_Debit",
            },
          ],
        },
        {
          id: 2,
          level: "Intermediate",
          duration: 3,
          rating: 4.4,
          progress: 65,
          title: `Fundamentals of Accounting `,
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
          level: "Intermediate",
          duration: 3,
          rating: 4.6,
          progress: 45,
          title: "Basic Financial Concepts",
          topics: [
            { name: "Finance Principles", route: "/Finance_Principles" },
            { name: "Goal Of Financial Management", route: "/Goals_Finance" },
          ],
        },
        {
          id: 2,
          level: "Beginner",
          duration: 3,
          rating: 4.4,
          progress: 55,
          title: "Practical Finance: Saving & Budgeting",
          topics: [
            { name: "Saving Essentials", route: "/Saving_Essentials" },
            { name: "Budgeting Basics", route: "/Budgeting_Basics" },
          ],
        },
        {
          id: 3,
          level: "Intermediate",
          duration: 3,
          rating: 4.3,
          progress: 35,
          title: "Understanding Interest Rates",
          topics: [
            {
              name: "Simple vs. Compound Interest",
              route: "/SimpleVsCompoundInterest",
            },
            { name: "Impact on Loans", route: "/LoanImpacts" },
          ],
        },
        {
          id: 4,
          level: "Intermediate",
          duration: 3,
          rating: 3.6,
          progress: 25,
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


  const handlePostDiscussion = () => {
    axios.post("http://localhost:4047/discussion", { email, discussion, username })
      .then()
      .catch((err) => {
        console.log(err)
      })
    if (discussion.trim()) {
      setDiscussions([...discussions, discussion]);
      setDiscussion("");
    }
  };

  const handleJoinGroup = (groupRoute) => {
    navigate(groupRoute);
  };

  //const sampleGroups = [{ name: "Dive In", route: "/ForumPage" }];
  const sampleGroups = [
    { name: "Investment Banking Basics", members: 28, route: "/Group" },
    { name: "Personal Finance 101", members: 45, route: "/ForumPage" },
    { name: "Cryptocurrency & DeFi", members: 32, route: "/ForumPage" },
    { name: "Financial Planning", members: 19, route: "/ForumPage" },
    { name: "Stock Market Analysis", members: 56, route: "/ForumPage" },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-10">
      <div className="w-screen bg-gradient-to-r from-[#002147] to-[#003366] py-12 relative right-10">
        {/* Profile Button */}
        <div className="absolute top-4 right-6 z-10">
          <button
            onClick={() => navigate("/ProfilePage")}
            className="text-white text-3xl"
          >
            <FaUserCircle />
          </button>
        </div>

        {/* Centered Content */}
        <div className="text-center text-white px-4">
          <BookOpen className="w-16 h-16 mx-auto mb-4 animate-bounce" />
          <h1 className="text-4xl font-bold mb-4">Interactive Learning Hub</h1>
          <p className="text-1xl opacity-70 max-w-3xl mx-auto">
            Comprehensive financial education through engaging content, real-world examples, and personalized learning paths
          </p>
        </div>
      </div>
      <>
        {/* {console.log} */}
        {username ?
          <> <div className="mt-16">
            <h1 className="text-center text-2xl sm:text-xl mt- pt-6 text-[#002147] font-extrabold">
              {username ? `${username.toUpperCase()}'s` : "Yours"} Learning Path
            </h1>
            <p className="text-center text-sm sm:text-base mt-3 text-[#6C757D]">
              Embark on a journey designed to make you a financial expert, step by
              step!
            </p>
          </div>

            {/* Progress tracker */}
            <div className="my-10">
              <h2 className="ml-6 sm:ml-2 text-xl text-[#002147] font-bold transition-all">
                Progress Tracker
              </h2>
              <div className="bg-white py-6 mt-4 rounded-lg transition-all">
                <div className="bg-[#e9e7e7] rounded-full transition-all ">
                  <div
                    className={`bg-[#F39C12] h-6 sm:h-7 rounded-full transition-all`}
                    style={{ width: `${progress}%`, transition: "all" }}
                  >
                    <h3 className="text-center text-black text-xs sm:text-sm pt-1 transition-all">{`${progress}% Completed`}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mt-12">
              {/* Left Section: Learning Timeline */}
              <div className="flex-1">
                <h1 className="ml-6 sm:ml-2 text-xl text-[#002147] font-bold">Learning Timeline</h1>

                <div className="bg-white w-full max-w-5xl mx-auto rounded-xl mt-6 pb-6 shadow-md">
                  {timelineData.map((category) => (
                    <div key={category.category} className="mt-4 rounded-lg p-4">
                      <h2 className="text-2xl text-[#002147] font-extrabold mb-4">{category.category}</h2>

                      <div className="flex flex-col gap-6">
                        {category.modules.map((section) => {
                          const progress = section.progress || 0;

                          return (
                            <div
                              key={section.id}
                              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-all"
                            >
                              {/* Top Row */}
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="text-lg font-semibold text-[#002147]">{section.title}</div>
                                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{section.level}</span>
                                    <span>{section.duration} hrs</span>
                                    <span>{section.topics.length} topics</span>
                                    <span>⭐ {section.rating}</span>
                                  </div>
                                </div>

                                <button
                                  onClick={() => handleToggle(category.category, section.id)}
                                  className="text-sm font-medium px-4 py-1 rounded-full bg-[#002147] text-white hover:bg-[#001530]"
                                >
                                  {openSection[category.category] === section.id ? "Collapse" : "View"}
                                </button>
                              </div>

                              {/* Progress Bar */}
                              <div className="mt-4">
                                <p className="text-sm text-gray-700 mb-1">Progress</p>
                                <div className="w-full h-2 bg-gray-200 rounded-full">
                                  <div
                                    className="h-2 rounded-full bg-gradient-to-r from-secondary to-accent"
                                    style={{ width: `${progress}%` }}
                                  ></div>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">{progress}% complete</p>
                              </div>

                              {/* Topics */}
                              {openSection[category.category] === section.id && (
                                <div className="mt-4 border-t pt-3">
                                  {section.topics.map((topic, idx) => (
                                    <div
                                      key={idx}
                                      className="cursor-pointer text-[#002147] text-sm hover:text-[#F39C12] mt-2"
                                      onClick={() => handleTopicClick(topic.route)}
                                    >
                                      <span className="font-bold">—</span> {topic.name}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Sidebar Section */}
              <div className="w-full lg:w-80 space-y-6 sticky top-24 self-start">
                {/* Continue Learning */}
                <div className="bg-white rounded-xl shadow p-5">
                  <h2 className="text-lg font-semibold text-[#002147] mb-4">Continue Learning</h2>
                  <ul className="space-y-4">
                    {/* Video 1 */}
                    <li className="flex items-center space-x-4 hover:bg-gray-50 p-2 rounded-lg transition">
                      <div className="relative w-24 h-16 flex-shrink-0">
                        <img
                          src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                          alt="Video Thumbnail"
                          className="rounded-lg w-full h-full object-c</li>over"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#002147] font-medium">Understanding Compound Interest</p>
                        <p className="text-sm text-gray-500">Video · 8 min</p>
                      </div>
                    </li>

                    {/* Video 2 */}
                    <li className="flex items-center space-x-4 hover:bg-gray-50 p-2 rounded-lg transition">
                      <div className="relative w-24 h-16 flex-shrink-0">
                        <img
                          src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                          alt="Article Thumbnail"
                          className="rounded-lg w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#002147] font-medium">Building an Emergency Fund</p>
                        <p className="text-sm text-gray-500">Article · 5 min</p>
                      </div>
                    </li>

                    {/* Video 3 */}
                    <li className="flex items-center space-x-4 hover:bg-gray-50 p-2 rounded-lg transition">
                      <div className="relative w-24 h-16 flex-shrink-0">
                        <img
                          src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                          alt="Interactive Thumbnail"
                          className="rounded-lg w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#002147] font-medium">Stock Market Basics</p>
                        <p className="text-sm text-gray-500">Interactive · 12 min</p>
                      </div>
                    </li>
                  </ul>
                </div>


                {/* Learning Streak */}
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl shadow p-5">
                  <h2 className="text-lg font-semibold text-[#002147] mb-2">Learning Streak</h2>
                  <p className="text-4xl font-bold text-yellow-500">7 Days</p>
                  <p className="text-sm mt-2 text-gray-600">Keep it up! You're on fire 🔥</p>
                </div>

                {/* Progress Summary */}
                <div className="bg-white rounded-xl shadow p-5">
                  <h2 className="text-lg font-semibold text-[#002147] mb-4">Your Progress</h2>
                  <div className="text-sm space-y-2 text-gray-700">
                    <p>🎓 <strong className="text-[#002147]">Courses Completed:</strong> 3</p>
                    <p>⏱️ <strong className="text-[#002147]">Hours Learned:</strong> 24</p>
                    <p>📜 <strong className="text-[#002147]">Certificates Earned:</strong> 2</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Peer-to-Peer Learning & Collaboration */}


            {/* <h1 className="ml-6 sm:ml-2 mt-12 text-xl text-[#002147] font-bold text-center">
              Peer-to-Peer Learning & Collaboration
            </h1> */}

            <div className="max-w-6xl mx-auto mt-6">
              {/* <p className="text-center text-sm text-gray-600">
                Connect with fellow learners, join study groups, and grow together
              </p> */}



              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Study Groups */}
                {/*
                <div className="bg-white rounded-xl shadow p-6 border">
                  <h2 className="text-lg font-semibold text-[#002147] mb-4">Study Groups</h2>
                  <ul className="space-y-3">
                    {sampleGroups.map((group, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center border px-4 py-3 rounded-md hover:shadow-sm"
                      >
                        <div>
                          <p className="font-medium text-[#002147]">{group.name}</p>
                          <p className="text-sm text-gray-500">{group.members} members</p>
                        </div>
                        <button
                          onClick={() => handleJoinGroup(group.route)}
                          className="text-sm px-3 py-1 bg-[#002147] text-white rounded-md hover:bg-[#003366]"
                        >
                          Join
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
*/}
                {/* Discussion Board */}
                
                {/* <div className="bg-white rounded-xl shadow p-6 border">
                  <h2 className="text-lg font-semibold text-[#002147] mb-4">Discussion Board</h2>
                  <textarea
                    className="w-full border border-gray-300 rounded-md p-3 mb-4 resize-none"
                    rows="4"
                    placeholder="Share your thoughts, ask questions, or start a discussion..."
                    value={discussion}
                    onChange={(e) => setDiscussion(e.target.value)}
                  />
                  <button
                    onClick={handlePostDiscussion}
                    className="w-full bg-[#6C7A89] text-white py-2 rounded-md hover:bg-[#5a697b]"
                  >
                    Post Discussion
                  </button>
                </div> */}
              </div>

              {/* Recent Discussions */}
              {/* <div className="bg-white rounded-xl shadow p-6 border mt-6">
                <h2 className="text-lg font-semibold text-[#002147] mb-4">Recent Discussions</h2>
                <ul className="space-y-4">
                  {data.map((user, idx) => (
                    <li key={idx} className="border rounded-lg p-3">
                      <p className="font-semibold text-[#002147]">{user.username}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </> : <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open
          >
            <CircularProgress color="inherit" />
            <h1>{`${" Please wait or login again"}`}</h1>
          </Backdrop>}
      </>
       <footer className="bg-[#002147] text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

          <div>
            <img
                      src={logo}
                      alt="FinQuest Logo"
                      className="w-32 h-32 mb-6 drop-shadow-lg   border-white/30"
                    />
          </div>
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">FinQuest</h3>
            <p className="text-sm text-justify">
              FinQuest brings financial wisdom alive through personalized learning paths for students, turning money skills into lifelong confidence.
            </p>
            <div className="flex space-x-4 mt-4 text-white">
              <a href="#" aria-label="Github"><Youtube size={20} className="hover:text-green-400 transition-colors" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} className="hover:text-green-400 transition-colors" /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} className="hover:text-green-400 transition-colors" /></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Learning Paths</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Games</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Simulations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FinFlux</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            {/* <p className="text-sm">123 Financial Way<br/>Wealthy City, 54321<br/>Financia</p> */}
            <p className="text-sm mt-2">Email: finquest@gmail.com<br/></p>
            
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-8 pt-6 border-t border-gray-700">
          <p className="italic">"Empowering financial literacy through gamification."</p>
          <p className="mt-2">&copy; 2025 FinQuest. All Rights Reserved.</p>
          
        </div>
      </footer>
     
    </div>
    
  );
};

export default Learning_paths;
