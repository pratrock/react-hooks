import React, { useState, useEffect, useRef } from "react";
import { Ref } from "./Ref";
import { Reducer } from "./Reducer";
import { Callback } from "./Callback";
import { Memo } from "./Memo";

function App() {
  return (
    <>
      <div>
        <h1>Useref</h1>
        <Ref />
      </div>
      <div>
        <h2>Usereducer</h2>
        <Reducer></Reducer>
      </div>
      <div>
        <h3>UseCallback</h3>
        <Callback />
      </div>
      <div>
        <h3>UseMemo</h3>
        <Memo />
      </div>
    </>
  );
}

export default App;
