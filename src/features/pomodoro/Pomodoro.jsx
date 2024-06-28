import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import alarmSound from "./alarm.mp3";

const PomodoroTimer = () => {
  const [playSound, alarm] = useSound(alarmSound);
  const [secondsLeft, setSecondsLeft] = useState(10); // 25 minutes
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);
    } else if (!isActive && secondsLeft !== 0) {
      clearInterval(interval);
    } else {
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
  };

  return (
    <section className="pomodoro-timer">
      <h1>Pomodoro Timer</h1>
      <div className="timer-display">{formatTime(secondsLeft)}</div>
      <button onClick={handleStartPause}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </section>
  );
};

export default PomodoroTimer;
