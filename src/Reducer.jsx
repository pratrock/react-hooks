import React, { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>
        Count:
        <span>{state.count}</span>
      </p>
    </div>
  );
};
