import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Learningpath = () => {
  const [openSection, setOpenSection] = useState(null);
  const [progress, setProgress] = useState(0);
  const [completedModules, setCompletedModules] = useState(0);
  const [discussion, setDiscussion] = useState('');
  const [discussions, setDiscussions] = useState([
    {
      username: 'Username',
      comment: 'This course has been incredibly helpful in understanding the basics of financial accounting.',
      timestamp: '2025-02-23 12:00'
    },
    // Add more initial discussion objects as needed
  ]);

  const navigate = useNavigate();

  // Learning path data
  const learningPaths = [
    {
      id: 'accounting',
      number: 1,
      title: 'Accounting Essentials',
      description: 'A comprehensive introduction to fundamental accounting principles and practices.',
      subtitle: 'Learn about debits, credits, and the basic framework of financial accounting.',
      modules: [
        { name: "Accounting Glossary", route: "/TerminologyPage" },
        { name: "The Concepts Of 'DEBIT' AND 'CREDIT'", route: "/Credit_Debit" },
        { name: "Accounting Overview", route: "/Accounting" },
        { name: "Pillars of Accounting", route: "/Pillars_Of_Accounting" }
      ]
    },
    {
      id: 'finance',
      number: 2,
      title: 'Finance Essentials',
      description: 'Master the core concepts of financial management and analysis.',
      subtitle: 'Understand financial statements, ratios, and decision-making processes.',
      modules: [
        { name: "Finance Principles", route: "/Finance_Principles" },
        { name: "Goal Of Financial Management", route: "/Goals_Finance" },
        { name: "Saving Essentials", route: "/Saving_Essentials" },
        { name: "Budgeting Basics", route: "/Budgeting_Basics" },
        { name: "Deposit plans", route: "/DepositEssentials" },
        { name: "Mutual Funds", route: "/MutualFundEssentials" },
        { name: "Stock Market", route: "/StockMarketBasics" },
        {
          name: "Simple vs. Compound Interest",
          route: "/SimpleVsCompoundInterest",
        },
        { name: "Impact on Loans", route: "/LoanImpacts" },


      ]
    }
  ];

  const handleModuleClick = (route) => {
    navigate(route);
  };

  const handleDiscussionSubmit = () => {
    if (discussion.trim()) {
      setDiscussions([
        {
          username: 'You',
          comment: discussion,
          timestamp: 'Just now'
        },
        ...discussions
      ]);
      setDiscussion('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#002147] text-white py-4 px-6">
        <h1 className="text-xl font-semibold">Learning Hub</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#002147] mb-2">Learning Path</h1>
          <p className="text-gray-600">
            Embark on a journey designed to make you a financial expert, step by step!
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#002147] mb-4">Total Module Completed</h2>
            <p className="text-4xl font-bold text-[#F39C12]">{completedModules}/6</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#002147] mb-4">Overall Progress</h2>
            <div className="h-4 bg-gray-200 rounded-full">
              <div 
                className="h-4 bg-[#002147] rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Learning Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#002147] mb-6">Learning Timeline</h2>
          
          <div className="space-y-6">
            {learningPaths.map((path) => (
              <div key={path.id} className="bg-white rounded-lg p-6 shadow-sm">
                <div 
                  className="flex items-start cursor-pointer"
                  onClick={() => setOpenSection(openSection === path.id ? null : path.id)}
                >
                  <div className="bg-[#002147] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    {path.number}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-[#002147]">{path.title}</h3>
                    <p className="text-gray-600 mt-1">{path.description}</p>
                    <p className="text-gray-500 text-sm mt-2">{path.subtitle}</p>
                  </div>
                </div>

                {openSection === path.id && (
                  <div className="mt-6 ml-14 space-y-3">
                    {path.modules.map((module, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleModuleClick(module.route)}
                        className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-[#002147] transition-colors"
                      >
                        {module.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Engage With Peers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#002147] mb-6">Engage With Peers</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-600 mb-6">
              The experts in their own experience provide important perspectives and a reality check, 
              contribute to the development of beliefs and behaviors
            </p>
            <button 
              onClick={() => navigate('/ForumPage')}
              className="w-full bg-[#002147] text-white py-3 rounded-lg hover:bg-[#001a38] transition-colors"
            >
              Dive In
            </button>
          </div>
        </section>

        {/* Discussion Board */}
        <section>
          <h2 className="text-2xl font-bold text-[#002147] mb-6">Discussion Board</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <textarea
              value={discussion}
              onChange={(e) => setDiscussion(e.target.value)}
              placeholder="Post your thoughts or questions here..."
              className="w-full p-4 border border-gray-200 rounded-lg mb-4 h-32 resize-none"
            />
            <button
              onClick={handleDiscussionSubmit}
              className="bg-[#F39C12] text-white px-6 py-2 rounded-lg hover:bg-[#e08e11] transition-colors"
            >
              Post Discussion
            </button>

            <div className="mt-8 space-y-4">
              {discussions.map((disc, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-[#002147]">{disc.username}</span>
                    <span className="text-sm text-gray-500">{disc.timestamp}</span>
                  </div>
                  <p className="text-gray-600">{disc.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#002147] text-white py-6 px-4 text-center mt-12">
        <p className="text-sm">© 2025 Fin-Quest. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Learningpath;
