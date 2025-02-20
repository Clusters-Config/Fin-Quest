import React, { useState, useEffect } from "react";

// Sample daily challenges (New questions can be fetched from DB)
const dailyChallenges = [
  {
    "day": 1,
    "question": "💡 If your monthly income is ₹50,000, how much should you save following the 50/30/20 rule?",
    "description": "Think about your monthly expenses and how much you should be putting aside for savings. Use the 50/30/20 rule to calculate.",
    "correctAnswer": 10000
  },
  {
    "day": 2,
    "question": "📈 If you invest ₹10,000 at 8% annual interest, how much will it be in 5 years (compounded annually)?",
    "description": "Calculate the future value of your investment using compound interest. Ready to grow your money?",
    "correctAnswer": 14693
  },
  {
    "day": 3,
    "question": "💸 You spent ₹12,000 last month on shopping. If your budget for shopping is 15% of income, what should your income be?",
    "description": "Can you adjust your budget to match your spending? Figure out your income based on your shopping budget.",
    "correctAnswer": 80000
  },
  {
    "day": 4,
    "question": "🏠 If your rent is ₹15,000 and you follow the 50/30/20 rule, is it within your needs budget (50% of ₹50,000)?",
    "description": "Check if your rent is within the budget allocated for essential needs.",
    "correctAnswer": true
  },
  {
    "day": 5,
    "question": "📊 If your electricity bill is ₹2,500 and it increased by 10% this month, how much do you pay now?",
    "description": "Calculate the new amount after a 10% increase.",
    "correctAnswer": 2750
  },
  {
    "day": 6,
    "question": "🛑 Your friend earns ₹40,000 but saves nothing. If they want to save 10%, how much should they cut from expenses?",
    "description": "Help your friend adjust their spending to start saving.",
    "correctAnswer": 4000
  },
  {
    "day": 7,
    "question": "🍕 If you spend ₹2,000 on food delivery every week, how much does it cost annually?",
    "description": "Estimate how much your weekly expenses add up over a year.",
    "correctAnswer": 104000
  },
  {
    "day": 8,
    "question": "💰 Your investment grew from ₹20,000 to ₹25,000 in a year. What’s the percentage return?",
    "description": "Calculate the percentage return on your investment.",
    "correctAnswer": 25
  },
  {
    "day": 9,
    "question": "📉 If stock A lost 10% value from ₹500, what’s its new price?",
    "description": "Find the new price after a percentage drop.",
    "correctAnswer": 450
  },
  {
    "day": 10,
    "question": "🏦 A fixed deposit offers 7% annual interest. How much will ₹50,000 become in 3 years (simple interest)?",
    "description": "Calculate the final amount with simple interest.",
    "correctAnswer": 60500
  },
  {
    "day": 11,
    "question": "💳 Your credit card bill is ₹5,000, but you only pay ₹1,000. If the remaining amount is charged 3% monthly interest, how much do you owe next month?",
    "description": "Calculate the interest added to the unpaid amount.",
    "correctAnswer": 4120
  },
  {
    "day": 12,
    "question": "🚗 If your car loan EMI is ₹12,000 for 5 years, how much do you pay in total?",
    "description": "Determine the total loan repayment amount.",
    "correctAnswer": 720000
  },
  {
    "day": 13,
    "question": "🏡 A home loan of ₹10,00,000 has a 10% annual interest. How much is the interest for the first year?",
    "description": "Calculate the interest payment for the first year.",
    "correctAnswer": 100000
  },
  {
    "day": 14,
    "question": "🛍️ If you use a cashback card offering 2% on ₹50,000 spending, how much do you earn?",
    "description": "Find out how much cashback you receive.",
    "correctAnswer": 1000
  },
  {
    "day": 15,
    "question": "📅 If your daily coffee costs ₹100, how much do you spend in a year?",
    "description": "Calculate the total cost of your daily coffee habit.",
    "correctAnswer": 36500
  },
  {
    "day": 16,
    "question": "🏦 If a personal loan has an interest rate of 15% per year, how much interest will ₹1,00,000 accrue in 2 years (simple interest)?",
    "description": "Calculate the total interest amount.",
    "correctAnswer": 30000
  },
  {
    "day": 17,
    "question": "💰 If your salary is ₹80,000 and you fall in the 10% income tax bracket, how much tax do you owe?",
    "description": "Calculate the tax deduction.",
    "correctAnswer": 8000
  },
  {
    "day": 18,
    "question": "🏥 If health insurance costs ₹6,000 per year and you claim ₹50,000 in medical bills, how much do you save?",
    "description": "Determine the benefit of insurance coverage.",
    "correctAnswer": 50000
  },
  {
    "day": 19,
    "question": "🚀 A mutual fund gives a 12% return per year. If you invest ₹1,00,000, how much will you earn in a year?",
    "description": "Find out how much you earn from your investment.",
    "correctAnswer": 12000
  },
  {
    "day": 20,
    "question": "🏆 If you completed this challenge, what’s the most important financial lesson you learned?",
    "description": "Reflect on your learning experience.",
    "correctAnswer": "No wrong answer"
  },
  {
    "day": 21,
    "question": "🎯 If your goal is to save ₹5,00,000 in 5 years, how much should you save monthly?",
    "description": "Break down long-term savings into a monthly target.",
    "correctAnswer": 8333
  },
  {
    "day": 22,
    "question": "📈 You can either invest ₹10,000 in stocks (expected return 12%) or a bank FD (6%). How much more will you make with stocks in a year?",
    "description": "Compare potential investment returns.",
    "correctAnswer": 600
  },
  {
    "day": 23,
    "question": "💡 If inflation is 5% per year, how much will ₹1,00,000 be worth in real terms after 3 years?",
    "description": "Calculate the adjusted value after inflation.",
    "correctAnswer": 85700
  },
  {
    "day": 24,
    "question": "📚 How much will you have if you invest ₹5,000 per month in an SIP for 10 years with a 12% annual return?",
    "description": "Use SIP return formula to calculate long-term wealth growth.",
    "correctAnswer": 1161600
  },
  {
    "day": 25,
    "question": "🏠 If you buy a ₹50 lakh house with a 20-year loan at 8% interest, how much will you pay in total?",
    "description": "Estimate the total cost of your loan repayment.",
    "correctAnswer": 10000000
  },
  {
    "day": 26,
    "question": "📊 If your salary increases by 10% from ₹60,000, what will be your new salary?",
    "description": "Calculate the updated salary after a 10% raise.",
    "correctAnswer": 66000
  },
  {
    "day": 27,
    "question": "💳 If your credit card charges 3% monthly interest, how much will ₹10,000 debt become in 6 months if unpaid?",
    "description": "Understand how credit card debt grows over time.",
    "correctAnswer": 11941
  },
  {
    "day": 28,
    "question": "🏦 If you save ₹5,000 per month in an account that offers 6% annual interest, how much will you have after 1 year?",
    "description": "Estimate total savings including interest.",
    "correctAnswer": 61800
  },
  {
    "day": 29,
    "question": "🚗 If a car costs ₹10 lakh today and inflation is 5% per year, how much will it cost in 3 years?",
    "description": "Calculate the future price after inflation.",
    "correctAnswer": 1157600
  },
  {
    "day": 30,
    "question": "🏆 Congratulations on completing the challenge! What's one financial habit you'll improve moving forward?",
    "description": "Reflect on what you’ve learned and set a future goal.",
    "correctAnswer": "No wrong answer"
  }
];


// Reward Categories
const rewards = ["Youth Master", "Saving Guru", "Budget Planner", "Financial Expert"];

const DailyChallenges = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [reward, setReward] = useState(null);
  const [message, setMessage] = useState("");

  // Function to check if 24 hours have passed
  const checkForNewDay = () => {
    const lastCompleted = localStorage.getItem("lastCompleted");
    const currentTime = new Date().getTime();

    // If there's no record of the last completed challenge, or 24 hours have passed
    if (!lastCompleted || currentTime - parseInt(lastCompleted) > 86400000) {
      setCurrentDay(prevDay => Math.min(prevDay + 1, dailyChallenges.length - 1)); // Increment day, but max to last day
    }
  };

  useEffect(() => {
    checkForNewDay(); // Check for the new day when the component mounts
  }, []);

  const handleSubmit = () => {
    const correctValue = dailyChallenges[currentDay].correctAnswer;
    const userValue = parseFloat(userAnswer);

    if (!userValue || isNaN(userValue)) {
      setMessage("❌ Please enter a valid number.");
      return;
    }

    // Check answer accuracy (within 5% margin)
    const accuracy = Math.abs((userValue - correctValue) / correctValue) * 100;

    if (accuracy <= 5) {
      const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
      setReward(randomReward);
      setMessage(`✅ Great Job! You've earned the '${randomReward}' badge! 🎉`);
      
      // Save the current timestamp when the user completes the challenge
      localStorage.setItem("lastCompleted", new Date().getTime().toString());
    } else {
      setMessage("❌ Incorrect answer. Try again tomorrow!");
      setReward(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#F4F4F4] to-[#F8FAFC] p-6">
      
      {/* Header */}
      <header className="bg-[#002147] text-white p-4 text-center shadow-md">
        <h1 className="text-3xl font-bold">💰 Daily Financial Challenge</h1>
        <p className="text-lg">Test your financial skills every day!</p>
      </header>

      <div className="flex-grow flex flex-col items-center mt-8">
        <div className="w-full max-w-2xl p-6 bg-white rounded-xl shadow-xl border-2 border-[#002147]">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-[#002147] mb-4">Day {dailyChallenges[currentDay].day} Challenge</h2>
            <p className="text-lg text-[#6C757D] mb-4">{dailyChallenges[currentDay].description}</p>
            
            <p className="text-xl font-medium text-[#002147] mb-6">{dailyChallenges[currentDay].question}</p>

            <input
              type="number"
              className="w-full p-3 border border-[#6C757D] rounded-lg mb-4 text-lg"
              placeholder="Enter your answer"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />

            <button
              onClick={handleSubmit}
              className="w-full px-6 py-3 bg-[#F39C12] text-white font-bold rounded-lg hover:bg-[#e67e22] transition duration-300"
            >
              Submit Answer
            </button>

            {message && <p className="mt-6 text-xl font-semibold text-[#E63946]">{message}</p>}
            {reward && <p className="mt-2 text-xl font-bold text-[#2A9D8F]">🏅 {reward}</p>}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#002147] text-white p-4 text-center mt-8">
        <p className="text-lg">💡 Keep up the great work! Financial discipline leads to success. 💪</p>
      </footer>
    </div>
  );
};

export default DailyChallenges;
