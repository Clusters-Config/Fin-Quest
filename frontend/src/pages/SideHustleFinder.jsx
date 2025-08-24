import React, { useState } from "react";

const SideHustleFinder = () => {
  const financeRoles = {
   Commerce: [ { role: " 📊Financial Analyst", skills: ["Data Analysis", "Excel", "Financial Modelling", "Problem Solving", "Forecasting", "Business Strategy"], description: " Evaluates financial data to assist in decision-making. 📈 Creates detailed reports for forecasting. 🤝 Collaborates with teams to optimize budgeting.", salary: "$100,000 - $150,000", experience: "2-4 years" }, { role: " 🏦Investment Banking Analyst", skills: ["Financial Modelling", "Market Research", "Valuation", "Presentation", "Negotiation", "Due Diligence"], description: " Supports mergers and financial transactions. 📑 Prepares pitch books and client decks. ⏱️ Manages high-pressure deal timelines.", salary: "$150,000 - $500,000+", experience: "2-5 years" }, { role: "💼Private Equity Analyst", skills: ["Due Diligence", "Valuation", "Market Research", "Strategic Thinking", "Portfolio Monitoring"], description: " Researches private company investments. 🔍 Conducts due diligence and evaluates buyout targets. 📊 Tracks portfolio performance metrics.", salary: "$120,000 - $300,000", experience: "2-4 years" }, { role: "📱FinTech Product Manager", skills: ["Product Dev", "User Research", "Finance", "Agile Methodology", "Wireframing", "Stakeholder Communication"], description: " Leads financial product development. 🧪 Runs user testing and gathers feedback. ⚙️ Coordinates design and dev teams for releases.", salary: "$130,000 - $250,000", experience: "3-5 years" }, { role: "💰Treasury Analyst", skills: ["Cash Flow", "Risk Management", "Liquidity Planning", "Bank Reconciliation", "Capital Management"], description: "Manages a company’s cash flow and forecasts. 📊 Analyzes liquidity and funding needs. 📆 Plans short-term and long-term investments.", salary: "$110,000 - $180,000", experience: "2-3 years" }, { role: "🧾Credit Analyst", skills: ["Credit Risk", "Financial Modelling", "Underwriting", "Report Writing", "Data Interpretation", "Regulatory Knowledge"], description: " Assesses loan and credit risk. 📉 Analyzes borrower financial health. 📋 Prepares credit reports for decisions.", salary: "$100,000 - $170,000", experience: "1-2 years" }, { role: "🛡️ Risk Manager", skills: ["Risk Assessment", "Modelling", "Compliance", "Internal Controls", "Scenario Analysis", "Communication"], description: "Identifies and mitigates financial risks. 🧮 Builds risk models and simulations. 🤝 Works with legal and compliance for oversight.", salary: "$140,000 - $220,000", experience: "4-6 years" }, { role: "🧾Tax Manager", skills: ["Tax Planning", "Compliance"], description: " Handles corporate tax planning and filing. 📊 Develops strategies for minimizing liabilities. 🔍 Ensures full legal and regulatory compliance.", salary: "$130,000 - $210,000", experience: "3-5 years" }, { role: "🔍Internal Auditor", skills: ["Audit", "Internal Controls", "Risk Evaluation", "Report Writing", "Financial Analysis"], description: " Reviews financial records for accuracy. 📚 Audits internal control systems. 🧾 Reports inefficiencies and fraud risks.", salary: "$120,000 - $190,000", experience: "2-4 years" } ], Engineering: [ { role: "Financial Engineer", skills: ["Quant Finance", "Programming","Derivatives", "Monte Carlo Simulation", "Risk Modelling", "C++"], description: "Designs financial products with math models.🧮 Designs financial models and products. ⚙️ Works with traders to deploy real-time tools. 🧠 Builds pricing engines with risk metrics.", salary: "$140,000 - $250,000", experience: "3-5 years" }, { role: "Blockchain Developer", skills: ["Blockchain", "Smart Contracts","Solidity", "Ethereum", "Security", "Consensus Algorithms"], description: "Builds decentralized finance systems.⛓️ Builds decentralized finance (DeFi) systems. 💻 Codes secure smart contracts. 🔐 Maintains blockchain nodes and protocols.", salary: "$130,000 - $220,000", experience: "2-4 years" }, { role: "Quant Analyst", skills: ["Math", "Python", "Risk","Statistical Modelling", "Data Analysis"], description: "Builds financial pricing models.📉 Develops mathematical pricing models. 🔬 Conducts backtesting and model validation. 🤝 Collaborates with traders on strategies.", salary: "$120,000 - $200,000", experience: "2-3 years" }, { role: "Finance Software Dev", skills: ["C++", "APIs", "Finance", "Database Design", "Java", "Software Architecture"], description: "Creates apps for banks.💾 Builds banking and trading applications. 🔌 Connects APIs to real-time market data. 🛠️ Maintains legacy and modern systems.", salary: "$125,000 - $210,000", experience: "3-5 years" }, { role: "Data Scientist in Finance", skills: ["ML", "Analytics","Predictive Modelling", "Data Cleaning", "Visualization"], description: "Analyzes market data trends.📊 Analyzes large market datasets. 🧠 Creates predictive ML models. 📢 Explains insights to execs and non-tech teams.", salary: "$135,000 - $240,000", experience: "3-5 years" }, { role: "Algorithmic Trader", skills: ["Algo Dev", "ML","Python", "Strategy Testing", "Market Microstructure"], description: "Automates trading systems.📈 Automates trades using AI/ML. 🧪 Refines strategies through simulations. 🛡️ Monitors risk in real-time executions.", salary: "$150,000 - $300,000", experience: "4-6 years" }, { role: "Crypto Dev", skills: ["Web3", "Security","Token Standards", "Blockchain Protocols", "JavaScript"], description: "Creates NFT/crypto apps.🌐 Develops NFT, DeFi, and crypto apps. 🔐 Implements security best practices. 📲 Creates Web3 wallet integrations.", salary: "$140,000 - $260,000", experience: "3-5 years" }, { role: "DevOps Engineer", skills: ["CI/CD", "Cloud","Monitoring", "Infrastructure as Code", "Scripting"], description: "Maintains finance infra.⚙️ Maintains infrastructure and pipelines. ☁️ Deploys scalable financial platforms. 🛡️ Ensures uptime and CI/CD automation.", salary: "$120,000 - $190,000", experience: "2-3 years" }, { role: "IT Security Analyst", skills: ["Cybersecurity"], description: "Protects finance systems.🛡️ Secures financial IT systems. 🔍 Detects breaches and monitors network traffic. 🔐 Conducts security audits and patching.", salary: "$110,000 - $180,000", experience: "2-3 years" }, ], Science: [ { role: "Credit Risk Analyst", skills: ["Data", "Modelling","Credit Scoring", "Probability", "Data Interpretation"], description: "Analyzes credit profiles.📉 Analyzes creditworthiness and risk. 🧮 Builds predictive models. 📋 Writes risk assessment reports.", salary: "$115,000 - $185,000", experience: "2-3 years" }, { role: "Actuary", skills: ["Stats", "Risk","Actuarial Science", "Forecasting", "Insurance"], description: "Forecasts future risk.📊 Calculates insurance risks and costs. 📈 Models long-term financial outcomes. 🧠 Uses data to set policy pricing.", salary: "$140,000 - $220,000", experience: "3-5 years" }, { role: "Biostatistician", skills: ["Data", "Health", "Statistical Modelling", "Medical Economics"], description: "Analyzes medical financial trends.🧬 Studies health and financial trends. 💊 Assesses treatment costs vs. outcomes. 📊 Supports pharma budget planning.", salary: "$120,000 - $200,000", experience: "2-4 years" }, { role: "Sustainability Analyst", skills: ["Green Finance", "Process Optimization", "Data Mapping", "Digital Transformation"], description: "Links finance to sustainability.🌱 Links finance to sustainability efforts. ♻️ Reports on ESG metrics and risks. 📈 Supports green investment decisions.", salary: "$130,000 - $210,000", experience: "3-5 years" }, { role: "Tax Tech Consultant", skills: ["Automation", "Tax Law", "Process Optimization", "Data Mapping", "Digital Transformation"], description: "Optimizes tax processes.💻 Automates corporate tax processes. 📚 Applies tax law in digital tools. 🛠️ Improves efficiency with custom platforms.", salary: "$125,000 - $205,000", experience: "3-5 years" }, { role: "Economic Analyst", skills: ["Economic Modeling", "Macroeconomics", "Forecasting", "Report Writing"], description: "Forecasts market changes.📉 Monitors portfolio risks and volatility. 🧪 Performs stress testing simulations. 📈 Recommends diversification strategies.", salary: "$130,000 - $220,000", experience: "2-4 years" }, { role: "Investment Risk Analyst", skills: ["Portfolio Risk", "Financial Analysis", "Hedging", "Scenario Planning"], description: "Monitors market exposure.📉 Monitors portfolio risks and volatility. 🧪 Performs stress testing simulations. 📈 Recommends diversification strategies.", salary: "$135,000 - $215,000", experience: "3-5 years" }, { role: "Pension Fund Manager", skills: ["Asset Management","Regulatory Knowledge", "Investment Strategy"], description: "Oversees retirement investments.💼 Manages retirement investment portfolios. 📊 Rebalances assets based on returns. 📈 Ensures long-term financial health.", salary: "$145,000 - $230,000", experience: "4-6 years" }, { role: "Healthcare Financial Analyst", skills: ["Healthcare + Finance","Cost Analysis", "Budgeting", "Medical Billing"], description: "Evaluates hospital finance 🏥 Analyzes hospital and clinic finances. 📋 Prepares healthcare budget plans. 💡 Identifies cost-saving opportunities.", salary: "$125,000 - $195,000", experience: "2-4 years" }, ] }; 
  

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
    
    <div className="min-h-screen bg-gradient-to-r from-white via-purple-100 to-pink-100 px-6 py-10 text-[#2d1b69] font-sans">


      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Finance-Related Roles by Category
      </h1>

      <div className="flex justify-center gap-6 mb-10">
        {["Commerce", "Engineering", "Science"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium border border-[#F39C12] transition duration-300 ${
              selectedCategory === category
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
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-4 text-xl text-gray-600 hover:text-[#F39C12]"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedRole.role}</h2>
            <p className="text-[#F39C12] font-semibold mb-1">{selectedRole.salary}</p>
            <p className="text-sm text-gray-500 mb-4">{selectedRole.experience}</p>
            <p className="text-gray-700 mb-4">{selectedRole.description}</p>
            <p className="font-medium text-[#F39C12] mb-1">Required Skills</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              {selectedRole.skills.map((skill, idx) => (
                <span key={idx}>• {skill}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2025 Fin-Quest. Learn. Grow. Succeed. 💸
      </footer>
    </div>
  );
};

export default SideHustleFinder;
