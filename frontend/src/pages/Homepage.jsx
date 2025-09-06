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
  Play,
  Target,
  Zap,
  Shield,
  Clock,
  Globe
} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import logo from "../assets/fin-logo.jpg"; // FinQuest Logo
import Index from "../Services/Chat";
import Chat from "../Services/Chat";
import { motion } from "framer-motion";
import Testimonials from "../components/testimonials";
import FAQ from "../components/FAQ";
import Testi from "../components/Testi";

// ---------------- DEMO VIDEO SECTION ----------------
const DemoVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="demo-video"
      className="py-20  bg-gradient-to-r from-[#006400] to-[#008080]
 relative overflow-hidden"
    >

      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-500/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            🎬 See FinQuest in Action
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Watch how our platform transforms financial learning through interactive experiences
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
          >
            {/* Video Container */}
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative">
              {!isPlaying ? (
                <>
                  {/* Video Thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#002147]/80 to-green-600/80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto border-2 border-white/30">
                        <Video className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        FinQuest Platform Demo
                      </h3>
                      <p className="text-gray-200 mb-4">
                        Discover the future of financial education
                      </p>
                    </div>
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group relative z-20 flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </button>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white bg-black">
                  <div className="text-center">
                    <Video className="w-16 h-16 mx-auto mb-4 text-red-500" />
                    <p className="text-xl mb-2">Demo Video Playing...</p>
                    <p className="text-sm text-gray-300 mb-4">
                      Your actual video content would be embedded here
                    </p>
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      Stop Demo
                    </button>
                  </div>
                </div>
              )}

              {/* Video Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-sm bg-black/50 rounded-lg p-3">
                <span className="flex items-center space-x-2">
                  <Target className="w-4 h-4" />
                  <span>FinQuest Platform Walkthrough</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>5:30</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Video Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Interactive Learning",
                desc: "See how gamification makes finance fun and engaging"
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Live Simulations",
                desc: "Watch real market scenario training in action"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Community Features",
                desc: "Explore collaborative learning and networking tools"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center text-white bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex justify-center mb-3 text-green-400">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------------- WHY CHOOSE SECTION ----------------
const WhyChooseSection = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Instant Learning",
      description:
        "Get immediate feedback and progress tracking as you learn financial concepts in real-time."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Trusted Platform",
      description:
        "Used by top universities and financial institutions worldwide for professional training."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "Learn Anytime",
      description:
        "Access your personalized learning dashboard 24/7 from any device, anywhere."
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
      title: "Global Community",
      description:
        "Connect with finance professionals and students from around the world."
    }
  ];

  return (
    <div className="relative">
      {/* Curved top section */}
      <div className="relative bg-[#f9f9f9] h-24">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"
            fill="#fff"
          />
        </svg>
      </div>

      {/* Main section */}
      <section className=" sm:mt-4 sm:mb-4py-20 bg-white relative mt-8 mb-8">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#002147] mb-4">
              🌟 Why Choose FinQuest?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're revolutionizing financial education with cutting-edge technology and proven methodologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#002147]/20 group"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#002147] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave bottom section */}
      <div className="relative bg-[#f9f9f9] h-32">
        <svg
          className="absolute top-0 w-full h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,20 350,100 600,60 C850,20 1050,100 1200,60 L1200,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
};

// ---------------- HOMEPAGE ----------------
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
      axios
        .post("http://localhost:4047/login", { email, password })
        .then((res) => { });
    }
  }, [email, password, navigate, showtoast]);

  return (
    <div className="min-h-screen flex flex-col bg-white ">
      <Chat />
      {/* <nav className="bg-white px-6 py-4 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-2 text-[#002147]">
          <img
            src={logo}
            alt="FinQuest Logo"
            className="w-12 h-12 rounded-full drop-shadow-lg"
          />
          <span className="text-2xl font-bold sm:hidden">FinQuest</span>
        </div>
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
      </nav> */}

      <nav className="bg-white px-6 py-4 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-2 text-[#002147]">
          <img
            src={logo}
            alt="FinQuest Logo"
            className="w-12 h-12 rounded-full drop-shadow-lg"
          />
          <span className="text-2xl font-bold sm:hidden">FinQuest</span>
        </div>
        <div className="flex items-center gap-4">
          {useremail ? (
            <>
              <Link to="/ProfilePage" className="text-[#002147] text-2xl font-bold hover:text-[#006400]">
                {username}
              </Link>
              <Link to="/Profile" className="text-[#002147] hover:text-[#006400]">
                <UserCircle size={22} />
              </Link>
            </>
          ) : (
            <>
              {/* <Link to="/login" className="text-[#002147] hover:text-[#006400]">
          {username ? username : "Login"}
        </Link> */}
              {/* <Link to="/Profile" className="text-[#002147] hover:text-[#006400]">
          <UserCircle size={22} />
        </Link> */}
              <Link to="/login">
                <button className="bg-[#002147] text-white px-4 py-2 rounded-lg hover:bg-[#001533]">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#002147] to-[#006400] text-white py-40 px-8 sm:px-16 md:px-32 overflow-hidden" >
        <div className="max-w-3xl z-10">
          <h1 className="text-5xl font-bold leading-snug mb-6">
            Master Your <br />
            {/* <span className="text-yellow-400">Financial Future</span> */}
            <motion.span
              className="text-yellow-400 font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Financial Future
            </motion.span>
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
        <div className="absolute top-32 right-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-8 shadow-xl w-[500px] text-white sm:hidden ">
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
          {/* <Testi /> */}
          <div className="mt-5 text-base">
            <div className="flex justify-between">
              <span>Progress</span>
              <span className="text-green-300">Milestone</span>
              <span className="text-green-500 font-bold">Level Up</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Component - Wave Effect */}
      <div className="relative bg-gradient-to-r from-[#002147] to-[#006400] h-20">
        <svg
          className="absolute bottom-0 w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 L1200,120 L0,120 Z"
            fill="#fff"
          />
        </svg>
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
            // { path: "/Chat", label: "AI Driven", desc: "Get personalized financial insights powered by AI", icon: <Brain className="text-red-500 w-8 h-8" /> },
            { path: "/Communitys/", label: "Community", desc: "Connect with fellow finance enthusiasts", icon: <Users className="text-yellow-500 w-8 h-8" /> },
            // { path: "/TaxPage", label: "Taxes", desc: "Understand and optimize your tax planning", icon: <Calculator className="text-pink-500 w-8 h-8" /> },
            { path: "/ForumPage", label: "Finance Forum", desc: "Professional peer-to-peer collaboration platform for finance enthusiasts", icon: <Route className="text-blue-500 w-8 h-8" /> },
            { path: "/FinFlux", label: "FinFlux", desc: "Stay updated with market trends and analysis", icon: <Newspaper className="text-orange-500 w-8 h-8" /> },
            { path: "/SideHustleFinder", label: "Side Hustle", desc: "Discover and manage additional income streams", icon: <Briefcase className="text-teal-500 w-8 h-8" /> },
            { path: "/Financial_Assistant", label: "Financial Assistant", desc: "Uncover and grow multiple income sources", icon: <WandSparkles className="text-teal-500 w-8 h-8" /> },
            { path: "/Stories", label: "Financial Stories", desc: "Learn through real-world financial adventures.", icon: <BookOpen className="text-indigo-500 w-8 h-8" /> },
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

      {/* <DemoVideoSection /> */}
      <Testimonials />
      <WhyChooseSection />
      <p id="faq"><FAQ /></p>


      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 text-gray-300 py-12 px-6">
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
              <li><a href="/learning_paths" className="hover:text-white transition-colors">Learning Paths</a></li>
              <li><a href="/Game" className="hover:text-white transition-colors">Games</a></li>
              <li><a href="/simulations" className="hover:text-white transition-colors">Simulations</a></li>
              <li><a href="/FinFlux" className="hover:text-white transition-colors">FinFlux</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            {/* <p className="text-sm">123 Financial Way<br/>Wealthy City, 54321<br/>Financia</p> */}
            <p className="text-sm mt-2">Email: finquest@gmail.com<br /></p>

          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-8 pt-6 border-t border-gray-700">
          <p className="italic text-white">"Empowering financial literacy through gamification."</p>
          <p className="mt-2 text-white">&copy; 2025 FinQuest. All Rights Reserved.</p>

        </div>
      </footer>
    </div>
  );
}

export default Homepage;

