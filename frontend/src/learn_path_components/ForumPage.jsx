import React, { useEffect, useState } from 'react';
import { 
  MessageCircle, 
  Users, 
  Calendar, 
  Clock, 
  TrendingUp, 
  BookOpen, 
  Video,
  User,
  ThumbsUp,
  MessageSquare,
  Eye,
  Star,
  Play,
  ChevronRight,
  Lightbulb,
  Send,
  X,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Search,
  Filter,
  Bell,
  Award,
  Zap,
  Target,
  Globe
} from 'lucide-react';
import Header from '../Services/Header.jsx';
import Footer from '../Services/Footer.jsx';
import { useLocation } from 'react-router-dom';
import ChatInterface from './forum_components/GlobalChat.jsx';

function FinanceForum() {
  const [activeTab, setActiveTab] = useState('webinars');
  const [showChat, setShowChat] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [messages, setMessages] = useState([
    { id: 1, user: "Priya K.", message: "Hey everyone! Excited to discuss investment strategies!", time: "2:30 PM", avatar: "PK" },
    { id: 2, user: "Rohit M.", message: "Welcome Priya! I've been learning about SIPs lately.", time: "2:32 PM", avatar: "RM" },
    { id: 3, user: "Sneha R.", message: "SIPs are great for beginners! I started with just ₹500/month", time: "2:35 PM", avatar: "SR" }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phone: '',
    occupation: '',
    experience: '',
    interests: []
  });

  const pathname = useLocation()

  // Handle sending new message
  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        user: "You",
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: "YU"
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  // Handle registration form submission
  const handleRegistration = (e) => {
    e.preventDefault();
    alert(`Registration successful for ${registrationData.name}! You'll receive webinar details via email.`);
    setShowRegistration(false);
    setRegistrationData({
      name: '',
      email: '',
      phone: '',
      occupation: '',
      experience: '',
      interests: []
    });
  };

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])

  // Handle interest selection
  const toggleInterest = (interest) => {
    const newInterests = registrationData.interests.includes(interest)
      ? registrationData.interests.filter(i => i !== interest)
      : [...registrationData.interests, interest];
    setRegistrationData({ ...registrationData, interests: newInterests });
  };

  const availableInterests = [
    "Stock Market", "Mutual Funds", "Cryptocurrency", "Real Estate", 
    "Tax Planning", "Retirement Planning", "Budgeting", "Insurance"
  ];

  // Sample webinar data
  const webinars = [
    {
      id: 1,
      title: "Stock Market Fundamentals for Beginners",
      speaker: "Dr. Rajesh Kumar",
      speakerTitle: "Investment Analyst",
      date: "March 15, 2025",
      time: "6:00 PM IST",
      duration: "90 mins",
      participants: 1247,
      status: "upcoming",
      description: "Learn the basics of stock market investing, how to analyze companies, and build your first portfolio.",
      topics: ["Market Basics", "Stock Analysis", "Portfolio Building"],
      rating: 4.8,
      level: "Beginner"
    },
    {
      id: 2,
      title: "Cryptocurrency & Blockchain Explained",
      speaker: "Priya Sharma",
      speakerTitle: "Blockchain Expert",
      date: "March 18, 2025",
      time: "7:00 PM IST",
      duration: "75 mins",
      participants: 892,
      status: "upcoming",
      description: "Understand cryptocurrency basics, blockchain technology, and safe investment practices in digital assets.",
      topics: ["Crypto Basics", "Blockchain Tech", "Risk Management"],
      rating: 4.9,
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Personal Budgeting & Financial Planning",
      speaker: "Amit Gupta",
      speakerTitle: "Financial Planner",
      date: "March 12, 2025",
      time: "5:30 PM IST",
      duration: "60 mins",
      participants: 2134,
      status: "completed",
      description: "Master the art of budgeting, expense tracking, and creating a solid financial plan for your future.",
      topics: ["Budgeting", "Goal Setting", "Emergency Fund"],
      rating: 4.7,
      level: "Beginner"
    }
  ];

  const categories = [
    { name: "All Discussions", count: 234, icon: Globe },
    { name: "Investment Strategies", count: 89, icon: TrendingUp },
    { name: "Tax Planning", count: 45, icon: Award },
    { name: "Debt Management", count: 32, icon: Target },
    { name: "Career & Finance", count: 28, icon: Briefcase },
    { name: "Insurance", count: 24, icon: Users },
    { name: "Real Estate", count: 16, icon: MapPin }
  ];

  return (
    <div>
            <Header/>

    <div className="min-h-screen bg-slate-100 relative mt-20">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-gray-100 to-slate-300"></div>
      
      {/* Group Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl h-[80vh] flex flex-col shadow-xl border border-slate-300">
            
            {/* Chat Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="bg-slate-600 rounded-xl p-2">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">Finance Discussion Group</h2>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-sm text-slate-600">156 members online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="p-2 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-3 bg-slate-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${
                    msg.user === "You" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-8 h-8 bg-slate-600 rounded-xl flex items-center justify-center text-white font-medium text-xs">
                    {msg.avatar}
                  </div>
                  
                  <div className={`max-w-sm ${
                    msg.user === "You" ? "text-right" : ""
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-slate-700">{msg.user}</span>
                      <span className="text-xs text-slate-500">{msg.time}</span>
                    </div>
                    <div className={`p-3 rounded-xl text-sm ${
                      msg.user === "You"
                        ? "bg-slate-600 text-white"
                        : "bg-white text-slate-800 border border-slate-200"
                    }`}>
                      {msg.message}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-5 border-t border-slate-200 bg-white">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-3 border border-slate-300 rounded-xl focus:outline-none focus:border-slate-500 text-sm"
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="px-4 py-3 bg-slate-600 text-white rounded-xl font-medium hover:bg-slate-700 transition-all duration-200 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {showRegistration && selectedWebinar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl border border-slate-300">
            
            {/* Registration Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <div>
                <h2 className="text-xl font-semibold text-slate-800">Register for Webinar</h2>
                <p className="text-slate-600 text-sm mt-1">{selectedWebinar.title}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-slate-500 flex items-center gap-1 text-xs">
                    <User className="w-3 h-3" />
                    {selectedWebinar.speaker}
                  </span>
                  <span className="text-slate-500 flex items-center gap-1 text-xs">
                    <Star className="w-3 h-3 text-yellow-500" />
                    {selectedWebinar.rating}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowRegistration(false)}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleRegistration} className="p-6 space-y-5">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2 uppercase tracking-wide">
                  <div className="w-6 h-6 bg-slate-600 rounded-lg flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  Personal Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={registrationData.name}
                      onChange={(e) => setRegistrationData({...registrationData, name: e.target.value})}
                      className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-slate-500 transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={registrationData.email}
                        onChange={(e) => setRegistrationData({...registrationData, email: e.target.value})}
                        className="w-full p-3 pl-10 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-slate-500 transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        value={registrationData.phone}
                        onChange={(e) => setRegistrationData({...registrationData, phone: e.target.value})}
                        className="w-full p-3 pl-10 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-slate-500 transition-all duration-200"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Occupation</label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        value={registrationData.occupation}
                        onChange={(e) => setRegistrationData({...registrationData, occupation: e.target.value})}
                        className="w-full p-3 pl-10 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-slate-500 transition-all duration-200"
                        placeholder="Student, Professional, etc."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Level */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-slate-700 flex items-center gap-2 uppercase tracking-wide">
                  <div className="w-6 h-6 bg-slate-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  Experience Level
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Beginner", "Intermediate", "Advanced", "Expert"].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setRegistrationData({...registrationData, experience: level})}
                      className={`p-3 rounded-xl font-medium text-xs transition-all duration-200 ${
                        registrationData.experience === level
                          ? "bg-slate-700 text-white shadow-md"
                          : "bg-slate-100 text-slate-600 border border-slate-300 hover:bg-slate-200"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Areas of Interest</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {availableInterests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`p-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                        registrationData.interests.includes(interest)
                          ? "bg-slate-700 text-white"
                          : "bg-slate-100 text-slate-600 border border-slate-300 hover:bg-slate-200"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Webinar Summary */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-300">
                <h4 className="font-semibold text-slate-800 mb-3 text-sm">Webinar Summary</h4>
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <div>
                      <p className="text-slate-400">Date</p>
                      <p className="text-slate-700 font-medium">{selectedWebinar.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <div>
                      <p className="text-slate-400">Time</p>
                      <p className="text-slate-700 font-medium">{selectedWebinar.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-500" />
                    <div>
                      <p className="text-slate-400">Registered</p>
                      <p className="text-slate-700 font-medium">{selectedWebinar.participants.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-slate-700 text-white rounded-xl font-medium hover:bg-slate-800 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Complete Registration
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto p-6">
        {/* Professional Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-slate-700 rounded-xl p-3">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800">
              FinanceHub
            </h1>
            <div className="bg-slate-600 rounded-xl p-3">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="text-lg text-slate-600 font-medium">Professional Finance Learning Platform</p>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto mt-2">
            Connect with finance professionals and enhance your financial knowledge through expert-led sessions.
          </p>
        </div>

        {/* Minimalist Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="bg-slate-600 rounded-lg p-2 w-fit mx-auto mb-2">
                <Users className="w-5 h-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-slate-800">7.2K</p>
              <p className="text-xs text-slate-500">Members</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="bg-slate-600 rounded-lg p-2 w-fit mx-auto mb-2">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-slate-800">234</p>
              <p className="text-xs text-slate-500">Discussions</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="bg-slate-600 rounded-lg p-2 w-fit mx-auto mb-2">
                <Video className="w-5 h-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-slate-800">48</p>
              <p className="text-xs text-slate-500">Sessions</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="bg-slate-600 rounded-lg p-2 w-fit mx-auto mb-2">
                <Award className="w-5 h-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-slate-800">65</p>
              <p className="text-xs text-slate-500">Experts</p>
            </div>
          </div>
        </div>

        {/* Clean Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-1 shadow-sm border border-slate-200">
            <button
              onClick={() => setActiveTab('webinars')}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'webinars'
                  ? 'bg-slate-700 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Video className="w-4 h-4" />
              Webinars
            </button>
            <button
              onClick={() => setActiveTab('discussions')}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'discussions'
                  ? 'bg-slate-700 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Discussions
            </button>
          </div>
        </div>

        {/* Webinars Tab */}
        {activeTab === 'webinars' && (
          <div className="space-y-6">
            {/* Section Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Expert-Led Sessions</h2>
              <p className="text-sm text-slate-600">Professional development through industry expertise</p>
            </div>
            
            {/* Search Bar */}
            <div className="flex gap-3 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search webinars..."
                  className="w-full p-3 pl-10 bg-white border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-slate-500"
                />
              </div>
              <button className="px-4 py-3 bg-white border border-slate-300 text-slate-600 rounded-xl hover:bg-slate-50 transition-all duration-200 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {webinars.map((webinar) => (
                <div
                  key={webinar.id}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-200 group"
                >
                  {/* Status and Rating */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1 ${
                          webinar.status === 'upcoming'
                            ? 'bg-green-100 text-green-700 border border-green-200'
                            : 'bg-blue-100 text-blue-700 border border-blue-200'
                        }`}
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          webinar.status === 'upcoming' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                        {webinar.status === 'upcoming' ? 'Upcoming' : 'Available'}
                      </span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg">
                        {webinar.level}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium text-yellow-700">{webinar.rating}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 leading-snug">{webinar.title}</h3>
                  
                  {/* Speaker Info */}
                  <div className="flex items-center gap-3 mb-3 p-3 bg-slate-50 rounded-lg">
                    <div className="bg-slate-600 rounded-lg p-2">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-800 text-sm">{webinar.speaker}</p>
                      <p className="text-xs text-slate-500">{webinar.speakerTitle}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">Registered</p>
                      <p className="font-semibold text-slate-700 text-sm">{webinar.participants.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{webinar.description}</p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webinar.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Schedule */}
                  <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <div>
                        <p className="text-xs text-slate-400">Date</p>
                        <p className="font-medium text-slate-700 text-sm">{webinar.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <div>
                        <p className="text-xs text-slate-400">Time</p>
                        <p className="font-medium text-slate-700 text-sm">{webinar.time}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    className={`w-full py-3 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                      webinar.status === 'upcoming'
                        ? 'bg-slate-700 text-white hover:bg-slate-800 shadow-sm'
                        : 'bg-slate-600 text-white hover:bg-slate-700 shadow-sm'
                    }`}
                    onClick={() => {
                      if (webinar.status === 'upcoming') {
                        setSelectedWebinar(webinar);
                        setShowRegistration(true);
                      } else {
                        alert('Opening webinar recording...');
                      }
                    }}
                  >
                    {webinar.status === 'upcoming' ? (
                      <>
                        <Calendar className="w-4 h-4" />
                        Register Now
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Watch Recording
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Professional CTA */}
            <div className="text-center mt-10 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Stay Updated</h3>
              <p className="text-sm text-slate-600 mb-4">Receive notifications about upcoming webinars and finance insights</p>
              <button className="px-6 py-2 bg-slate-700 text-white rounded-lg font-medium text-sm hover:bg-slate-800 transition-all duration-200">
                Subscribe to Updates
              </button>
            </div>
          </div>
        )}

        {/* Discussion Board Tab */}
        {activeTab === 'discussions' && (
          <div className="space-y-6">
            {/* Section Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Community Discussions</h2>
              <p className="text-sm text-slate-600">Engage with peers and share professional insights</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Quick Actions */}
              <div className="lg:col-span-4">
                <div className="bg-slate-700 rounded-xl p-6 text-white shadow-sm">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Join Active Discussions</h3>
                      <p className="text-slate-300 text-sm">Connect with 7,200+ finance professionals and enthusiasts</p>
                    </div>
                    <button
                      onClick={() => setShowChat(true)}
                      className="px-6 py-3 bg-white text-slate-700 rounded-lg font-medium text-sm hover:bg-slate-100 transition-all duration-200 flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Start Chat
                    </button>
                  </div>
                </div>
              </div>

              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 sticky top-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-slate-600" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => {
                      const IconComponent = category.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-all duration-200 cursor-pointer border border-slate-100"
                        >
                          <div className="flex items-center gap-2">
                            <IconComponent className="w-4 h-4 text-slate-500" />
                            <span className="text-slate-700 font-medium text-sm">
                              {category.name}
                            </span>
                          </div>
                          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-medium">
                            {category.count}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Activity Stats */}
                  <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-3 text-sm">Today's Activity</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">New Posts</span>
                        <span className="font-semibold text-slate-800">24</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Active Users</span>
                        <span className="font-semibold text-slate-800">156</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Replies</span>
                        <span className="font-semibold text-slate-800">89</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Discussion Posts */}
              <div className="lg:col-span-3">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-slate-800">Recent Discussions</h3>
                    <button className="text-slate-600 hover:text-slate-800 font-medium text-sm flex items-center gap-1">
                      View All <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Discussion Cards */}
                  {[
                    {
                      id: 1,
                      title: "Best investment strategies for college students?",
                      author: "Priya K.",
                      category: "Investment Tips",
                      replies: 23,
                      views: 456,
                      likes: 12,
                      timeAgo: "2 hours ago",
                      isHot: true,
                      excerpt: "Looking for low-risk investment options that work well with a student budget.",
                      tags: ["SIP", "Student", "Low-Risk"]
                    },
                    {
                      id: 2,
                      title: "Credit card vs debit card security comparison",
                      author: "Rohit M.",
                      category: "Banking",
                      replies: 18,
                      views: 234,
                      likes: 8,
                      timeAgo: "4 hours ago",
                      isHot: true,
                      excerpt: "Detailed comparison of security features and fraud protection mechanisms.",
                      tags: ["Security", "Banking", "Cards"]
                    },
                    {
                      id: 3,
                      title: "EMI calculation formula step-by-step guide",
                      author: "Sneha R.",
                      category: "Calculations",
                      replies: 15,
                      views: 189,
                      likes: 6,
                      timeAgo: "6 hours ago",
                      isHot: false,
                      excerpt: "Complete breakdown of EMI formula with practical examples.",
                      tags: ["EMI", "Loans", "Math"]
                    }
                  ].map((discussion) => (
                    <div
                      key={discussion.id}
                      className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-200 cursor-pointer group"
                      onClick={() => alert(`Opening discussion: ${discussion.title}`)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-slate-600 rounded-lg p-3">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-base font-semibold text-slate-800 group-hover:text-slate-600 transition-colors">
                              {discussion.title}
                            </h3>
                            {discussion.isHot && (
                              <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-md">
                                Hot
                              </span>
                            )}
                          </div>
                          
                          <p className="text-sm text-slate-600 mb-3">{discussion.excerpt}</p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {discussion.tags.map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1 text-slate-500">
                                <User className="w-3 h-3" />
                                <span className="text-xs font-medium">{discussion.author}</span>
                              </div>
                              <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">
                                {discussion.category}
                              </span>
                              <span className="text-slate-400 text-xs">{discussion.timeAgo}</span>
                            </div>
                            
                            <div className="flex items-center gap-3 text-slate-500">
                              <span className="flex items-center gap-1 text-xs">
                                <ThumbsUp className="w-3 h-3" />
                                {discussion.likes}
                              </span>
                              <span className="flex items-center gap-1 text-xs">
                                <MessageSquare className="w-3 h-3" />
                                {discussion.replies}
                              </span>
                              <span className="flex items-center gap-1 text-xs">
                                <Eye className="w-3 h-3" />
                                {discussion.views}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  ))}

                  {/* Tips Section */}
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Lightbulb className="w-5 h-5 text-slate-600" />
                      <h3 className="text-lg font-semibold text-slate-800">Discussion Guidelines</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Use clear, specific titles",
                        "Provide relevant context", 
                        "Choose appropriate categories",
                        "Maintain professional tone"
                      ].map((tip, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-5 h-5 bg-slate-600 rounded-md flex items-center justify-center font-bold text-white text-xs">
                            {index + 1}
                          </div>
                          <span className="text-slate-600">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Load More */}
                  <div className="text-center">
                    <button className="px-6 py-3 bg-white border border-slate-300 text-slate-600 rounded-xl font-medium text-sm hover:bg-slate-50 transition-all duration-200">
                      Load More Discussions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
    </div>
    <ChatInterface />
    <Footer />
    </div>
  );
}

export default FinanceForum;