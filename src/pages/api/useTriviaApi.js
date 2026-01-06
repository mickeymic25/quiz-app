import axios from "axios";
import { useEffect, useState } from "react";

function useTriviaApi() {
  const [apiData, setApiData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loadingPage, setLoadingPage] = useState(true);

  function decodeHTML(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=6&category=9&difficulty=easy&type=multiple"
        );
        const decodedResults = response.data.results.map((q) => ({
          question: decodeHTML(q.question),
          correct_answer: decodeHTML(q.correct_answer),
          incorrect_answers: q.incorrect_answers.map(decodeHTML),
        }));
        return setApiData(decodedResults);
      } catch (error) {
        console.error("Error loading data:", error);
        setApiData(null);
        setErrorMessage("Failed to load Trivia Questions");
      } finally {
        setLoadingPage(false);
      }
    };

    fetchData();
  }, []);

  return { apiData, loadingPage, errorMessage };
}

export default useTriviaApi;
