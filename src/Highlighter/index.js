import PropTypes from "prop-types";
import React from "react";
import { v4 as uuid } from "uuid";
import { ADD_HIGHLIGHT } from "../Store/constants";
import { useStore } from "../Store/store";
import "./style.css";

export default function Highlighter({ color }) {
  const [{ textArea }, dispatch] = useStore();

  const style = {
    backgroundColor: color
  };

  const addHighlight = () => {
    const text = window.getSelection().toString();
    if (text.length) {
      dispatch({
        type: ADD_HIGHLIGHT,
        payload: {
          color,
          text,
          start: textArea.selectionStart,
          end: textArea.selectionEnd,
          id: uuid()
        }
      });
    }
  };

  return (
    <div className="highlighter" style={style} onClick={addHighlight}></div>
  );
}

Highlighter.propTypes = {
  color: PropTypes.string
};
