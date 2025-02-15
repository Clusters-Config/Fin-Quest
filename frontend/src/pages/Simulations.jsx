import React, { useState } from "react";
import { FaMoneyBillWave, FaPiggyBank, FaCoins, FaCalculator, FaDollarSign, FaExchangeAlt, FaHouseUser, FaSchool, FaTag, FaSalesforce, FaSave, FaWeightHanging, FaPinterest, FaUserFriends, FaMoneyCheck } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import { FactoryIcon } from "lucide-react";
import axios from "axios"; // or any other fetch method

// Reusable Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-[#002147] mb-4">{title}</h2>
        {children}
        <button onClick={onClose} className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
          Close
        </button>
      </div>
    </div>
  );
};

// Input Field Component
const InputField = ({ label, placeholder, value, onChange }) => (
  <div className="flex flex-col mb-3">
    <label className="text-sm font-semibold mb-1">{label}</label>
    <input
      type="number"
      placeholder={placeholder}
      value={value}
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F39C12] transition"
      onChange={(e) => onChange(Number(e.target.value))}
    />
  </div>
);

const Simulations = () => {
  // States for various features
  const [income, setIncome] = useState();
  const [expenses, setExpenses] = useState();
  const [budget, setBudget] = useState();
  const [savings, setSavings] = useState();
  const [loanAmount, setLoanAmount] = useState();
  const [interestRate, setInterestRate] = useState();
  const [loanTerm, setLoanTerm] = useState();
  const [loanRepayment, setLoanRepayment] = useState();
  const [expenseAmount, setExpenseAmount] = useState();
  const [gstAmount, setGstAmount] = useState();
  const [gstPercentage, setGstPercentage] = useState(5); // Default GST percentage
  // Modal states
  const [openModal, setOpenModal] = useState("");
  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  // State for Tax Calculation
  const [taxRate, setTaxRate] = useState();
  const [taxAmount, setTaxAmount] = useState();
  // State for Sales Tax Calculation
  const [price, setPrice] = useState();
  const [salesTaxRate, setSalesTaxRate] = useState();
  const [salesTaxAmount, setSalesTaxAmount] = useState();
  const [totalPrice, setTotalPrice] = useState();
  // State for Monthly Budget Calculation
  const [remainingBudget, setRemainingBudget] = useState();
  // State for Corporate Tax Calculation
  const [taxableIncome, setTaxableIncome] = useState();
  const [corporateTaxRate, setCorporateTaxRate] = useState();
  const [corporateTaxAmount, setCorporateTaxAmount] = useState();
  // State for Compound Interest Calculation
  const [principal, setPrincipal] = useState();
  const [time, setTime] = useState();
  const [compoundingPeriods, setCompoundingPeriods] = useState();  // Default: annually
  const [amount, setAmount] = useState();
  // State for Emergency Fund Calculation
  const [monthlyExpenses, setMonthlyExpenses] = useState();
  const [monthsForFund, setMonthsForFund] = useState(); // Default: 6 months
  const [emergencyFund, setEmergencyFund] = useState();
  // States for loan inputs
  const [loanTenure, setLoanTenure] = useState();
  const [emiAmount, setEmiAmount] = useState(null);
  const [loanPurpose, setLoanPurpose] = useState(); // Default loan purpose
  //States of currency converter  
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
   
   
  

  // Calculation Functions
  const calculateBudget = () => {
    const remainingBudget = income - expenses;
    setBudget(remainingBudget > 0 ? remainingBudget : 0);
  };

  const calculateLoan = () => {
    const monthlyInterest = interestRate / 100 / 12;
    const payment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -loanTerm));
    setLoanRepayment(payment.toFixed(2));
  };

  // Function to calculate GST
  const calculateGST = () => {
    if (expenseAmount > 0) {
      const calculatedGST = (expenseAmount * gstPercentage) / 100;
      setGstAmount(calculatedGST);
    } else {
      setGstAmount(0); // Clear GST if expense is not valid
    }
  };
  
  // Calculation Functions
  const calculateTax = () => {
    const taxAmount = (income * taxRate) / 100;
    setTaxAmount(taxAmount.toFixed(2));
  };

  // Calculation Functions for Sales Tax
  const calculateSalesTax = () => {
    const salesTaxAmount = (price * salesTaxRate) / 100;
    const totalPrice = price + salesTaxAmount;
    setSalesTaxAmount(salesTaxAmount.toFixed(2));
    setTotalPrice(totalPrice.toFixed(2));
  };

  // Calculation Functions for Corporate Tax
  const calculateCorporateTax = () => {
    const corporateTaxAmount = (taxableIncome * corporateTaxRate) / 100;
    setCorporateTaxAmount(corporateTaxAmount.toFixed(2));
  };
    
  // Calculation Functions for Monthly Budget
  const calculateMonthlyBudget = () => {
    const remainingBudget = income - expenses;
    setRemainingBudget(remainingBudget > 0 ? remainingBudget : 0);  // Ensure remaining budget is non-negative
  };
 
  // Calculation Functions for Compound Interest
  const calculateCompoundInterest = () => {
    const amount =principal * Math.pow(1 + (interestRate / (compoundingPeriods * 100)), compoundingPeriods * time);
    ;
    setAmount(amount.toFixed(2));
  };

  // Calculation Functions for Emergency Fund
  const calculateEmergencyFund = () => {
    const emergencyFundAmount = monthlyExpenses * monthsForFund;
    setEmergencyFund(emergencyFundAmount.toFixed(2));
  };

  // Function to calculate EMI based on the formula
  const calculateEMI = () => {
    if (loanAmount > 0 && interestRate > 0 && loanTenure > 0) {
      // Convert interest rate to a monthly rate
      const monthlyInterestRate = interestRate / (12 * 100);
      const tenureInMonths = loanTenure * 12;
      
      // EMI formula: [P × r × (1 + r)^n] / [(1 + r)^n – 1]
      const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureInMonths)) / 
                  (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1);
      setEmiAmount(emi.toFixed(2));
    } else {
      alert('Please enter valid values for all fields!');
    }
  };



  // List of currencies for dropdown
  const currencies = [
    "USD", "INR", "EUR", "GBP", "AUD", "CAD", "JPY", "CNY", "CHF", "NZD"
  ];

  // Function to fetch exchange rate and convert
  const convertCurrency = async () => {
    if (amount && fromCurrency && toCurrency) {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const rate = response.data.rates[toCurrency];
        const converted = (amount * rate).toFixed(2);
        setConvertedAmount(converted);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    }
  };

  // Comment state
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Handle comment submission
  const handleCommentSubmit = () => {
    if (newComment) {
      setComments([...comments, { text: newComment, reply: "Thank you for your suggestion! We will consider it." }]);
      setNewComment("");
    }
  };

 // Filtered content based on search query
  const filteredContent = [
    { label: "Budget Calculator", key: "budget" },
    { label: "Currency Converter", key: "currencyConverter" },
    { label: "GST Calculator", key: "gst" },
    { label: "Tax Calculator", key: "tax" },
    { label: "EMI Calculator ", key: "EMI" },
    { label: "Corporate Tax Calculator", key: "corporateTax" },
    { label: "Compound Interest Calculator", key: "compoundInterest" },
    { label: "Emergency Fund Calculator", key: "emergencyFund" },
    { label: "Sales Tax Calculator", key: "salestax" }
     
  ].filter((item) => item.label.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="bg-gradient-to-b from-[#F8FAFC] to-[#FFFFFF] min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-5xl p-8">
        <header className="bg-[#002147] text-white text-center py-6 rounded-t-xl">
          <h1 className="text-3xl font-semibold flex items-center justify-center gap-3">
            <FaCalculator /> Real-World Financial Simulations
          </h1>
          <p className="text-lg mt-2">Simulate financial decisions and track your goals effortlessly.</p>
        </header>

        {/* Search Bar */}
        <div className="mt-8 mb-6">
          <input
            type="text"
            placeholder="Search simulations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F39C12] transition"
          />
        </div>

        {/* Buttons to Open Modals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {filteredContent.map((item) => (
            <button
              key={item.key}
              onClick={() => setOpenModal(item.key)}
              className="bg-[#F39C12] text-white py-3 rounded-lg hover:bg-[#e67e22] transition w-full"
            >
              {item.key === "budget" && <FaMoneyBillWave className="inline-block mr-2" />}
              {item.key === "currencyConverter" && <FaHouseUser className="inline-block mr-2" />}
              {item.key === "gst" && <FaExchangeAlt className="inline-block mr-2" />}
              {item.key === "tax" && <FaTag className="inline-block mr-2" />}
              {item.key === "salestax" && <FaSalesforce className="inline-block mr-2" />}
              {item.key === "EMI" && <FaMoneyCheck className="inline-block mr-2" />}
              {item.key === "corporateTax" && <FactoryIcon className="inline-block mr-2" />}
              {item.key === "compoundInterest" && <FaPinterest className="inline-block mr-2" />}
              {item.key === "emergencyFund" && <FaUserFriends className="inline-block mr-2" />}

              {item.label}
            </button>
          ))}
        </div>

         {/* Modal for Tax Calculator */}
          <Modal isOpen={openModal === "tax"} onClose={() => setOpenModal("")} title="Tax Calculator">
            <InputField label="Income (₹)" placeholder="Enter income" value={income} onChange={setIncome} />
            <InputField label="Tax Rate (%)" placeholder="Enter tax rate" value={taxRate} onChange={setTaxRate} />
            <button onClick={calculateTax} className="w-full bg-[#002147] text-white py-2 rounded-lg hover:bg-[#e67e22] transition">
              Calculate Tax
            </button>
            {taxAmount !== 0 && <p className="mt-3 text-lg font-semibold text-[#002147]">Tax Amount: ₹{taxAmount}</p>}
          </Modal>
 
           {/* EMI Calculator Modal */}
            <Modal isOpen={openModal === "EMI"} onClose={() => setOpenModal("")} title="EMI Calculator">
              {/* Loan Purpose Dropdown */}
              <div className="mb-3">
                <label htmlFor="loanPurpose" className="block text-lg">Loan Purpose</label>
                <select 
                  id="loanPurpose"
                  value={loanPurpose}
                  onChange={(e) => setLoanPurpose(e.target.value)}
                  className="w-full py-2 px-4 border border-gray-300 rounded-lg"
                >
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="Car Loan">Car Loan</option>
                  <option value="Education Loan">Education Loan</option>
                  <option value="Business Loan">Business Loan</option>
                </select>
              </div>

              {/* Loan Amount Input */}
              <InputField
                label="Loan Amount (₹)"
                placeholder="Enter loan amount"
                value={loanAmount}
                onChange={setLoanAmount}
              />

              {/* Interest Rate Input */}
              <InputField
                label="Interest Rate (%)"
                placeholder="Enter interest rate"
                value={interestRate}
                onChange={setInterestRate}
              />

              {/* Loan Tenure Input */}
              <InputField
                label="Loan Tenure (years)"
                placeholder="Enter loan tenure in years"
                value={loanTenure}
                onChange={setLoanTenure}
              />

              {/* Calculate EMI Button */}
              <button 
                onClick={calculateEMI} 
                className="w-full bg-[#9b59b6] text-white py-2 rounded-lg hover:bg-[#8e44ad] transition mt-3"
              >
                Calculate EMI
              </button>

              {/* Display EMI Amount */}
              {emiAmount && (
                <div className="mt-3 text-center">
                  <h3 className="text-xl font-semibold text-[#002147]">
                    Your EMI Amount: ₹{emiAmount}
                  </h3>
                </div>
              )}
            </Modal>

          {/* Budget Modal */}
          <Modal isOpen={openModal === "budget"} onClose={() => setOpenModal("")} title="Budget Calculator">
            <InputField label="Income (₹)" placeholder="Enter income" value={income} onChange={setIncome} />
            <InputField label="Expenses (₹)" placeholder="Enter expenses" value={expenses} onChange={setExpenses} />
            <button onClick={calculateBudget} className="w-full bg-[#002147] text-white py-2 rounded-lg hover:bg-[#e67e22] transition">
              Calculate Budget
            </button>
            {budget !== 0 && <p className="mt-3 text-lg font-semibold text-[#002147]">Remaining Budget: ₹{budget}</p>}
          </Modal>

          {/* Sales Tax Modal */}
          <Modal isOpen={openModal === "salestax"} onClose={() => setOpenModal("")} title="Sales Tax Calculator">
            <InputField label="Price (₹)" placeholder="Enter price" value={price} onChange={setPrice} />
            <InputField label="Sales Tax Rate (%)" placeholder="Enter sales tax rate" value={salesTaxRate} onChange={setSalesTaxRate} />
            <button onClick={calculateSalesTax} className="w-full bg-[#002147] text-white py-2 rounded-lg hover:bg-[#e67e22] transition">
              Calculate Sales Tax
            </button>
            {salesTaxAmount !== 0 && (
              <div className="mt-3 text-lg font-semibold text-[#002147]">
                <p>Sales Tax Amount: ₹{salesTaxAmount}</p>
                <p>Total Price (Including Tax): ₹{totalPrice}</p>
              </div>
            )}
          </Modal>

          {/* Corporate Tax Modal */}
          <Modal isOpen={openModal === "corporateTax"} onClose={() => setOpenModal("")} title="Corporate Tax Calculator">
            <InputField label="Taxable Income (₹)" placeholder="Enter taxable income" value={taxableIncome} onChange={setTaxableIncome} />
            <InputField label="Corporate Tax Rate (%)" placeholder="Enter tax rate" value={corporateTaxRate} onChange={setCorporateTaxRate} />
            <button onClick={calculateCorporateTax} className="w-full bg-[#002147] text-white py-2 rounded-lg hover:bg-[#e67e22] transition">
              Calculate Corporate Tax
            </button>
            {corporateTaxAmount !== 0 && (
              <div className="mt-3 text-lg font-semibold text-[#002147]">
                <p>Corporate Tax: ₹{corporateTaxAmount}</p>
              </div>
            )}
          </Modal>

          {/* Compound Interest Modal */}
          <Modal isOpen={openModal === "compoundInterest"} onClose={() => setOpenModal("")} title="Compound Interest Calculator">
            <InputField label="Principal Amount (₹)" placeholder="Enter principal amount" value={principal} onChange={setPrincipal} />
            <InputField label="Annual Interest Rate (%)" placeholder="Enter interest rate" value={interestRate} onChange={setInterestRate} />
            <InputField label="Time (years)" placeholder="Enter time in years" value={time} onChange={setTime} />
            <InputField label="Compounding Periods per Year" placeholder="Enter compounding periods per year" value={compoundingPeriods} onChange={setCompoundingPeriods} />
            <button onClick={calculateCompoundInterest} className="w-full bg-[#002147] text-white py-2 rounded-lg hover:bg-[#e67e22] transition">
              Calculate Compound Interest
            </button>
            {amount !== 0 && (
              <div className="mt-3 text-lg font-semibold text-[#002147]">
                <p>Accumulated Amount: ₹{amount}</p>
              </div>
            )}
          </Modal>

          {/* Emergency Fund Modal */}
          <Modal isOpen={openModal === "emergencyFund"} onClose={() => setOpenModal("")} title="Emergency Fund Calculator">
            <InputField label="Monthly Expenses (₹)" placeholder="Enter your monthly expenses" value={monthlyExpenses} onChange={setMonthlyExpenses} />
            <InputField label="Months for Emergency Fund" placeholder="Enter number of months" value={monthsForFund} onChange={setMonthsForFund} />
            <button onClick={calculateEmergencyFund} className="w-full bg-[#002147] text-white py-2 rounded-lg hover:bg-[#e67e22] transition">
              Calculate Emergency Fund
            </button>
            {emergencyFund !== 0 && (
              <div className="mt-3 text-lg font-semibold text-[#002147]">
                <p>Recommended Emergency Fund: ₹{emergencyFund}</p>
              </div>
            )}
          </Modal>

           {/* Currency Converter Modal */}
            <Modal isOpen={openModal === "currencyConverter"} onClose={() => setOpenModal("")} title="Currency Converter">
              {/* Amount Input */}
              <InputField 
                label="Amount" 
                placeholder="Enter amount" 
                value={amount} 
                onChange={setAmount} 
              />

              {/* From Currency Dropdown */}
              <div className="mb-3">
                <label htmlFor="fromCurrency" className="block text-lg">From Currency</label>
                <select 
                  id="fromCurrency"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full py-2 px-4 border border-gray-300 rounded-lg"
                >
                  {currencies.map(currency => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>

              {/* To Currency Dropdown */}
              <div className="mb-3">
                <label htmlFor="toCurrency" className="block text-lg">To Currency</label>
                <select 
                  id="toCurrency"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full py-2 px-4 border border-gray-300 rounded-lg"
                >
                  {currencies.map(currency => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>

              {/* Convert Button */}
              <button 
                onClick={convertCurrency} 
                className="w-full bg-[#002147] text-white py-2 rounded-lg hover:bg-[#e67e22] transition mt-3"
              >
                Convert
              </button>

              {/* Display Converted Amount */}
              {convertedAmount && (
                <div className="mt-3 text-center">
                  <h3 className="text-xl font-semibold text-[#002147]">
                    Converted Amount: {convertedAmount} {toCurrency}
                  </h3>
                </div>
              )}
            </Modal>


         {/* Modal for GST Calculator */}
          <Modal isOpen={openModal === "gst"} onClose={() => setOpenModal("")} title="GST Calculator">
            {/* Input field for expenses */}
            <input
              type="number"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(parseFloat(e.target.value))}
              placeholder="Enter Expense Amount"
              className="w-full py-2 px-4 border border-gray-300 rounded-lg mt-3"
            />

            {/* Select for GST percentage */}
            <select
              value={gstPercentage}
              onChange={(e) => setGstPercentage(parseFloat(e.target.value))}
              className="w-full py-2 px-4 border border-gray-300 rounded-lg mt-3"
            >
              <option value={5}>5%</option>
              <option value={12}>12%</option>
              <option value={18}>18%</option>
              <option value={28}>28%</option>
            </select>

            {/* Calculate GST Button */}
            <button
              onClick={calculateGST}
              className="w-full bg-[#9b59b6] text-white py-2 rounded-lg hover:bg-[#8e44ad] transition mt-3"
            >
              Calculate GST ({gstPercentage}%)
            </button>

            {/* Show GST Amount */}
            {gstAmount !== 0 && <p className="mt-3 text-lg font-semibold text-[#002147]">GST Amount: ₹{gstAmount}</p>}
          </Modal>



          {/* Modal for Comment Section */}
          <Modal isOpen={openModal === "comments"} onClose={() => setOpenModal("")} title="Comment Section">
            <h2 className="text-xl font-semibold text-[#002147]">Suggest a New Simulator</h2>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Enter your suggestion..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F39C12] mt-3"
            />
            <button onClick={handleCommentSubmit} className="w-full bg-[#F39C12] text-white py-2 rounded-lg hover:bg-[#e67e22] transition mt-3">
              Submit Comment
            </button>
            {comments.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold text-[#002147]">Comments:</h3>
                {comments.map((comment, index) => (
                  <div key={index} className="mt-2 bg-gray-100 p-3 rounded-lg">
                    <p>{comment.text}</p>
                    <p className="text-sm text-[#6C757D] mt-1">{comment.reply}</p>
                  </div>
                ))}
              </div>
            )}
            {/* Quote near the close button */}
            <div className="mt-4 text-center text-[#6C757D] text-sm italic">
              "Your feedback shapes the future, thank you for sharing your thoughts!"
            </div>
          </Modal>


        {/* Add a button to open the comment section */}
        <div className="mt-8">
          <button
            onClick={() => setOpenModal("comments")}
            className="w-full bg-[#002147] text-white py-2 rounded-lg hover:bg-[#e67e22] transition"
          >
            Suggest a Simulator
          </button>
        </div>

       
      </div>
    </div>
  );
};

export default Simulations;
