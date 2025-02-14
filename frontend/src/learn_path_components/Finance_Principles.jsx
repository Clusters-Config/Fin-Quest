import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FinancePrinciple = () => {
  const [cashOutlay, setCashOutlay] = useState("");
  const [cashBenefits, setCashBenefits] = useState("");
  const [discountRate, setDiscountRate] = useState("");
  const [years, setYears] = useState("");  // Missing semicolon here
  const [npv, setNpv] = useState(null);

  const page = "resultpage";
  const path = "path1"
  const mods = "mod1"
  const type = "finance"

  // Calculate NPV using the provided formula
  const calculateNPV = () => {
    if (cashOutlay && cashBenefits && discountRate && years) {
      const cashBenefitsArray = cashBenefits.split(",").map(Number); // Convert string to an array of numbers

      let presentValue = 0;
      for (let i = 0; i < cashBenefitsArray.length; i++) {
        presentValue += cashBenefitsArray[i] / Math.pow(1 + discountRate / 100, i + 1);
      }

      const npvResult = presentValue - parseFloat(cashOutlay);
      setNpv(npvResult);
    }
  };

  const navigate = useNavigate();

  const handleQuizRedirect = () => {
    navigate("/QuizApp/Finance_Principles",{state:{page:page,path:path,mods:mods,type:type}}); // Replace with your actual quiz route
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#F4F4F4] to-[#F8FAFC] min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-[#002147] text-center my-6">
        The Fundamental Principle of Finance
      </h1>

      {/* Content Section */}
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-5xl mx-auto">
        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">Understanding the NPV Calculation</h2>
          <p className="text-[#6C757D] mt-3">
            A business proposal raises the value of the firm only if the present value of the future stream of net cash benefits
            exceeds the initial outlay. The Net Present Value (NPV) helps determine this by comparing the present value of future
            cash inflows with the initial investment required.
          </p>

          {/* Additional Information */}
          <p className="text-[#6C757D] mt-6">
            The key question that you must ask before making a business decision is: will this decision raise the market value of the firm? 
            To answer this, we turn to the fundamental principle of finance. A business proposal—whether it is a new investment, an acquisition of another company, 
            or a restructuring initiative—raises the value of the firm only if the present value of the future stream of net cash benefits expected from the proposal 
            is greater than the initial cash outlay required to implement the proposal.
          </p>

          <p className="text-[#6C757D] mt-3">
            The difference between the present value of future cash benefits and the initial outlay represents the <strong>Net Present Value (NPV)</strong> of the proposal:
            <br />
            <code className="bg-[#f1f1f1] p-2 rounded-md">NPV = Present Value of Future Cash Benefits − Initial Cash Outlay</code>
          </p>

          <p className="text-[#6C757D] mt-3">
            Note that the costs and benefits of a business proposal must be measured in cash. Investors, who finance a proposal, invest cash and are interested in receiving cash returns.
          </p>

          <p className="text-[#6C757D] mt-3">
            Understanding this principle helps guide business decisions to ensure that investments will contribute positively to the firm’s value.
          </p>

          <p className="text-[#6C757D] mt-3">
            The formula for NPV is:
            <br />
            <code className="bg-[#f1f1f1] p-2 rounded-md">NPV = ∑(Cash Benefit / (1 + Discount Rate) ^ Year) - Initial Outlay</code>
            <br />
            Where:
            <ul className="list-disc list-inside mt-3 text-[#6C757D]">
              <li><strong>Cash Benefits</strong>: The expected cash inflows from the project over the years.</li>
              <li><strong>Discount Rate</strong>: The rate used to discount future cash inflows to their present value. This reflects the time value of money and risk.</li>
              <li><strong>Initial Outlay</strong>: The upfront investment required to start the project.</li>
            </ul>
            <p className="mt-3">
              If the NPV is positive, the proposal is expected to increase the firm’s value. If it’s negative, it’s expected to decrease the value.
            </p>
        </p>
        </section>

        {/* NPV Input Fields */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#002147]">Enter Proposal Details</h2>
          
          {/* Cash Outlay */}
          <div className="mt-4">
            <label className="text-[#6C757D]">Initial Cash Outlay (₹):</label>
            <input
              type="number"
              value={cashOutlay}
              onChange={(e) => setCashOutlay(e.target.value)}
              className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
            />
          </div>

          {/* Cash Benefits */}
          <div className="mt-4">
            <label className="text-[#6C757D]">Future Cash Benefits (Comma Separated):</label>
            <input
              type="text"
              value={cashBenefits}
              onChange={(e) => setCashBenefits(e.target.value)}
              className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
              placeholder="e.g. 5000, 6000, 7000, 8000"
            />
          </div>

          {/* Discount Rate */}
          <div className="mt-4">
            <label className="text-[#6C757D]">Discount Rate (%):</label>
            <input
              type="number"
              value={discountRate}
              onChange={(e) => setDiscountRate(e.target.value)}
              className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
            />
          </div>

          {/* Years */}
          <div className="mt-4">
            <label className="text-[#6C757D]">Number of Years:</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="border-2 border-[#6C757D] p-2 rounded-lg w-full mt-2"
            />
          </div>

          {/* Calculate NPV */}
          <button
            onClick={calculateNPV}
            className="mt-4 bg-[#F39C12] hover:bg-[#A8DADC] text-white px-6 py-2 rounded-lg font-bold"
          >
            Calculate NPV
          </button>
        </section>

        {/* Display NPV */}
        {npv !== null && (
          <div className="mt-4 text-lg text-[#6C757D]">
            Net Present Value (NPV): ₹{npv.toFixed(2)}
          </div>
        )}

        {/* Quiz Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleQuizRedirect}
            className="bg-[#F39C12] hover:bg-[#A8DADC] text-white px-6 py-3 rounded-lg font-bold text-xl"
          >
            Take the Quiz to Test Your Knowledge!
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancePrinciple;
