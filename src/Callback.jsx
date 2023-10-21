import React, { useState, useCallback } from "react";
import { List } from "./List";

export const Callback = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState();

  const getItems = useCallback(
    (increment) => {
      /* 
    usecallback here is used because everytime we update the theme object,
    the getItems is recreated which causes the list to rerender everytime even when 
    it is not really created */

      /*   useMemo gives the return value of function,
     while useCallback gives the entire function. This means we can also pass a parameter to the function
      which is something we would not be able to do in useMemo as it just returns the value
     */
      return [
        number + increment,
        number + 1 + increment,
        number + 2 + increment,
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};
