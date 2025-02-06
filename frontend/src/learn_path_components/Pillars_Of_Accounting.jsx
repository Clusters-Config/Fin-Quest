import React from 'react';
import { useNavigate } from "react-router-dom";

const PillarsOfAccountingModule = () => {
  const navigate = useNavigate();

  const handleQuizButtonClick = () => {
    // Navigate to the quiz page for Pillars of Accounting
    navigate('/QuizApp/Pillars_Of_Accounting');
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#F4F4F4] to-[#F8FAFC] min-h-screen">
      <h1 className="text-4xl font-extrabold text-[#002147] text-center my-6">
        The 4 Pillars of Accounting
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#002147] mb-6">
          Understanding the 4 Pillars of Accounting
        </h2>

        <p className="text-[#6C757D] mb-4">
          Accounting is the backbone of any business, providing essential financial data for decision-making, regulatory compliance, and performance analysis. These four fundamental pillars help shape the accounting practices that ensure accuracy, consistency, and transparency in financial reporting.
        </p>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">1. **Relevance**</h3>
        <p className="text-[#6C757D] mb-4">
          Relevance is one of the key principles behind good accounting. In order for financial information to be useful, it must be relevant to the users who rely on it for decision-making. This means that financial statements should provide information that can influence decisions, whether that is through predictions about future performance or evaluations of past actions. 
        </p>
        <p className="text-[#6C757D] mb-4">
          For instance, if a company is preparing a financial report for investors, the information included must be timely and capable of guiding decisions, such as whether to invest in the company or not. Relevance ensures that the financial data you’re presenting makes a difference to those who read it.
        </p>
        <p className="text-[#6C757D] mb-4">
          A key aspect of relevance is the materiality concept, which means that only information that is significant enough to influence decisions should be included. For example, very minor discrepancies are generally not considered relevant as they do not affect the users’ decision-making processes.
        </p>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">2. **Reliability**</h3>
        <p className="text-[#6C757D] mb-4">
          Reliability is essential because it ensures that the financial information presented is accurate, complete, and dependable. Users of financial statements rely on the information to make decisions, so if the data is unreliable, it can lead to poor decision-making and financial losses.
        </p>
        <p className="text-[#6C757D] mb-4">
          To ensure reliability, accounting methods must be applied consistently, and financial records should be free from errors, omissions, or bias. For example, in corporate accounting, financial statements should reflect the true financial position of the company without exaggeration or omission.
        </p>
        <p className="text-[#6C757D] mb-4">
          Another key aspect of reliability is verification. It’s important that financial data can be verified through documentation, supporting evidence, and audits. If a company reports an expense, they must have receipts or contracts that justify the entry to provide the necessary level of reliability.
        </p>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">3. **Comparability**</h3>
        <p className="text-[#6C757D] mb-4">
          Comparability is crucial for analyzing and understanding financial data across different companies or over different periods of time. When users look at financial reports, they need to be able to compare one company’s financial health with another’s, or compare the company’s current year with previous years.
        </p>
        <p className="text-[#6C757D] mb-4">
          Consistent accounting practices allow for comparability. For example, if one company uses a different method for depreciation than another company, it could distort comparisons, even if the companies are otherwise similar. By standardizing accounting methods, stakeholders can make more informed decisions by comparing like with like.
        </p>
        <p className="text-[#6C757D] mb-4">
          Comparability also plays a role in forecasting. When stakeholders know that the same principles are applied across periods, they can use historical data to predict future outcomes more accurately. This helps businesses plan and strategize for the future in a more informed way.
        </p>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">4. **Consistency**</h3>
        <p className="text-[#6C757D] mb-4">
          Consistency in accounting refers to the use of the same methods and procedures across reporting periods. The key idea here is that consistency allows users to understand how financial reports relate to each other over time, making it easier to identify trends and evaluate performance.
        </p>
        <p className="text-[#6C757D] mb-4">
          For example, if a company changes its method for calculating depreciation from one year to the next, it can make the financial statements difficult to compare. However, if the company maintains consistency in its accounting practices, stakeholders will be able to more clearly see how the company’s financial position has changed.
        </p>
        <p className="text-[#6C757D] mb-4">
          It’s important to note that if there is a need for change in accounting methods, such as adopting a new accounting standard, the company must disclose the change and explain how it affects the financial statements. This transparency ensures that the users can still make meaningful comparisons, even in the face of changes.
        </p>

        <h3 className="text-xl font-semibold text-[#002147] mb-6">Conclusion</h3>
        <p className="text-[#6C757D] mb-6">
          The four pillars of accounting—relevance, reliability, comparability, and consistency—form the foundation for all sound accounting practices. They ensure that financial information is useful, accurate, and meaningful for those who rely on it. When these pillars are applied effectively, they enable businesses to maintain transparency and accountability, making it easier for investors, managers, and other stakeholders to make well-informed decisions.
        </p>

        <div className="text-center">
          <button
            onClick={handleQuizButtonClick}
            className="px-6 py-2 bg-[#F39C12] text-white rounded-full font-semibold hover:bg-[#F39C12] transition duration-300"
          >
            Take the Pillars of Accounting Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default PillarsOfAccountingModule;
