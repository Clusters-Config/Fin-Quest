import React, { useState, useEffect } from "react";

// Sample daily challenges (New questions can be fetched from DB)
const dailyChallenges = [
  {
    day: 1,
    question: "💡 If your monthly income is ₹50,000, how much should you save following the 50/30/20 rule?",
    description: "Think about your monthly expenses and how much you should be putting aside for savings. Use the 50/30/20 rule to calculate.",
    correctAnswer: 10000, // 20% of 50,000
  },
  {
    day: 2,
    question: "📈 If you invest ₹10,000 at 8% annual interest, how much will it be in 5 years (compounded annually)?",
    description: "Calculate the future value of your investment using compound interest. Ready to grow your money?",
    correctAnswer: 14693, // Approximate FV calculation
  },
  {
    day: 3,
    question: "💸 You spent ₹12,000 last month on shopping. If your budget for shopping is 15% of income, what should your income be?",
    description: "Can you adjust your budget to match your spending? Figure out your income based on your shopping budget.",
    correctAnswer: 80000, // 15% of income should be 12,000
  },
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
