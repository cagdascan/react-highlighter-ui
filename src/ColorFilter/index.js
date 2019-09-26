import PropTypes from "prop-types";
import React from "react";
import { SET_FILTER } from "../Store/constants";
import { useStore } from "../Store/store";
import "./style.css";

export default function ColorFilter({ color }) {
  const [{ filterColor }, dispatch] = useStore();

  const style = {
    backgroundColor: color
  };

  const setFilter = () => {
    dispatch({ type: SET_FILTER, payload: color });
  };

  return (
    <div
      className={`color-filter ${filterColor === color ? "selected" : ""}`}
      style={style}
      onClick={setFilter}
    ></div>
  );
}

ColorFilter.propTypes = {
  color: PropTypes.string
};
