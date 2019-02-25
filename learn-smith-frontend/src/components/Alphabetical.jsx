import React, { useState, useEffect } from "react";
import Card from "./Card";

const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ranLetter = () => Math.floor(Math.random() * 25);

function Alphabetical() {
  const [firstLetter, setFirstLetter] = useState("");
  const [secondLetter, setSecondLetter] = useState("");
  const newQuestion = () => {
    const letterone = ranLetter();
    let lettertwo = ranLetter();
    while (letterone === lettertwo) {
      lettertwo = ranLetter();
    }
    setFirstLetter(letterone);
    setSecondLetter(lettertwo);
  };
  const checkAnswer = ans => {
    if (ans === "left" && firstLetter < secondLetter) {
      console.log(`Correct`);
    } else if (ans === "right" && secondLetter < firstLetter) {
      console.log(`Correct`);
    } else {
      console.log("Wrong");
    }
    newQuestion();
  };
  useEffect(() => {
    newQuestion();
  }, []);
  return (
    <Card>
      <div className="question">Is</div>
      <div className="letter">{alphabetArray[firstLetter]}</div>
      <div className="question">left or right of</div>
      <div className="letter">{alphabetArray[secondLetter]}</div>
      <div className="question">in the alphabet?</div>
      <input
        onClick={() => {
          checkAnswer("left");
        }}
        value="Left"
        type="button"
        id="leftbutton"
      />
      <input
        onClick={() => {
          checkAnswer("right");
        }}
        value="Right"
        type="button"
        id="rightbutton"
      />
    </Card>
  );
}
export default Alphabetical;
