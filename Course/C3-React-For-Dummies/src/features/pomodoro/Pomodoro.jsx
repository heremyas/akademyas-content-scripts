import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import alarmSound from "./alarm.mp3";

const PomodoroTimer = (props) => {
  const [playSound, alarm] = useSound(alarmSound);
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(25);
  const times = [
    { work: 25, break: 5 },
    { work: 45, break: 15 },
  ];

  useEffect(() => {
    let interval = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
        document.title = secondsLeft - 1;
      }, 1000);
    } else if (!isActive && secondsLeft !== 0) {
      clearInterval(interval);
    } else {
      document.title = "Good job! Time for some break";
      playSound();
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      secs < 10 ? "0" : ""
    }${secs}`;
  };

  const handleStartPause = () => {
    setIsActive(!isActive);
    alarm.stop();
  };

  const handleReset = () => {
    setIsActive(false);
    setSecondsLeft(10);
    alarm.stop();
    document.title = "Pro-ductivity";
  };

  return (
    <section {...props} className="pomodoro-timer">
      <div className="pomodoro">
        <h1>POMODORO TIMER</h1>
        {/* <input
        type="text"
        value={}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Enter a new task"
        /> */}
        <h3>Select time</h3>
        <div style={{ display: "flex" }}>
          {times.map((time) => (
            <div className="time-option">
              <input
                type="radio"
                name="time"
                id={`time-${time.work}-${time.break}`}
                value={time}
                onChange={() => setTime(time)}
                className="time-radio"
              />
              <label
                htmlFor={`time-${time.work}-${time.break}`}
                className="time-label"
              >
                <b>
                  {time.work} / {time.break}
                </b>
              </label>
            </div>
          ))}
        </div>
        <div className="timer-display">{formatTime(secondsLeft)}</div>
        <div>
          <button onClick={handleStartPause}>
            {isActive ? "Pause" : "Start"}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </section>
  );
};

export default PomodoroTimer;
