/*
 * Learning Isomorphic Web Application Development
 * Copyright © 2015 Konstantin Tarkus, Packt Publishing
 * All rights reserved.
 */

import React, { useEffect, useState } from "react";
import moment from "moment";

const App = () => {
  const [time, setTime] = useState(null);
  useEffect(()=>{
    setInterval(() => {
      let nowDate = new Date()
      setTime(nowDate.toLocaleString());
    }, 1000);
    return ()=>{

    }
  }, [time])
  const clickBTN = () => {
    let nowDate = new Date()
    setTime(nowDate.toLocaleString());
  };
  return (
    <div>
      <h1>current time is = {time}</h1>
      <button onClick={clickBTN}>click me </button>
    </div>
  );
};

export default App;
