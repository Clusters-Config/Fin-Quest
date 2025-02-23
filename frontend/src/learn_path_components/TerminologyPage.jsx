import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const TerminologyPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  
  // Constants for navigation
  const mod = 0;
  const page = "resultpage";
  const path = "path1";
  const mods = "mod1";
  const type = "account";
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
    },
    
    {
         term: "Transaction",
         definition: "An event or business activity that involves an exchange of money or money’s worth between parties, which changes the financial position of a person. Transactions can be either cash or credit transactions."
      },
      {
         term: "Goods/Services",
        "definition": "Goods are tangible articles or commodities bought, sold, or produced by a business, whereas services are intangible and are rendered for profit or without the objective of earning profits."
      },
       
      {
         term: "Asset",
        "definition": "A resource owned by the business with the purpose of generating future profits. Assets can be tangible (physical existence) or intangible (no physical existence but generate future benefits)."
      },
      {
         term: "Liability",
        "definition": "An obligation of a financial nature to be settled at a future date, representing money the business owes to other parties."
      },
      {
         term: "Internal Liability",
        "definition": "Represents the proprietor's equity, including amounts such as capital, reserves, and undistributed profits."
      },
      {
         term: "Working Capital",
        "definition": "Refers to the current assets required to maintain a business's operations. Gross working capital is the total of current assets, while net working capital is the difference between current assets and current liabilities."
      },
      {
         term: "Contingent Liability",
        "definition": "A potential obligation that may arise depending on the outcome of a future event, which is not recorded but disclosed in the financial statements."
      },
      {
         term: "Capital",
        "definition": "The amount invested in the business by its owners, which may include cash, goods, or other assets. For corporate entities, capital is typically represented as share capital."
      },
      {
         term: "Drawings",
        "definition": "Amount withdrawn by the owner from the business for personal use, which reduces the owner's capital. This term does not apply to corporate bodies."
      },
      {
         term: "Net Worth",
        "definition": "The excess of total assets over total liabilities, representing the owner's equity in the business."
      },
      {
         term: "Non-current Investments",
        "definition": "Investments held for more than one year, typically for long-term purposes, such as fixed deposits for extended periods."
      },
      {
         term: "Current Investments",
        "definition": "Investments that are readily realizable and intended to be held for no more than one year from the date of investment."
      },
      {
         term: "Debtor",
        "definition": "Persons or entities who owe money to the business, typically for goods or services sold on credit."
      },
      {
         term: "Creditor",
        "definition": "A person or entity to whom the business owes money, often for goods or services purchased on credit."
      },
      {
         term: "Capital Expenditure",
        "definition": "Expenditure incurred to acquire a fixed asset intended for long-term use, such as purchasing machinery or office equipment."
      },
      {
         term: "Revenue Expenditure",
        "definition": "Expenditure incurred to generate revenue in the current period, such as repairs, wages, and insurance. It is typically short-term in nature."
      },
       
      {
         term: "Profit and Loss Account or Income Statement",
        "definition": "A financial statement showing the revenue and expenses of the business over a specific accounting period, ultimately revealing profit or loss."
      },
      {
         term: "Trade Discount",
        "definition": "A discount typically offered by wholesalers to retailers, calculated on the list or invoice price. Trade discounts are not recorded in the books of accounts, and transactions are recorded at net values."
      },
      {
         term: "Cash Discount",
        "definition": "A discount offered to encourage early payment by a debtor, typically recorded in the books of accounts after applying any trade discounts."
      }
    
    
  ];
  // Calculate pages
  const itemsPerPage = 6;
  const totalPages = Math.ceil(terminologyData.length / itemsPerPage);
  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return terminologyData.slice(startIndex, startIndex + itemsPerPage);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };
  const handleQuizClick = () => {
    navigate('/QuizApp/TerminologyPage', {
      state: { mod, page, path, mods, type }
    });
  };
  return (
    <div className="min-h-screen bg-[#F4F4F5] p-8 flex justify-center items-center">
      <div className="w-full max-w-[1200px] aspect-[3/2] relative">
        {/* Book Container */}
        <div className="absolute inset-0 flex bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Left Page */}
          <div className="w-[80px] h-full bg-gradient-to-r from-gray-200 to-white">
            {/* Book spine effect */}
            <div className="h-full w-1/2 bg-gradient-to-r from-gray-300 to-transparent" />
          </div>
          {/* Main Content */}
          <div className="flex-1 p-12 relative">
            {/* Header */}
            <div className="text-center mb-8 border-b pb-4">
              <h1 className="text-3xl font-serif text-gray-800">Basic Accountancy</h1>
              <p className="text-sm text-gray-500 mt-2">Terminology Guide</p>
            </div>
            {/* Page Content with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-[calc(100%-160px)] overflow-y-auto pr-4"
              >
                <div className="grid gap-8">
                  {getCurrentPageItems().map((item, index) => (
                    <div 
                      key={index} 
                      className="border-b border-gray-100 pb-6 last:border-0"
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.term}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Navigation */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className={`px-4 py-2 text-sm rounded ${
                  currentPage === 0
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                ← Previous Page
              </button>
              <span className="text-sm text-gray-500">
                Page {currentPage + 1} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className={`px-4 py-2 text-sm rounded ${
                  currentPage === totalPages - 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                Next Page →
              </button>
            </div>
          </div>
          {/* Right Page Edge */}
          <div className="w-[40px] h-full bg-gradient-to-l from-gray-200 to-white" />
        </div>
        {/* Quiz Button */}
        <button
          onClick={handleQuizClick}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 
                   bg-[#002147] text-white px-8 py-3 rounded-full
                   hover:bg-[#003166] transition-colors duration-200
                   shadow-lg hover:shadow-xl"
        >
          Take the Quiz
        </button>
      </div>
    </div>
  );
};
export default TerminologyPage;