import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import Calendar from 'react-calendar';      
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Chat from "../Services/Chat";



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

const Questions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [streak, setStreak] = useState(0);
  const [completedDays, setCompletedDays] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGamesDialog, setShowGamesDialog] = useState(false);
  const [email,setemail] = useState()

  useEffect(()=>{

    axios.get(" http://localhost:4047/verify",{withCredentials:true})
    .then(res=>setemail(res.data.email))
  })


  console.log(selectedQuestion);
  // Modal for Calendar View
  const CalendarModal = () => {
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
              <Chat />

        <div className="bg-white p-6 rounded-lg shadow-md w-11/12 sm:w-[400px]">
          <h3 className="text-xl font-bold mb-4">Streak Calendar</h3>
          <Calendar
            onChange={(date) => {}}
            value={new Date()}
            tileClassName={({ date }) => 
              completedDays.some(d => d.toDateString() === date.toDateString()) 
                ? "bg-[#F39C12] text-white rounded-lg"
                : ""
            }
          />
          <button
            onClick={() => setShowCalendar(false)}
            className="w-full bg-[#F39C12] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#e67e22] transition duration-300 mt-4"
          >
            Close Calendar
          </button>
        </div>
      </div>
    );
  };

  const GamesDialog = ({ setShowGamesDialog }) => {
    const navigate = useNavigate();
  
    const handleGameSelect = (gameName) => {
      // Navigate to the selected game path
      if (gameName === "Profit-Loss-Ladder") {
        navigate("/ProfitLossLadder");
      } else if (gameName === "Stock Prediction") {
        navigate("/Stock");
      } else if (gameName === "Word Search") {
        navigate("/Monopoly");
      }
      setShowGamesDialog(false);  // Close the dialog after selecting a game
    };
  
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <Chat/>
        <div className="bg-white p-8 rounded-lg shadow-lg w-8/10 sm:w-[300px]">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Choose a Game</h3>
          <div className="space-y-4">
            <button
              onClick={() => handleGameSelect("Profit-Loss-Ladder")}
              className="w-full py-3 px-4 bg-[#002147] text-white rounded-lg shadow-lg hover:bg-[#F39C12] transition duration-300"
            >
              Profit-Loss-Ladder
            </button>
            <button
              onClick={() => handleGameSelect("Stock Prediction")}
              className="w-full py-3 px-4 bg-[#002147] text-white rounded-lg shadow-lg hover:bg-[#F39C12] transition duration-300"
            >
              Stock Prediction
            </button>
            <button
              onClick={() => handleGameSelect("Word Search")}
              className="w-full py-3 px-4 bg-[#002147] text-white rounded-lg shadow-lg hover:bg-[#F39C12] transition duration-300"
            >
              Word Search
            </button>
          </div>
          <button
            onClick={() => setShowGamesDialog(false)}
            className="w-full py-3 px-4 bg-[#F39C12] text-white rounded-lg shadow-lg hover:bg-[#e67e22] transition duration-300 mt-6"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const QuestionModal = () => {
  const [answer, setAnswer] = useState();
  const navigate = useNavigate()
  const handleSubmit = () => {
    if (!selectedQuestion) return;
    const isCorrect = selectedQuestion.correctAnswer == answer;
    console.log(isCorrect)
    if (isCorrect) {
      setStreak(prev => prev + 1);
      setCompletedDays(prev => [...prev, new Date()]);
      setSelectedQuestion(null);
      setAnswer("");
      toast.success("Correct answer! Great job!");
     
    } else {
      setStreak(0);
      toast.error("Not quite right. Try again!");
    }

    useEffect(()=>{
      axios.post(" http://localhost:4047/streak",{email,streak})
      .then(res=>console.log(res))
    })
  };
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-8/ sm:w-[500px]">
          {selectedQuestion && (
            <>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Day {selectedQuestion.day}
              </h3>
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-medium text-gray-900 mb-4">
                    {selectedQuestion.question}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {selectedQuestion.description}
                  </p>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Enter your answer..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#002147] text-white py-3 px-6 rounded-lg hover:bg-[#F39C12] transition duration-200 flex items-center justify-center gap-2"
                  > <ToastContainer/>
                    <Check className="w-5 h-5" />
                    Submit Answer
                    <ToastContainer/>
                  </button>
                  <button onClick={()=>window.location.reload()} className="w-full bg-[#002147] text-white py-3 px-6 rounded-lg hover:bg-[#F39C12] transition duration-200 flex items-center justify-center gap-2">Close</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#002147] text-white p-6 text-center shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold">Financial Quest Challenges</h1>
        <p className="text-lg mt-2">Challenge yourself, earn rewards, and level up your financial skills!</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Daily Challenges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {questions.map((q) => (
                <button
                  key={q.day}
                  onClick={() => setSelectedQuestion(q)}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-left"
                >
                  <div className="text-xl font-semibold text-blue-600 mb-2">Day {q.day}</div>
                  <div className="text-sm text-gray-600 line-clamp-3">{q.question}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Streak Tracker */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#002147] mb-4">Streak Tracker</h3>
              <p className="text-gray-600">
                <span className="font-bold">Current Streak:</span> {streak} Days
              </p>
              <button
                onClick={() => setShowCalendar(true)}
                className="w-full mt-4 bg-[#F39C12] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#e67e22] transition duration-300"
              >
                View Streak Calendar
              </button>
            </div>

            {/* Quick Games */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#002147] mb-4">Quick Games</h3>
              <button
                onClick={() => setShowGamesDialog(true)}
                className="w-full bg-[#002147] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#F39C12] transition duration-300"
              >
                🎲 Start the Game
              </button>
            </div>

            {/* Progress */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#002147] mb-4">Progress</h3>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-[#F39C12] rounded-full transition-all duration-300"
                  style={{ width: `${(streak / questions.length) * 100}%` }}
                />
              </div>
              <div className="mt-2 text-gray-600">
                {streak} of {questions.length} completed
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Display Modals */}
      {showCalendar && <CalendarModal />}
      {showGamesDialog && <GamesDialog />}
      {selectedQuestion && <QuestionModal />}
    </div>
  );
};

export default Questions;
