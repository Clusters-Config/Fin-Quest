import React, { useState } from "react";

const Quiz = () => {
  // Quiz Questions
  const questions = [
    {
      question: "What is the first step in effective saving?",
      options: ["Investing in stocks", "Creating a budget", "Taking loans", "Buying assets"],
      answer: "Creating a budget",
    },
    {
      question: "Why is it important to build an emergency fund?",
      options: [
        "For buying a car",
        "To handle unexpected expenses",
        "To invest in real estate",
        "To earn extra interest",
      ],
      answer: "To handle unexpected expenses",
    },
    {
      question: "Which of these is NOT a benefit of saving?",
      options: [
        "Financial security",
        "Freedom from debt",
        "Achieving goals",
        "Spending without limits",
      ],
      answer: "Spending without limits",
    },
    {
      question: "What percentage of income is commonly suggested for savings?",
      options: ["10%", "50%", "70%", "30%"],
      answer: "10%",
    },
    {
      question: "Which tool helps track expenses effectively?",
      options: ["Budget planner", "Credit card", "Mortgage", "Car loan"],
      answer: "Budget planner",
    },
    {
      question: "What is the recommended type of account for emergency funds?",
      options: ["Savings account", "Current account", "Fixed deposit", "Joint account"],
      answer: "Savings account",
    },
    {
      question: "Which of these is a common savings goal?",
      options: [
        "Paying monthly bills",
        "Building an emergency fund",
        "Taking frequent vacations",
        "Spending on luxuries",
      ],
      answer: "Building an emergency fund",
    },
    {
      question: "Why is consistency important in saving?",
      options: [
        "It leads to rapid wealth",
        "It ensures regular progress",
        "It avoids tax penalties",
        "It enables frequent spending",
      ],
      answer: "It ensures regular progress",
    },
    {
      question: "What is compound interest?",
      options: [
        "Interest earned on savings",
        "Interest earned on principal and previous interest",
        "A type of tax",
        "Penalty for delayed payments",
      ],
      answer: "Interest earned on principal and previous interest",
    },
    {
      question: "Which of these is a smart saving strategy?",
      options: [
        "Spending all bonuses",
        "Saving a portion of every paycheck",
        "Only saving when convenient",
        "Taking loans to save",
      ],
      answer: "Saving a portion of every paycheck",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0); // Track current question
  const [score, setScore] = useState(0); // Track score
  const [showScore, setShowScore] = useState(false); // Toggle score display
  const [selectedOption, setSelectedOption] = useState(""); // Track selected option

  // Handle Option Selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // Handle Next Question or Finish Quiz
  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1); // Increment score for correct answer
    }
    setSelectedOption(""); // Reset selected option
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1); // Move to next question
    } else {
      setShowScore(true); // Show score at the end
    }
  };

  // Restart Quiz
  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption("");
  };

  return (
    <div className="bg-gradient-to-b from-[#A8DADC] to-[#FFFFFF] min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-[#003366] text-center mb-6">
        Saving Essentials Quiz
      </h1>
      {showScore ? (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-[#003366] mb-4">
            Your Score: {score}/{questions.length}
          </h2>
          <p className="text-gray-700 mb-4">
            {score > 7
              ? "Great job! You're well-versed in saving essentials."
              : "Good effort! Keep learning to improve your saving skills."}
          </p>
          <button
            onClick={handleRestart}
            className="bg-[#003366] hover:bg-[#002244] text-white px-6 py-2 rounded-lg font-bold"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
          <h2 className="text-2xl font-semibold text-[#003366] mb-4">
            {questions[currentQuestion].question}
          </h2>
          <ul className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`cursor-pointer border px-4 py-2 rounded-lg ${
                  selectedOption === option
                    ? "bg-[#003366] text-white border-[#003366]"
                    : "border-gray-300"
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
          <div className="text-right mt-4">
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`${
                selectedOption
                  ? "bg-[#003366] hover:bg-[#002244]"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white px-6 py-2 rounded-lg font-bold`}
            >
              {currentQuestion + 1 === questions.length ? "Finish Quiz" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;