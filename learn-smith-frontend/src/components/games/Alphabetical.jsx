import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  woodincrement,
  wooddecrement
} from "../../redux/resourceIncrimentors/woodreducer";
import Card from "../Card";
import Game from "../Game";

const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ranLetter = () => Math.floor(Math.random() * 25);

function Alphabetical(props) {
  const { wood, woodincrement, wooddecrement, changeDisplay } = props;
  const [firstLetter, setFirstLetter] = useState("");
  const [secondLetter, setSecondLetter] = useState("");
  const [answer, setAnswer] = useState("");
  const [timer, setTimer] = useState(0);

  const newQuestion = () => {
    setAnswer(``);
    clearTimeout(timer);
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
    setTimer(
      setTimeout(() => {
        setAnswer(``);
      }, 1000)
    );
    newQuestion();
  };
  useEffect(() => {
    newQuestion();
  }, []);
  return (
    <Card>
      <Game resource={wood} resourceType="Wood" changeDisplay={changeDisplay}>
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
      </Game>
    </Card>
  );
}
Alphabetical.propTypes = {
  wood: PropTypes.number.isRequired,
  changeDisplay: PropTypes.func.isRequired,
  woodincrement: PropTypes.func.isRequired,
  wooddecrement: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  wood: state.wood
});

export default connect(
  mapStateToProps,
  { woodincrement, wooddecrement }
)(Alphabetical);
