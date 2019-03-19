import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  ironincrement,
  irondecrement
} from "../../redux/resourceIncrimentors/ironreducer";
import Card from "../Card";
import Game from "../Game";
import "./Hex.css";

const ranColor = () => Math.floor(Math.random() * 16777215).toString(16);

function Hex(props) {
  const { iron, ironincrement, irondecrement } = props;
  const [answerArray, setAnswerArray] = useState([]);
  const [answer, setAnswer] = useState("");
  const [answerDisp, setAnswerDisp] = useState("");
  const [timer, setTimer] = useState(0);

  const newQuestion = () => {
    const arr = [];
    while (arr.length <= 3) {
      const freshLetter = ranColor();
      if (!arr.includes(freshLetter)) {
        arr.push(freshLetter);
      }
    }
    setAnswerArray(arr);
    const ranAnswer = Math.floor(Math.random() * 4);
    setAnswer(arr[ranAnswer]);
  };
  const checkAnswer = ans => {
    setAnswerDisp(``);
    clearTimeout(timer);
    if (ans === answer) {
      ironincrement(1);
      setAnswerDisp(`Correct`);
    } else {
      irondecrement(1);
      setAnswerDisp(`Wrong`);
    }
    setTimer(
      setTimeout(() => {
        setAnswerDisp(``);
      }, 1000)
    );

    newQuestion();
  };
  useEffect(() => {
    newQuestion();
  }, []);
  return (
    <Card>
      <Game resource={iron} resourceType="iron">
        <div className="question">What is the color of this HexCode?</div>
        <div className="letter">#{answer}</div>
        {answerArray.map((e, i) => {
          return (
            <div
              onClick={() => {
                checkAnswer(e);
              }}
              onKeyPress={() => {
                checkAnswer(e);
              }}
              role="button"
              tabIndex={i + 1}
              id={i}
              className="hexButton"
              style={{ backgroundColor: `#${e}` }}
            />
          );
        })}
        <div className="answer">{answerDisp}</div>
      </Game>
    </Card>
  );
}
Hex.propTypes = {
  iron: PropTypes.number.isRequired,
  ironincrement: PropTypes.func.isRequired,
  irondecrement: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  iron: state.iron
});

export default connect(
  mapStateToProps,
  { ironincrement, irondecrement }
)(Hex);
