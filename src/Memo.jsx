import React, { useState, useEffect, useMemo } from "react";

export const Memo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number); //now it only reruns when there is change
    //   in number value, does no rerender when setDark is called
    //this acts like shouldComponentUpdate of react class lifecycle hooks
    //better to use it only when you don't want to call a highly taxing function everytime you rerender.
    // if used for every single thing, it will have high memory usage as it caches the value and additional function is being called in this operation
    // so there is more functions being used inside another function//
  }, [number]);
  /* 
  const getItems = () => {
    return [number, number + 1, number + 2];
  }; */

  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };

    /*    the theme object is memoized so everytime component is rerendered,
     the same object reference is returned, only when reference is changed, 
     there is an update made */
  }, [dark]);

  useEffect(() => {
    console.log("theme changed");
  }, [theme]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change theme
      </button>
      <div style={theme}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
