import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { steelincrement, steeldecrement } from "../redux/steelreducer";
import Card from "./Card";
import Game from "./Game";

const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const natoArr = [
  "alfa",
  "bravo",
  "charlie",
  "delta",
  "echo",
  "foxtrot",
  "golf",
  "hotel",
  "india",
  "juliett",
  "kilo",
  "lima",
  "mike",
  "november",
  "oscar",
  "papa",
  "quebec",
  "romeo",
  "sierra",
  "tango",
  "uniform",
  "victor",
  "whiskey",
  "xray",
  "yankee",
  "zulu"
];
const ranLetter = () => Math.floor(Math.random() * 25);

function Nato(props) {
  const { steel, changeDisplay } = props;
  const [letter, setLetter] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerDisp, setAnswerDisp] = useState("");

  const newQuestion = () => {
    const lett = ranLetter();
    setLetter(lett);
    setAnswer(natoArr[lett]);
  };
  const checkAnswer = e => {
    if (e.target.value.toLowerCase() === answer) {
      steelincrement(1);
      e.target.value = "";
      setAnswerDisp(`Correct`);
      setTimeout(() => {
        setAnswerDisp(``);
      }, 1000);
      newQuestion();
    }
  };
  useEffect(() => {
    newQuestion();
  }, []);
  return (
    <Card>
      <Game resource={steel} resourceType="Steel" changeDisplay={changeDisplay}>
        <div className="question">
          What is the Nato Phonetic Alpabet representation of this character?
        </div>
        <div className="letter">{alphabetArray[letter]}</div>

        <input spellCheck={false} onKeyUp={checkAnswer} type="text" />

        <div className="answer">{answerDisp}</div>
      </Game>
    </Card>
  );
}
Nato.propTypes = {
  steel: PropTypes.number.isRequired,
  changeDisplay: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  steel: state.steel
});

export default connect(
  mapStateToProps,
  { steelincrement, steeldecrement }
)(Nato);
