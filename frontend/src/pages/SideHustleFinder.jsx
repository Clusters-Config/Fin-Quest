import React, { useState } from "react";
import Chat from "../Services/Chat";
import Footer from "../Services/Footer";
import Header from "../Services/Header";

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
        education: "Bachelor’s in Finance, Accounting, or Economics. CFA preferred."
      },
      {
        role: "🏦 Investment Banking Analyst",
        skills: ["Financial Modelling", "Market Research", "Valuation", "Presentation", "Negotiation", "Due Diligence"],
        description: "Supports mergers and financial transactions. 📑 Prepares pitch books and client decks. ⏱️ Manages high-pressure deal timelines.",
        message: "💼 Works behind-the-scenes to close high-value deals. 📑 Prepares industry research that influences billion-dollar mergers. ⏳ Masters time management under extreme deadlines. 🌍 Builds global connections with clients and investors.",
        salary: "12,00,000 - 40,00,000",
        experience: "2-5 years",
        education: "Bachelor’s in Finance, Business, or Economics. MBA is a strong plus."
      },
      {
        role: "💼 Private Equity Analyst",
        skills: ["Due Diligence", "Valuation", "Market Research", "Strategic Thinking", "Portfolio Monitoring"],
        description: "Researches private company investments. 🔍 Conducts due diligence and evaluates buyout targets. 📊 Tracks portfolio performance metrics.",
        message: "📊 Evaluates companies for hidden growth opportunities. 💡 Suggests strategic moves to maximize investment returns. 🤝 Collaborates with entrepreneurs and executives. 🛠️ Tracks portfolio firms to boost operational efficiency.",
        salary: "10,00,000 - 24,00,000",
        experience: "2-4 years",
        education: "Bachelor’s in Finance, Economics, or Business. CFA Level I/II is preferred."
      },
      {
        role: "📱 FinTech Product Manager",
        skills: ["Product Dev", "User Research", "Finance", "Agile Methodology", "Wireframing", "Stakeholder Communication"],
        description: "Leads financial product development. 🧪 Runs user testing and gathers feedback. ⚙️ Coordinates design and dev teams for releases.",
        message: "📱 Turns ideas into working digital products. 🧪 Uses customer research to make apps more user-friendly. ⚙️ Keeps engineers, designers, and business teams aligned. 🚀 Ensures new features launch smoothly.",
        salary: "11,00,000 - 20,00,000",
        experience: "3-5 years",
        education: "Bachelor’s in Business, Computer Science, or Finance. MBA or Product Management certification is a plus."
      },
      {
        role: "💰 Treasury Analyst",
        skills: ["Cash Flow", "Risk Management", "Liquidity Planning", "Bank Reconciliation", "Capital Management"],
        description: "Manages a company’s cash flow and forecasts. 📊 Analyzes liquidity and funding needs. 📆 Plans short-term and long-term investments.",
        message: "💰 Keeps track of money moving in and out daily. 📊 Makes sure the business never runs out of cash. 📆 Plans short- and long-term investments wisely. 🛡️ Suggests ways to lower risks while growing funds.",
        salary: "9,00,000 - 15,00,000",
        experience: "2-3 years",
        education: "Bachelor’s in Finance, Accounting, or Economics."
      },
      {
        role: "🧾 Credit Analyst",
        skills: ["Credit Risk", "Financial Modelling", "Underwriting", "Report Writing", "Data Interpretation", "Regulatory Knowledge"],
        description: "Assesses loan and credit risk. 📉 Analyzes borrower financial health. 📋 Prepares credit reports for decisions.",
        message: "🧾 Studies financial history to check who is trustworthy. 📉 Uses scoring models to detect risky loans. 📋 Prepares reports that guide safe lending. 🤝 Shares advice with teams for smart credit approval.",
        salary: "8,00,000 - 14,00,000",
        experience: "1-2 years",
        education: "Bachelor’s in Finance, Accounting, or related fields."
      },
      {
        role: "🛡️ Risk Manager",
        skills: ["Risk Assessment", "Modelling", "Compliance", "Internal Controls", "Scenario Analysis", "Communication"],
        description: "Identifies and mitigates financial risks. 🧮 Builds risk models and simulations. 🤝 Works with legal and compliance for oversight.",
        message: "🛡️ Spots risks before they become problems. 🧮 Runs stress tests to check business stability. 🤝 Ensures the company follows regulations. 📊 Gives advice to reduce chances of financial losses.",
        salary: "12,00,000 - 18,00,000",
        experience: "4-6 years",
        education: "Bachelor’s in Finance, Economics, or Risk Management. FRM certification is highly valued."
      },
      {
        role: "🧾 Tax Manager",
        skills: ["Tax Planning", "Compliance"],
        description: "Handles corporate tax planning and filing. 📊 Develops strategies for minimizing liabilities. 🔍 Ensures full legal and regulatory compliance.",
        message: "🧾 Ensures taxes are filed correctly and on time. 📊 Finds ways to reduce tax burden legally. 🔍 Keeps up with new tax rules. 🤝 Advises executives about smart tax planning.",
        salary: "10,00,000 - 17,00,000",
        experience: "3-5 years",
        education: "Bachelor’s in Accounting, Finance, or Taxation. CA or CPA preferred."
      },
      {
        role: "🔍 Internal Auditor",
        skills: ["Audit", "Internal Controls", "Risk Evaluation", "Report Writing", "Financial Analysis"],
        description: "Reviews financial records for accuracy. 📚 Audits internal control systems. 🧾 Reports inefficiencies and fraud risks.",
        message: "🔍 Checks systems for mistakes or fraud. 📚 Tests if company rules are followed. 🧾 Writes reports suggesting improvements. 🛡️ Ensures money is used efficiently.",
        salary: "9,50,000 - 16,00,000",
        experience: "2-4 years",
        education: "Bachelor’s in Accounting, Finance, or Auditing. CIA or CA certification is an advantage."
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
    education: "Bachelor’s/Master’s in Quantitative Finance, Mathematics, or Computer Science."
  },
  {
    role: "⛓️ Blockchain Developer",
    skills: ["Blockchain", "Smart Contracts", "Solidity", "Ethereum", "Security", "Consensus Algorithms"],
    description: "Develops decentralized financial applications on blockchain platforms. 💻 Writes secure smart contracts and ensures efficiency in execution. 🔐 Maintains blockchain nodes and protocols to guarantee smooth operation.",
    message: "⛓️ Creates financial apps using blockchain. 💻 Writes smart contracts for secure transactions. 🔐 Ensures systems are safe from attacks. 📊 Improves blockchain speed and efficiency.",
    salary: "10,00,000 - 18,00,000",
    experience: "2-4 years",
    education: "Bachelor’s in Computer Science, IT, or related fields. Blockchain certification is a plus."
  },
  {
    role: "📉 Quant Analyst",
    skills: ["Math", "Python", "Risk", "Statistical Modelling", "Data Analysis"],
    description: "Builds quantitative models to price assets and manage risk. 📊 Runs backtesting on trading strategies using historical data. 🧮 Develops statistical methods to improve investment performance.",
    message: "📉 Uses statistics to understand markets. 🔬 Tests financial strategies on past data. 🤝 Helps traders improve strategies. 🧠 Uses analytics to make better investment decisions.",
    salary: "9,00,000 - 15,00,000",
    experience: "2-3 years",
    education: "Bachelor’s/Master’s in Mathematics, Statistics, Finance, or Engineering."
  },
  {
    role: "💾 Finance Software Developer",
    skills: ["C++", "APIs", "Finance", "Database Design", "Java", "Software Architecture"],
    description: "Builds scalable software solutions for banks and trading firms. 💾 Integrates APIs with live market data to enable real-time trading. 🛠️ Updates legacy systems into modern cloud-ready platforms.",
    message: "💾 Designs safe, scalable financial apps. 🔌 Connects trading apps to live market feeds. 🛠️ Updates old systems for modern use. 🤝 Works with teams to meet business needs.",
    salary: "10,00,000 - 17,00,000",
    experience: "3-5 years",
    education: "Bachelor’s in Computer Science, Software Engineering, or IT."
  },
  {
    role: "📊 Data Scientist in Finance",
    skills: ["ML", "Analytics", "Predictive Modelling", "Data Cleaning", "Visualization"],
    description: "Uses machine learning to uncover insights from massive financial datasets. 📊 Builds predictive models for fraud detection and forecasting. 🧠 Cleans and organizes messy data into usable formats.",
    message: "📊 Finds trends in huge datasets. 🧠 Creates ML models for fraud detection and forecasting. 📢 Turns results into business-friendly reports. 🛠️ Supports investments with analytics.",
    salary: "11,00,000 - 20,00,000",
    experience: "3-5 years",
    education: "Bachelor’s in Computer Science, Statistics, or Data Science. Master’s preferred."
  },
  {
    role: "📈 Algorithmic Trader",
    skills: ["Algo Dev", "ML", "Python", "Strategy Testing", "Market Microstructure"],
    description: "Develops automated trading systems that execute at lightning speed. 📈 Tests and refines strategies through simulations and historical backtests. 🛡️ Balances high-frequency execution with risk management.",
    message: "📈 Creates trading algorithms for fast execution. 🧪 Tests strategies on real-time and old data. 🛡️ Minimizes risks in live trades. 🤝 Works with risk managers for safe results.",
    salary: "12,00,000 - 24,00,000",
    experience: "4-6 years",
    education: "Bachelor’s in Finance, Computer Science, or Engineering. Master’s in Quantitative Finance is a plus."
  },
  {
    role: "🌐 Crypto Developer",
    skills: ["Web3", "Security", "Token Standards", "Blockchain Protocols", "JavaScript"],
    description: "Designs and implements decentralized applications in crypto ecosystems. 🌐 Works on NFTs, tokens, and wallet integration features. 🔐 Ensures code security and scalability for global adoption.",
    message: "🌐 Builds crypto and NFT apps. 🔐 Writes safe token contracts. 📲 Creates smooth wallet integrations. ⚙️ Improves blockchain speed and scalability.",
    salary: "11,00,000 - 20,00,000",
    experience: "3-5 years",
    education: "Bachelor’s in Computer Science, IT, or related fields."
  },
  {
    role: "🔧 DevOps Engineer",
    skills: ["CI/CD", "Cloud", "Monitoring", "Infrastructure as Code", "Scripting"],
    description: "Ensures smooth operation of financial applications and platforms. ☁️ Deploys scalable cloud infrastructure for trading and banking systems.",
    message: "⚙️ Keeps financial infrastructure running. ☁️ Deploys apps on cloud. 🛡️ Ensures uptime for trading platforms. 🔧 Automates processes with CI/CD.",
    salary: "9,00,000 - 15,00,000",
    experience: "2-3 years",
    education: "Bachelor’s in Computer Science, IT, or related fields."
  },
  {
    role: "🛡️ IT Security Analyst",
    skills: ["Cybersecurity"],
    description: "Safeguards financial platforms from cyber threats. 🛡️ Monitors traffic for suspicious activity and prevents breaches. 🔍 Performs penetration testing to identify vulnerabilities.",
    message: "🛡️ Guards financial apps from cyberattacks. 🔍 Investigates suspicious activity. 🔐 Keeps systems updated with patches. 📊 Finds weak points through tests.",
    salary: "8,50,000 - 14,00,000",
    experience: "2-3 years",
    education: "Bachelor’s in Cybersecurity, Computer Science, or IT. Certifications like CEH/CISSP are valuable."
  }
],

   Science: [
  {
    role: "📉 Credit Risk Analyst",
    skills: ["Data", "Modelling", "Credit Scoring", "Probability", "Data Interpretation"],
    description: "Analyzes creditworthiness of individuals and businesses. 📉 Uses statistical models to predict chances of default. 🧮 Builds credit scoring systems for lending institutions.",
    message: "📉 Evaluates borrower reliability. 🧮 Predicts chances of default using models. 📋 Creates reports for lending teams. 🤝 Helps reduce risky lending decisions.",
    salary: "9,00,000 - 15,00,000",
    experience: "2-3 years",
    education: "Bachelor’s in Economics, Finance, Statistics, or related fields."
  },
  {
    role: "📊 Actuary",
    skills: ["Stats", "Risk", "Actuarial Science", "Forecasting", "Insurance"],
    description: "Uses mathematical and statistical techniques to assess long-term financial risks. 📊 Designs insurance policies and pension schemes. 📈 Predicts future events like mortality, accidents, or financial downturns.",
    message: "📊 Calculates insurance premiums scientifically. 📈 Predicts risks for long-term planning. 🧠 Advises on financial safety nets. 📋 Helps in designing policies for businesses.",
    salary: "12,00,000 - 18,00,000",
    experience: "3-5 years",
    education: "Bachelor’s in Actuarial Science, Mathematics, or Statistics. Actuarial certifications required."
  },
  {
    role: "🧬 Biostatistician",
    skills: ["Data", "Health", "Statistical Modelling", "Medical Economics"],
    description: "Applies statistical methods to medical and health-related financial data. 🧬 Analyzes treatment outcomes versus healthcare costs. 📊 Supports pharmaceutical research and hospital budget planning.",
    message: "🧬 Analyzes health data for cost effectiveness. 💊 Studies healthcare spending. 📊 Supports pharma budget planning. 🤝 Works with scientists to connect finance & health.",
    salary: "9,50,000 - 16,00,000",
    experience: "2-4 years",
    education: "Bachelor’s in Biostatistics, Public Health, or Statistics. Master’s preferred."
  },
  {
    role: "🌱 Sustainability Analyst",
    skills: ["Green Finance", "Process Optimization", "Data Mapping", "Digital Transformation"],
    description: "Connects finance with environmental sustainability goals. 🌱 Researches eco-friendly investment opportunities and green bonds. ♻️ Prepares ESG reports for stakeholders and investors.",
    message: "🌱 Researches green finance opportunities. ♻️ Prepares ESG reports for investors. 📈 Guides eco-friendly investments. 🛠️ Aligns profit with sustainability.",
    salary: "10,00,000 - 18,00,000",
    experience: "3-5 years",
    education: "Bachelor’s in Environmental Science, Economics, or Finance."
  },
  {
    role: "💻 Tax Tech Consultant",
    skills: ["Automation", "Tax Law", "Process Optimization", "Data Mapping", "Digital Transformation"],
    description: "Bridges finance, law, and technology by modernizing tax processes. 💻 Builds digital tools to simplify tax compliance and reporting. 📚 Automates workflows for efficiency and accuracy.",
    message: "💻 Automates tax workflows. 📚 Ensures digital tools follow tax law. 🛠️ Reduces human errors. 🤝 Teaches finance teams to use tech tools.",
    salary: "9,50,000 - 16,00,000",
    experience: "3-5 years",
    education: "Bachelor’s in Accounting, Finance, or Computer Science."
  },
  {
    role: "📉 Economic Analyst",
    skills: ["Economic Modeling", "Macroeconomics", "Forecasting", "Report Writing"],
    description: "Studies economic conditions to predict market trends. 📉 Runs policy simulations to evaluate potential impacts. 📈 Provides diversification strategies for investors.",
    message: "📉 Studies economy to predict markets. 🧪 Runs policy stress tests. 📈 Advises on diversification. 📊 Prepares reports for leaders.",
    salary: "10,50,000 - 18,00,000",
    experience: "2-4 years",
    education: "Bachelor’s/Master’s in Economics or Finance."
  },
  {
    role: "📊 Investment Risk Analyst",
    skills: ["Portfolio Risk", "Financial Analysis", "Hedging", "Scenario Planning"],
    description: "Monitors financial portfolios for exposure to risks. 📊 Designs hedging strategies to minimize losses. 🧪 Runs stress tests on investments for worst-case scenarios.",
    message: "📉 Checks risks in investments. 🧪 Runs stress tests for worst cases. 📈 Designs hedging strategies. 🤝 Guides managers on safe investing.",
    salary: "11,00,000 - 18,00,000",
    experience: "3-5 years",
    education: "Bachelor’s in Finance, Statistics, or Risk Management. FRM is a plus."
  },
  {
    role: "💼 Pension Fund Manager",
    skills: ["Asset Management", "Regulatory Knowledge", "Investment Strategy"],
    description: "Oversees pension and retirement funds for long-term stability. 💼 Creates strategies to grow investments while minimizing risks. 📊 Ensures compliance with strict pension regulations.",
    message: "💼 Manages retirement savings responsibly. 📊 Adjusts investments for growth. 📈 Creates stable strategies for long term. 🤝 Follows pension rules carefully.",
    salary: "12,00,000 - 20,00,000",
    experience: "4-6 years",
    education: "Bachelor’s in Finance, Business, or Economics. CFA or MBA is helpful."
  },
  {
    role: "🏥 Healthcare Financial Analyst",
    skills: ["Healthcare + Finance", "Cost Analysis", "Budgeting", "Medical Billing"],
    description: "Examines the financial performance of hospitals and healthcare providers. 🏥 Prepares budgets to ensure quality services at optimal costs. 💡 Identifies areas to reduce unnecessary expenses.",
    message: "🏥 Checks hospitals’ financial health. 📋 Plans budgets for better services. 💡 Suggests cost-saving methods. 🤝 Works with healthcare admins on planning.",
    salary: "9,50,000 - 14,00,000",
    experience: "2-4 years",
    education: "Bachelor’s in Healthcare Management, Finance, or Accounting."
  }
],

  
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

  return (
<div>
        <Header/>

    <div className="min-h-screen bg-gradient-to-r from-white via-purple-100 to-pink-100 px-6 py-10 text-[#2d1b69] font-sans mt-40">
      <Chat/>


      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Finance-Related Roles by Category
      </h1>

      <div className="flex justify-center gap-6 mb-10">
        {["Commerce", "Engineering", "Science"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium border border-[#F39C12] transition duration-300 ${selectedCategory === category
                ? "bg-[#F39C12] text-white"
                : "bg-transparent text-[#F39C12] hover:bg-[#F39C12] hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="🔍 Search roles or skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-3 rounded-xl border shadow w-full max-w-xl focus:outline-none focus:ring-2 focus:ring-[#F39C12]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRoles.map((role, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedRole(role);
              setShowModal(true);
            }}
            className="cursor-pointer bg-white p-6 rounded-2xl shadow-md transition hover:shadow-xl hover:scale-105 hover:border-[#F39C12] border border-transparent duration-300 flex flex-col justify-between h-64"
          >
            <span className="absolute top-3 right-3 text-[#F39C12] text-xl">💡</span>
            <div>
              <h3 className="text-xl font-semibold mb-1">{role.role}</h3>
              <p className="text-sm text-gray-700">{role.description}</p>
            </div>
            <div>
              <p className="mt-3 font-medium text-[#F39C12]">Skills:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {role.skills.map((skill, idx) => (
                  <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedRole && (
  <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full relative">
      
      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-[#F39C12]"
      >
        &times;
      </button>

      {/* Role Name */}
      <h2 className="text-2xl font-bold mb-3">{selectedRole.role}</h2>

      {/* Salary in ₹ */}
      <p className="text-[#F39C12] font-semibold mb-2">
        ₹{selectedRole.salary.replace(/\$/g, "").replace(/,/g, "")}
      </p>

      {/* Experience highlighted */}
      <p className="mb-2">
        <span className="bg-[#F39C12] text-white px-3 py-1 rounded-lg font-semibold">
          {selectedRole.experience}
        </span>
      </p>

      {/* Educational Qualification */}
      {selectedRole.education && (
        <p className="mb-4 text-sm text-gray-700">
          🎓 <span className="font-semibold">Education:</span> {selectedRole.education}
        </p>
      )}

      {/* Special Message (instead of skills) */}
      <p className="text-gray-800 whitespace-pre-line leading-relaxed">
        {selectedRole.message}
      </p>
    </div>
  </div>
)}


      
    </div>
    <Footer/>
    </div>
  );
};

export default SideHustleFinder;
