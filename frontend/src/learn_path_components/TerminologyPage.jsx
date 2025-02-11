import React from 'react';
import { useNavigate } from "react-router-dom";
// import { useLocation } from 'react-router-dom';

const TerminologyPage = () => {
    const navigate = useNavigate();
    // const mod = 1; // Initialize navigate function to programmatically navigate
    // const path1 = "TerminologyPage";
    // const location = useLocation();
    
    const terminologyData = [
    {
      term: "Assets",
      definition: "Resources owned by an individual or company that are expected to provide future benefits."
    },
    {
      term: "Liabilities",
      definition: "Debts or obligations that arise during the course of business operations."
    },
    {
      term: "Equity",
      definition: "The value of an owner’s interest in a business, calculated by subtracting liabilities from assets."
    },
    {
      term: "Revenue",
      definition: "Income generated from normal business operations, typically from the sale of goods or services."
    },
    {
      term: "Expenses",
      definition: "The costs incurred by a business in order to generate revenue, including operating expenses and cost of goods sold."
    },
    {
      term: "Profit",
      definition: "The financial gain achieved when revenue exceeds expenses."
    },
    {
      term: "Balance Sheet",
      definition: "A financial statement that shows a company’s assets, liabilities, and equity at a specific point in time."
    },
    {
      term: "Income Statement",
      definition: "A financial statement that shows the company’s revenue and expenses over a period of time, resulting in profit or loss."
    },
    {
      term: "Cash Flow",
      definition: "The movement of cash into and out of a business over a period of time."
    },
    {
      term: "Accounts Receivable",
      definition: "Money owed to a business by its customers for goods or services delivered but not yet paid for."
    },
    {
      term: "Accounts Payable",
      definition: "Money a company owes to suppliers for goods and services received but not yet paid for."
    },
    {
      term: "General Ledger",
      definition: "A complete record of all financial transactions over the life of a company."
    },
    {
      term: "Trial Balance",
      definition: "A list of all general ledger accounts and their balances, used to ensure that debits equal credits."
    },
    {
      term: "Depreciation",
      definition: "The gradual reduction in the value of an asset over time due to wear and tear or obsolescence."
    },
    {
      term: "Accrual Basis of Accounting",
      definition: "An accounting method where revenue and expenses are recorded when they are earned or incurred, regardless of when cash is exchanged."
    },
    {
      term: "Accounting Period",
      definition: "The period of time over which financial transactions are recorded and financial statements are prepared."
    },
    {
      term: "Double-Entry System",
      definition: "An accounting method that requires every transaction to be recorded in at least two accounts, maintaining the accounting equation: Assets = Liabilities + Equity."
    },
    {
      term: "Chart of Accounts",
      definition: "A list of all accounts used by a company in its financial reporting system."
    },
    {
      term: "Taxable Income",
      definition: "The amount of income that is subject to taxation, calculated after deductions and exemptions."
    },
    {
      term: "Retained Earnings",
      definition: "The portion of a company’s profit that is kept within the business rather than paid out as dividends."
    },
    {
      term: "Asset Accounts",
      definition: "Accounts that track the company’s assets, such as cash, inventory, and property."
    },
    {
      term: "Liability Accounts",
      definition: "Accounts that track the company’s debts and obligations, such as loans or accounts payable."
    },
    {
      term: "Equity Accounts",
      definition: "Accounts that track the ownership interest in the company, such as stockholder’s equity and retained earnings."
    },
    {
      term: "Revenue Accounts",
      definition: "Accounts that track the income generated from the sale of goods or services."
    },
    {
      term: "Expense Accounts",
      definition: "Accounts that track the costs incurred to generate revenue, such as salaries, rent, and utilities."
    },
    {
      term: "Credit",
      definition: "An entry that increases liabilities, equity, or revenue, and decreases assets or expenses."
    },
    {
      term: "Debit",
      definition: "An entry that increases assets or expenses, and decreases liabilities, equity, or revenue."
    },
    {
      term: "Taxation",
      definition: "The process of levying taxes by the government on income, sales, or other activities."
    },
    {
      term: "GST (Goods and Services Tax)",
      definition: "A value-added tax imposed on most goods and services sold for domestic consumption."
    },
    {
      term: "Capital Budgeting",
      definition: "The process of planning and managing a company’s long-term investments."
    },
    {
      term: "Cost of Capital",
      definition: "The cost of funds used for financing a business, typically calculated as the required return on equity and debt."
    },
    {
      term: "Working Capital",
      definition: "The difference between a company’s current assets and current liabilities, measuring its short-term financial health."
    },
    {
      term: "Financial Leverage",
      definition: "The use of borrowed funds (debt) to amplify the potential return on equity."
    },
    {
      term: "Cash Flow Management",
      definition: "The process of tracking, analyzing, and optimizing the movement of cash in and out of a business."
    },
    {
      term: "Investment Portfolio",
      definition: "A collection of financial assets, such as stocks, bonds, and real estate, owned by an investor."
    },
    {
      term: "Risk Management",
      definition: "The process of identifying, assessing, and controlling risks that could affect an organization’s financial health."
    },
    {
      term: "Liquidity",
      definition: "The ease with which an asset can be converted into cash without affecting its price."
    },
    {
      term: "Debt-to-Equity Ratio",
      definition: "A financial ratio that compares a company’s total debt to its shareholders’ equity, showing the level of financial leverage."
    },
    {
      term: "Profit Margin",
      definition: "A profitability ratio calculated by dividing net income by revenue, showing the percentage of profit from each dollar of revenue."
    },
    {
      term: "Stock Market",
      definition: "A marketplace where securities, such as stocks and bonds, are bought and sold."
    },
    {
      term: "Dividends",
      definition: "Payments made by a corporation to its shareholders from profits."
    },
    {
      term: "Bonds",
      definition: "Debt securities issued by a company or government, paying periodic interest and returning the principal at maturity."
    },
    {
      term: "Equity Financing",
      definition: "Raising capital by selling ownership shares in a company."
    },
    {
      term: "Debt Financing",
      definition: "Raising capital by borrowing funds, typically through loans or issuing bonds."
    },
    {
      term: "Return on Investment (ROI)",
      definition: "A performance measure used to evaluate the efficiency or profitability of an investment."
    },
    {
      term: "Capital Gains Tax",
      definition: "Tax on the profit from the sale of assets or investments."
    },
    {
      term: "Corporate Tax",
      definition: "Tax imposed on a corporation’s profits."
    },
    {
      term: "VAT (Value Added Tax)",
      definition: "A consumption tax placed on a product at each stage of production or distribution, based on the value added."
    },
    {
      term: "Withholding Tax",
      definition: "Tax withheld at the source of income, typically by employers on wages or by banks on interest payments."
    },
    {
      term: "Tax Deducted at Source (TDS)",
      definition: "A method of tax collection where the payer deducts tax before making payments to the payee."
    },
    {
      term: "Income Tax",
      definition: "Tax imposed on individuals’ or businesses’ income by the government."
    },
    {
      term: "Tax Planning",
      definition: "The process of organizing financial affairs in order to minimize tax liabilities."
    },
    {
      term: "Payroll Management",
      definition: "The process of managing employee compensation, including wages, benefits, bonuses, and taxes."
    },
    {
      term: "Credit Score",
      definition: "A numerical representation of an individual’s creditworthiness based on their financial history."
    },
    {
      term: "Interest Rates",
      definition: "The percentage charged or earned on borrowed or invested money over a specified period of time."
    },
    {
      term: "Loan Amortization",
      definition: "The process of gradually paying off a loan over time through scheduled payments."
    },
    {
      term: "Financial Statements",
      definition: "Official records of the financial activities of a business, including the balance sheet, income statement, and cash flow statement."
    },
    {
      term: "Capital Structure",
      definition: "The combination of debt and equity that a company uses to finance its operations."
    },
    {
      term: "Expense Ratio",
      definition: "A measure of the costs of running an investment fund, calculated by dividing the fund’s operating expenses by its average assets."
    },
    {
      term: "Depreciation and Amortization",
      definition: "The allocation of the cost of an asset over its useful life, with depreciation applied to tangible assets and amortization to intangible assets."
    },
    {
      term: "Revenue Recognition",
      definition: "The accounting principle that determines when revenue is recognized in financial statements."
    },
    {
      term: "Compound Interest",
      definition: "Interest on both the initial principal and the accumulated interest from previous periods."
    },
    {
      term: "Financial Forecasting",
      definition: "The process of estimating future financial outcomes based on historical data and expected trends."
    },
    {
      term: "Cost Accounting",
      definition: "The process of tracking and analyzing the costs associated with producing goods or services."
    },
    {
      term: "Debt Collection",
      definition: "The process of pursuing payments of debts owed by individuals or businesses."
    },
    {
      term: "Invoice Management",
      definition: "The process of tracking, organizing, and ensuring payment for invoices issued by a business."
    },
    {
      term: "Tax Returns",
      definition: "Documents filed with the government to report income, expenses, and other relevant tax information."
    },
    {
      term: "Budget Variance",
      definition: "The difference between the budgeted amount and the actual amount spent or earned."
    },
    {
      term: "Profit and Loss (P&L) Statement",
      definition: "A financial statement showing a company’s revenues, expenses, and profits over a period of time."
    },
    {
      term: "Accrued Income",
      definition: "Income that has been earned but not yet received."
    },
    {
      term: "Amortization Schedule",
      definition: "A table that outlines each loan payment, showing principal and interest amounts over the loan’s term."
    },
    {
      term: "Cash Conversion Cycle",
      definition: "The time it takes for a company to convert its investments in inventory and other resources into cash flows from sales."
    },
    {
      term: "Break-even Analysis",
      definition: "A calculation to determine the point at which total revenues equal total costs, resulting in no profit or loss."
    },
    {
      term: "Capital Reserves",
      definition: "Funds set aside for specific future purposes, typically related to long-term investments or capital expenditures."
    },
    {
      term: "Retained Earnings",
      definition: "The cumulative amount of profits not distributed as dividends, but retained within the business for growth or debt repayment."
    },
    {
      term: "Leverage Ratio",
      definition: "A financial ratio used to measure the extent of a company’s debt in relation to its equity or assets."
    },
    {
      term: "Financial Reporting",
      definition: "The process of producing financial statements that provide information about a company's performance."
    },
    {
      term: "Economic Value Added (EVA)",
      definition: "A measure of a company’s financial performance based on residual wealth, calculated by deducting its cost of capital from operating profit."
    },
    {
      term: "Wealth Management",
      definition: "A comprehensive service offering that includes financial planning, investment management, and other services aimed at growing and preserving wealth."
    },
    {
      term: "Personal Finance Planning",
      definition: "The process of managing one’s financial activities, including budgeting, investing, and retirement planning."
    }
  ];

  const handleQuizClick = () => {
    navigate('/QuizApp/TerminologyPage'); // Redirect to the quiz page when the button is clicked
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#F4F4F4] to-[#F8FAFC] min-h-screen">
      <h1 className="text-4xl font-extrabold text-[#002147] text-center my-6">
        Basic Finance Terminology
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#002147] mb-6">Essential Financial Terms You Should Know</h2>
        <ul>
          {terminologyData.map((item, index) => (
            <li key={index} className="mb-6">
              <h3 className="text-xl font-bold text-[#002147]">{item.term}</h3>
              <p className="text-[#6C757D] mt-2">{item.definition}</p>
            </li>
          ))}
        </ul>

        {/* Quiz Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={handleQuizClick}
            className="bg-[#002147] text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-[#00458b] transition-all"
          >
            Take the Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default TerminologyPage;
