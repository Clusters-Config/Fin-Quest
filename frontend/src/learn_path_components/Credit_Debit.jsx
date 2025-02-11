import React from 'react';
import { useNavigate,useLocation } from "react-router-dom";

const CreditDebitModule = () => {
  const navigate = useNavigate();
  // const mod = 1; 
  //   // const path1 = "Credit_debit";
  //   const location = useLocation();

  const handleQuizButtonClick = () => {
    // Navigate to the quiz page for Credit and Debit
    navigate('/QuizApp/Credit_Debit');
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#F4F4F4] to-[#F8FAFC] min-h-screen">
      <h1 className="text-4xl font-extrabold text-[#002147] text-center my-6">
        Understanding Credit and Debit in Accounting
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#002147] mb-6">
          What are Credit and Debit in Accounting?
        </h2>

        <p className="text-[#6C757D] mb-4">
          Credit and Debit are fundamental concepts in accounting. These terms refer to entries made in an organization's
          accounting records (the ledger), used to track financial transactions. Understanding how to apply credits and debits
          is essential for maintaining accurate financial records, ensuring the integrity of financial statements, and complying
          with accounting standards.
        </p>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">The Double-Entry Accounting System</h3>
        <p className="text-[#6C757D] mb-4">
          The double-entry accounting system is the basis for understanding credits and debits. Under this system, each financial
          transaction involves both a debit and a credit entry, and the sum of debits must always equal the sum of credits.
          This ensures that the accounting equation remains balanced, i.e., <strong>Assets = Liabilities + Equity</strong>.
        </p>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">Credit</h3>
        <p className="text-[#6C757D] mb-4">
          A credit entry represents an increase in liabilities, equity, or revenue, and a decrease in assets or expenses. 
          The most common credit entries are:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>When a company borrows money from a bank, a liability account like "Loans Payable" is credited.</li>
          <li>When a company generates revenue from selling goods or services, a revenue account is credited.</li>
          <li>If a company issues new stock, its equity account (such as "Common Stock") is credited.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">Debit</h3>
        <p className="text-[#6C757D] mb-4">
          A debit entry represents an increase in assets or expenses, and a decrease in liabilities or equity. Some examples include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>When a company receives cash, the "Cash" account is debited (increase in assets).</li>
          <li>If a company purchases supplies or equipment, the corresponding asset account (like "Supplies") is debited.</li>
          <li>When a company incurs an expense, such as rent or utilities, the expense account is debited.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">How Do Credit and Debit Work Together?</h3>
        <p className="text-[#6C757D] mb-6">
          In the double-entry system, every transaction involves both a debit and a credit. This ensures that the accounting
          equation always stays in balance. For example, when a business receives cash from a customer for a product sold:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <p>Debit: Cash [Real Account Rule]</p>
          <p>Credit: Sales [Nominal Account]</p>
        </pre>
        <p className="text-[#6C757D] mb-6">
          Notice that one side of the transaction increases an asset (cash), while the other side increases equity (sales revenue).
          The sum of debits (cash) and credits (sales revenue) must be equal.
        </p>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">Example of Credit and Debit in Action</h3>
        <p className="text-[#6C757D] mb-4">
          Let's look at a more detailed example to understand the application of debits and credits:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>If a company sells a product for $1,000 in cash, the accounting entries would be:</li>
        </ul>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          Debit: Cash (Asset) +$1,000
          Credit: Sales Revenue (Equity) +$1,000
        </pre>
        <ul className="list-disc ml-6 mb-4">
          <li>If the company later pays $300 for rent, the entries would be:</li>
        </ul>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          Debit: Rent Expense (Expense) +$300
          Credit: Cash (Asset) -$300
        </pre>
        <p className="text-[#6C757D] mb-6">
          In both cases, debits and credits are balanced, ensuring the integrity of the financial records.
        </p>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">Understanding Debits and Credits in Different Accounts</h3>
        <p className="text-[#6C757D] mb-4">
          In accounting, different types of accounts react differently to debits and credits. Below is a quick overview:
        </p>
        <table className="table-auto border-collapse border border-gray-300 mb-6 w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">Account Type</th>
              <th className="border px-4 py-2 text-left">Debit Effect</th>
              <th className="border px-4 py-2 text-left">Credit Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Assets (e.g., Cash, Inventory)</td>
              <td className="border px-4 py-2">Increase</td>
              <td className="border px-4 py-2">Decrease</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Liabilities (e.g., Loans, Payables)</td>
              <td className="border px-4 py-2">Decrease</td>
              <td className="border px-4 py-2">Increase</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Equity (e.g., Stockholder's Equity)</td>
              <td className="border px-4 py-2">Decrease</td>
              <td className="border px-4 py-2">Increase</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Revenue (e.g., Sales)</td>
              <td className="border px-4 py-2">Decrease</td>
              <td className="border px-4 py-2">Increase</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Expenses (e.g., Rent, Utilities)</td>
              <td className="border px-4 py-2">Increase</td>
              <td className="border px-4 py-2">Decrease</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">Why Debits and Credits Matter?</h3>
        <p className="text-[#6C757D] mb-4">
          The correct use of debits and credits is vital for several reasons:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Ensuring accurate financial reporting.</li>
          <li>Complying with accounting standards (e.g., GAAP or IFRS).</li>
          <li>Providing transparency for audits and tax reporting.</li>
          <li>Maintaining balanced books that reflect the true financial health of the company.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">Common Mistakes in Using Debits and Credits</h3>
        <p className="text-[#6C757D] mb-4">
          Common mistakes in using debits and credits can lead to incorrect financial statements and discrepancies in the accounting
          system. Some common errors include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Mixing up the effects of debits and credits on accounts.</li>
          <li>Failing to balance debits and credits in each transaction.</li>
          <li>Incorrectly classifying accounts (e.g., treating an expense as a liability).</li>
        </ul>

        <div className="text-center">
          <button
            onClick={handleQuizButtonClick}
            className="px-6 py-2 bg-[#F39C12] text-white rounded-full font-semibold hover:bg-[#F1C40F] transition duration-300"
          >
            Take the Credit & Debit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreditDebitModule;
