/* eslint-disable no-eval */
import React from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Output from "./components/Output";
import { useState } from "react";

const App = () => {
  const [input, setInputValue] = useState("0");
  const [output, setOutputValue] = useState("0");

  function valueHandelling(value) {
    if (value == "C") {
      setOutputValue("0");
      setInputValue("0");
    } else if (value == "AC") {
      setInputValue((prev) => prev.slice(0, -1) || "0");
    } else if (value == "=") {
      try {
        setOutputValue(eval(input).toString());
      } catch (error) {
        setOutputValue("Error");
      }
    } else {
      setInputValue((prev) => {
        if (prev === "0" && value === "0") return "0";
        if (prev === "0") return value;
        return prev + value;
      });
    }
  }

  return (
    <div className="container">
      <div>
        <Output output={output} />
        <Input input={input} />
        <Button valueHandelling={valueHandelling} />
      </div>
    </div>
  );
};

export default App;
