const data = {
  question: "What does CSS stand for?",
  answers: [
    "Computer Style Sheets",
    "Cascading Style Sheets",
    "Colorful Style Sheets",
    "Creative Style Sheets",
    "Comething Style Sheets",
  ],
};

const prefixes = "abcdefghijklmnopqrstuvwxyz".split("");

export default function Game() {
  return (
    <div className="game-container">
      <div className="question-container">
        <h1 className="text-primary quiz-title">Quiz Interface</h1>

        <h2 className="quiz-question">1.{data.question}</h2>
        <ul>
          {data.answers.map((answer, index) => {
            return (
              <li className="quiz-answer">
                <p>
                  <span className="answer-prefix ">{prefixes[index]}</span>
                  {answer}
                </p>
              </li>
            );
          })}
        </ul>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}
