import React, { useState } from 'react';
import { Brain, Check, X } from 'lucide-react';

const quizQuestions = [
  {
    question: "What's my favorite way to spend a lazy Sunday?",
    options: [
      "Binge-watching shows with you",
      "Going on long walks alone", 
      "Reading a book in silence",
      "Cooking elaborate meals"
    ],
    correct: 0,
    explanation: "Nothing beats our virtual Video call marathons where we sync up our screens and comment on everything!"
  },
  {
    question: "What always makes me smile no matter what?",
    options: [
      "Funny memes",
      "Your voice messages",
      "Pizza",
      "Sunny weather"
    ],
    correct: 1,
    explanation: "Your voice messages are my daily dose of happiness - especially the sleepy morning ones!"
  },
  {
    question: "What's my biggest dream for us?",
    options: [
      "Traveling the world together",
      "Getting a pet together",
      "Living in the same city",
      "Starting a business together"
    ],
    correct: 1,
    explanation: "More than anything, I dream of the day we can have ordinary moments together in the same place."
  },
  {
    question: "What do I do when I miss you the most?",
    options: [
      "Look at our photos",
      "Listen to our playlist",
      "Reread our messages",
      "All of the above"
    ],
    correct: 3,
    explanation: "How did you know? I do all of these things - sometimes all at once!"
  },
  {
    question: "What's my love language?",
    options: [
      "Physical touch",
      "Words of affirmation", 
      "Quality time",
      "Acts of service"
    ],
    correct: 2,
    explanation: "Every minute we spend together, even virtually, is precious to me. Quality time is everything!"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <section className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
            <Brain className="mx-auto text-green-500 mb-6" size={64} />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
            <div className="text-6xl mb-6">
              {score === quizQuestions.length ? '🥰' : score >= 3 ? '😍' : score >= 2 ? '😊' : '💕'}
            </div>
            <p className="text-2xl text-gray-700 mb-6">
              You got <span className="font-bold text-green-600">{score}</span> out of {quizQuestions.length} correct!
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {score === quizQuestions.length 
                ? "Perfect score! You know me so well, my love! 💕"
                : score >= 3 
                ? "Amazing! You really pay attention to the little things about me! ❤️"
                : score >= 2
                ? "Good job! You know me pretty well, sweetie! 😘"
                : "Aww, we still have so much to learn about each other! That's exciting! 💖"
              }
            </p>
            <button
              onClick={resetQuiz}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <Brain className="mx-auto text-blue-500 mb-4" size={48} />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            How Well Do You Know Me?
          </h2>
          <p className="text-xl text-gray-600">A fun little quiz just for you</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="flex justify-between items-center mb-8">
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm text-gray-500">
              Score: {score}/{quizQuestions.length}
            </span>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {quizQuestions[currentQuestion].question}
            </h3>
            
            <div className="space-y-4">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ${
                    showResult
                      ? index === quizQuestions[currentQuestion].correct
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : index === selectedAnswer
                        ? 'border-red-500 bg-red-50 text-red-800'
                        : 'border-gray-200 bg-gray-50 text-gray-500'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showResult && (
                      <div>
                        {index === quizQuestions[currentQuestion].correct && (
                          <Check className="text-green-500" size={20} />
                        )}
                        {index === selectedAnswer && index !== quizQuestions[currentQuestion].correct && (
                          <X className="text-red-500" size={20} />
                        )}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {showResult && (
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <p className="text-gray-700 italic">
                {quizQuestions[currentQuestion].explanation}
              </p>
            </div>
          )}
          
          {showResult && (
            <div className="text-center">
              <button
                onClick={nextQuestion}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;