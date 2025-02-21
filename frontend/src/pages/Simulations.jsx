import React, { useEffect, useState } from "react";
import { FaMoneyBillWave, FaPiggyBank, FaCoins, FaCalculator, FaDollarSign, FaExchangeAlt, FaHouseUser, FaSchool, FaTag, FaSalesforce, FaSave, FaWeightHanging, FaPinterest, FaUserFriends, FaMoneyCheck } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import { FactoryIcon } from "lucide-react";
import axios from "axios"; // or any other fetch method

// Reusable Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[95vh] overflow-y-auto">
        <h2 className="text-xl font-bold text-[#002147] mb-4">{title}</h2>
        {children}
        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
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
  // State for Compound Interest Calculation
  const [principal, setPrincipal] = useState();
  const [time, setTime] = useState();
  const [compoundingPeriods, setCompoundingPeriods] = useState();  // Default: annually
  const [amount, setAmount] = useState(); 
  // States for loan inputs
  const [loanTenure, setLoanTenure] = useState();
  const [emiAmount, setEmiAmount] = useState(null);
  const [loanPurpose, setLoanPurpose] = useState(); // Default loan purpose
  //States of currency converter  
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  //States of credit card payoff
  const [balance, setBalance] = useState("");
  const [apr, setApr] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [payoffTime, setPayoffTime] = useState(null);
  //States of public provident fund calculator
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualContribution, setAnnualContribution] = useState("");
  const [years, setYears] = useState(15); // Default duration of 15 years for PPF
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  //States od FDC calculator
  const [compoundingFrequency, setCompoundingFrequency] = useState();
   // Default frequency (Quarterly)
   const [suggestion,setsuggestion] = useState("")
   const [email,setemail] = useState();
   const [newcomments, setcomment] = useState("");

   useEffect(()=>{
    axios.defaults.withCredentials = true
    axios.get(" http://localhost:4047/verify")
    .then(res=>setemail(res.data.email))
   })


  
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

  // Function to calculate FD maturity amount
  const calculateFD = () => {
    const principalAmount = parseFloat(principal);
    const rate = parseFloat(interestRate) / 100;
    const time = parseInt(years, 10);
    const n = parseInt(compoundingFrequency, 10);

    // Formula for Compound Interest
    const maturity = principalAmount * Math.pow(1 + rate / n, n * time);
    setMaturityAmount(maturity.toFixed(2));
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

  // Function to calculate PPF maturity
  const calculatePPF = () => {
    // Convert inputs to numbers
    const principal = parseFloat(initialInvestment);
    const yearlyContribution = parseFloat(annualContribution);
    const rate = parseFloat(interestRate) / 100;
    const duration = parseInt(years, 10);

    // Calculate compound interest for initial investment
    let maturity = principal * Math.pow(1 + rate, duration);

    // Calculate compound interest for annual contributions (as yearly deposits)
    let totalContributions = 0;
    for (let i = 1; i <= duration; i++) {
      totalContributions += yearlyContribution * Math.pow(1 + rate, duration - i);
    }

    maturity += totalContributions;

    // Calculate total interest earned
    const totalInvested = principal + yearlyContribution * duration;
    const interestEarned = maturity - totalInvested;

    setMaturityAmount(maturity.toFixed(2));
    setTotalInterest(interestEarned.toFixed(2));
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

  
    // Function to calculate the payoff time in months
    const calculatePayoffTime = () => {
      if (!balance || !apr || !monthlyPayment) return;
  
      // Convert APR to a decimal and calculate the monthly interest rate
      const monthlyInterestRate = (parseFloat(apr) / 100) / 12;
      let remainingBalance = parseFloat(balance);
      const monthlyPaymentAmount = parseFloat(monthlyPayment);
  
      if (monthlyPaymentAmount <= remainingBalance * monthlyInterestRate) {
        alert('Monthly payment is too low to pay off the debt!');
        return;
      }
  
      // Calculate the number of months needed to pay off the debt
      let months = 0;
      while (remainingBalance > 0) {
        const interest = remainingBalance * monthlyInterestRate;
        remainingBalance += interest - monthlyPaymentAmount;
        months++;
      }
  
      setPayoffTime(months);
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
      axios.defaults.withCredentials = true
    axios.post(" http://localhost:4047/comment",{email,newcomments})
    }
  };

 // Filtered content based on search query
  const filteredContent = [
    { label: "Credit CardPayoff Calculator", key: "creditCardPayoff" },
    { label: "Currency Converter", key: "currencyConverter" },
    { label: "GST Calculator", key: "gst" },
    { label: "Tax Calculator", key: "tax" },
    { label: "EMI Calculator ", key: "EMI" },
    { label: "PPF Calculator", key: "ppf" },
    { label: "Compound Interest Calculator", key: "compoundInterest" },
    { label: "FDC Calculator", key: "fd" },
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
              {item.key === "creditCardPayoff" && <FaMoneyBillWave className="inline-block mr-2" />}
              {item.key === "currencyConverter" && <FaCoins className="inline-block mr-2" />}
              {item.key === "gst" && <FaCalculator className="inline-block mr-2" />}
              {item.key === "tax" && <FaTag className="inline-block mr-2" />}
              {item.key === "salestax" && <FaSalesforce className="inline-block mr-2" />}
              {item.key === "EMI" && <FaMoneyCheck className="inline-block mr-2" />}
              {item.key === "ppf" && <FactoryIcon className="inline-block mr-2" />}
              {item.key === "compoundInterest" && <FaPinterest className="inline-block mr-2" />}
              {item.key === "fd" && <FaUserFriends className="inline-block mr-2" />}

              {item.label}
            </button>
          ))}
        </div>
          

         {/* Modal and State Management */}
              <Modal isOpen={openModal === "creditCardPayoff"} onClose={() => setOpenModal("")} title="Credit Card Payoff Calculator">
                 {/* Credit Card Payoff Description and Formula inside a Box */}
                    <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                      <p className="font-semibold text-[#002147]">How the Payoff is Calculated:</p>
                      <p className="text-[#555]">
                        The payoff time depends on your balance, monthly payment, and interest rate. Formula:
                      </p>
                      <p className="text-[#002147] font-semibold mt-2">
                        <span className="text-bold">Time = log(Payment / (Payment - Balance × Interest)) / log(1 + Interest)</span>
                      </p>
                      <p className="text-[#555] mt-2">
                        Where:
                        <ul className="list-disc pl-5 mt-2">
                          <li><span className="font-semibold">Balance:</span> Your credit card balance.</li>
                          <li><span className="font-semibold">Payment:</span> Monthly payment.</li>
                          <li><span className="font-semibold">Interest:</span> Monthly interest rate (APR/12).</li>
                        </ul>
                      </p>
                    </div>

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
                  className="w-full bg-[#002147] text-white py-2 rounded-lg hover:bg-[#e67e22] transition"
                >
                  Calculate Payoff Time
                </button>
                {payoffTime !== null && (
                  <p className="mt-3 text-lg font-semibold text-[#002147]">
                    Time to Pay Off: {payoffTime} months
                  </p>
                )}
              </Modal>

          {/* Modal for Tax Calculator */}
              <Modal isOpen={openModal === "tax"} onClose={() => setOpenModal("")} title="Tax Calculator">
                  {/* Tax Description and Formula inside a Box */}
                      <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                        <p className="font-semibold text-[#002147]">How the Tax is Calculated:</p>
                        <p className="text-[#555]">
                          The tax is calculated by applying the given tax rate on your income. The formula is:
                        </p>
                        <p className="text-[#002147] font-semibold mt-4">
                          <span className="text-bold">Tax Amount = Income × (Tax Rate / 100)</span>
                        </p>
                        <p className="text-[#555] mt-2">
                          Where:
                          <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li><span className="font-semibold">Income:</span> Your total taxable income in ₹.</li>
                            <li><span className="font-semibold">Tax Rate:</span> The percentage of income that will be taxed.</li>
                          </ul>
                        </p>
                      </div>
                <div className="space-y-4">
                  {/* Input Fields for Tax Calculator */}
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

                  {/* Button to Calculate Tax */}
                  <button
                    onClick={calculateTax}
                    className="w-full bg-[#002147] text-white py-2 rounded-lg hover:bg-[#e67e22] transition"
                  >
                    Calculate Tax
                  </button>


                  {/* Display Tax Amount */}
                  {taxAmount !== 0 && (
                    <div className="mt-3 text-lg font-semibold text-[#002147]">
                      <p>Tax Amount: ₹{taxAmount}</p>
                    </div>
                  )}
                </div>
              </Modal>

 
           {/* EMI Calculator Modal */}
            <Modal isOpen={openModal === "EMI"} onClose={() => setOpenModal("")} title="EMI Calculator">
              {/* EMI Calculator Description and Formula inside a Box */}
                  <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                    <p className="font-semibold text-[#002147]">How EMI is Calculated:</p>
                    <p className="text-[#555]">
                      EMI is calculated based on the loan amount, interest rate, and loan tenure. Formula:
                    </p>
                    <p className="text-[#002147] font-semibold">
                      <span className="text-bold">EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1]</span>
                    </p>
                    <p className="text-[#555] mt-2">
                      Where:
                      <ul className="list-disc pl-5 mt-2">
                        <li><span className="font-semibold">P:</span> Principal loan amount.</li>
                        <li><span className="font-semibold">r:</span> Monthly interest rate (Annual Interest Rate / 12).</li>
                        <li><span className="font-semibold">n:</span> Number of monthly installments (loan tenure in months).</li>
                      </ul>
                    </p>
                  </div>

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

        {/* Modal with FD Form */}
            <Modal isOpen={openModal === "fd"} onClose={() => setOpenModal("")} title="FD Calculator">
              {/* Fixed Deposit (FD) Calculator Description and Formula inside a Box */}
                  <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                    <p className="font-semibold text-[#002147]">How Fixed Deposit (FD) Returns are Calculated:</p>
                    <p className="text-[#555]">
                      Fixed Deposit returns are calculated based on the principal amount, interest rate, and tenure. Formula for maturity amount:
                    </p>
                    <p className="text-[#002147] font-semibold">
                      <span className="text-bold">Maturity Amount = P × (1 + r/n)^(nt)</span>
                    </p>
                    <p className="text-[#555] mt-2">
                      Where:
                      <ul className="list-disc pl-5 mt-2">
                        <li><span className="font-semibold">P:</span> Principal amount (initial investment).</li>
                        <li><span className="font-semibold">r:</span> Annual interest rate (as a decimal).</li>
                        <li><span className="font-semibold">n:</span> Number of compounding periods per year (typically 4 for quarterly compounding).</li>
                        <li><span className="font-semibold">t:</span> Tenure of the FD (in years).</li>
                      </ul>
                    </p>
                  </div>

              {/* Input Fields for FD Calculator */}
              <InputField
                label="Principal Amount (₹)"
                placeholder="Enter Principal Amount"
                value={principal}
                onChange={setPrincipal}
              />
              <InputField
                label="Interest Rate (%)"
                placeholder="Enter Interest Rate"
                value={interestRate}
                onChange={setInterestRate}
              />
              <InputField
                label="Duration (Years)"
                placeholder="Enter Duration"
                value={years}
                onChange={setYears}
              />
              <InputField
                label="Compounding Frequency (Per Year)"
                placeholder="Enter Frequency (1 for Annually, 4 for Quarterly, etc.)"
                value={compoundingFrequency}
                onChange={setCompoundingFrequency}
              />

              <button
                onClick={calculateFD}
                className="w-full bg-[#002147] text-white py-2 rounded-lg hover:bg-[#e67e22] transition"
              >
                Calculate Maturity
              </button>

              {/* Display Results */}
              {maturityAmount && (
                <div className="mt-3 text-lg font-semibold text-[#002147]">
                  <p>Maturity Amount: ₹{maturityAmount}</p>
                </div>
              )}
            </Modal> 

          {/* Sales Tax Modal */}
          <Modal isOpen={openModal === "salestax"} onClose={() => setOpenModal("")} title="Sales Tax Calculator">
            {/* Sales Tax Calculator Description and Formula inside a Box */}
              <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                <p className="font-semibold text-[#002147]">How Sales Tax is Calculated:</p>
                <p className="text-[#555]">
                  Sales tax is calculated by applying the sales tax rate to the price of a product or service. Formula:
                </p>
                <p className="text-[#002147] font-semibold mt-2">
                  <span className="text-bold">Sales Tax = Price × (Tax Rate / 100)</span>
                </p>
                <p className="text-[#555] mt-2">
                  Where:
                  <ul className="list-disc pl-5 mt-2">
                    <li><span className="font-semibold">Price:</span> The price of the product or service.</li>
                    <li><span className="font-semibold">Tax Rate:</span> The sales tax rate as a percentage.</li>
                  </ul>
                </p>
              </div>

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

        {/* PPF Calculator Modal */}
            <Modal isOpen={openModal === "ppf"} onClose={() => setOpenModal("")} title="PPF Calculator">
              {/* PPF Calculator Description and Formula inside a Box */}
                <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                  <p className="font-semibold text-[#002147]">How PPF Maturity is Calculated:</p>
                  <p className="text-[#555]">
                    The PPF maturity amount is based on your initial investment, annual contributions, interest rate, and tenure. Formula:
                  </p>
                  <p className="text-[#002147] font-semibold mt-2">
                    <span className="text-bold">Maturity Amount = P × [(1 + r/n)^(nt) - 1] / (r/n)</span>
                  </p>
                  <p className="text-[#555] mt-2">
                    Where:
                    <ul className="list-disc pl-5 mt-2">
                      <li><span className="font-semibold">P:</span> Annual Contribution (investment).</li>
                      <li><span className="font-semibold">r:</span> Annual Interest Rate (as a decimal).</li>
                      <li><span className="font-semibold">n:</span> Number of compounding periods per year (typically 1 for PPF).</li>
                      <li><span className="font-semibold">t:</span> Duration of the investment (in years).</li>
                    </ul>
                  </p>
                </div>

              {/* Input Fields for PPF Calculator */}
              <InputField
                label="Initial Investment (₹)"
                placeholder="Enter Initial Investment"
                value={initialInvestment}
                onChange={setInitialInvestment}
              />
              <InputField
                label="Annual Contribution (₹)"
                placeholder="Enter Annual Contribution"
                value={annualContribution}
                onChange={setAnnualContribution}
              />
              <InputField
                label="Interest Rate (%)"
                placeholder="Enter Interest Rate"
                value={interestRate}
                onChange={setInterestRate}
              />
              <InputField
                label="Duration (Years)"
                placeholder="Enter Duration"
                value={years}
                onChange={setYears}
              />
              <button
                onClick={calculatePPF}
                className="w-full bg-[#002147] text-white py-2 rounded-lg hover:bg-[#e67e22] transition"
              >
                Calculate Maturity
              </button>

              {/* Display results */}
              {maturityAmount && (
                <div className="mt-3 text-lg font-semibold text-[#002147]">
                  <p>Maturity Amount: ₹{maturityAmount}</p>
                  <p>Total Interest Earned: ₹{totalInterest}</p>
                </div>
              )}
            </Modal>


        {/* Compound Interest Modal */}
            <Modal isOpen={openModal === "compoundInterest"} onClose={() => setOpenModal("")} title="Compound Interest Calculator">
              {/* Compound Interest Calculator Description and Formula inside a Box */}
                <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                  <p className="font-semibold text-[#002147]">How Compound Interest is Calculated:</p>
                  <p className="text-[#555]">
                    Compound Interest is calculated on the principal amount and any accumulated interest. Formula:
                  </p>
                  <p className="text-[#002147] font-semibold">
                    <span className="text-bold">A = P × (1 + r/n)^(nt)</span>
                  </p>
                  <p className="text-[#555] mt-2">
                    Where:
                    <ul className="list-disc pl-5 mt-2">
                      <li><span className="font-semibold">A:</span> Accumulated amount after interest.</li>
                      <li><span className="font-semibold">P:</span> Principal amount (initial investment).</li>
                      <li><span className="font-semibold">r:</span> Annual interest rate (as a decimal).</li>
                      <li><span className="font-semibold">n:</span> Number of times interest is compounded per year.</li>
                      <li><span className="font-semibold">t:</span> Time the money is invested for (in years).</li>
                    </ul>
                  </p>
                </div>

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

        {/* Currency Converter Modal */}
          <Modal isOpen={openModal === "currencyConverter"} onClose={() => setOpenModal("")} title="Currency Converter">
            {/* Currency Converter Description and Formula inside a Box */}
              <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                <p className="font-semibold text-[#002147]">How the Currency Conversion is Calculated:</p>
                <p className="text-[#555]">
                  The conversion is based on the exchange rate between the two currencies. Formula:
                </p>
                <p className="text-[#002147] font-semibold mt-2">
                  <span className="text-bold">Converted Amount = Amount × Exchange Rate</span>
                </p>
                <p className="text-[#555] mt-2">
                  Where:
                  <ul className="list-disc pl-5 mt-2">
                    <li><span className="font-semibold">Amount:</span> The amount you want to convert.</li>
                    <li><span className="font-semibold">Exchange Rate:</span> The rate between the two currencies.</li>
                  </ul>
                </p>
              </div>

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
              {/* GST Calculator Description and Formula inside a Box */}
                <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                  <p className="font-semibold text-[#002147]">How GST is Calculated:</p>
                  <p className="text-[#555]">
                    GST is calculated based on the given rate applied to the original price. Formula:
                  </p>
                  <p className="text-[#002147] font-semibold mt-2">
                    <span className="text-bold">GST Amount = Price × (GST Rate / 100)</span>
                  </p>
                  <p className="text-[#555] mt-2">
                    Where:
                    <ul className="list-disc pl-5 mt-2">
                      <li><span className="font-semibold">Price:</span> The original price of the product/service.</li>
                      <li><span className="font-semibold">GST Rate:</span> The GST percentage applicable.</li>
                    </ul>
                  </p>
                </div>

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
              onChange={(e) => {setNewComment(e.target.value),setcomment(e.target.value)}}
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
            value={suggestion}
          >
            Suggest a Simulator
          </button>
        </div>

      
       
      </div>

    </div>
  );
};

export default Simulations;
