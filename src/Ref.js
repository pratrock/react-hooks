import React, { useState, useEffect, useRef } from "react";

export const Ref = () => {
  const [name, setName] = useState();
  // const [count, setCount] = useState(0);
  const inputRef = useRef(); //persists state across renders and also used to access dom element
  function focus() {
    console.log(inputRef.current);
    inputRef.current.focus();
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      {/* <div>Component rendered {renderCount.current} times</div> */}
      <button onClick={focus}> Focus </button>
    </div>
  );
};
