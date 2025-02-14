import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const CreditDebitModule = () => {
  const navigate = useNavigate();
  const mod = 0;
  const page = "resultpage";
  const path = "path2";
  const mods = "mod1";
  const type = "account"

  const handleQuizButtonClick = () => {
    navigate('/QuizApp/Credit_Debit', { state: { mod: mod, page: page, path: path, mods: mods ,type:type} });
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

        {/* Adding the new content here */}
        <h3 className="text-xl font-semibold text-[#002147] mb-4">The Account Concept in Accounting</h3>
        <p className="text-[#6C757D] mb-4">
          One must get conversant with accounting terms before embarking on learning actual record-keeping based on the rules. 
          An "Account" is defined as a summarized record of transactions related to a person or thing. For instance, when a business deals with customers and suppliers, each of the customers and suppliers will be a separate account.
        </p>
        <p className="text-[#6C757D] mb-4">
          It is important to know that each person is identified as a separate account by the bank when opening an account. The account is also related to things – both tangible and intangible, such as land, buildings, equipment, brand value, trademarks, etc.
        </p>
        <p className="text-[#6C757D] mb-4">
          When a business transaction happens, one must identify the “account” that will be affected and then apply the rules to decide the accounting treatment. Typically, an account is shown in the form of an English letter ‘T’, which has two sides: the left-hand side (debit) and the right-hand side (credit).
        </p>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">The Concept of Balance in Accounts</h3>
        <p className="text-[#6C757D] mb-4">
          Each side of an account shows effects, so you can easily find the totals and determine the difference between the two. This difference is known as the "balance." If the debit side total exceeds the credit side, the balance is termed as a "debit balance." If the credit side total exceeds the debit side, it is called a "credit balance." If both sides are equal, the balance is referred to as a "nil balance."
        </p>
        
        <h3 className="text-xl font-semibold text-[#002147] mb-4">Example of a Cash Account</h3>
  <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
    <code>
      {`
        Dr. Cash Account          Cr.
        Particulars                Amount      | Particulars           Amount
        -------------------------------------------- | --------------------------------------------
        Cash brought into business   1,00,000     | Paid for goods purchased    50,000
        Received for goods sold      25,000       | Paid for rent               15,000
        Balance at the end           60,000       |                             
        -------------------------------------------- | --------------------------------------------
        Total                        1,25,000     | Total                    1,25,000
      `}
    </code>
  </pre>

        <p className="text-[#6C757D] mb-4">
          From the example above, the debit side of the Cash account reflects cash coming into the business, while the credit side shows cash flowing out. The "balance at the end" reflects the available cash in the business.
        </p>

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
