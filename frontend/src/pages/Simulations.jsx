import React, { useState } from "react";
import { FaMoneyBillWave, FaPiggyBank, FaCoins, FaCalculator, FaDollarSign, FaExchangeAlt, FaHouseUser, FaSchool, FaTag, FaSalesforce, FaSave, FaWeightHanging, FaPinterest, FaUserFriends } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import { FactoryIcon } from "lucide-react";

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
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [budget, setBudget] = useState(0);
  const [savings, setSavings] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [loanRepayment, setLoanRepayment] = useState(0);
  const [gstAmount, setGstAmount] = useState(0);

  // Modal states
  const [openModal, setOpenModal] = useState("");

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

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

  const calculateGST = () => {
    setGstAmount((income * 0.18).toFixed(2)); // 18% GST
  };

  
  
  // Calculation Functions
  const calculateTax = () => {
    const taxAmount = (income * taxRate) / 100;
    setTaxAmount(taxAmount.toFixed(2));
  };



  // Calculation Functions for Capital Gain Tax
const calculateCapitalGainTax = () => {
  const capitalGain = salePrice - purchasePrice;
  if (capitalGain > 0) {
    const capitalGainTaxAmount = (capitalGain * capitalGainTaxRate) / 100;
    setCapitalGainTaxAmount(capitalGainTaxAmount.toFixed(2));
    setCapitalGain(capitalGain.toFixed(2));
  } else {
    setCapitalGainTaxAmount(0);
    setCapitalGain(0);
  }
};


 // State for Capital Gain Tax Calculation
 const [purchasePrice, setPurchasePrice] = useState(0);
 const [salePrice, setSalePrice] = useState(0);
 const [capitalGainTaxRate, setCapitalGainTaxRate] = useState(0);
 const [capitalGainTaxAmount, setCapitalGainTaxAmount] = useState(0);
 const [capitalGain, setCapitalGain] = useState(0);

  // State for Tax Calculation
  const [taxRate, setTaxRate] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);

  // State for Sales Tax Calculation
  const [price, setPrice] = useState(0);
  const [salesTaxRate, setSalesTaxRate] = useState(0);
  const [salesTaxAmount, setSalesTaxAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
  
  // State for Corporate Tax Calculation
const [taxableIncome, setTaxableIncome] = useState(0);
const [corporateTaxRate, setCorporateTaxRate] = useState(0);
const [corporateTaxAmount, setCorporateTaxAmount] = useState(0);
  
// Calculation Functions for Monthly Budget
const calculateMonthlyBudget = () => {
  const remainingBudget = income - expenses;
  setRemainingBudget(remainingBudget > 0 ? remainingBudget : 0);  // Ensure remaining budget is non-negative
};

// State for Monthly Budget Calculation
 const [remainingBudget, setRemainingBudget] = useState(0);
  
// Calculation Functions for Compound Interest
const calculateCompoundInterest = () => {
  const amount =principal * Math.pow(1 + (interestRate / (compoundingPeriods * 100)), compoundingPeriods * time);
  ;
  setAmount(amount.toFixed(2));
};

// State for Compound Interest Calculation
const [principal, setPrincipal] = useState(0);
const [time, setTime] = useState(0);
const [compoundingPeriods, setCompoundingPeriods] = useState(1);  // Default: annually
const [amount, setAmount] = useState(0);

// Calculation Functions for Emergency Fund
const calculateEmergencyFund = () => {
  const emergencyFundAmount = monthlyExpenses * monthsForFund;
  setEmergencyFund(emergencyFundAmount.toFixed(2));
};

// State for Emergency Fund Calculation
const [monthlyExpenses, setMonthlyExpenses] = useState(0);
const [monthsForFund, setMonthsForFund] = useState(6); // Default: 6 months
const [emergencyFund, setEmergencyFund] = useState(0);

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
    { label: "Loan Calculator", key: "loan" },
    { label: "GST Calculator", key: "gst" },
    { label: "Tax Calculator", key: "tax" },
    { label: "Capital Gain Tax Calculator", key: "capitalGainTax" },
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
              {item.key === "loan" && <FaHouseUser className="inline-block mr-2" />}
              {item.key === "gst" && <FaExchangeAlt className="inline-block mr-2" />}
              {item.key === "tax" && <FaTag className="inline-block mr-2" />}
              {item.key === "salestax" && <FaSalesforce className="inline-block mr-2" />}
              {item.key === "capitalGainTax" && <FaWeightHanging className="inline-block mr-2" />}
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

          {/* Modal for Capital Gain Tax Calculator */}
          <Modal isOpen={openModal === "capitalGainTax"} onClose={() => setOpenModal("")} title="Capital Gain Tax Calculator">
            <InputField label="Purchase Price (₹)" placeholder="Enter purchase price" value={purchasePrice} onChange={setPurchasePrice} />
            <InputField label="Sale Price (₹)" placeholder="Enter sale price" value={salePrice} onChange={setSalePrice} />
            <InputField label="Capital Gain Tax Rate (%)" placeholder="Enter tax rate" value={capitalGainTaxRate} onChange={setCapitalGainTaxRate} />
            <button onClick={calculateCapitalGainTax} className="w-full bg-[#002147] text-white py-2 rounded-lg hover:bg-[#e67e22] transition">
              Calculate Capital Gain Tax
            </button>
            {capitalGain > 0 && (
              <div className="mt-3 text-lg font-semibold text-[#002147]">
                <p>Capital Gain: ₹{capitalGain}</p>
                <p>Capital Gain Tax: ₹{capitalGainTaxAmount}</p>
              </div>
            )}
            {capitalGain === 0 && salePrice > 0 && <p className="mt-3 text-lg font-semibold text-[#e74c3c]">No Capital Gain (Loss Occurred)</p>}
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

          {/* Loan Modal */}
          <Modal isOpen={openModal === "loan"} onClose={() => setOpenModal("")} title="Loan Calculator">
            <InputField label="Loan Amount (₹)" placeholder="Enter loan amount" value={loanAmount} onChange={setLoanAmount} />
            <InputField label="Interest Rate (%)" placeholder="Enter interest rate" value={interestRate} onChange={setInterestRate} />
            <InputField label="Loan Term (months)" placeholder="Enter loan term" value={loanTerm} onChange={setLoanTerm} />
            <button onClick={calculateLoan} className="w-full bg-[#002147] text-white py-2 rounded-lg hover:bg-[#e67e22] transition">
              Calculate Loan
            </button>
            {loanRepayment !== 0 && <p className="mt-3 text-lg font-semibold text-[#002147]">Monthly Payment: ₹{loanRepayment}</p>}
          </Modal>

          {/* GST Modal */}
          <Modal isOpen={openModal === "gst"} onClose={() => setOpenModal("")} title="GST Calculator">
            <InputField label="Income (₹)" placeholder="Enter amount" value={income} onChange={setIncome} />
            <button onClick={calculateGST} className="w-full bg-[#9b59b6] text-white py-2 rounded-lg hover:bg-[#8e44ad] transition">
              Calculate GST (18%)
            </button>
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
