import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { woodincrement, wooddecrement } from "../redux/woodreducer";
import Card from "./Card";

const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ranLetter = () => Math.floor(Math.random() * 25);

function Alphabetical(props) {
  const { wood } = props;
  const [firstLetter, setFirstLetter] = useState("");
  const [secondLetter, setSecondLetter] = useState("");
  const [answer, setAnswer] = useState("");

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
      woodincrement(1);
      setAnswer(`Correct`);
    } else if (ans === "right" && secondLetter < firstLetter) {
      woodincrement(1);
      setAnswer(`Correct`);
    } else {
      wooddecrement(1);
      setAnswer(`Wrong`);
    }
    setTimeout(() => {
      setAnswer(``);
    }, 1000);
    newQuestion();
  };
  useEffect(() => {
    newQuestion();
  }, []);
  return (
    <Card>
      <div className="resourceDisplay">Wood: {wood}</div>
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
      <div className="answer">{answer}</div>
    </Card>
  );
}
Alphabetical.propTypes = {
  wood: PropTypes.number.isRequired
};
const mapStateToProps = state => ({
  wood: state.wood
});

export default connect(
  mapStateToProps,
  { woodincrement, wooddecrement }
)(Alphabetical);
