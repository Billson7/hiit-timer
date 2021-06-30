import React, { useState, useEffect } from "react";
import moment from "moment";
import errorDict from "./errorDict.json";
export default function Timer(exerciseTime, setError) {
  const calculateTimeLeft = () => {
    const todaysDate = moment().format("MM/DD/YYYY");
    const fullExerciseTime = todaysDate.concat(` ${exerciseTime}`);

    const difference = +new Date(fullExerciseTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (errorDict[exerciseTime]) {
      setError("Enter a time in the correct format 00:00:00");
      return null;
    }
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className="hidden" id="time" key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timeLeft.seconds > 20 ? (
        timeLeft.seconds
      ) : (
        <span style={{ color: "#e9c46a" }}>{timeLeft.seconds}</span>
      )}
    </div>
  );
}
