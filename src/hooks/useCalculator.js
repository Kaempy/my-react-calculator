import { useState } from "react";
const useCalculate = () => {
  const [screen, setScreen] = useState("0");

  const clearScreenHandler = () => {
    setScreen("0");
  };

  const backspaceHandler = () => {
    setScreen((prev) => prev.slice(0, -1));
    if (screen.length === 1) {
      setScreen("0");
    }
    // setScreen((prev) => prev.slice(0, prev.length - 1));
  };
  const numClickHandler = (e) => {
    let number = e.target.innerHTML;
    if (screen === "0") {
      setScreen("");
    }
    setScreen((prev) => prev.concat(number));
    // setScreen((prev) => prev + number);
  };
  const signClickHandler = (e) => {
    let sign = e.target.innerHTML;
    let otherSign = ["+", "-", "/", "*"];
    if (otherSign.includes(screen.at(-1))) {
      setScreen((prev) => prev);
    } else {
      setScreen((prev) => prev.concat(sign));
    }
  };
  const dotClickHandler = (e) => {
    let sign = e.target.innerHTML;
    if (screen.slice(screen.length - 1) === sign) {
      setScreen((prev) => prev);
    }
    if (screen.includes(sign)) {
      return;
    }
    setScreen((prev) => prev.concat(sign));
  };
  const invertSignClickHandler = () => {
    if (screen.charAt(0) === "-") {
      setScreen((prev) => prev.substring(1));
    } else {
      setScreen((prev) => "-" + prev);
    }
  };
  const evaluateHandler = () => {
    let result = Function("return " + screen)();
    // let result = eval(screen);
    setScreen((prev) => prev.replace(prev, result));
  };
  const btn = {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "white",
    display: "flex",
    justifyContent: "center",
  };
  const multiplyBtn = {
    fontSize: "2rem",
  };
  return {
    screen,
    btn,
    multiplyBtn,
    setScreen,
    clearScreenHandler,
    backspaceHandler,
    invertSignClickHandler,
    numClickHandler,
    signClickHandler,
    dotClickHandler,
    evaluateHandler,
  };
};

export default useCalculate;
