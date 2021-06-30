import React, { useState } from "react";
import Timer from "./timer";
import "./App.css";

function App() {
  const [exerciseTime, setExerciseTime] = useState("");
  const [error, setError] = useState();
  let timer = Timer(exerciseTime, setError);

  return (
    <div className="App-header">
      {error && <p className="errorMessage">{error}</p>}

      {!timer.length && <h1 className="countdown">{timer}</h1>}

      <div className="inputs">
        <input
          type="text"
          placeholder="Enter exercise time"
          value={exerciseTime}
          onChange={(event) => {
            setExerciseTime(event.target.value.toLowerCase());
            setError(null);
          }}
        ></input>
      </div>
    </div>
  );
}

export default App;
