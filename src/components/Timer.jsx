import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(count);
    }, 1000);
  });

  return (
    <div>
      <h1>I have rendered {count} times!</h1>
    </div>
  );
}

export default Timer;
