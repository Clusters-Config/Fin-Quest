import React from 'react';
import { useNavigate } from "react-router-dom";

const AccountingTypesModule = () => {
  const navigate = useNavigate();
  const mod = 1;
  const page = "resultpage";
  const path = "path1"
  const mods = "mod2"
  const type = "account"

  const handleQuizButtonClick = () => {
    // Navigate to the quiz page for Accounting Types
    navigate('/QuizApp/Accounting',{state:{mod:mod, page:page,path:path,mods:mods,type:type}});
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#F4F4F4] to-[#F8FAFC] min-h-screen">
      <h1 className="text-4xl font-extrabold text-[#002147] text-center my-6">
        Understanding Accounting and Its Types
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#002147] mb-6">
          What is Accounting?
        </h2>

        <p className="text-[#6C757D] mb-4">
          Accounting is the process of recording, summarizing, and analyzing financial transactions to provide useful information
          for decision-making. It is a vital component of every business and plays a key role in helping organizations track their
          financial performance, comply with legal obligations, and make informed decisions.
        </p>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">Objectives of Accounting</h3>
        <p className="text-[#6C757D] mb-4">
          The main objectives of accounting are:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>To maintain a record of financial transactions.</li>
          <li>To summarize and analyze financial data to create reports like balance sheets and income statements.</li>
          <li>To ensure compliance with tax laws and accounting standards.</li>
          <li>To provide insights for management in decision-making.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">Types of Accounts</h3>
        <p className="text-[#6C757D] mb-4">
          An account may be related to a person or a thing – tangible or intangible. The accounting treatment depends on the type of account. Let us classify these accounts based on their common characteristics:
        </p>

        <h4 className="text-lg font-semibold text-[#002147] mb-4">1. Personal Accounts</h4>
        <p className="text-[#6C757D] mb-4">
          These are accounts related to persons. There are three types of personal accounts:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Natural Persons:</strong> Accounts related to individual persons like Suresh's A/c, Anil's A/c, etc.</li>
          <li><strong>Artificial Persons:</strong> Accounts related to entities such as companies, partnerships, etc. Examples include Infosys Technologies A/c, ABC Bank A/c, etc.</li>
          <li><strong>Representative Persons:</strong> These accounts represent a collective group of individuals or entities, for example, Salary Payable A/c, Rent Payable A/c, etc.</li>
        </ul>

        <h4 className="text-lg font-semibold text-[#002147] mb-4">2. Real Accounts</h4>
        <p className="text-[#6C757D] mb-4">
          These accounts are related to assets or properties. Real accounts can be:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Tangible Real Accounts:</strong> Accounts related to physical assets like Machinery A/c, Cash A/c, Stock A/c, etc.</li>
          <li><strong>Intangible Real Accounts:</strong> Accounts related to non-physical assets like Goodwill A/c, Trademark A/c, Patents & Copyrights A/c, etc.</li>
        </ul>

        <h4 className="text-lg font-semibold text-[#002147] mb-4">3. Nominal Accounts</h4>
        <p className="text-[#6C757D] mb-4">
          These accounts represent expenses, losses, incomes, and gains. For example:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Salary and Wages A/c, Rent A/c, Travelling Expenses A/c, etc.</li>
          <li>Income accounts like Commission Received A/c, Gain from Sales A/c, etc.</li>
        </ul>

        <h4 className="text-lg font-semibold text-[#002147] mb-4">Additional Explanation on Account Types</h4>
        <p className="text-[#6C757D] mb-4">
          Let us further understand the classification of accounts:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Personal Accounts:</strong> These accounts are related to individuals, companies, or groups and include accounts such as Suresh’s A/c, ABC Bank A/c, etc.</li>
          <li><strong>Real Accounts:</strong> These can be tangible (physical assets like cash and stock) or intangible (non-physical assets like goodwill and intellectual properties).</li>
          <li><strong>Nominal Accounts:</strong> These accounts capture the daily operational activities like expenses, losses, and incomes such as Rent A/c, Salary A/c, and Gain from Sale A/c.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">Types of Accounting</h3>
        <p className="text-[#6C757D] mb-4">
          Accounting can be divided into several categories based on its purpose, scope, and the specific needs of an organization.
          The major types of accounting are:
        </p>

        <h4 className="text-lg font-semibold text-[#002147] mb-4">1. Financial Accounting</h4>
        <p className="text-[#6C757D] mb-4">
          Financial accounting focuses on the preparation of financial statements (such as balance sheets, income statements, and cash flow statements)
          for external users, such as investors, creditors, and regulatory bodies. It follows generally accepted accounting principles (GAAP) or
          international financial reporting standards (IFRS).
        </p>

        <ul className="list-disc ml-6 mb-4">
          <li>Purpose: To provide financial information for external stakeholders.</li>
          <li>Reports: Income Statement, Balance Sheet, Cash Flow Statement.</li>
          <li>Standards: GAAP or IFRS.</li>
        </ul>

        <h4 className="text-lg font-semibold text-[#002147] mb-4">2. Managerial Accounting</h4>
        <p className="text-[#6C757D] mb-4">
          Managerial accounting involves the preparation of internal reports to assist management in decision-making. These reports help in planning,
          controlling, and directing the company's operations. Managerial accounting includes cost analysis, budgeting, and forecasting.
        </p>

        <ul className="list-disc ml-6 mb-4">
          <li>Purpose: To provide information for internal management decisions.</li>
          <li>Reports: Budgets, Cost Analysis, Forecasting Reports.</li>
          <li>Users: Internal management, executives, department heads.</li>
        </ul>

        <h4 className="text-lg font-semibold text-[#002147] mb-4">3. Cost Accounting</h4>
        <p className="text-[#6C757D] mb-4">
          Cost accounting focuses on tracking, analyzing, and controlling costs associated with the production of goods or services. It helps businesses
          understand their cost structure, set pricing strategies, and improve cost-efficiency. Key tools in cost accounting include job order costing
          and process costing.
        </p>

        <ul className="list-disc ml-6 mb-4">
          <li>Purpose: To track and manage costs of production or services.</li>
          <li>Reports: Cost of Goods Sold, Production Costs, Job Order Reports.</li>
          <li>Users: Management, production departments, cost analysts.</li>
        </ul>

        <h4 className="text-lg font-semibold text-[#002147] mb-4">4. Tax Accounting</h4>
        <p className="text-[#6C757D] mb-4">
          Tax accounting deals with the preparation and filing of tax returns, ensuring compliance with tax laws and regulations. It helps businesses
          minimize tax liabilities through deductions, credits, and proper planning. Tax accounting follows specific tax codes and guidelines set by
          the government.
        </p>

        <ul className="list-disc ml-6 mb-4">
          <li>Purpose: To ensure tax compliance and minimize tax liabilities.</li>
          <li>Reports: Tax Returns, Tax Planning Reports, Tax Deductions.</li>
          <li>Standards: Tax Laws and Regulations.</li>
        </ul>

        <h4 className="text-lg font-semibold text-[#002147] mb-4">5. Auditing</h4>
        <p className="text-[#6C757D] mb-4">
          Auditing is the process of examining financial records and statements to ensure their accuracy and compliance with accounting standards and laws.
          It is usually performed by independent third-party auditors who verify that financial statements fairly represent the organization's financial
          position and operations.
        </p>

        <ul className="list-disc ml-6 mb-4">
          <li>Purpose: To ensure the accuracy and fairness of financial statements.</li>
          <li>Reports: Auditor's Report, Financial Statement Examination Report.</li>
          <li>Users: Investors, creditors, regulatory bodies.</li>
        </ul>

        <h4 className="text-lg font-semibold text-[#002147] mb-4">6. Forensic Accounting</h4>
        <p className="text-[#6C757D] mb-4">
          Forensic accounting involves the use of accounting principles to investigate fraud, financial crimes, and disputes. It combines accounting,
          auditing, and investigative skills to uncover irregularities, fraudulent activities, and financial misreporting.
        </p>

        <ul className="list-disc ml-6 mb-4">
          <li>Purpose: To investigate fraud and financial crimes.</li>
          <li>Reports: Fraud Investigations, Financial Misreporting Findings.</li>
          <li>Users: Legal professionals, law enforcement, regulatory authorities.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">Why is Accounting Important?</h3>
        <p className="text-[#6C757D] mb-4">
          Accounting is crucial for several reasons:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>It ensures the accurate reporting of financial data, which is essential for external stakeholders like investors and creditors.</li>
          <li>It helps organizations make informed decisions regarding budgeting, investments, and operational strategies.</li>
          <li>It aids in complying with regulatory requirements and tax laws, avoiding legal issues.</li>
          <li>It provides transparency, which helps build trust among customers, investors, and the general public.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">Common Accounting Mistakes</h3>
        <p className="text-[#6C757D] mb-4">
          Some common accounting mistakes that businesses should avoid include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Not keeping accurate or timely records of transactions.</li>
          <li>Misclassifying assets and liabilities.</li>
          <li>Failing to reconcile bank statements regularly.</li>
          <li>Not adhering to proper accounting standards and tax regulations.</li>
        </ul>

        

        <div className="text-center">
          <button
            onClick={handleQuizButtonClick}
            className="px-6 py-2 bg-[#F39C12] text-white rounded-full font-semibold hover:bg-[#F1C40F] transition duration-300"
          >
            Take the Accounting Types Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountingTypesModule;
