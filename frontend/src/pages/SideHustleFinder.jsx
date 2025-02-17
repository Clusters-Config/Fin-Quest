import React, { useState } from "react";

// Finance-related roles and skills required for IT/Engineering students
const financeRoles = {
  Commerce: [
    { role: "Financial Analyst", skills: ["Data Analysis", "Excel", "Financial Modelling", "Problem Solving"], description: "A Financial Analyst evaluates financial data to assist in strategic decision-making and forecasting." },
    { role: "Investment Banking Analyst", skills: ["Financial Modelling", "Market Research", "Valuation"], description: "An Investment Banking Analyst supports mergers, acquisitions, and financial transactions in the investment banking industry." },
    { role: "Private Equity Analyst", skills: ["Due Diligence", "Valuation", "Financial Modelling", "Market Research"], description: "Private Equity Analysts work in firms that invest in private companies, conducting research and analysis to inform investment decisions." },
    { role: "Investment Portfolio Manager", skills: ["Portfolio Management", "Financial Analysis", "Market Knowledge"], description: "Investment Portfolio Managers create and manage portfolios for individuals or institutions, balancing risks and returns." },
    { role: "FinTech Product Manager", skills: ["Product Development", "User Research", "Agile Methodology", "Financial Services Knowledge"], description: "FinTech Product Managers lead the development of new financial technology products, often for startups or digital banks." },
    { role: "Treasury Analyst", skills: ["Cash Management", "Banking Operations", "Risk Management", "Financial Forecasting"], description: "Treasury Analysts manage a company’s finances, focusing on cash flow, investments, and financial risks." },
    { role: "Mergers & Acquisitions Analyst", skills: ["Valuation", "Financial Modelling", "Due Diligence", "Market Research"], description: "M&A Analysts support firms involved in mergers, acquisitions, and corporate restructuring activities." },
    { role: "Credit Analyst", skills: ["Credit Risk Analysis", "Financial Modelling", "Market Research"], description: "Credit Analysts assess the creditworthiness of individuals, companies, or organizations seeking financing." },
    { role: "Risk Manager", skills: ["Risk Assessment", "Data Analysis", "Financial Modelling"], description: "Risk Managers identify, assess, and mitigate risks within an organization, including market, credit, and operational risks." },
    { role: "Tax Manager", skills: ["Tax Planning", "Corporate Tax", "Financial Analysis"], description: "Tax Managers oversee corporate tax compliance and work on tax planning strategies for businesses." },
    { role: "Real Estate Investment Analyst", skills: ["Market Research", "Real Estate Valuation", "Financial Modelling"], description: "Real Estate Investment Analysts evaluate real estate assets to identify investment opportunities." },
    { role: "Compliance Officer", skills: ["Regulatory Compliance", "Risk Management", "Financial Reporting"], description: "Compliance Officers ensure companies comply with laws and regulations within the financial services sector." },
    { role: "Venture Capital Analyst", skills: ["Due Diligence", "Market Research", "Valuation"], description: "Venture Capital Analysts research and analyze investment opportunities in emerging startups." },
    { role: "Corporate Finance Analyst", skills: ["Financial Modelling", "Valuation", "Financial Reporting"], description: "Corporate Finance Analysts provide financial insights and support in corporate finance functions such as capital budgeting and forecasting." },
    { role: "Internal Auditor", skills: ["Audit Procedures", "Internal Controls", "Financial Analysis"], description: "Internal Auditors review and assess the internal financial processes and controls of a company to ensure accuracy and compliance." }
  ],
  Engineering: [
    { role: "Financial Engineer", skills: ["Programming", "Quantitative Finance", "Risk Management"], description: "Financial Engineers design and develop financial products using mathematical and computational methods." },
    { role: "Blockchain Developer", skills: ["Blockchain Technology", "Cryptography", "Financial Knowledge"], description: "Blockchain Developers create decentralized applications and systems based on blockchain technology for the finance industry." },
    { role: "Data Scientist in Finance", skills: ["Data Science", "Machine Learning", "Big Data", "Statistical Analysis"], description: "Data Scientists in Finance use statistical models and algorithms to interpret financial data and support decision-making." },
    { role: "Quantitative Analyst", skills: ["Quantitative Analysis", "Programming", "Risk Management", "Mathematics"], description: "Quantitative Analysts develop complex models for pricing financial products and managing risks." },
    { role: "Financial Software Developer", skills: ["Software Development", "Finance APIs", "C++/Java", "Financial Systems"], description: "Financial Software Developers build software applications that support financial services, such as trading platforms or banking apps." },
    { role: "Financial Data Engineer", skills: ["Data Engineering", "Big Data", "ETL Processes", "Data Modeling"], description: "Financial Data Engineers build systems for collecting, processing, and storing financial data for analytics." },
    { role: "Algorithmic Trader", skills: ["Algorithm Development", "Machine Learning", "Programming"], description: "Algorithmic Traders use mathematical models and algorithms to automate trading strategies in financial markets." },
    { role: "Financial Systems Architect", skills: ["System Architecture", "Software Development", "Financial Technology"], description: "Financial Systems Architects design and build large-scale systems that support financial transactions and services." },
    { role: "Crypto Asset Developer", skills: ["Blockchain", "Cryptography", "Smart Contracts"], description: "Crypto Asset Developers create and maintain decentralized applications and platforms for cryptocurrencies." },
    { role: "Big Data Analyst in Finance", skills: ["Big Data", "Data Analytics", "Machine Learning"], description: "Big Data Analysts use massive datasets to analyze trends and make predictions within the financial industry." },
    { role: "Machine Learning Engineer", skills: ["Machine Learning", "Python", "Data Science"], description: "Machine Learning Engineers develop algorithms and models that allow systems to make predictions based on financial data." },
    { role: "Cloud Financial Engineer", skills: ["Cloud Computing", "Financial Modelling", "Data Management"], description: "Cloud Financial Engineers develop cloud-based solutions to manage financial transactions and data analytics." },
    { role: "IT Security Analyst", skills: ["Cybersecurity", "Network Security", "Risk Management"], description: "IT Security Analysts ensure the integrity and security of financial data systems against cyber threats." },
    { role: "DevOps Engineer for Financial Platforms", skills: ["DevOps", "Cloud Infrastructure", "Automation"], description: "DevOps Engineers build and maintain scalable infrastructure for financial platforms and services." }
  ],
  Science: [
    { role: "Credit Risk Analyst", skills: ["Credit Analysis", "Financial Modelling", "Risk Management", "Data Analysis"], description: "Credit Risk Analysts evaluate the creditworthiness of individuals and companies to mitigate risks." },
    { role: "Actuary", skills: ["Risk Assessment", "Statistics", "Mathematics", "Probability Theory"], description: "Actuaries assess financial risks and uncertainties in insurance, pension funds, and other financial services." },
    { role: "Tax Technology Consultant", skills: ["Tax Law", "Software Development", "Data Analysis", "Automation"], description: "Tax Technology Consultants develop systems to automate tax compliance and planning processes using technology." },
    { role: "Digital Asset Analyst", skills: ["Cryptocurrency", "Blockchain", "Financial Analysis", "Digital Assets"], description: "Digital Asset Analysts evaluate the financial value of digital assets like cryptocurrencies and NFTs, focusing on market trends and investments." },
    { role: "Investment Banking Analyst", skills: ["Financial Modelling", "Market Research", "Valuation"], description: "An Investment Banking Analyst supports mergers, acquisitions, and financial transactions in the investment banking industry." },
    { role: "Financial Analyst", skills: ["Data Analysis", "Excel", "Financial Modelling", "Problem Solving"], description: "A Financial Analyst evaluates financial data to assist in strategic decision-making and forecasting." },
    { role: "Biostatistician", skills: ["Statistics", "Data Analysis", "Risk Assessment"], description: "Biostatisticians apply statistical methods to analyze data from the health and pharmaceutical industries." },
    { role: "Sustainability Analyst", skills: ["Sustainability Reporting", "Financial Modelling", "Environmental Impact"], description: "Sustainability Analysts assess financial strategies and policies with respect to sustainability and environmental impact." },
    { role: "Financial Data Scientist", skills: ["Data Science", "Machine Learning", "Big Data", "Financial Analytics"], description: "Financial Data Scientists use machine learning models and data analytics to forecast trends and market behavior." },
    { role: "Healthcare Financial Analyst", skills: ["Financial Modelling", "Healthcare Systems", "Data Analysis"], description: "Healthcare Financial Analysts evaluate financial performance within the healthcare industry, focusing on hospital operations and insurance markets." },
    { role: "Investment Risk Analyst", skills: ["Risk Assessment", "Portfolio Management", "Market Research"], description: "Investment Risk Analysts focus on analyzing and managing risks in investment portfolios and strategies." },
    { role: "Pension Fund Manager", skills: ["Pension Fund Management", "Financial Modelling", "Regulatory Knowledge"], description: "Pension Fund Managers are responsible for managing pension funds and ensuring long-term investment growth." },
    { role: "Economic Research Analyst", skills: ["Econometrics", "Economic Modeling", "Financial Data Analysis"], description: "Economic Research Analysts gather and analyze economic data to provide insights into financial markets and economic conditions." },
    { role: "Insurance Risk Analyst", skills: ["Insurance Risk Modelling", "Data Analysis", "Market Research"], description: "Insurance Risk Analysts assess the financial risk associated with insurance products and policies." }
  ]
};

const SideHustleFinder = () => {
  const [selectedCategory, setSelectedCategory] = useState("Commerce");
  const [filteredRoles, setFilteredRoles] = useState(financeRoles[selectedCategory]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFilteredRoles(financeRoles[category]);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredResults = filteredRoles.filter((role) =>
    role.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    role.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      {/* Main Content */}
      <div className="p-6">
        <h2 className="text-4xl font-bold text-[#002147] text-center mb-8">Finance-Related Roles by Category 🚀</h2>

        {/* Category Buttons */}
        <div className="flex justify-center space-x-8 mb-8">
          {["Commerce", "Engineering", "Science"].map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`p-3 rounded-lg text-white transition duration-300 ease-in-out hover:bg-[#F39C12] ${selectedCategory === category ? "bg-[#002147]" : "bg-[#6C757D]"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for roles or skills..."
            className="px-4 py-2 border rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-[#F39C12] text-[#002147]"
          />
        </div>

        {/* Role Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.length > 0 ? (
            filteredResults.map((role, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300 ease-in-out"
              >
                <h4 className="text-lg font-semibold text-[#002147]">{role.role}</h4>
                <p className="text-sm text-[#6C757D]">{role.description}</p>
                <p className="font-semibold text-[#F39C12] mt-2">Skills Required:</p>
                <ul className="list-disc ml-5">
                  {role.skills.map((skill, idx) => (
                    <li key={idx} className="text-[#6C757D]">{skill}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-[#6C757D]">No roles found. Try another category or search.</p>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#002147] text-white text-center p-4 mt-12">
        <p>&copy; 2025 Fin-Quest. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SideHustleFinder;
