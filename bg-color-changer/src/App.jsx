import React, { useState } from "react";
import doraemon from "./assets/doraemon.png";

const App = () => {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen flex justify-center duration-200"
      style={{ backgroundColor: color }}
    >
      <div>
        <img src={doraemon} alt="doremon" className="w-[500px] mt-8" />
      </div>
      <div className="fixed bottom-10 p-4 flex flex-wrap gap-4 bg-white justify-center items-center rounded-3xl">
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>
        <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "orange" }}
        >
          Orange
        </button>
        <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>
        <button
          onClick={() => setColor("cyan")}
          className="outline-none px-4 py-1 rounded-full text-gray-700 shadow-lg"
          style={{ backgroundColor: "cyan" }}
        >
          Cyan
        </button>
        <button
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1 rounded-full text-gray-500 shadow-lg"
          style={{ backgroundColor: "white" }}
        >
          White
        </button>
      </div>
    </div>
  );
};

export default App;
