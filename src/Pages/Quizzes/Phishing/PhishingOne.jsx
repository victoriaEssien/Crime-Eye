import supabase from "../../../client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { quiz } from "../../../Questions/phishing-questions/phishing";

const PhishingOne = ({ token }) => {
  const navigate = useNavigate();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [updatedPoints, setUpdatedPoints] = useState(
    token.user.user_metadata.points
  );

  const [isLoading, setIsLoading] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60); // 10 minutes in seconds

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  useEffect(() => {

    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          setTimeUp(true);
          clearInterval(timer);
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) => {
      if (selectedAnswer && correctAnswers >= 7) {
        return {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,
        };
      } else {
        return {
          ...prev,
          wrongAnswers: prev.wrongAnswers + 1,
        };
      }
    });

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      setCorrectAnswers((prevCount) => prevCount + 1);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  async function handleIncrementPoints(e) {
    e.preventDefault();
    if (correctAnswers >= 7) {
      setIsLoading(true);
      try {
        const newPoints = token.user.user_metadata.points + 10;

        // Update the user metadata in Supabase
        const { error } = await supabase.auth.updateUser({
          data: { points: newPoints },
        });

        if (error) {
          // Handle error
          console.log(error);
        } else {
          // Update the state with the new points value
          setUpdatedPoints(newPoints);

          // Update the user object with the new points value
          const updatedUser = {
            ...token.user,
            user_metadata: { ...token.user.user_metadata, points: newPoints },
          };

          // Update the token in session storage with the updated user object
          const updatedToken = { ...token, user: updatedUser };
          sessionStorage.setItem("token", JSON.stringify(updatedToken));
          navigate("/home", { replace: true });
        }
      } catch (error) {
        // Handle error
        console.log(error);
        setIsLoading(false);
      }
    } else {
      navigate("/home", { replace: true });
    }
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${addLeadingZero(minutes)}:${addLeadingZero(remainingSeconds)}`;
  };

  return (
    <div className="quiz-container">
      {!showResult && !timeUp ? (
        <div>
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          <div className="error">{formatTime(timeRemaining)}</div>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selected-answer" : null
                }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          {!timeUp ? (
            <div>
              <h3>Result</h3>
              <p>
                Total Question: <span>{questions.length}</span>
              </p>
              <p>
                Total Score:<span> {result.score}</span>
              </p>
              <p>
                Correct Answers:<span> {result.correctAnswers}</span>
              </p>
              <p>
                Wrong Answers:<span> {result.wrongAnswers}</span>
              </p>
            </div>
          ) : (
            <div>
              <h3>Time&apos;s Up!</h3>
              <p>Sorry, you didn&apos;t finish answering the quiz in time.</p>
            </div>
          )}
          <button
            type="submit"
            className="quiz-btn"
            onClick={handleIncrementPoints}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Go home"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PhishingOne;
