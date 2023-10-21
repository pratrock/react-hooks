import React, { useState, useEffect } from "react";

export const List = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems(3));
    console.log("updating items");
  }, [getItems]);
  return items.map((item) => <div key={item}>{item}</div>);
};
