import React from 'react';
import { useState } from 'react';

export default function Clock() {
  var date = new Date();
  var i_time = date.toLocaleTimeString();

  const [time, setTime] = useState(i_time);
  function updateClock() {
    const updated_time = new Date().toLocaleTimeString();
    setTime(updated_time + ' P.M');
  }
  setInterval(updateClock, 1000);
  return (
    <div className="clock">
      <h1 className="heading">Indian Clock</h1>
      <p>Current Time: {time}</p>
    </div>
  );
}
