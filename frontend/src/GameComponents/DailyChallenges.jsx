import React, { useState, useEffect } from "react";
import { Check, Clock, Trophy, Flame, Calendar } from "lucide-react";

// Sample questions - you can expand this array
const questions = [
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
    "question": "🛍 If you use a cashback card offering 2% on ₹50,000 spending, how much do you earn?",
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

const DailyQuiz = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [answer, setAnswer] = useState("");
  const [hasAnsweredToday, setHasAnsweredToday] = useState(false);
  const [streak, setStreak] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [lastAnswerDate, setLastAnswerDate] = useState(null);
  const [timeUntilNext, setTimeUntilNext] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Initialize data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('dailyQuizData');
    if (savedData) {
      const data = JSON.parse(savedData);
      setCurrentDay(data.currentDay || 1);
      setStreak(data.streak || 0);
      setTotalCorrect(data.totalCorrect || 0);
      setLastAnswerDate(data.lastAnswerDate);
    }

    checkIfCanAnswer();
  }, []);

  // Update timer every minute
  useEffect(() => {
    const timer = setInterval(() => {
      updateTimeUntilNext();
      checkIfCanAnswer();
    }, 60000);

    updateTimeUntilNext();
    return () => clearInterval(timer);
  }, [lastAnswerDate]);

  const checkIfCanAnswer = () => {
    if (!lastAnswerDate) {
      setHasAnsweredToday(false);
      return;
    }

    const now = new Date();
    const lastAnswer = new Date(lastAnswerDate);
    const timeDiff = now.getTime() - lastAnswer.getTime();
    const hoursDiff = timeDiff / (1000 * 3600);

    setHasAnsweredToday(hoursDiff < 24);
  };

  const updateTimeUntilNext = () => {
    if (!lastAnswerDate) {
      setTimeUntilNext("");
      return;
    }

    const now = new Date();
    const lastAnswer = new Date(lastAnswerDate);
    const nextAvailable = new Date(lastAnswer.getTime() + (24 * 60 * 60 * 1000));

    if (now >= nextAvailable) {
      setTimeUntilNext("");
      setHasAnsweredToday(false);
      return;
    }

    const timeDiff = nextAvailable.getTime() - now.getTime();
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    setTimeUntilNext(`${hours}h ${minutes}m`);
  };

  const handleSubmit = () => {
    if (hasAnsweredToday || !answer.trim()) return;

    const q = questions[currentDay - 1];
    const userAnswer = String(answer).toLowerCase().trim();
    const correctAnswer = String(q.correctAnswer).toLowerCase().trim();
    const correct = userAnswer === correctAnswer || userAnswer.includes(correctAnswer);

    setIsCorrect(correct);
    setShowFeedback(true);

    const now = new Date();
    const newData = {
      currentDay: Math.min(currentDay + 1, questions.length),
      streak: correct ? streak + 1 : 0,
      totalCorrect: correct ? totalCorrect + 1 : totalCorrect,
      lastAnswerDate: now.toISOString()
    };

    // Update state
    setCurrentDay(newData.currentDay);
    setStreak(newData.streak);
    setTotalCorrect(newData.totalCorrect);
    setLastAnswerDate(newData.lastAnswerDate);
    setHasAnsweredToday(true);

    // Save to localStorage
    localStorage.setItem('dailyQuizData', JSON.stringify(newData));

    // Hide feedback after 3 seconds
    setTimeout(() => {
      setShowFeedback(false);
      setAnswer("");
    }, 3000);
  };

  const resetQuiz = () => {
    localStorage.removeItem('dailyQuizData');
    setCurrentDay(1);
    setAnswer("");
    setStreak(0);
    setTotalCorrect(0);
    setLastAnswerDate(null);
    setHasAnsweredToday(false);
    setShowFeedback(false);
    setTimeUntilNext("");
  };

  const currentQuestion = questions[currentDay - 1];
  const progress = (currentDay / questions.length) * 100;
  const completionRate = totalCorrect > 0 ? Math.round((totalCorrect / Math.min(currentDay - 1, questions.length)) * 100) : 0;

  if (currentDay > questions.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
              <div className="mb-8">
                <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-4" />
                <h1 className="text-4xl font-bold text-gray-800 mb-4">🎉 Congratulations!</h1>
                <p className="text-xl text-gray-600">You've completed all available questions!</p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-2xl border border-green-200">
                  <div className="text-3xl font-bold text-green-600">{totalCorrect}</div>
                  <div className="text-sm text-green-700">Correct Answers</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-2xl border border-orange-200">
                  <div className="text-3xl font-bold text-orange-600">{completionRate}%</div>
                  <div className="text-sm text-orange-700">Accuracy</div>
                </div>
              </div>

              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Over
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex-col mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                📚 Daily Finance Quiz
              </h1>
              <p className="text-gray-600 mt-1 text-sm">
                Master your money mindset, one question at a time
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="font-medium text-gray-700 text-sm">{streak} day streak</span>
              </div>
              <div className="flex items-center space-x-1">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="font-medium text-gray-700 text-sm">{totalCorrect} correct</span>
              </div>
            </div>
          </div>
          <main className=" mx-auto px-4 py-6">
            <div className="max-w-3xl mx-auto">
              {/* Progress Section */}
              <div className="bg-white rounded-2xl shadow-md p-4 mb-6 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-600">PROGRESS</span>
                  <span className="text-xs font-semibold text-gray-600">
                    Day {currentDay} of {questions.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="text-right text-xs text-gray-500">{Math.round(progress)}% complete</div>
              </div>


              {/* Question Card */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                {hasAnsweredToday ? (
                  <div className="p-12 text-center">
                    <Clock className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Come back tomorrow!</h2>
                    <p className="text-gray-600 mb-6">
                      You've already answered today's question. Next question available in:
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full border border-blue-200">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <span className="font-bold text-blue-700 text-xl">{timeUntilNext}</span>
                    </div>
                    {showFeedback && (
                      <div className={`mt-6 p-4 rounded-2xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                        <p className={`font-semibold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                          {isCorrect ? '✅ Correct! Great job!' : '❌ Not quite right, but keep learning!'}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-8">
                    <div className="mb-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {currentQuestion?.day}
                        </div>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                          Daily Challenge
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        {currentQuestion?.question}
                      </h2>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {currentQuestion?.description}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <input
                          type={currentQuestion?.type === 'number' ? 'number' : 'text'}
                          value={answer}
                          onChange={(e) => setAnswer(e.target.value)}
                          placeholder="Type your answer here..."
                          className="w-full p-4 border-2 border-gray-200 rounded-2xl text-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                        />
                      </div>

                      <button
                        onClick={handleSubmit}
                        disabled={!answer.trim()}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg disabled:shadow-none flex items-center justify-center space-x-3 text-lg"
                      >
                        <Check className="w-6 h-6" />
                        <span>Submit Answer</span>
                      </button>

                      {showFeedback && (
                        <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${isCorrect
                          ? 'bg-green-50 border-green-200 text-green-800'
                          : 'bg-red-50 border-red-200 text-red-800'
                          }`}>
                          <p className="font-semibold text-lg mb-2">
                            {isCorrect ? '🎉 Excellent work!' : '💪 Keep learning!'}
                          </p>
                          <p className="text-sm opacity-80">
                            {isCorrect ? 'You\'re building great financial knowledge!' : 'Every mistake is a step toward mastery.'}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Stats Footer */}
              <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">
                  Accuracy: <span className="font-semibold text-gray-700">{completionRate}%</span>
                  {streak > 0 && (
                    <span className="ml-4">
                      🔥 You're on fire with a {streak}-day streak!
                    </span>
                  )}
                </p>
              </div>
            </div>
          </main>
        </div>
      </header>

      {/* Main Content */}
  
    </div>
  );
};

export default DailyQuiz;
