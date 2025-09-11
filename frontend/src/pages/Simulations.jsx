import React, { useState } from "react";
import { FaMoneyBillWave, FaPiggyBank, FaCoins, FaCalculator, FaExchangeAlt, FaTag, FaSalesforce, FaSave, FaWeightHanging, FaUserFriends, FaMoneyCheck } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import { SparklesIcon, FilePieChart, Lightbulb, TrendingUp } from 'lucide-react';
import Chat from "../Services/Chat";
import Footer from "../Services/Footer";
import Header from "../Services/Header";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Reusable Modal Component with consistent styling
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 font-inter">
      <Chat/>
      <Header />
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-lg max-h-[95vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100">
        <h2 className="text-2xl font-bold text-[#002147] mb-4 text-center border-b pb-2">
          {title}
        </h2>
        {children}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition-colors shadow-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Reusable Input Field Component
const InputField = ({ label, placeholder, value, onChange }) => (
  <div className="flex flex-col mb-4">
    <label className="text-sm font-semibold text-gray-700 mb-1">{label}</label>
    <input
      type="number"
      placeholder={placeholder}
      value={value}
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors text-gray-800"
      onChange={(e) => onChange(Number(e.target.value))}
    />
  </div>
);

// Custom Message Box component to replace alert()
const MessageBox = ({ message, onClose, isOpen }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm text-center">
                <p className="text-lg text-gray-800 mb-4">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full bg-[#002147] text-white font-semibold py-2 rounded-lg hover:bg-[#1f3f62] transition-colors"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

const Simulations = () => {
   const pathname = useLocation()
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
  
  // All states for various features
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [budget, setBudget] = useState("");
  const [savings, setSavings] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [loanRepayment, setLoanRepayment] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [gstAmount, setGstAmount] = useState(0);
  const [gstPercentage, setGstPercentage] = useState(5);
  const [openModal, setOpenModal] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [taxAmount, setTaxAmount] = useState("");
  const [price, setPrice] = useState("");
  const [salesTaxRate, setSalesTaxRate] = useState("");
  const [salesTaxAmount, setSalesTaxAmount] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [remainingBudget, setRemainingBudget] = useState("");
  const [principal, setPrincipal] = useState("");
  const [time, setTime] = useState("");
  const [compoundingPeriods, setCompoundingPeriods] = useState(1);
  const [amount, setAmount] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emiAmount, setEmiAmount] = useState(null);
  const [loanPurpose, setLoanPurpose] = useState("Personal Loan");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [balance, setBalance] = useState("");
  const [apr, setApr] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [payoffTime, setPayoffTime] = useState(null);
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualContribution, setAnnualContribution] = useState("");
  const [years, setYears] = useState(15);
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [compoundingFrequency, setCompoundingFrequency] = useState(4);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [messageBoxOpen, setMessageBoxOpen] = useState(false);
  const [messageBoxMessage, setMessageBoxMessage] = useState("");

  // Animation for the header title
  const headerSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 120, friction: 14 }
  });
  
  // Calculation Functions (Unchanged from previous versions)
  const calculateFD = () => {
    const principalAmount = parseFloat(principal);
    const rate = parseFloat(interestRate) / 100;
    const time = parseInt(years, 10);
    const n = parseInt(compoundingFrequency, 10);

    if (principalAmount <= 0 || rate <= 0 || time <= 0 || n <= 0) {
      setMessageBoxMessage('Please enter valid positive values for all fields.');
      setMessageBoxOpen(true);
      return;
    }

    const maturity = principalAmount * Math.pow(1 + rate / n, n * time);
    setMaturityAmount(maturity.toFixed(2));
  };

  const calculateGST = () => {
    if (expenseAmount > 0) {
      const calculatedGST = (expenseAmount * gstPercentage) / 100;
      setGstAmount(calculatedGST);
    } else {
      setGstAmount(0);
      setMessageBoxMessage('Please enter a valid expense amount.');
      setMessageBoxOpen(true);
    }
  };
  
  const calculateTax = () => {
    if (income > 0 && taxRate >= 0) {
      const taxAmount = (income * taxRate) / 100;
      setTaxAmount(taxAmount.toFixed(2));
    } else {
      setTaxAmount("");
      setMessageBoxMessage('Please enter valid positive values for income and a non-negative tax rate.');
      setMessageBoxOpen(true);
    }
  };

  const calculateSalesTax = () => {
    if (price > 0 && salesTaxRate >= 0) {
      const salesTaxAmount = (price * salesTaxRate) / 100;
      const totalPrice = parseFloat(price) + salesTaxAmount;
      setSalesTaxAmount(salesTaxAmount.toFixed(2));
      setTotalPrice(totalPrice.toFixed(2));
    } else {
      setSalesTaxAmount("");
      setTotalPrice("");
      setMessageBoxMessage('Please enter valid positive values for price and a non-negative sales tax rate.');
      setMessageBoxOpen(true);
    }
  };

  const calculatePPF = () => {
    const initial = parseFloat(initialInvestment);
    const yearly = parseFloat(annualContribution);
    const rate = parseFloat(interestRate) / 100;
    const duration = parseInt(years, 10);

    if (initial < 0 || yearly < 0 || rate <= 0 || duration <= 0) {
      setMessageBoxMessage('Please enter valid positive values for all fields.');
      setMessageBoxOpen(true);
      return;
    }
    
    let total = initial;
    for(let i=0; i < duration; i++){
      total += yearly;
      total *= (1 + rate);
    }

    const totalInvested = initial + yearly * duration;
    const interestEarned = total - totalInvested;

    setMaturityAmount(total.toFixed(2));
    setTotalInterest(interestEarned.toFixed(2));
  };
  
  const calculateCompoundInterest = () => {
    const principalAmount = parseFloat(principal);
    const rate = parseFloat(interestRate) / 100;
    const periods = parseInt(compoundingPeriods, 10);
    const years = parseInt(time, 10);

    if (principalAmount <= 0 || rate <= 0 || periods <= 0 || years <= 0) {
      setMessageBoxMessage('Please enter valid positive values for all fields.');
      setMessageBoxOpen(true);
      return;
    }
    
    const calculatedAmount = principalAmount * Math.pow(1 + (rate / periods), periods * years);
    setAmount(calculatedAmount.toFixed(2));
  };

  const calculateEMI = () => {
    if (loanAmount > 0 && interestRate > 0 && loanTenure > 0) {
      const monthlyInterestRate = interestRate / (12 * 100);
      const tenureInMonths = loanTenure * 12;
      
      const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureInMonths)) / 
                  (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1);
      setEmiAmount(emi.toFixed(2));
    } else {
      setMessageBoxMessage('Please enter valid values for all fields!');
      setMessageBoxOpen(true);
    }
  };

  const calculatePayoffTime = () => {
    if (!balance || !apr || !monthlyPayment) {
      setMessageBoxMessage('Please fill all fields to calculate the payoff time.');
      setMessageBoxOpen(true);
      return;
    }

    const monthlyInterestRate = (parseFloat(apr) / 100) / 12;
    let remainingBalance = parseFloat(balance);
    const monthlyPaymentAmount = parseFloat(monthlyPayment);

    if (monthlyPaymentAmount <= remainingBalance * monthlyInterestRate) {
      setMessageBoxMessage('Monthly payment is too low to pay off the debt!');
      setMessageBoxOpen(true);
      setPayoffTime(null);
      return;
    }

    let months = 0;
    while (remainingBalance > 0 && months < 1000) { // Limit loop to prevent infinite loop
      const interest = remainingBalance * monthlyInterestRate;
      remainingBalance += interest - monthlyPaymentAmount;
      months++;
    }

    if (months >= 1000) {
      setMessageBoxMessage('The payoff time is very long, please increase your monthly payment.');
      setMessageBoxOpen(true);
      setPayoffTime(null);
    } else {
      setPayoffTime(months);
    }
  };

  const currencies = [
    "USD", "INR", "EUR", "GBP", "AUD", "CAD", "JPY", "CNY", "CHF", "NZD"
  ];
  
  const convertCurrency = () => {
    // This is a placeholder function as a live API call is not available in this environment.
    // A real application would use a library like axios with a proper API endpoint.
    if (amount && fromCurrency && toCurrency) {
      let rate = 1;
      // Dummy exchange rates
      if (fromCurrency === "USD" && toCurrency === "INR") rate = 83;
      if (fromCurrency === "INR" && toCurrency === "USD") rate = 1/83;
      const converted = (amount * rate).toFixed(2);
      setConvertedAmount(converted);
    } else {
      setConvertedAmount(null);
      setMessageBoxMessage("Please enter a valid amount and select currencies.");
      setMessageBoxOpen(true);
    }
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, reply: "Thank you for your suggestion! We will consider it." }]);
      setNewComment("");
    }
  };

  const allCalculators = [
    { label: "Credit Card Payoff Calculator", key: "creditCardPayoff", icon: FaMoneyCheck },
    { label: "Currency Converter", key: "currencyConverter", icon: FaExchangeAlt },
    { label: "GST Calculator", key: "gst", icon: FaWeightHanging },
    { label: "Tax Calculator", key: "tax", icon: FaTag },
    { label: "EMI Calculator", key: "EMI", icon: FaMoneyBillWave },
    { label: "PPF Calculator", key: "ppf", icon: FaSave },
    { label: "Compound Interest Calculator", key: "compoundInterest", icon: FaPiggyBank },
    { label: "Fixed Deposit (FD) Calculator", key: "fd", icon: FaPiggyBank },
    { label: "Sales Tax Calculator", key: "salestax", icon: FaSalesforce },
  ];

  const filteredCalculators = allCalculators.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
    <div className="bg-white min-h-screen flex items-start justify-center p-4 sm:p-6 font-inter text-gray-800 mt-40 mb-40  sm:mt-8">
      <div className="bg-[#F8FAFC] shadow-2xl rounded-2xl w-full max-w-6xl p-6 sm:p-10">
        <header className="text-center py-8 mb-8">
          <animated.h1 style={headerSpring} className="text-4xl sm:text-5xl font-extrabold text-[#002147]">
            Master Your <span className="text-blue-600"> Financial Future</span> 
          </animated.h1>
          <p className="text-md sm:text-lg mt-2 font-light text-gray-600">Unlock your potential with our powerful financial tools.</p>
        </header>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search calculators..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all text-gray-800 shadow-sm"
          />
        </div>

        {/* Buttons to Open Modals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCalculators.map((item) => (
            <button
              key={item.key}
              onClick={() => setOpenModal(item.key)}
              className="bg-white text-[#002147] font-bold py-5 rounded-xl flex flex-col items-center justify-center space-y-2 hover:bg-gray-100 transition-all transform hover:scale-105 shadow-md hover:shadow-lg border border-gray-200"
            >
              <item.icon className="text-3xl mb-2 text-[#002147]" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        
        {/* Suggest a Simulator Button - Centered below the grid */}
        <div className="mt-8 flex justify-center">
            <button
                onClick={() => setOpenModal("comments")}
                className="w-full sm:w-1/2 bg-[#002147] text-white font-bold py-5 rounded-xl flex items-center justify-center space-x-2 hover:bg-[#003366] transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
            >
                <FaUserFriends className="text-3xl" />
                <span>Suggest a Simulator</span>
            </button>
        </div>
          
         {/* Dual Modal Layout (Two Independent Panels) */}
        {openModal === "creditCardPayoff" && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="flex w-full max-w-6xl justify-between gap-6 px-6">

              {/* LEFT MODAL (Definition) */}
              <div className="w-1/2 bg-gray-50 rounded-lg border border-gray-200 p-6 shadow-lg relative">
                <button
                  onClick={() => setOpenModal("")}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
                <h3 className="font-semibold text-[#002147] mb-3">How the Payoff is Calculated:</h3>
                <p className="text-sm text-gray-600 mb-2">
                  The payoff time depends on your balance, monthly payment, and interest rate. The formula is:
                </p>
                <div className="overflow-x-auto text-sm text-[#002147] font-mono p-3 bg-white rounded-md border">
                  <pre><code>
                    Time = -log(1 - (Balance * Interest) / Payment) / log(1 + Interest)
                  </code></pre>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Where: <br />
                  <strong>Balance:</strong> Your credit card balance. <br />
                  <strong>Payment:</strong> Your monthly payment. <br />
                  <strong>Interest:</strong> Your monthly interest rate (APR/12).
                </p>
              </div>

              {/* RIGHT MODAL (Calculator) */}
              <div className="w-1/2 bg-white rounded-lg border border-gray-200 p-6 shadow-lg relative">
                <button
                  onClick={() => setOpenModal("")}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>

                <h3 className="font-semibold text-[#002147] mb-3">Payoff Calculator</h3>

                <InputField
                  label="Credit Card Balance (₹)"
                  placeholder="Enter balance"
                  value={balance}
                  onChange={setBalance}
                />
                <InputField
                  label="Annual Percentage Rate (APR) (%)"
                  placeholder="Enter APR"
                  value={apr}
                  onChange={setApr}
                />
                <InputField
                  label="Monthly Payment (₹)"
                  placeholder="Enter monthly payment"
                  value={monthlyPayment}
                  onChange={setMonthlyPayment}
                />

                <button
                  onClick={calculatePayoffTime}
                  className="w-full bg-[#002147] text-white font-semibold py-3 rounded-lg hover:bg-[#1f3f62] transition-colors shadow-md mt-3"
                >
                  Calculate Payoff Time
                </button>

                {payoffTime !== null && (
                  <div className="mt-4 p-4 bg-blue-100 text-[#002147] rounded-lg text-center font-bold">
                    <p>Time to Pay Off: {payoffTime} months</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      {/* Dual Modal Layout (Two Independent Panels for GST) */}
{openModal === "gst" && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="flex w-full max-w-6xl justify-between gap-6 px-6">

      {/* LEFT MODAL (Definition / Explanation) */}
      <div className="w-1/2 bg-gray-50 rounded-lg border border-gray-200 p-6 shadow-lg relative">
        <button
          onClick={() => setOpenModal("")}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h3 className="font-semibold text-[#002147] mb-3">How GST is Calculated:</h3>
        <p className="text-sm text-gray-600 mb-2">
          GST (Goods and Services Tax) is calculated as a percentage of the expense amount.
          The formula is:
        </p>
        <div className="overflow-x-auto text-sm text-[#002147] font-mono p-3 bg-white rounded-md border">
          <pre><code>
            GST Amount = Expense × (GST% / 100)
          </code></pre>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Where: <br />
          <strong>Expense:</strong> The cost of the goods or service. <br />
          <strong>GST%:</strong> The tax rate applicable (e.g., 5%, 12%, 18%). <br />
        </p>
      </div>

      {/* RIGHT MODAL (Calculator) */}
      <div className="w-1/2 bg-white rounded-lg border border-gray-200 p-6 shadow-lg relative">
        <button
          onClick={() => setOpenModal("")}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h3 className="font-semibold text-[#002147] mb-3">GST Calculator</h3>

        <InputField
          label="Expense Amount (₹)"
          placeholder="Enter amount"
          value={expenseAmount}
          onChange={setExpenseAmount}
        />
        <InputField
          label="GST Percentage (%)"
          placeholder="Enter GST %"
          value={gstPercentage}
          onChange={setGstPercentage}
        />

        <button
          onClick={calculateGST}
          className="w-full bg-[#002147] text-white font-semibold py-3 rounded-lg hover:bg-[#1f3f62] transition-colors shadow-md mt-3"
        >
          Calculate GST
        </button>

        {gstAmount !== null && (
          <div className="mt-4 p-4 bg-green-100 text-[#002147] rounded-lg text-center font-bold">
            <p>GST Amount: ₹{gstAmount.toFixed(2)}</p>
            <p>Total (Incl. GST): ₹{(parseFloat(expenseAmount) + gstAmount).toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  </div>
)}


        {/* Tax Calculator Dual Modal */}
        {openModal === "tax" && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="flex w-full max-w-6xl justify-between gap-6 px-6">

              {/* LEFT MODAL (Definition) */}
              <div className="w-1/2 bg-gray-50 rounded-lg border border-gray-200 p-6 shadow-lg relative">
                <button
                  onClick={() => setOpenModal("")}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
                <h3 className="font-semibold text-[#002147] mb-3">How the Tax is Calculated:</h3>
                <p className="text-sm text-gray-600 mb-2">
                  The tax is calculated by applying the given tax rate on your income. The formula is:
                </p>
                <div className="overflow-x-auto text-sm text-[#002147] font-mono p-3 bg-white rounded-md border">
                  <pre><code>Tax Amount = Income * (Tax Rate / 100)</code></pre>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Where: <br />
                  <strong>Income:</strong> Your total taxable income in ₹. <br />
                  <strong>Tax Rate:</strong> The percentage of income that will be taxed.
                </p>
              </div>

              {/* RIGHT MODAL (Calculator) */}
              <div className="w-1/2 bg-white rounded-lg border border-gray-200 p-6 shadow-lg relative">
                <button
                  onClick={() => setOpenModal("")}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>

                <h3 className="font-semibold text-[#002147] mb-3">Tax Calculator</h3>

                <InputField
                  label="Income (₹)"
                  placeholder="Enter income"
                  value={income}
                  onChange={setIncome}
                />
                <InputField
                  label="Tax Rate (%)"
                  placeholder="Enter tax rate"
                  value={taxRate}
                  onChange={setTaxRate}
                />

                <button
                  onClick={calculateTax}
                  className="w-full bg-[#002147] text-white font-semibold py-3 rounded-lg hover:bg-[#1f3f62] transition-colors shadow-md mt-3"
                >
                  Calculate Tax
                </button>

                {taxAmount !== "" && (
                  <div className="mt-4 p-4 bg-blue-100 text-[#002147] rounded-lg text-center font-bold">
                    <p>Tax Amount: ₹{taxAmount}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {/* EMI Calculator Dual Modal */}
        {openModal === "EMI" && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="flex w-full max-w-6xl justify-between gap-6 px-6">

              {/* LEFT MODAL (Definition) */}
              <div className="w-1/2 bg-gray-50 rounded-lg border border-gray-200 p-6 shadow-lg relative">
                <button onClick={() => setOpenModal("")} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">✕</button>
                <h3 className="font-semibold text-[#002147] mb-3">How EMI is Calculated:</h3>
                <p className="text-sm text-gray-600 mb-2">
                  EMI is calculated based on the loan amount, interest rate, and loan tenure. The formula is:
                </p>
                <div className="overflow-x-auto text-sm text-[#002147] font-mono p-3 bg-white rounded-md border">
                  <pre><code>EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1]</code></pre>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Where: <br />
                  <strong>P:</strong> Principal loan amount. <br />
                  <strong>r:</strong> Monthly interest rate (Annual Rate/12). <br />
                  <strong>n:</strong> Number of monthly installments.
                </p>
              </div>

              {/* RIGHT MODAL (Calculator) */}
              <div className="w-1/2 bg-white rounded-lg border border-gray-200 p-6 shadow-lg relative">
                <button onClick={() => setOpenModal("")} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">✕</button>
                <h3 className="font-semibold text-[#002147] mb-3">EMI Calculator</h3>

                <label className="block text-sm font-semibold text-gray-700 mb-1">Loan Purpose</label>
                <select
                  value={loanPurpose}
                  onChange={(e) => setLoanPurpose(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg mb-3"
                >
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="Car Loan">Car Loan</option>
                  <option value="Education Loan">Education Loan</option>
                  <option value="Business Loan">Business Loan</option>
                </select>

                <InputField label="Loan Amount (₹)" value={loanAmount} onChange={setLoanAmount} placeholder="Enter loan amount" />
                <InputField label="Interest Rate (%)" value={interestRate} onChange={setInterestRate} placeholder="Enter interest rate" />
                <InputField label="Loan Tenure (Years)" value={loanTenure} onChange={setLoanTenure} placeholder="Enter tenure in years" />

                <button onClick={calculateEMI} className="w-full bg-[#002147] text-white font-semibold py-3 rounded-lg mt-3 hover:bg-[#1f3f62] transition-colors shadow-md">
                  Calculate EMI
                </button>

                {emiAmount && (
                  <div className="mt-4 p-4 bg-blue-100 text-[#002147] rounded-lg text-center font-bold">
                    <p>Your EMI Amount: ₹{emiAmount}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* FD Calculator Dual Modal */}
        {openModal === "fd" && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="flex w-full max-w-6xl justify-between gap-6 px-6">

              {/* LEFT MODAL */}
              <div className="w-1/2 bg-gray-50 rounded-lg border border-gray-200 p-6 shadow-lg relative">
                <button onClick={() => setOpenModal("")} className="absolute top-3 right-3">✕</button>
                <h3 className="font-semibold text-[#002147] mb-3">How FD Returns are Calculated:</h3>
                <p className="text-sm text-gray-600 mb-2">FD returns are based on compound interest. The formula:</p>
                <div className="overflow-x-auto text-sm text-[#002147] font-mono p-3 bg-white rounded-md border">
                  <pre><code>Maturity = P * (1 + r/n)^(nt)</code></pre>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  <strong>P:</strong> Principal amount <br />
                  <strong>r:</strong> Annual interest rate <br />
                  <strong>n:</strong> Compounding periods per year <br />
                  <strong>t:</strong> Tenure in years
                </p>
              </div>

              {/* RIGHT MODAL */}
              <div className="w-1/2 bg-white rounded-lg border p-6 shadow-lg relative">
                <button onClick={() => setOpenModal("")} className="absolute top-3 right-3">✕</button>
                <h3 className="font-semibold text-[#002147] mb-3">FD Calculator</h3>

                <InputField label="Principal Amount (₹)" value={principal} onChange={setPrincipal} placeholder="Enter Principal Amount" />
                <InputField label="Interest Rate (%)" value={interestRate} onChange={setInterestRate} placeholder="Enter Interest Rate" />
                <InputField label="Duration (Years)" value={years} onChange={setYears} placeholder="Enter Duration" />
                <InputField label="Compounding Frequency" value={compoundingFrequency} onChange={setCompoundingFrequency} placeholder="e.g., 4 for Quarterly" />

                <button onClick={calculateFD} className="w-full bg-[#002147] text-white font-semibold py-3 rounded-lg mt-3 hover:bg-[#1f3f62] transition-colors shadow-md">
                  Calculate Maturity
                </button>

                {maturityAmount && (
                  <div className="mt-4 p-4 bg-blue-100 text-[#002147] rounded-lg text-center font-bold">
                    <p>Maturity Amount: ₹{maturityAmount}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Sales Tax Dual Modal */}
        {openModal === "salestax" && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="flex w-full max-w-6xl justify-between gap-6 px-6">

              {/* LEFT MODAL */}
              <div className="w-1/2 bg-gray-50 rounded-lg border p-6 shadow-lg relative">
                <button onClick={() => setOpenModal("")} className="absolute top-3 right-3">✕</button>
                <h3 className="font-semibold text-[#002147] mb-3">How Sales Tax is Calculated:</h3>
                <p className="text-sm text-gray-600 mb-2">Sales tax is a percentage of the price:</p>
                <div className="overflow-x-auto text-sm text-[#002147] font-mono p-3 bg-white rounded-md border">
                  <pre><code>Sales Tax = Price * (Tax Rate / 100)</code></pre>
                  <pre><code>Total Price = Price + Sales Tax</code></pre>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  <strong>Price:</strong> Item price <br />
                  <strong>Tax Rate:</strong> Sales tax percentage
                </p>
              </div>

              {/* RIGHT MODAL */}
              <div className="w-1/2 bg-white rounded-lg border p-6 shadow-lg relative">
                <button onClick={() => setOpenModal("")} className="absolute top-3 right-3">✕</button>
                <h3 className="font-semibold text-[#002147] mb-3">Sales Tax Calculator</h3>

                <InputField label="Price (₹)" value={price} onChange={setPrice} placeholder="Enter price" />
                <InputField label="Sales Tax Rate (%)" value={salesTaxRate} onChange={setSalesTaxRate} placeholder="Enter tax rate" />

                <button onClick={calculateSalesTax} className="w-full bg-[#002147] text-white font-semibold py-3 rounded-lg mt-3 hover:bg-[#1f3f62] transition-colors shadow-md">
                  Calculate Sales Tax
                </button>

                {salesTaxAmount !== "" && (
                  <div className="mt-4 p-4 bg-blue-100 text-[#002147] rounded-lg text-center font-bold">
                    <p>Sales Tax Amount: ₹{salesTaxAmount}</p>
                    <p>Total Price: ₹{totalPrice}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* PPF Dual Modal */}
        {openModal === "ppf" && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="flex w-full max-w-6xl justify-between gap-6 px-6">

              {/* LEFT MODAL */}
              <div className="w-1/2 bg-gray-50 rounded-lg border p-6 shadow-lg relative">
                <button onClick={() => setOpenModal("")} className="absolute top-3 right-3">✕</button>
                <h3 className="font-semibold text-[#002147] mb-3">How PPF Maturity is Calculated:</h3>
                <p className="text-sm text-gray-600 mb-2">PPF maturity is calculated with yearly contributions and compounding interest:</p>
                <div className="overflow-x-auto text-sm text-[#002147] font-mono p-3 bg-white rounded-md border">
                  <pre><code>Maturity = Initial * (1+r)^t + Σ(Contribution * (1+r)^i)</code></pre>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  <strong>Initial:</strong> Initial investment <br />
                  <strong>Contribution:</strong> Annual contribution <br />
                  <strong>r:</strong> Annual interest rate <br />
                  <strong>t:</strong> Duration in years
                </p>
              </div>

              {/* RIGHT MODAL */}
              <div className="w-1/2 bg-white rounded-lg border p-6 shadow-lg relative">
                <button onClick={() => setOpenModal("")} className="absolute top-3 right-3">✕</button>
                <h3 className="font-semibold text-[#002147] mb-3">PPF Calculator</h3>

                <InputField label="Initial Investment (₹)" value={initialInvestment} onChange={setInitialInvestment} placeholder="Enter Initial Investment" />
                <InputField label="Annual Contribution (₹)" value={annualContribution} onChange={setAnnualContribution} placeholder="Enter Annual Contribution" />
                <InputField label="Interest Rate (%)" value={interestRate} onChange={setInterestRate} placeholder="Enter Interest Rate" />
                <InputField label="Duration (Years)" value={years} onChange={setYears} placeholder="Enter Duration" />

                <button onClick={calculatePPF} className="w-full bg-[#002147] text-white font-semibold py-3 rounded-lg mt-3 hover:bg-[#1f3f62] transition-colors shadow-md">
                  Calculate Maturity
                </button>

                {maturityAmount && (
                  <div className="mt-4 p-4 bg-blue-100 text-[#002147] rounded-lg text-center font-bold">
                    <p>Maturity Amount: ₹{maturityAmount}</p>
                    <p>Total Interest Earned: ₹{totalInterest}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}


        {/* Compound Interest Dual Modal */}
        {openModal === "compoundInterest" && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="flex w-full max-w-6xl justify-between gap-6 px-6">

              {/* LEFT MODAL */}
              <div className="w-1/2 bg-gray-50 rounded-lg border p-6 shadow-lg relative">
                <button onClick={() => setOpenModal("")} className="absolute top-3 right-3">✕</button>
                <h3 className="font-semibold text-[#002147] mb-3">How Compound Interest is Calculated:</h3>
                <p className="text-sm text-gray-600 mb-2">
                  The interest is calculated on the principal amount and any accumulated interest:
                </p>
                <div className="overflow-x-auto text-sm text-[#002147] font-mono p-3 bg-white rounded-md border">
                  <pre><code>A = P * (1 + r/n)^(nt)</code></pre>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  <strong>A:</strong> Accumulated amount <br />
                  <strong>P:</strong> Principal amount <br />
                  <strong>r:</strong> Annual interest rate <br />
                  <strong>n:</strong> Compounding periods per year <br />
                  <strong>t:</strong> Time in years
                </p>
              </div>

              {/* RIGHT MODAL */}
              <div className="w-1/2 bg-white rounded-lg border p-6 shadow-lg relative">
                <button onClick={() => setOpenModal("")} className="absolute top-3 right-3">✕</button>
                <h3 className="font-semibold text-[#002147] mb-3">Compound Interest Calculator</h3>

                <InputField label="Principal Amount (₹)" placeholder="Enter principal amount" value={principal} onChange={setPrincipal} />
                <InputField label="Annual Interest Rate (%)" placeholder="Enter interest rate" value={interestRate} onChange={setInterestRate} />
                <InputField label="Time (Years)" placeholder="Enter time in years" value={time} onChange={setTime} />
                <InputField label="Compounding Periods per Year" placeholder="e.g., 1 for Annually, 12 for Monthly" value={compoundingPeriods} onChange={setCompoundingPeriods} />

                <button onClick={calculateCompoundInterest} className="w-full bg-[#002147] text-white font-semibold py-3 rounded-lg mt-3 hover:bg-[#1f3f62] transition-colors shadow-md">
                  Calculate Compound Interest
                </button>

                {amount && (
                  <div className="mt-4 p-4 bg-blue-100 text-[#002147] rounded-lg text-center font-bold">
                    <p>Accumulated Amount: ₹{amount}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {/* Currency Converter Dual Modal */}
        {openModal === "currencyConverter" && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="flex w-full max-w-6xl justify-between gap-6 px-6">

              {/* LEFT MODAL */}
              <div className="w-1/2 bg-gray-50 rounded-lg border p-6 shadow-lg relative">
                <button onClick={() => setOpenModal("")} className="absolute top-3 right-3">✕</button>
                <h3 className="font-semibold text-[#002147] mb-3">How the Conversion is Calculated:</h3>
                <p className="text-sm text-gray-600 mb-2">
                  The conversion is based on the exchange rate between the two currencies:
                </p>
                <div className="overflow-x-auto text-sm text-[#002147] font-mono p-3 bg-white rounded-md border">
                  <pre><code>Converted Amount = Amount * Exchange Rate</code></pre>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  This app uses a fixed, mock exchange rate.
                  For a real-time app, you would use a live API.
                </p>
              </div>

              {/* RIGHT MODAL */}
              <div className="w-1/2 bg-white rounded-lg border p-6 shadow-lg relative">
                <button onClick={() => setOpenModal("")} className="absolute top-3 right-3">✕</button>
                <h3 className="font-semibold text-[#002147] mb-3">Currency Converter</h3>

                <InputField label="Amount" placeholder="Enter amount" value={amount} onChange={setAmount} />
                <div className="flex flex-col sm:flex-row gap-4 my-4">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">From Currency</label>
                    <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg">
                      {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="flex items-center justify-center pt-8">
                    <FaExchangeAlt className="text-2xl text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">To Currency</label>
                    <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg">
                      {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <button onClick={convertCurrency} className="w-full bg-[#002147] text-white font-semibold py-3 rounded-lg hover:bg-[#1f3f62] transition-colors shadow-md">
                  Convert
                </button>

                {convertedAmount && (
                  <div className="mt-4 p-4 bg-blue-100 text-[#002147] rounded-lg text-center font-bold">
                    <p>Converted Amount: {convertedAmount} {toCurrency}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}



        {/* Suggest a Simulator Modal (previously comments) */}
        <Modal isOpen={openModal === "comments"} onClose={() => setOpenModal("")} title="Suggest a Simulator">
          <p className="text-gray-600 mb-4">Suggest a new simulator or leave feedback for a personalized financial plan.</p>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="What financial plan are you looking for? (e.g., 'A plan to save for a down payment on a house')"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 mt-3 resize-none"
          />
          <button onClick={handleCommentSubmit} className="w-full bg-[#002147] text-white font-semibold py-3 rounded-lg hover:bg-[#1f3f62] transition-colors shadow-md mt-4">
            Submit Suggestion
          </button>
          {comments.length > 0 && (
            <div className="mt-6">
              <h3 className="font-bold text-[#002147] mb-2">Suggestions Submitted:</h3>
              <div className="space-y-4">
                {comments.map((comment, index) => (
                  <div key={index} className="bg-blue-100 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-800">{comment.text}</p>
                    <p className="text-sm text-gray-500 mt-2 italic">Reply: {comment.reply}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Modal>

        {/* Custom Message Box */}
        <MessageBox
          isOpen={messageBoxOpen}
          onClose={() => setMessageBoxOpen(false)}
          message={messageBoxMessage}
        />
      </div>
      
    </div>
    <Chat />
<Footer/>
    </div>
  );
};

export default Simulations;
