import React, { useEffect, useState } from "react";
import Highlighter from "../Highlighter";
import { INPUT_TEXTAREA } from "../Store/constants";
import { useStore } from "../Store/store";
import findAndSurroundWithColoredMark from "./mark";
import "./style.css";

export default function Editor() {
  const [{ highlights, textArea }, dispatch] = useStore();

  const [marks, setMark] = useState();

  useEffect(() => {
    highlights.forEach(item => {
      setMark(findAndSurroundWithColoredMark(item, textArea));
    });
  }, [highlights, textArea]);

  const textInput = e => {
    dispatch({ type: INPUT_TEXTAREA, payload: e.target });
  };

  return (
    <div className="container">
      <h3>Highlight Editor: </h3>
      <div className="highlighter-container">
        <Highlighter color="#ff0000" />
        <Highlighter color="#ffff00" />
        <Highlighter color="#008000" />
      </div>

      <div className="textarea-container">
        <div className="backdrop">
          <div
            className="highlights"
            dangerouslySetInnerHTML={{ __html: marks }}
          ></div>
        </div>
        <textarea
          onChange={textInput}
          value={textArea ? textArea.value : ""}
        ></textarea>
      </div>
    </div>
  );
}
