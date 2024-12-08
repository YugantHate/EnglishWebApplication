// import React, { useState } from 'react'
// const questions = [
//   { 
//     question: "What is the past tense of 'go'?", 
//     answer: "went" 
//   },
//   { 
//     question: "What is the plural of 'child'?", 
//     answer: "children" 
//   },
//   {
//     question: "What is the comparative form of 'good'?",
//     answer: "better"
//   },
// ];
// const Practice = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswer, setUserAnswer] = useState("");
//   const [isCorrect, setIsCorrect] = useState(null);
//   const [isSpeaking, setIsSpeaking] = useState(false);

//   // Handle answer change
//   const handleAnswerChange = (event) => {
//     setUserAnswer(event.target.value);
//   };

//   // Handle next question
//   const handleNextQuestion = () => {
//     const isAnswerCorrect = userAnswer.trim().toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase();
//     setIsCorrect(isAnswerCorrect);
//     setUserAnswer(""); // Clear the input for next question
//     setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
//   };

//   // Handle speech recognition
//   const startSpeechRecognition = () => {
//     if (window.SpeechRecognition || window.webkitSpeechRecognition) {
//       const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//       recognition.lang = "en-US";
//       recognition.start();
//       recognition.onresult = (event) => {
//         const spokenAnswer = event.results[0][0].transcript;
//         setUserAnswer(spokenAnswer);
//       };
//       recognition.onerror = (event) => {
//         console.error("Speech recognition error", event);
//       };
//       setIsSpeaking(true);
//       recognition.onend = () => {
//         setIsSpeaking(false);
//       };
//     } else {
//       alert("Speech Recognition is not supported in this browser.");
//     }
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <div className="quiz-container">
//       {currentQuestionIndex < questions.length ? (
//         <div>
//           <h2>Grammar Quiz</h2>
//           <p>{currentQuestion.question}</p>

//           <div>
//             <input
//               type="text"
//               value={userAnswer}
//               onChange={handleAnswerChange}
//               placeholder="Type your answer or speak it"
//             />
//             <button onClick={startSpeechRecognition} disabled={isSpeaking}>
//               {isSpeaking ? "Listening..." : "Speak Your Answer"}
//             </button>
//           </div>

//           <button onClick={handleNextQuestion}>
//             Next Question
//           </button>

//           {isCorrect !== null && (
//             <div style={{ color: isCorrect ? 'green' : 'red' }}>
//               {isCorrect ? 'Correct!' : 'Incorrect, try again!'}
//             </div>
//           )}
//         </div>
//       ) : (
//         <div>
//           <h2>Quiz Complete!</h2>
//           <p>You've completed all the questions!</p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Practice;

import React, { useState } from 'react';

const questions = [
  { question: "What is the past tense of 'go'?", answer: "went" },
  { question: "What is the plural of 'child'?", answer: "children" },
  { question: "What is the comparative form of 'good'?", answer: "better" },
  { question: "What is the past tense of 'eat'?", answer: "ate" },
  { question: "What is the plural of 'man'?", answer: "men" },
  { question: "What is the past tense of 'run'?", answer: "ran" },
  { question: "What is the superlative form of 'small'?", answer: "smallest" },
  { question: "What is the opposite of 'love'?", answer: "hate" },
  { question: "What is the past tense of 'swim'?", answer: "swam" },
  { question: "What is the plural of 'mouse'?", answer: "mice" },
];

const Practice = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Handle answer change
  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  // Handle next question
  const handleNextQuestion = () => {
    const isAnswerCorrect = userAnswer.trim().toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase();
    if (isAnswerCorrect) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    setIsCorrect(isAnswerCorrect);
    setUserAnswer(""); // Clear the input for next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
    }
  };

  // Handle speech recognition
  const startSpeechRecognition = () => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = "en-US";
      recognition.start();
      recognition.onresult = (event) => {
        const spokenAnswer = event.results[0][0].transcript;
        setUserAnswer(spokenAnswer);
      };
      recognition.onerror = (event) => {
        console.error("Speech recognition error", event);
      };
      setIsSpeaking(true);
      recognition.onend = () => {
        setIsSpeaking(false);
      };
    } else {
      alert("Speech Recognition is not supported in this browser.");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      {currentQuestionIndex < questions.length ? (
        <div>
          <h2>Grammar Quiz</h2>
          <p>{currentQuestion.question}</p>

          <div>
            <input
              type="text"
              value={userAnswer}
              onChange={handleAnswerChange}
              placeholder="Type your answer or speak it"
            />
            <button onClick={startSpeechRecognition} disabled={isSpeaking}>
              {isSpeaking ? "Listening..." : "Speak Your Answer"}
            </button>
          </div>

          <button onClick={handleNextQuestion}>
            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>

          {isCorrect !== null && (
            <div style={{ color: isCorrect ? 'green' : 'red' }}>
              {isCorrect ? 'Correct!' : 'Incorrect, try again!'}
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2>Quiz Complete!</h2>
          <p>You answered {correctCount} questions correctly and {incorrectCount} incorrectly.</p>
          <p>Your final score: {correctCount}/{questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Practice;
