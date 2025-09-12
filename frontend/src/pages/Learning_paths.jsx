import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Chat from '../Services/Chat.jsx'
import Footer from '../Services/Footer.jsx'
import { BookOpen, Play, Clock, Star, Users, Trophy, Flame, Target, ChevronRight, ChevronDown, CheckCircle, User, Bell, Search, Calendar, TrendingUp, Award, MessageCircle } from "lucide-react";

const Learning_paths = () => {
  const [openSection, setOpenSection] = useState({});
  const [username, setusername] = useState("null");
  const [uusername, setuusername] = useState("");
  const [email, setemail] = useState("");
  const [progress, setprogress] = useState(0);

  // Your existing state variables
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

  // Your existing useEffects - keeping all backend logic intact
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.post("https://fin-quest-y9ub.onrender.com/finduserlearning").then((res) => { });
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
    axios.get("https://fin-quest-y9ub.onrender.com/verify").then((res) => {
      setuusername(res.data.username);
    });
  });

  useEffect(() => {
    setusername(uusername);
  }, [uusername]);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("https://fin-quest-y9ub.onrender.com/verify").then((res) => {
      setemail(res.data.email);
    });
  });

  useEffect(() => {
    axios
      .post("https://fin-quest-y9ub.onrender.com/finduserlearning", { email })
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

  // Your existing progress calculation logic
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

  useEffect(() => {
    axios.get("https://fin-quest-y9ub.onrender.com/finddiscussion")
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

  // Your existing timeline data with enhanced UI
  const timelineData = [
    {
      category: "Accounting Essentials",
      color: "from-blue-500 to-blue-600",
      modules: [
        {
          id: 1,
          level: "Beginner",
          title: `Accounting for Beginners: Key Terms & Transactions`,
          duration: 2,
          rating: 4.8,
          progress: Accounting || 0,
          topics: [
            { name: "Accounting Glossary", route: "/TerminologyPage", completed: (Accounting1 >= 70) },
            { name: "The Concepts Of 'DEBIT' AND 'CREDIT'", route: "/Credit_Debit", completed: (Accounting2 >= 70) },
          ],
        },
        {
          id: 2,
          level: "Intermediate",
          duration: 3,
          rating: 4.4,
          progress: FAccounting || 0,
          title: `Fundamentals of Accounting`,
          topics: [
            { name: "Accounting Overview", route: "/Accounting", completed: (FAccounting1 >= 70) },
            { name: "Pillars of Accounting", route: "/Pillars_Of_Accounting", completed: (FAccounting2 >= 70) },
          ],
        },
      ],
    },
    {
      category: "Finance Essentials",
      color: "from-emerald-500 to-emerald-600",
      modules: [
        {
          id: 1,
          level: "Intermediate",
          duration: 3,
          rating: 4.6,
          progress: Financial || 0,
          title: "Basic Financial Concepts",
          topics: [
            { name: "Finance Principles", route: "/Finance_Principles", completed: (Financial1 >= 70) },
            { name: "Goal Of Financial Management", route: "/Goals_Finance", completed: (Financial2 >= 70) },
          ],
        },
        {
          id: 2,
          level: "Beginner",
          duration: 3,
          rating: 4.4,
          progress: Saving || 0,
          title: "Practical Finance: Saving & Budgeting",
          topics: [
            { name: "Saving Essentials", route: "/Saving_Essentials", completed: (Saving1 >= 70) },
            { name: "Budgeting Basics", route: "/Budgeting_Basics", completed: (Saving2 >= 70) },
          ],
        },
        {
          id: 3,
          level: "Intermediate",
          duration: 3,
          rating: 4.3,
          progress: Interest || 0,
          title: "Understanding Interest Rates",
          topics: [
            { name: "Simple vs. Compound Interest", route: "/SimpleVsCompoundInterest", completed: (Interest1 >= 70) },
            { name: "Impact on Loans", route: "/LoanImpacts", completed: (Interest2 >= 70) },
          ],
        },
        {
          id: 4,
          level: "Intermediate",
          duration: 3,
          rating: 3.6,
          progress: Investment || 0,
          title: "Investment Basics",
          topics: [
            { name: "Deposit plans", route: "/DepositEssentials", completed: (Investment1 >= 70) },
            { name: "Mutual Funds", route: "/MutualFundEssentials", completed: (Investment2 >= 70) },
            { name: "Stock Market", route: "/StockMarketBasics", completed: (Investment3 >= 70) },
          ],
        },
      ],
    },
  ];

  // Your existing discussion handler
  const handlePostDiscussion = () => {
    axios.post("https://fin-quest-y9ub.onrender.com/discussion", { email, discussion, username })
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

  const sampleGroups = [
    { name: "Investment Banking Basics", members: 28, route: "/Group" },
    { name: "Personal Finance 101", members: 45, route: "/ForumPage" },
    { name: "Cryptocurrency & DeFi", members: 32, route: "/ForumPage" },
    { name: "Financial Planning", members: 19, route: "/ForumPage" },
    { name: "Stock Market Analysis", members: 56, route: "/ForumPage" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {username ? (
        <>
          {/* Enhanced Header */}
          <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative px-6 py-16">
              {/* Profile Button - Your original functionality */}
              <div className="absolute top-4 right-6 z-10">
                <button
                  onClick={() => navigate("/ProfilePage")}
                  className="text-white text-3xl hover:text-blue-200 transition-colors"
                >
                  <FaUserCircle />
                </button>
              </div>

              {/* Hero Section */}
              <div className="text-center text-white max-w-4xl mx-auto">
                <BookOpen className="w-16 h-16 mx-auto mb-4 animate-bounce" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  Interactive Learning Hub
                </h1>
                <p className="text-xl opacity-70 max-w-3xl mx-auto mb-8">
                  Comprehensive financial education through engaging content, real-world examples, and personalized learning paths
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-white/20 backdrop-blur-lg rounded-xl px-6 py-4">
                    <div className="text-2xl font-bold text-white">{progress}%</div>
                    <div className="text-sm text-blue-200">Overall Progress</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-lg rounded-xl px-6 py-4">
                    <div className="text-2xl font-bold text-white">7</div>
                    <div className="text-sm text-blue-200">Day Streak</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-lg rounded-xl px-6 py-4">
                    <div className="text-2xl font-bold text-white">24</div>
                    <div className="text-sm text-blue-200">Hours Learned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
            {/* Enhanced Progress Tracker */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 mb-8 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#002147]">
                  {username ? `${username.toUpperCase()}'s Learning Path` : "Your Learning Path"}
                </h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Updated today</span>
                </div>
              </div>

              <div className="relative mb-6">
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#F39C12] via-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Beginner</span>
                  <span className="font-medium">{progress}% Complete</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Learning Timeline */}
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-2xl font-bold text-[#002147] mb-6">Learning Timeline</h3>

                {timelineData.map((category) => (
                  <div key={category.category} className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 overflow-hidden">
                    <div className={`bg-gradient-to-r ${category.color} p-6`}>
                      <h3 className="text-2xl font-bold text-white mb-2">{category.category}</h3>
                      <div className="flex items-center text-white/90 text-sm">
                        <BookOpen className="w-4 h-4 mr-2" />
                        <span>{category.modules.length} modules</span>
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{category.modules.reduce((acc, module) => acc + module.duration, 0)} hours total</span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      {category.modules.map((section) => (
                        <div key={section.id} className="bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-[#002147] mb-2">{section.title}</h4>
                              <div className="flex flex-wrap items-center gap-3 text-sm">
                                <span className={`px-3 py-1 rounded-full text-white ${section.level === 'Beginner' ? 'bg-green-500' :
                                  section.level === 'Intermediate' ? 'bg-blue-500' : 'bg-purple-500'
                                  }`}>
                                  {section.level}
                                </span>
                                <div className="flex items-center text-gray-600">
                                  <Clock className="w-4 h-4 mr-1" />
                                  <span>{section.duration} hrs</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <Star className="w-4 h-4 mr-1 text-yellow-500" />
                                  <span>{section.rating}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <BookOpen className="w-4 h-4 mr-1" />
                                  <span>{section.topics.length} topics</span>
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={() => handleToggle(category.category, section.id)}
                              className="ml-4 p-2 rounded-lg bg-[#002147] hover:bg-[#001530] text-white transition-colors"
                            >
                              {openSection[category.category] === section.id ?
                                <ChevronDown className="w-5 h-5" /> :
                                <ChevronRight className="w-5 h-5" />
                              }
                            </button>
                          </div>

                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-gray-700">Progress</span>
                              <span className="text-sm font-medium text-gray-900">{section.progress}%</span>
                            </div>
                            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${category.color} transition-all duration-500`}
                                style={{ width: `${section.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          {openSection[category.category] === section.id && (
                            <div className="border-t pt-4 space-y-3">
                              {section.topics.map((topic, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg border hover:shadow-sm transition-all">
                                  <div className="flex items-center space-x-3">
                                    {topic.completed ? (
                                      <CheckCircle className="w-5 h-5 text-green-500" />
                                    ) : (
                                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                                    )}
                                    <div>
                                      <p className={`font-medium ${topic.completed ? 'text-green-700' : 'text-[#002147]'}`}>
                                        {topic.name}
                                      </p>
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => handleTopicClick(topic.route)}
                                    className="px-4 py-2 bg-[#002147] hover:bg-[#001530] text-white rounded-lg text-sm transition-colors"
                                  >
                                    {topic.completed ? 'Review' : 'Start'}
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Sidebar */}
              <div className="space-y-6">

                {/* Learning Streak */}
                <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl shadow-lg p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Learning Streak</h3>
                    <Flame className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold mb-2">7 Days</div>
                  <p className="text-white/90 text-sm">Keep it up! You're on fire 🔥</p>
                </div>

                {/* Ledger Guide Box */}
                <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-xl shadow-lg p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Build Your Ledger</h3>
                  </div>
                  <div className="text-3xl font-bold mb-2">Step by Step</div>
                  <p className="text-white/90 text-sm mb-4">
                    Learn how to create your own digital ledger with simple steps: record transactions, track debits & credits, and view balances in real time.
                  </p>
                  <button
                    onClick={() => window.location.href = "/ledger"}
                    className="bg-white text-green-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
                  >
                    Make My Own Ledger
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open
        >
          <div className="text-center">
            <CircularProgress color="inherit" size={60} />
            <h1 className="mt-4 text-lg">Please wait or update profile</h1>
          </div>
        </Backdrop>
      )}

      <Footer />
      <Chat />
    </div>
  );
};

export default Learning_paths;