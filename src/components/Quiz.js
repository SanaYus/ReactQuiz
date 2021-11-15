import React from "react";
import Questions from "./Questions";
import { useState } from "react";

const Quiz = ()=>{

  const [currentQ, setCurrentQ] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [recordedScore, setRecordedScore] = useState(0);

  //move to new question
  const buttonClick = (isCorrect)=>{
    let nextQ = currentQ + 1;

    if(isCorrect === true){
      setScore(score+1);
    }
    
    if(nextQ < Questions.length){
      setCurrentQ(nextQ);
    }else {
      alert("You have reached the end of your quiz");
      setShowScore(true);
    }
  }

  //restart quiz
  const restartQuiz = ()=>{
    setCurrentQ(0)
    setShowScore(false)
    setScore (0);

    //display recorded score from before
    setRecordedScore(score);
  }

  return (
		<div className="App">
			{/*if showscore=true, display score, else display questions*/}
			{showScore ? (
				<div className="score-section">You scored {score} out of {Questions.length}
        <div className="recorded-score">
          <p>Your last score: {recordedScore}</p>
        </div>
        <button className="restartBtn" onClick={restartQuiz}>Restart quiz</button>
        </div>
			) : (
				<>
					<div className="question-section">
						<div className="question-count">
							Question {currentQ+1} <span>/{Questions.length}</span>
						</div>
						<div className="question-text">{Questions[currentQ].questionText}</div>
					</div>
          <div className="answer-section">
						{Questions[currentQ].answerOptions.map((answerOption) => (
							<button onClick={()=>{buttonClick(answerOption.isCorrect)}}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz;