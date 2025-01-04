import React, { useState } from 'react';

const Learning_path2 = () => {
  const [currentQuiz, setCurrentQuiz] = useState(null);

  const quizzes = {
    budgetBasics: [
      {
        question: "What is the first step in creating a budget?",
        options: ["Track your expenses", "Spend less", "Save more", "Invest wisely"],
        answer: "Track your expenses",
      },
      {
        question: "What percentage of your income is commonly recommended for savings?",
        options: ["10%", "20%", "30%", "50%"],
        answer: "20%",
      },
    ],
    savingsStrategies: [
      {
        question: "Which of the following is a good savings strategy?",
        options: [
          "Save what's left after spending",
          "Pay yourself first",
          "Only save during promotions",
          "Invest without saving",
        ],
        answer: "Pay yourself first",
      },
      {
        question: "What is the purpose of an emergency fund?",
        options: [
          "To buy luxury items",
          "To cover unexpected expenses",
          "To invest in stocks",
          "To pay off a loan",
        ],
        answer: "To cover unexpected expenses",
      },
    ],
    investmentInsights: [
      {
        question: "What does diversification mean in investing?",
        options: [
          "Putting all money in one stock",
          "Spreading investments across different assets",
          "Investing only in safe options",
          "Avoiding risk altogether",
        ],
        answer: "Spreading investments across different assets",
      },
      {
        question: "What is a stock?",
        options: [
          "A loan to a company",
          "Ownership in a company",
          "A type of savings account",
          "A fixed income investment",
        ],
        answer: "Ownership in a company",
      },
    ],
  };

  const handleQuizStart = (quizKey) => {
    setCurrentQuiz({ key: quizKey, index: 0, score: 0 });
  };

  const handleAnswer = (selectedOption) => {
    const { key, index, score } = currentQuiz;
    const currentQuestion = quizzes[key][index];
    const newScore = selectedOption === currentQuestion.answer ? score + 1 : score;

    if (index + 1 < quizzes[key].length) {
      setCurrentQuiz({ key, index: index + 1, score: newScore });
    } else {
      alert(`Quiz Complete! Your Score: ${newScore}/${quizzes[key].length}`);
      setCurrentQuiz(null);
    }
  };

  if (currentQuiz) {
    const { key, index } = currentQuiz;
    const currentQuestion = quizzes[key][index];

    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
        <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm max-w-lg w-full">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            {currentQuestion.question}
          </h2>
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              className="block w-full bg-blue-500 text-white py-2 px-4 rounded mb-2 hover:bg-blue-600"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <section className="mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-4">Interactive Quizzes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm"
            onClick={() => handleQuizStart("budgetBasics")}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Quiz 1: Budget Basics
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Test your knowledge of creating and managing a budget.
            </p>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Start Quiz
            </button>
          </div>
          <div
            className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm"
            onClick={() => handleQuizStart("savingsStrategies")}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Quiz 2: Savings Strategies
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Learn the best ways to save effectively.
            </p>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Start Quiz
            </button>
          </div>
          <div
            className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm"
            onClick={() => handleQuizStart("investmentInsights")}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Quiz 3: Investment Insights
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Understand the basics of investing and grow your portfolio.
            </p>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Start Quiz
            </button>
          </div>
        </div>
      </section>
      {/* Recommended Resources Section */}
      <section>
        <h2 className="text-xl font-bold text-blue-700 mb-4">Recommended Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Resource 1 */}
          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Book: The Richest Man in Babylon</h3>
            <p className="text-sm text-gray-600 mb-4">
              A timeless classic filled with parables offering lessons on personal finance, budgeting, and wealth-building principles. Topics include the importance of saving, living below your means, and making wise investments.
            </p>
            <a
              href="https://www.amazon.com/Richest-Man-Babylon-George-Clason/dp/0451205367"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 inline-block"
            >
              Learn More
            </a>
          </div>

          {/* Resource 2 */}
          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Tool: Mint Budget Tracker</h3>
            <p className="text-sm text-gray-600 mb-4">
              Mint helps you take control of your finances by tracking spending, creating budgets, and offering insights into your financial health. Sync your accounts to gain a holistic view of your financial situation.
            </p>
            <a
              href="https://mint.intuit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 inline-block"
            >
              Explore
            </a>
          </div>

          {/* Additional Resources */}
          {/* Resource 3 */}
          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Podcast: The Financial Independence Podcast</h3>
            <p className="text-sm text-gray-600 mb-4">
              Hosted by personal finance experts, this podcast dives deep into strategies for achieving financial independence, investing, and building a sustainable lifestyle.
            </p>
            <a
              href="https://www.choosefi.com/podcast/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 inline-block"
            >
              Listen Now
            </a>
          </div>

          {/* Resource 4 */}
          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Course: Coursera Personal Finance Essentials</h3>
            <p className="text-sm text-gray-600 mb-4">
              This free online course covers the foundations of personal finance, including budgeting, credit, savings, and investment strategies. Perfect for beginners and those looking to refine their financial skills.
            </p>
            <a
              href="https://www.coursera.org/learn/personal-finance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 inline-block"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learning_path2;