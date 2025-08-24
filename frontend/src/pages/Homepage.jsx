import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  BookOpen,
  Gamepad2,
  TrendingUp,
  Brain,
  Users,
  Calculator,
  Route,
  Newspaper,
  Briefcase,
  WandSparkles,
  MapPinned,
  UserCircle,
  Book,
  HelpCircle,
  Video,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Bot,
} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import logo from "../assets/fin-logo.jpg"; // FinQuest Logo



function Homepage() {
  const location = useLocation();
  const [login, setlogin] = useState(location.state || false);
  const { useremail, setuseremail } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [showtoast, setshowtoast] = useState(false);
  const [username, setusername] = useState();

  useEffect(() => {
    if (login) {
      window.location.reload();
      setlogin(false);
      navigate({ state: null });
    }
  }, [login]);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:4047/verify").then((res) => {
      setEmail(res.data?.email);
      setpassword(res.data?.password);
      setuseremail(res.data?.email);
      setusername(res.data?.username);
    });
  }, []);

  useEffect(() => {
    if (email) {
      axios.post("http://localhost:4047/login", { email, password }).then((res) => {
        if (res.data.valid) {
          navigate("/");
        }
        if (!showtoast) {
          setshowtoast(true);
        }
      });
    }
  }, [email, password, navigate, showtoast]);

  return (
    <div className="min-h-screen flex flex-col bg-white ">
      {/* Navbar */}
      <nav className="bg-white px-6 py-4 shadow-md flex justify-between items-center">
        <div className="text-[#002147] text-2xl font-bold">FinQuest</div>
        <ul className="flex justify-center items-center space-x-6 text-[#002147] text-sm font-medium">
          <li><Link to="/Learning_Paths" className="flex items-center gap-1 hover:text-[#28A745]"><Book /> Learn</Link></li>
          <li><Link to="/Quiz" className="flex items-center gap-1 hover:text-[#28A745]"><HelpCircle /> Quiz</Link></li>
          <li><Link to="/Game" className="flex items-center gap-1 hover:text-[#28A745]"><Gamepad2 /> Games</Link></li>
          <li><Link to="/FinFlux" className="flex items-center gap-1 hover:text-[#28A745]"><Video /> Reels</Link></li>
          <li><Link to="/Simulations" className="flex items-center gap-1 hover:text-[#28A745]"><Calculator /> Simulator</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          {useremail ? (
            <Link to="/ProfilePage" className="text-[#002147] hover:text-[#F39C12]">{username}</Link>
          ) : (
            <Link to="/login" className="text-[#002147] hover:text-[#F39C12]">{username ? username : "Login"}</Link>
          )}
          <Link to="/Profile" className="text-[#002147] hover:text-[#F39C12]"><UserCircle size={22} /></Link>
          <Link to="/signup">
            <button className="bg-[#002147] text-white px-4 py-2 rounded-lg hover:bg-[#001533]">Sign Up</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#002147] to-[#006400] text-white py-40 px-8 sm:px-16 md:px-32 overflow-hidden">
        <div className="max-w-3xl z-10">
          <h1 className="text-5xl font-bold leading-snug mb-6">
            Master Your <br />
            <span className="text-yellow-400">Financial Future</span>
          </h1>
          <p className="text-lg mb-6">
            Interactive learning platform for students and professionals. Learn financial concepts through quizzes, games, and real-world simulators.
          </p>
          <div className="flex space-x-4">
            <Link to="/Learning_paths">
              <button className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-500">Start Learning Free</button>
            </Link>
            <button className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">Watch Demo</button>
          </div>
          <div className="mt-8 flex space-x-8 text-sm text-gray-200">
            <div>👥 10K+ Students</div>
            <div>📘 500+ Concepts</div>
            <div>✅ 95% Success Rate</div>
          </div>
        </div>

        {/* Portfolio Growth Chart */}
        <div className="absolute top-32 right-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-8 shadow-xl w-[500px] text-white ">
          <h3 className="text-xl font-semibold mb-5">📈 Portfolio Growth</h3>
          <div className="h-40 flex items-end gap-3">
            {[40, 80, 50, 60, 90, 70].map((h, i) => (
              <div
                key={i}
                className="w-10 rounded-t-lg"
                style={{
                  height: `${h + 20}px`,
                  background: "linear-gradient(to top, #F9D423, #4CAF50)"
                }}
              ></div>
            ))}
          </div>
          <div className="mt-5 text-base">
            <div className="flex justify-between">
              <span>Progress</span>
              <span className="text-green-300">Milestone</span>
              <span className="text-green-500 font-bold">Level Up</span>
            </div>
          </div>
        </div>
      </div>

      {/* Powerful Learning Features Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#002147] mb-2">
          🎯 Powerful Learning Features
        </h2>
        <h3 className="text-lg text-center text-gray-600 mb-7">
          Everything you need to master financial literacy — from basics to advanced concepts.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { path: "/Learning_paths", label: "Learning Path", desc: "Master financial concepts through structured learning paths", icon: <BookOpen className="text-blue-500 w-8 h-8" /> },
            { path: "/Game", label: "Gamification", desc: "Learn while earning points and badges", icon: <Gamepad2 className="text-purple-500 w-8 h-8" /> },
            { path: "/Simulations", label: "Real World Simulation", desc: "Practice with real market scenarios", icon: <TrendingUp className="text-green-500 w-8 h-8" /> },
            { path: "/Chat", label: "AI Driven", desc: "Get personalized financial insights powered by AI", icon: <Brain className="text-red-500 w-8 h-8" /> },
            { path: "/Communitys", label: "Community", desc: "Connect with fellow finance enthusiasts", icon: <Users className="text-yellow-500 w-8 h-8" /> },
            // { path: "/TaxPage", label: "Taxes", desc: "Understand and optimize your tax planning", icon: <Calculator className="text-pink-500 w-8 h-8" /> },
            { path: "/ForumPage", label: "Finance Forum", desc: "Professional peer-to-peer collaboration platform for finance enthusiasts", icon: <Route className="text-blue-500 w-8 h-8" /> },
            { path: "/FinFlux", label: "FinFlux", desc: "Stay updated with market trends and analysis", icon: <Newspaper className="text-orange-500 w-8 h-8" /> },
            { path: "/SideHustleFinder", label: "Side Hustle", desc: "Discover and manage additional income streams", icon: <Briefcase className="text-teal-500 w-8 h-8" /> },
            { path: "/Financial_Assistant", label: "Financial Assistant", desc: "Uncover and grow multiple income sources", icon: <WandSparkles className="text-teal-500 w-8 h-8" /> },
            // { path: "/StressTracker", label: "Personalized Financial Roadmap", desc: "Interactive tool for financial stress.", icon: <MapPinned className="text-blue-500 w-8 h-8" /> },
          ].map((feature, index) => (
            <Link key={index} to={feature.path} className="block bg-white text-black py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-300">
              <div className="flex flex-col items-center">
                {feature.icon}
                <h3 className="text-lg font-semibold mt-3">{feature.label}</h3>
                <p className="text-gray-600 text-sm mt-2">{feature.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
       <section className="py-20 px-6 bg-gray-50">
  <h2 className="text-3xl font-bold text-center text-[#002147] mb-2">
    👥 Learning Paths for Everyone
  </h2>
  <p className="text-lg text-center text-gray-600 mb-10">
    Tailored content and experiences designed for different life stages and financial goals
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    
    {/* School Students (Blue Theme) */}
    <div className="relative bg-white shadow-lg border border-gray-200 rounded-xl p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#002147] to-[#1a3a75] opacity-5 hover:opacity-10 transition-opacity duration-300 rounded-xl" />
      <div className="relative">
        <div className="flex items-center mb-4">
          <div className="bg-gradient-to-br from-[#002147] to-[#1a3a75] text-white p-3 rounded-full">
            📘
          </div>
          <h3 className="ml-4 text-xl font-semibold text-[#002147]">School Students</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Build a strong foundation in financial literacy with age-appropriate content and interactive learning modules.
        </p>
        <ul className="text-sm text-gray-700 space-y-2 mb-4">
          <li>📌 Basic Money Management</li>
          <li>📌 Savings & Budgeting</li>
          <li>📌 Investment Basics</li>
          <li>📌 Financial Goal Setting</li>
        </ul>
        <button className="mt-2 w-full bg-[#002147] text-white py-2 rounded-lg hover:bg-[#001533]">
          Start Learning Path →
        </button>
      </div>
    </div>

    {/* College Students (Green to Gold Theme) */}
    <div className="relative bg-white shadow-lg border border-gray-200 rounded-xl p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e7d4d] to-[#ffcc00] opacity-5 hover:opacity-10 transition-opacity duration-300 rounded-xl" />
      <div className="relative">
        <div className="flex items-center mb-4">
          <div className="bg-gradient-to-br from-[#1e7d4d] to-[#ffcc00] text-white p-3 rounded-full">
            🎓
          </div>
          <h3 className="ml-4 text-xl font-semibold text-[#1e7d4d]">College Students</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Prepare for financial independence with advanced concepts, real-world scenarios, and career-focused learning.
        </p>
        <ul className="text-sm text-gray-700 space-y-2 mb-4">
          <li>📌 Student Loans</li>
          <li>📌 Credit Management</li>
          <li>📌 Career Planning</li>
          <li>📌 Advanced Investing</li>
        </ul>
        <button className="mt-2 w-full bg-[#1e7d4d] text-white py-2 rounded-lg hover:bg-[#15663e]">
          Start Learning Path →
        </button>
      </div>
    </div>

    {/* Working Professionals (Gold to Green Theme) */}
    <div className="relative bg-white shadow-lg border border-gray-200 rounded-xl p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffcc00] to-[#1e7d4d] opacity-5 hover:opacity-10 transition-opacity duration-300 rounded-xl" />
      <div className="relative">
        <div className="flex items-center mb-4">
          <div className="bg-gradient-to-br from-[#ffcc00] to-[#1e7d4d] text-white p-3 rounded-full">
            💼
          </div>
          <h3 className="ml-4 text-xl font-semibold text-[#ffcc00]">Working Professionals</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Enhance your financial expertise with sophisticated tools, market analysis, and wealth-building strategies.
        </p>
        <ul className="text-sm text-gray-700 space-y-2 mb-4">
          <li>📌 Portfolio Management</li>
          <li>📌 Tax Optimization</li>
          <li>📌 Retirement Planning</li>
          <li>📌 Risk Assessment</li>
        </ul>
        <button className="mt-2 w-full bg-[#ffcc00] text-black py-2 rounded-lg hover:bg-[#e6b800]">
          Start Learning Path →
        </button>
      </div>
    </div>
  </div>
</section>

<a href="#" className="fixed bottom-6 right-6 z-50 transition-transform duration-300 transform hover:scale-110">
<Bot size={56} className="bg-[#002147] text-white rounded-full p-3 shadow-lg hover:bg-[#001533] transition-colors" />
</a>

      {/* Footer */}
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
}

export default Homepage;
