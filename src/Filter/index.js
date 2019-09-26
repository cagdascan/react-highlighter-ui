import React from "react";
import ColorFilter from "../ColorFilter";
import { useStore } from "../Store/store";
import "./style.css";

export default function Filter() {
  const [{ filterColor, highlights }] = useStore();

  const filteredResults = () => {
    if (!highlights.length) {
      return <div>No saved highlights</div>;
    }
    if (filterColor) {
      return highlights
        .filter(i => i.color === filterColor)
        .map(item => (
          <div key={item.id} className="filtered-highlight">
            <span style={{ backgroundColor: item.color }}>{item.text}</span>
          </div>
        ));
    }
    return highlights.map(item => (
      <div key={item.id} className="filtered-highlight">
        <span style={{ backgroundColor: item.color }}>{item.text}</span>
      </div>
    ));
  };

  return (
    <div className="filter-container">
      <h3>
        Filter Saved Highlights:
        {filterColor && (
          <span className="selected">filtered by {filterColor}</span>
        )}
      </h3>
      <div className="filters">
        <ColorFilter color="#ff0000" />
        <ColorFilter color="#ffff00" />
        <ColorFilter color="#008000" />
      </div>

      <div className="filtered-results">{filteredResults()}</div>
    </div>
  );
}
