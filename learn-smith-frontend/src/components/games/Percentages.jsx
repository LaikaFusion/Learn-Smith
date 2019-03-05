import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { obsidianincrement } from "../../redux/resourceIncrimentors/obsidianreducer";
import Card from "../Card";
import Game from "../Game";

const ranFive = () => (Math.floor(Math.random() * 30) + 1) * 5;
const ranHundred = () => Math.floor(Math.random() * 20 + 1) * 5;

function Percentage(props) {
  const { obsidian, obsidianincrement } = props;
  const [percent, setPercent] = useState("");
  const [mainVal, setMainVal] = useState("");
  const [answerDisp, setAnswerDisp] = useState("");

  const newQuestion = () => {
    setPercent(ranFive());
    setMainVal(ranHundred());
  };
  const checkAnswer = e => {
    if (parseFloat(e.target.value) === (percent / 100) * mainVal) {
      obsidianincrement(1);
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
      <Game resource={obsidian} resourceType="obsidian">
        <div className="question">
          What is {percent}% of {mainVal}?
        </div>

        <input spellCheck={false} onKeyUp={checkAnswer} type="text" />

        <div className="answer">{answerDisp}</div>
      </Game>
    </Card>
  );
}
Percentage.propTypes = {
  obsidian: PropTypes.number.isRequired,
  obsidianincrement: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  obsidian: state.obsidian
});

export default connect(
  mapStateToProps,
  { obsidianincrement }
)(Percentage);
