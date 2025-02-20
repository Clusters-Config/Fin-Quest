import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

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
    // Additional questions
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [retryStars, setRetryStars] = useState(3);
  const [score, setScore] = useState(0);
  const { toast } = useToast(); // Using the toast from the custom hook

  const handleWordClick = (word) => {
    setSelectedWord(word);
    if (word === questions[currentQuestionIndex].correctAnswer) {
      setIsCorrect(true);
      setScore(prevScore => prevScore + (retryStars * 100)); // Award points
      toast({
        title: "Excellent!",
        description: `You earned ${retryStars * 100} points! 🌟`,
      });
    } else {
      setIsCorrect(false);
      setRetryStars(prev => {
        const newStars = prev - 1;
        if (newStars === 0) {
          setTimeout(() => {
            nextQuestion(); // Move to next question after 1.5 seconds if out of retries
          }, 1500);
        }
        return newStars;
      });
    }
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setIsCorrect(false);
    setRetryStars(3);
    setSelectedWord("");
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const finalScore = score;
      let message = "";

      if (finalScore >= questions.length * 250) {
        message = "Outstanding performance! You're a financial wizard! 🧙‍♂️";
      } else if (finalScore >= questions.length * 150) {
        message = "Great job! You've got solid financial knowledge! 📚";
      } else {
        message = "Keep practicing! You're learning! 💪";
      }

      toast({
        title: "Game Completed!",
        description: `Final Score: ${finalScore} - ${message}`,
        duration: 5000, // Show for 5 seconds
      });
    }
  };

  const generateGrid = () => {
    const allWords = [...questions[currentQuestionIndex].options];
    const gridSize = 4;
    const gridWords = [...allWords, "Income", "Profit", "Revenue", "Assets", "Liabilities"];
    while (gridWords.length < gridSize * gridSize) {
      gridWords.push("Empty");
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-yellow-200 to-blue-300 p-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-4 text-white">Financial Word Search</h1>
        <div className="bg-white/30 backdrop-blur-sm rounded-full px-4 py-1 inline-block">
          <span className="text-white">Question {currentQuestionIndex + 1} of {questions.length}</span>
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

      <div className="grid grid-cols-4 gap-4 mb-6">
        {generateGrid().map((word, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-500 font-semibold p-4 rounded-md shadow-lg hover:bg-blue-200 transition-colors"
            onClick={() => handleWordClick(word)}
          >
            {word}
          </motion.button>
        ))}
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
                  Next Question
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
                  Try Again! ({retryStars} {retryStars === 1 ? 'try' : 'tries'} left)
                </h3>
                {retryStars > 0 && (
                  <button
                    onClick={() => setShowFeedback(false)}
                    className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors"
                  >
                    Continue
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
    </div>
  );
};

export default FinancialGame;
