import React, { createContext, useContext, useReducer } from "react";
import { ADD_HIGHLIGHT, INPUT_TEXTAREA, SET_FILTER } from "./constants";

const initialState = {
  textArea: null,
  highlights: [],
  filterColor: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case INPUT_TEXTAREA:
      return {
        ...state,
        textArea: action.payload
      };

    case ADD_HIGHLIGHT:
      return {
        ...state,
        highlights: [...state.highlights, action.payload]
      };

    case SET_FILTER:
      return {
        ...state,
        filterColor: action.payload
      };

    default:
      return state;
  }
};

const StateContext = createContext();

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStore = () => useContext(StateContext);
