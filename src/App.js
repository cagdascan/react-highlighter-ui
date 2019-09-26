import React from "react";
import Editor from "./Editor";
import Filter from "./Filter";
import { StateProvider } from "./Store/store";
import "./App.css";

function App() {
  return (
    <StateProvider>
      <div className="App">
        <Editor />
        <Filter />
      </div>
    </StateProvider>
  );
}

export default App;
