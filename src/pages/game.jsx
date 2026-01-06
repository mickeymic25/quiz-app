import { useState } from "react";
import useTriviaApi from "./api/useTriviaApi";
import Header from "@/components/Header";
const prefixes = "ABCDEF".split("");

export default function Game() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { apiData: triviaData, loading, error } = useTriviaApi();

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>{error}</p>;
  if (!triviaData || triviaData.length === 0) return <p>No questions found.</p>;
  const currentQuestion = triviaData[currentQuestionIndex];

  const handleCorrectAnswer = (selected) => {
    setCurrentPoints((currentPoints) => {
      if (selected === currentQuestion.correct_answer) {
        return currentPoints + 1;
      } else {
        return Math.max(currentPoints - 1, 0);
      }
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < triviaData.length - 1) {
      setcurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsModalOpen(true);
    }
  };
  return (
    <div className="game-container">
      <Header />
      <h1 className="text-red-700 font-bold  bg-white shadow-xl text-base md:text-lg lg:text-xl p-1 md:p-2 lg:p-3 m-3">
        Points: {currentPoints}
      </h1>
      <div className="question-container w-[300px] h-auto md:w-[550px] md:h-[550px] shadow-2xl">
        <h2 className="quiz-question text-base md:text-lg lg:text-xl">
          {currentQuestionIndex + 1}.{currentQuestion.question}
        </h2>
        {/*Answers******************************************************/}
        <ul>
          {currentQuestion.incorrect_answers
            .concat(currentQuestion.correct_answer)
            .sort()
            .map((answer, index) => {
              return (
                <li
                  className={`quiz-answer ${
                    selectedAnswer === answer
                      ? answer === currentQuestion.correct_answer
                        ? "bg-green-500"
                        : "bg-red-500"
                      : "bg-white"
                  }`}
                  key={index}
                  onClick={() => {
                    setSelectedAnswer(answer);
                    handleCorrectAnswer(answer);
                  }}
                >
                  <p>
                    <span className="answer-prefix text-base md:text-lg lg:text-xl">
                      {prefixes[index]}
                    </span>{" "}
                    {answer}
                  </p>
                </li>
              );
            })}
        </ul>

        <div className="submit">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black/50">
            <div className="h-56 w-60 bg-white">
              <div className="flex justify-end"></div>
              <div className="flex flex-col justify-center items-center m-4 md:m-5">
                <h2 className=" text-primary quiz-title">Game Over!</h2>
                <p className="text-primary">{`Your final score is ${currentPoints}`}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Play Again
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
