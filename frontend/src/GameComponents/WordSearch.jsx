import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FinancialGame = () => {
  const [questions] = useState([
    {
      definition: "A financial statement showing a company's assets, liabilities, and equity.",
      correctAnswer: "Balance Sheet",
      options: ["Balance Sheet", "Income", "Cash Flow", "Budget"],
    },
    {
      definition: "The total value of goods and services produced in a country.",
      correctAnswer: "GDP",
      options: ["GDP", "Inflation", "Revenue", "Investment"],
    },
    {
      definition: "A financial statement that provides a snapshot of a company's financial position at a specific time.",
      correctAnswer: "Balance Sheet",
      options: ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Budget"]
    },
    {
      definition: "A financial statement that shows a company's profitability over a period of time.",
      correctAnswer: "Income Statement",
      options: ["Balance Sheet", "Cash Flow Statement", "Income Statement", "Trial Balance"]
    },
    {
      definition: "A financial statement that tracks cash inflows and outflows.",
      correctAnswer: "Cash Flow Statement",
      options: ["Balance Sheet", "Income Statement", "Cash Flow Statement", "Profit and Loss Statement"]
    },
    {
      definition: "The formula used to calculate Net Income.",
      correctAnswer: "Revenue - Expenses",
      options: ["Revenue - Expenses", "Assets - Liabilities", "Cash Inflows - Cash Outflows", "Equity + Liabilities"]
    },
    {
      definition: "The term referring to a company's total revenues minus expenses.",
      correctAnswer: "Net Profit",
      options: ["Net Profit", "Gross Profit", "Operating Income", "Equity"]
    },
    {
      definition: "The abbreviation for Earnings Before Interest, Taxes, Depreciation, and Amortization.",
      correctAnswer: "EBITDA",
      options: ["EBITDA", "EBIT", "EBT", "EBITA"]
    },
    {
      definition: "The accounting principle stating that expenses should be recorded in the same period as the revenues they help generate.",
      correctAnswer: "Matching Principle",
      options: ["Matching Principle", "Revenue Recognition Principle", "Cost Principle", "Going Concern Principle"]
    },
    {
      definition: "The financial metric used to measure a company's ability to meet short-term obligations.",
      correctAnswer: "Current Ratio",
      options: ["Debt-to-Equity Ratio", "Current Ratio", "Return on Assets", "Operating Margin"]
    }
  ]);

  const [gameState, setGameState] = useState("instructions"); // instructions, playing, ended
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [retryStars, setRetryStars] = useState(3);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleWordClick = (word) => {
    if (showAnswer) return; // Prevent clicking when answer is shown
    
    setSelectedWord(word);
    setTotalAttempts(prev => prev + 1);
    
    if (word === questions[currentQuestionIndex].correctAnswer) {
      setIsCorrect(true);
      setCorrectAnswers(prev => prev + 1);
      const pointsEarned = retryStars * 100;
      setScore(prevScore => prevScore + pointsEarned);
      setToastMessage(`Excellent! You earned ${pointsEarned} points! 🌟`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else {
      setIsCorrect(false);
      setRetryStars(prev => {
        const newStars = prev - 1;
        if (newStars === 0) {
          // Show the correct answer when all attempts are used
          setShowAnswer(true);
        }
        return newStars;
      });
    }
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setIsCorrect(false);
    setShowAnswer(false);
    setRetryStars(3);
    setSelectedWord("");
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState("ended");
    }
  };

  const resetGame = () => {
    setGameState("instructions");
    setCurrentQuestionIndex(0);
    setSelectedWord("");
    setIsCorrect(false);
    setShowFeedback(false);
    setShowAnswer(false);
    setRetryStars(3);
    setScore(0);
    setCorrectAnswers(0);
    setTotalAttempts(0);
    setToastMessage("");
    setShowToast(false);
  };

  const getPerformanceLevel = () => {
    const accuracy = (correctAnswers / questions.length) * 100;
    if (accuracy >= 90) return { level: "Expert", emoji: "🏆", color: "text-yellow-500" };
    if (accuracy >= 70) return { level: "Advanced", emoji: "🌟", color: "text-blue-500" };
    if (accuracy >= 50) return { level: "Intermediate", emoji: "📈", color: "text-green-500" };
    return { level: "Beginner", emoji: "🌱", color: "text-purple-500" };
  };

  const generateGrid = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const allWords = [...currentQuestion.options];
    
    // Add some additional financial terms to fill the grid
    const additionalWords = [
      "Assets", "Liability", "Equity", "Revenue", "Expenses", "Profit", 
      "Loss", "Dividend", "Capital", "Investment", "ROI", "NPV"
    ];
    
    // Filter out words that are already in options to avoid duplicates
    const filteredAdditional = additionalWords.filter(word => 
      !allWords.some(option => option.toLowerCase() === word.toLowerCase())
    );
    
    // Add additional words until we have 16 total (4x4 grid)
    const gridWords = [...allWords];
    let additionalIndex = 0;
    
    while (gridWords.length < 16 && additionalIndex < filteredAdditional.length) {
      gridWords.push(filteredAdditional[additionalIndex]);
      additionalIndex++;
    }
    
    // If still not enough words, add some generic ones
    while (gridWords.length < 16) {
      gridWords.push(`Term${gridWords.length}`);
    }
    
    return shuffle(gridWords);
  };

  const shuffle = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Instructions Screen
  if (gameState === "instructions") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-50 via-yellow-50 to-blue-100 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-md rounded-2xl p-8 mb-8 shadow-xl text-center max-w-2xl"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            💰
          </motion.div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Financial Word Search!</h1>
          <div className="space-y-4 text-lg text-gray-600 mb-8">
            <p>🎯 Test your financial knowledge by identifying the correct terms</p>
            <p>⭐ You get 3 tries per question - more stars = more points!</p>
            <p>💡 After 3 incorrect attempts, we'll show you the correct answer</p>
            <p>🏆 Answer all {questions.length} questions to see your final results</p>
          </div>
          <button
            onClick={() => setGameState("playing")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Journey! 🚀
          </button>
        </motion.div>
      </div>
    );
  }

  // Game Over Screen
  if (gameState === "ended") {
    const performance = getPerformanceLevel();
    const accuracy = Math.round((correctAnswers / questions.length) * 100);
    const maxPossibleScore = questions.length * 300; // 3 stars × 100 points each
    const scorePercentage = Math.round((score / maxPossibleScore) * 100);

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50 p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl text-center max-w-2xl"
        >
          {/* Celebration Animation */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-8xl mb-6"
          >
            🎉
          </motion.div>

          <h1 className="text-5xl font-bold mb-4 text-gray-800">Game Complete!</h1>
          
          {/* Performance Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-2xl font-bold ${performance.color} bg-white/50 mb-6`}
          >
            <span className="text-3xl">{performance.emoji}</span>
            {performance.level} Level
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-xl"
            >
              <div className="text-3xl font-bold">{score}</div>
              <div className="text-blue-100">Total Points</div>
              <div className="text-sm text-blue-200">{scorePercentage}% of max</div>
            </motion.div>
            
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-xl"
            >
              <div className="text-3xl font-bold">{correctAnswers}/{questions.length}</div>
              <div className="text-green-100">Correct Answers</div>
              <div className="text-sm text-green-200">{accuracy}% accuracy</div>
            </motion.div>
          </div>

          {/* Performance Message */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="bg-white/50 rounded-xl p-6 mb-8"
          >
            <h3 className="text-xl font-bold mb-2">Performance Analysis</h3>
            <p className="text-gray-700">
              {accuracy >= 90 && "Outstanding! You're a financial expert! 🧙‍♂️✨"}
              {accuracy >= 70 && accuracy < 90 && "Great job! You have solid financial knowledge! 📚💪"}
              {accuracy >= 50 && accuracy < 70 && "Good effort! Keep studying to improve further! 📈🎯"}
              {accuracy < 50 && "Keep practicing! Every expert was once a beginner! 🌱💡"}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              You made {totalAttempts} total attempts across all questions.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex gap-4 justify-center"
          >
            <button
              onClick={resetGame}
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full text-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Play Again 🔄
            </button>
          </motion.div>

          {/* Share Results (Visual only) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-6 text-sm text-gray-500"
          >
            🏆 Challenge your friends to beat your score of {score} points!
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // Game Playing Screen
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-50 via-yellow-50 to-blue-100 p-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-4 text-black">Financial Word Search</h1>
        <div className="bg-white/30 backdrop-blur-sm rounded-full px-4 py-1 inline-block">
          <span className="text-black">Question {currentQuestionIndex + 1} of {questions.length}</span>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                scale: i < retryStars ? 1 : 0.5,
                opacity: i < retryStars ? 1 : 0.3,
              }}
              className={`text-3xl ${i < retryStars ? "text-yellow-400" : "text-gray-400"}`}
            >
              ⭐
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          className="bg-white/70 backdrop-blur-md rounded-2xl p-8 mb-8 shadow-xl"
        >
          <p className="text-xl text-gray-700 leading-relaxed">
            {questions[currentQuestionIndex].definition}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Show correct answer when all attempts are used */}
      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-6 rounded-2xl mb-6 shadow-xl text-center"
          >
            <div className="text-2xl mb-2">💡</div>
            <h3 className="text-xl font-bold mb-2">The Correct Answer Is:</h3>
            <div className="text-2xl font-bold bg-white/20 rounded-lg px-4 py-2 inline-block">
              {questions[currentQuestionIndex].correctAnswer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {generateGrid().map((word, index) => {
          const isCorrectAnswer = word === questions[currentQuestionIndex].correctAnswer;
          const isHighlighted = showAnswer && isCorrectAnswer;
          const isSelected = selectedWord === word;
          
          return (
            <motion.button
              key={index}
              whileHover={!showAnswer ? { scale: 1.05 } : {}}
              whileTap={!showAnswer ? { scale: 0.95 } : {}}
              className={`font-semibold p-4 rounded-md shadow-lg transition-all duration-300 ${
                isHighlighted 
                  ? 'bg-gradient-to-r from-green-400 to-green-600 text-white ring-4 ring-green-300' 
                  : isSelected && !isCorrect && showFeedback
                  ? 'bg-red-200 text-red-700 border-2 border-red-400'
                  : 'bg-white text-blue-500 hover:bg-blue-200'
              } ${showAnswer ? 'cursor-default' : 'cursor-pointer'}`}
              onClick={() => handleWordClick(word)}
              disabled={showAnswer}
            >
              {word}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="mt-6 text-center"
          >
            {isCorrect ? (
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Correct! +{retryStars * 100} points
                </h3>
                <button
                  onClick={nextQuestion}
                  className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  {currentQuestionIndex === questions.length - 1 ? "See Results!" : "Next Question"}
                </button>
              </motion.div>
            ) : (
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
              >
                <div className="text-4xl mb-4">😢</div>
                <h3 className="text-2xl font-bold text-red-600 mb-2">
                  {retryStars > 0 ? `Try Again! (${retryStars} ${retryStars === 1 ? 'try' : 'tries'} left)` : 'All attempts used!'}
                </h3>
                {retryStars > 0 ? (
                  <button
                    onClick={() => setShowFeedback(false)}
                    className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
                  >
                    {currentQuestionIndex === questions.length - 1 ? "See Results!" : "Next Question"}
                  </button>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-4 right-4 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
      >
        <span className="text-lg font-semibold">Score: {score}</span>
      </motion.div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 bg-white rounded-lg shadow-lg p-4 max-w-md"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FinancialGame;