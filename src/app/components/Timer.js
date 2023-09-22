"use client";
import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tempo</h1>
      <p>Tempo atual: {time}</p>
    </div>
  );
};

export default Timer;
