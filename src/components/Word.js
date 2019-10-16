import React from "react";
import "./Word.css";

const Word = props => (
  <li>
    Word for English: <strong>{props.english}</strong>. Translation:{" "}
    <strong>{props.polish}</strong>
  </li>
);

export default Word;
