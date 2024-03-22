import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());
  console.log(time);
  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerID);
  });
  return (
    <>
      <div className="container">
        <h1>Bharat Clock</h1>
        <p>This is clock that shows the time in Bharat at all times.</p>
        <h3>This is the Current time:</h3>
        <h2>
          {time.toLocaleDateString()} - {time.toLocaleTimeString()}
        </h2>
      </div>
    </>
  );
}

export default App;
