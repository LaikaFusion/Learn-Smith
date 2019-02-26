import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { copperincrement, copperdecrement } from "../redux/copperreducer";
import Card from "./Card";
import Game from "./Game";

const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const morseArr = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--.."
];
const ranLetter = () => Math.floor(Math.random() * 25);

function Morse(props) {
  const { copper, changeDisplay } = props;
  const [answerArray, setAnswerArray] = useState([]);
  const [answer, setAnswer] = useState("");
  const [answerDisp, setAnswerDisp] = useState("");

  const newQuestion = () => {
    const arr = [];
    while (arr.length <= 3) {
      const freshLetter = ranLetter();
      if (!arr.includes(freshLetter)) {
        arr.push(freshLetter);
      }
    }
    setAnswerArray(arr);
    const ranAnswer = Math.floor(Math.random() * 3);
    setAnswer(arr[ranAnswer]);
  };
  const checkAnswer = ans => {
    if (ans === answer) {
      copperincrement(1);
      setAnswerDisp(`Correct`);
    } else {
      copperdecrement(1);
      setAnswerDisp(`Wrong`);
    }
    setTimeout(() => {
      setAnswerDisp(``);
    }, 1000);
    newQuestion();
  };
  useEffect(() => {
    newQuestion();
  }, []);
  return (
    <Card>
      <Game
        resource={copper}
        resourceType="Copper"
        changeDisplay={changeDisplay}
      >
        <div className="question">
          What is the letter of this Morse character?
        </div>
        <div className="letter">{morseArr[answer]}</div>
        {answerArray.map((e, i) => {
          return (
            <input
              onClick={() => {
                checkAnswer(e);
              }}
              value={alphabetArray[e]}
              type="button"
              id={i}
            />
          );
        })}
        <div className="answer">{answerDisp}</div>
      </Game>
    </Card>
  );
}
Morse.propTypes = {
  copper: PropTypes.number.isRequired,
  changeDisplay: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  copper: state.copper
});

export default connect(
  mapStateToProps,
  { copperincrement, copperdecrement }
)(Morse);
