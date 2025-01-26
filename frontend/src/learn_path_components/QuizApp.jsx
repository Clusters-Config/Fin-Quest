import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function QuizApp() {
  const { quizId } = useParams(); // Get the dynamic quizId from URL
  const navigate = useNavigate(); // To navigate to result page
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch the quiz data based on the quizId from the URL
  useEffect(() => {
    setLoading(true);
    fetch(`/Quiz.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch quiz data");
        }
        return response.json();
      })
      .then((data) => {
        if (data[quizId]) {
          setQuizData(data[quizId]); // Load quiz based on quizId
        } else {
          console.error("Quiz not found in JSON");
          setQuizData([]); // Set an empty quiz if not found
        }
      })
      .catch((error) => console.error("Error loading JSON:", error))
      .finally(() => setLoading(false));
  }, [quizId]);

  const handleOptionChange = (questionIndex, selectedOption) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: selectedOption,
    });
  };

  const calculateScore = () => {
    let calculatedScore = 0;
    quizData.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        calculatedScore++;
      }
    });

    // Pass the score to the result page via navigation
    navigate("/result", { state: { score: calculatedScore, total: quizData.length } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A8DADC] to-[#F1FAEE] p-6">
      <h1 className="text-3xl font-bold text-center text-[#457B9D] mb-8">
        {quizId} Quiz
      </h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading quiz...</p>
      ) : (
        <>
          <div id="quiz-container" className="space-y-6">
            {quizData.map((question, index) => (
              <div key={index} className="p-4 bg-white shadow-md rounded-md">
                <h3 className="text-xl font-semibold text-[#457B9D] mb-4">{question.question}</h3>
                {question.options.map((option, i) => (
                  <div key={i} className="flex items-center mb-3">
                    <input
                      type="radio"
                      id={`q${index}-option${i}`}
                      name={`question-${index}`}
                      value={option}
                      checked={userAnswers[index] === option}
                      onChange={() => handleOptionChange(index, option)}
                      className="w-4 h-4 text-[#457B9D] focus:ring-[#457B9D] border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`q${index}-option${i}`}
                      className="ml-2 text-gray-700 text-sm"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={calculateScore}
              className="px-6 py-3 bg-[#457B9D] text-white font-semibold rounded-md hover:bg-[#A8DADC] transform transition-all duration-300 hover:scale-105"
            >
              Submit Quiz
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default QuizApp;
