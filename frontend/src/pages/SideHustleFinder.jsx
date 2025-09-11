import React, { useState, useEffect } from "react";
import Footer from "../Services/Footer";
import Header from "../Services/Header";
import Chat from "../Services/Chat";

const SideHustleFinder = () => {
  const financeRoles = {
    Commerce: [
      {
        role: "📊 Financial Analyst",
        skills: ["Data Analysis", "Excel", "Financial Modelling", "Problem Solving", "Forecasting", "Business Strategy"],
        description: "Evaluates financial data to assist in decision-making. 📈 Creates detailed reports for forecasting. 🤝 Collaborates with teams to optimize budgeting.",
        message: "🔎 Translates complex numbers into actionable insights. 📈 Helps leadership forecast future trends with accuracy. 🧑‍🤝‍🧑 Bridges departments by providing budget clarity. 🚀 Supports long-term growth through smarter financial planning.",
        salary: "8,00,000 - 12,00,000",
        experience: "2-4 years",
        education: "Bachelor's in Finance, Accounting, or Economics. CFA preferred."
      },
      {
        role: "🏦 Investment Banking Analyst",
        skills: ["Financial Modelling", "Market Research", "Valuation", "Presentation", "Negotiation", "Due Diligence"],
        description: "Supports mergers and financial transactions. 📑 Prepares pitch books and client decks. ⏱️ Manages high-pressure deal timelines.",
        message: "💼 Works behind-the-scenes to close high-value deals. 📑 Prepares industry research that influences billion-dollar mergers. ⏳ Masters time management under extreme deadlines. 🌍 Builds global connections with clients and investors.",
        salary: "12,00,000 - 40,00,000",
        experience: "2-5 years",
        education: "Bachelor's in Finance, Business, or Economics. MBA is a strong plus."
      },
      {
        role: "💼 Private Equity Analyst",
        skills: ["Due Diligence", "Valuation", "Market Research", "Strategic Thinking", "Portfolio Monitoring"],
        description: "Researches private company investments. 🔍 Conducts due diligence and evaluates buyout targets. 📊 Tracks portfolio performance metrics.",
        message: "📊 Evaluates companies for hidden growth opportunities. 💡 Suggests strategic moves to maximize investment returns. 🤝 Collaborates with entrepreneurs and executives. 🛠️ Tracks portfolio firms to boost operational efficiency.",
        salary: "10,00,000 - 24,00,000",
        experience: "2-4 years",
        education: "Bachelor's in Finance, Economics, or Business. CFA Level I/II is preferred."
      },
      {
        role: "📱 FinTech Product Manager",
        skills: ["Product Dev", "User Research", "Finance", "Agile Methodology", "Wireframing", "Stakeholder Communication"],
        description: "Leads financial product development. 🧪 Runs user testing and gathers feedback. ⚙️ Coordinates design and dev teams for releases.",
        message: "📱 Turns ideas into working digital products. 🧪 Uses customer research to make apps more user-friendly. ⚙️ Keeps engineers, designers, and business teams aligned. 🚀 Ensures new features launch smoothly.",
        salary: "11,00,000 - 20,00,000",
        experience: "3-5 years",
        education: "Bachelor's in Business, Computer Science, or Finance. MBA or Product Management certification is a plus."
      },
      {
        role: "💰 Treasury Analyst",
        skills: ["Cash Flow", "Risk Management", "Liquidity Planning", "Bank Reconciliation", "Capital Management"],
        description: "Manages a company's cash flow and forecasts. 📊 Analyzes liquidity and funding needs. 📆 Plans short-term and long-term investments.",
        message: "💰 Keeps track of money moving in and out daily. 📊 Makes sure the business never runs out of cash. 📆 Plans short- and long-term investments wisely. 🛡️ Suggests ways to lower risks while growing funds.",
        salary: "9,00,000 - 15,00,000",
        experience: "2-3 years",
        education: "Bachelor's in Finance, Accounting, or Economics."
      },
      {
        role: "🧾 Credit Analyst",
        skills: ["Credit Risk", "Financial Modelling", "Underwriting", "Report Writing", "Data Interpretation", "Regulatory Knowledge"],
        description: "Assesses loan and credit risk. 📉 Analyzes borrower financial health. 📋 Prepares credit reports for decisions.",
        message: "🧾 Studies financial history to check who is trustworthy. 📉 Uses scoring models to detect risky loans. 📋 Prepares reports that guide safe lending. 🤝 Shares advice with teams for smart credit approval.",
        salary: "8,00,000 - 14,00,000",
        experience: "1-2 years",
        education: "Bachelor's in Finance, Accounting, or related fields."
      },
      {
        role: "🛡️ Risk Manager",
        skills: ["Risk Assessment", "Modelling", "Compliance", "Internal Controls", "Scenario Analysis", "Communication"],
        description: "Identifies and mitigates financial risks. 🧮 Builds risk models and simulations. 🤝 Works with legal and compliance for oversight.",
        message: "🛡️ Spots risks before they become problems. 🧮 Runs stress tests to check business stability. 🤝 Ensures the company follows regulations. 📊 Gives advice to reduce chances of financial losses.",
        salary: "12,00,000 - 18,00,000",
        experience: "4-6 years",
        education: "Bachelor's in Finance, Economics, or Risk Management. FRM certification is highly valued."
      },
      {
        role: "🧾 Tax Manager",
        skills: ["Tax Planning", "Compliance"],
        description: "Handles corporate tax planning and filing. 📊 Develops strategies for minimizing liabilities. 🔍 Ensures full legal and regulatory compliance.",
        message: "🧾 Ensures taxes are filed correctly and on time. 📊 Finds ways to reduce tax burden legally. 🔍 Keeps up with new tax rules. 🤝 Advises executives about smart tax planning.",
        salary: "10,00,000 - 17,00,000",
        experience: "3-5 years",
        education: "Bachelor's in Accounting, Finance, or Taxation. CA or CPA preferred."
      },
      {
        role: "🔍 Internal Auditor",
        skills: ["Audit", "Internal Controls", "Risk Evaluation", "Report Writing", "Financial Analysis"],
        description: "Reviews financial records for accuracy. 📚 Audits internal control systems. 🧾 Reports inefficiencies and fraud risks.",
        message: "🔍 Checks systems for mistakes or fraud. 📚 Tests if company rules are followed. 🧾 Writes reports suggesting improvements. 🛡️ Ensures money is used efficiently.",
        salary: "9,50,000 - 16,00,000",
        experience: "2-4 years",
        education: "Bachelor's in Accounting, Finance, or Auditing. CIA or CA certification is an advantage."
      }
    ],

    Engineering: [
      {
        role: "⚙️ Financial Engineer",
        skills: ["Quant Finance", "Programming", "Derivatives", "Monte Carlo Simulation", "Risk Modelling", "C++"],
        description: "Designs advanced financial products using complex mathematical models. 🧮 Builds pricing engines and risk metrics for structured products. 📊 Works closely with traders to improve accuracy in derivatives pricing.",
        message: "🧮 Uses math and coding to design financial tools. ⚙️ Creates simulations to price complex products. 🧠 Works with traders to make models practical. 📊 Improves tools that measure financial risks.",
        salary: "11,50,000 - 20,00,000",
        experience: "3-5 years",
        education: "Bachelor's/Master's in Quantitative Finance, Mathematics, or Computer Science."
      },
      {
        role: "⛓️ Blockchain Developer",
        skills: ["Blockchain", "Smart Contracts", "Solidity", "Ethereum", "Security", "Consensus Algorithms"],
        description: "Develops decentralized financial applications on blockchain platforms. 💻 Writes secure smart contracts and ensures efficiency in execution. 🔐 Maintains blockchain nodes and protocols to guarantee smooth operation.",
        message: "⛓️ Creates financial apps using blockchain. 💻 Writes smart contracts for secure transactions. 🔐 Ensures systems are safe from attacks. 📊 Improves blockchain speed and efficiency.",
        salary: "10,00,000 - 18,00,000",
        experience: "2-4 years",
        education: "Bachelor's in Computer Science, IT, or related fields. Blockchain certification is a plus."
      },
      {
        role: "📉 Quant Analyst",
        skills: ["Math", "Python", "Risk", "Statistical Modelling", "Data Analysis"],
        description: "Builds quantitative models to price assets and manage risk. 📊 Runs backtesting on trading strategies using historical data. 🧮 Develops statistical methods to improve investment performance.",
        message: "📉 Uses statistics to understand markets. 🔬 Tests financial strategies on past data. 🤝 Helps traders improve strategies. 🧠 Uses analytics to make better investment decisions.",
        salary: "9,00,000 - 15,00,000",
        experience: "2-3 years",
        education: "Bachelor's/Master's in Mathematics, Statistics, Finance, or Engineering."
      },
      {
        role: "💾 Finance Software Developer",
        skills: ["C++", "APIs", "Finance", "Database Design", "Java", "Software Architecture"],
        description: "Builds scalable software solutions for banks and trading firms. 💾 Integrates APIs with live market data to enable real-time trading. 🛠️ Updates legacy systems into modern cloud-ready platforms.",
        message: "💾 Designs safe, scalable financial apps. 🔌 Connects trading apps to live market feeds. 🛠️ Updates old systems for modern use. 🤝 Works with teams to meet business needs.",
        salary: "10,00,000 - 17,00,000",
        experience: "3-5 years",
        education: "Bachelor's in Computer Science, Software Engineering, or IT."
      },
      {
        role: "📊 Data Scientist in Finance",
        skills: ["ML", "Analytics", "Predictive Modelling", "Data Cleaning", "Visualization"],
        description: "Uses machine learning to uncover insights from massive financial datasets. 📊 Builds predictive models for fraud detection and forecasting. 🧠 Cleans and organizes messy data into usable formats.",
        message: "📊 Finds trends in huge datasets. 🧠 Creates ML models for fraud detection and forecasting. 📢 Turns results into business-friendly reports. 🛠️ Supports investments with analytics.",
        salary: "11,00,000 - 20,00,000",
        experience: "3-5 years",
        education: "Bachelor's in Computer Science, Statistics, or Data Science. Master's preferred."
      },
      {
        role: "📈 Algorithmic Trader",
        skills: ["Algo Dev", "ML", "Python", "Strategy Testing", "Market Microstructure"],
        description: "Develops automated trading systems that execute at lightning speed. 📈 Tests and refines strategies through simulations and historical backtests. 🛡️ Balances high-frequency execution with risk management.",
        message: "📈 Creates trading algorithms for fast execution. 🧪 Tests strategies on real-time and old data. 🛡️ Minimizes risks in live trades. 🤝 Works with risk managers for safe results.",
        salary: "12,00,000 - 24,00,000",
        experience: "4-6 years",
        education: "Bachelor's in Finance, Computer Science, or Engineering. Master's in Quantitative Finance is a plus."
      },
      {
        role: "🌐 Crypto Developer",
        skills: ["Web3", "Security", "Token Standards", "Blockchain Protocols", "JavaScript"],
        description: "Designs and implements decentralized applications in crypto ecosystems. 🌐 Works on NFTs, tokens, and wallet integration features. 🔐 Ensures code security and scalability for global adoption.",
        message: "🌐 Builds crypto and NFT apps. 🔐 Writes safe token contracts. 📲 Creates smooth wallet integrations. ⚙️ Improves blockchain speed and scalability.",
        salary: "11,00,000 - 20,00,000",
        experience: "3-5 years",
        education: "Bachelor's in Computer Science, IT, or related fields."
      },
      {
        role: "🔧 DevOps Engineer",
        skills: ["CI/CD", "Cloud", "Monitoring", "Infrastructure as Code", "Scripting"],
        description: "Ensures smooth operation of financial applications and platforms. ☁️ Deploys scalable cloud infrastructure for trading and banking systems.",
        message: "⚙️ Keeps financial infrastructure running. ☁️ Deploys apps on cloud. 🛡️ Ensures uptime for trading platforms. 🔧 Automates processes with CI/CD.",
        salary: "9,00,000 - 15,00,000",
        experience: "2-3 years",
        education: "Bachelor's in Computer Science, IT, or related fields."
      },
      {
        role: "🛡️ IT Security Analyst",
        skills: ["Cybersecurity"],
        description: "Safeguards financial platforms from cyber threats. 🛡️ Monitors traffic for suspicious activity and prevents breaches. 🔍 Performs penetration testing to identify vulnerabilities.",
        message: "🛡️ Guards financial apps from cyberattacks. 🔍 Investigates suspicious activity. 🔐 Keeps systems updated with patches. 📊 Finds weak points through tests.",
        salary: "8,50,000 - 14,00,000",
        experience: "2-3 years",
        education: "Bachelor's in Cybersecurity, Computer Science, or IT. Certifications like CEH/CISSP are valuable."
      }
    ],

    Business: [
      {
        role: "📈 Business Development Manager",
        skills: ["Sales Strategy", "Relationship Building", "Market Analysis", "Negotiation", "Client Management", "Revenue Growth"],
        description: "Drives business growth through strategic partnerships and client acquisition. 🤝 Builds long-term relationships with key stakeholders. 📊 Identifies new market opportunities and revenue streams.",
        message: "📈 Creates strategies to grow business revenue. 🤝 Builds partnerships that last for years. 💼 Opens doors to new markets and clients. 🎯 Meets targets while maintaining quality relationships.",
        salary: "10,00,000 - 18,00,000",
        experience: "3-5 years",
        education: "Bachelor's in Business, Marketing, or Finance. MBA preferred."
      },
      {
        role: "💼 Strategic Consultant",
        skills: ["Strategy Development", "Problem Solving", "Market Research", "Data Analysis", "Presentation", "Change Management"],
        description: "Advises companies on high-level business strategies and operational improvements. 🎯 Analyzes market trends to recommend strategic pivots. 📊 Implements efficiency programs across departments.",
        message: "💼 Helps businesses make smart strategic decisions. 🎯 Studies markets to find growth opportunities. 📊 Designs plans to improve company performance. 🚀 Guides organizations through major changes.",
        salary: "12,00,000 - 25,00,000",
        experience: "4-6 years",
        education: "Bachelor's in Business, Economics, or related fields. MBA from top-tier school preferred."
      },
      {
        role: "🎯 Project Manager",
        skills: ["Project Planning", "Team Leadership", "Risk Management", "Budget Control", "Communication", "Agile/Scrum"],
        description: "Leads cross-functional teams to deliver projects on time and within budget. ⏰ Manages project timelines and resource allocation. 🤝 Coordinates between different departments for seamless execution.",
        message: "🎯 Ensures projects finish on time and budget. ⏰ Coordinates teams to work efficiently together. 🤝 Solves problems before they become roadblocks. 📊 Tracks progress and communicates updates clearly.",
        salary: "9,00,000 - 16,00,000",
        experience: "3-5 years",
        education: "Bachelor's in Business, Engineering, or related fields. PMP certification is valuable."
      },
      {
        role: "📊 Management Consultant",
        skills: ["Business Analysis", "Process Improvement", "Financial Modeling", "Stakeholder Management", "Change Leadership"],
        description: "Helps organizations optimize their operations and solve complex business challenges. 🔄 Redesigns business processes for maximum efficiency. 💡 Provides actionable recommendations to senior management.",
        message: "📊 Analyzes how businesses can work better. 🔄 Redesigns processes to save time and money. 💡 Gives executives clear advice on improvements. 🎯 Helps companies stay competitive in their markets.",
        salary: "11,00,000 - 20,00,000",
        experience: "3-5 years",
        education: "Bachelor's in Business, Finance, or Engineering. MBA strongly preferred."
      },
      {
        role: "💰 Corporate Development Analyst",
        skills: ["M&A Analysis", "Financial Modeling", "Due Diligence", "Strategic Planning", "Market Research", "Valuation"],
        description: "Evaluates mergers, acquisitions, and strategic partnerships. 🔍 Conducts financial due diligence on potential deals. 📈 Models the financial impact of strategic initiatives.",
        message: "💰 Evaluates companies for mergers and partnerships. 🔍 Investigates deals to find hidden risks and opportunities. 📈 Creates models to predict success of business combinations. 🤝 Supports executives in major strategic decisions.",
        salary: "10,50,000 - 18,00,000",
        experience: "2-4 years",
        education: "Bachelor's in Finance, Business, or Economics. MBA or CFA is a plus."
      },
      {
        role: "🏢 Operations Manager",
        skills: ["Operations Management", "Process Optimization", "Quality Control", "Team Management", "Cost Reduction", "Supply Chain"],
        description: "Oversees daily business operations and ensures efficient workflow. ⚙️ Optimizes processes to reduce costs and improve quality. 👥 Manages teams to achieve operational excellence.",
        message: "🏢 Keeps daily operations running smoothly. ⚙️ Finds ways to do things faster and cheaper. 👥 Leads teams to achieve quality standards. 📊 Monitors performance and fixes bottlenecks quickly.",
        salary: "8,50,000 - 15,00,000",
        experience: "3-5 years",
        education: "Bachelor's in Business, Operations Management, or related fields."
      },
      {
        role: "📈 Market Research Analyst",
        skills: ["Market Analysis", "Consumer Research", "Data Interpretation", "Trend Analysis", "Survey Design", "Competitive Intelligence"],
        description: "Studies market conditions to examine potential sales opportunities. 📊 Conducts surveys and analyzes consumer behavior patterns. 🎯 Provides insights to guide marketing and product strategies.",
        message: "📈 Studies what customers want and need. 📊 Conducts research to understand market trends. 🎯 Helps companies make products people will buy. 💡 Provides insights that guide business decisions.",
        salary: "7,50,000 - 13,00,000",
        experience: "2-4 years",
        education: "Bachelor's in Business, Marketing, Statistics, or Economics."
      },
      {
        role: "🎨 Brand Manager",
        skills: ["Brand Strategy", "Marketing Campaigns", "Consumer Psychology", "Creative Direction", "Budget Management", "Analytics"],
        description: "Develops and maintains brand identity and market positioning. 🎨 Creates marketing campaigns that resonate with target audiences. 📊 Monitors brand performance and adjusts strategies accordingly.",
        message: "🎨 Builds strong brand identity that customers love. 📢 Creates campaigns that connect with target audiences. 📊 Tracks how well the brand performs in the market. 🎯 Ensures all marketing stays consistent with brand values.",
        salary: "9,00,000 - 16,00,000",
        experience: "3-5 years",
        education: "Bachelor's in Marketing, Business, or Communications. MBA is beneficial."
      },
      {
        role: "🤝 Account Manager",
        skills: ["Client Relations", "Account Growth", "Problem Solving", "Communication", "Sales", "Customer Service"],
        description: "Manages relationships with key clients and drives account growth. 🤝 Serves as primary point of contact for important customers. 📈 Identifies upselling and cross-selling opportunities.",
        message: "🤝 Builds strong relationships with important clients. 📈 Helps customers succeed while growing revenue. 🎯 Solves problems quickly to keep clients happy. 💼 Finds new ways to add value to existing accounts.",
        salary: "8,00,000 - 14,00,000",
        experience: "2-4 years",
        education: "Bachelor's in Business, Marketing, or related fields."
      }
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState("Commerce");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredRoles = financeRoles[selectedCategory].filter(
    (role) =>
      role.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      </div>
        <Header />

      <div className="relative z-10 px-4 py-8 md:px-6 md:py-12 mt-12">
        <div className="max-w-7xl mx-auto">
          <Chat />
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
              Explore Career Opportunities
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight mb-6">
              Finance Careers
              <br />
              {/* <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Made Simple</span> */}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover your perfect finance role across Commerce, Engineering, and Business domains. 
              Explore salaries, skills, and career paths tailored for your success.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Commerce", "Engineering", "Business"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl shadow-blue-500/25 scale-105"
                    : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105 border border-gray-200"
                }`}
              >
                <span className="relative z-10">{category}</span>
                {selectedCategory === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30"></div>
                )}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-16">
            <div className="relative w-full max-w-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-2 shadow-2xl">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search roles, skills, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-lg placeholder-gray-500 border-none outline-none pr-4"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 text-center shadow-xl border border-gray-100">
              <div className="text-3xl font-black text-blue-600 mb-2">{filteredRoles.length}+</div>
              <div className="text-gray-600 font-medium">Available Roles</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 text-center shadow-xl border border-gray-100">
              <div className="text-3xl font-black text-green-600 mb-2">₹8L-40L</div>
              <div className="text-gray-600 font-medium">Salary Range</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 text-center shadow-xl border border-gray-100">
              <div className="text-3xl font-black text-purple-600 mb-2">3</div>
              <div className="text-gray-600 font-medium">Career Streams</div>
            </div>
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filteredRoles.map((role, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedRole(role);
                  setShowModal(true);
                }}
                className="group cursor-pointer bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100/50 relative overflow-hidden min-h-[350px] flex flex-col"
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Icon */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl group-hover:animate-bounce">{role.role.split(' ')[0]}</span>
                </div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Role Title */}
                  <h3 className="text-2xl font-black text-gray-800 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {role.role.slice(2)}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                    {role.description}
                  </p>
                  
                  {/* Skills Preview */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {role.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold border border-blue-200/50">
                          {skill}
                        </span>
                      ))}
                      {role.skills.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold">
                          +{role.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Bottom Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-500">{role.experience}</span>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg">
                      ₹{role.salary.split(' - ')[0]}+
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredRoles.length === 0 && (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No roles found</h3>
              <p className="text-gray-500 text-lg">Try adjusting your search criteria or explore different categories</p>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Modal */}
      {showModal && selectedRole && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative animate-in zoom-in duration-300">
            
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
              
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative z-10">
                <div className="text-6xl mb-4">{selectedRole.role.split(' ')[0]}</div>
                <h2 className="text-3xl font-black mb-4 leading-tight">{selectedRole.role.slice(2)}</h2>
                
                <div className="flex flex-wrap gap-3 items-center">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-2xl font-bold">
                    {selectedRole.experience}
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-2xl font-bold shadow-lg">
                    ₹{selectedRole.salary}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto">
              
              {/* Education */}
              {selectedRole.education && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-3xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white text-xl">🎓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-blue-700 mb-2">Education Requirements</h4>
                      <p className="text-blue-600 leading-relaxed">{selectedRole.education}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Skills */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800">Essential Skills</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {selectedRole.skills.map((skill, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200/50 text-purple-800 px-4 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition-transform duration-200">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* What You'll Do */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl">💼</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800">What You'll Do</h4>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200/50 rounded-3xl p-6">
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {selectedRole.message}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6 border-t border-gray-200">
                <button 
                  onClick={() => setShowModal(false)}
                  className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 px-8 rounded-3xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                >
                  <span className="relative z-10">Explore More Opportunities</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SideHustleFinder;