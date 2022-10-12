// import { useEffect } from "react";
import { useRef } from "react";
import useCalculate from "../hooks/useCalculator";

const Calculator = () => {
  const modeRef = useRef();
  const containerRef = useRef();
  const year = new Date().getFullYear();
  const {
    btn,
    screen,
    // setScreen,
    clearScreenHandler,
    backspaceHandler,
    invertSignClickHandler,
    numClickHandler,
    signClickHandler,
    dotClickHandler,
    evaluateHandler,
  } = useCalculate();
  const toggleTheme = (e) => {
    e.target.classList.toggle("active");
    containerRef.current.classList.toggle("dark");
    modeRef.current.classList.toggle("dark");
  };
  // useEffect(() => {
  //   localStorage.setItem("calc-record", JSON.stringify(screen));
  // }, [screen]);

  // useEffect(() => {
  //   let result = JSON.parse(localStorage.getItem("calc-record"));
  //   setScreen(result);
  // }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="calculator dark" ref={modeRef}>
        <div className="theme-toggler active" onClick={toggleTheme}></div>
        <div className="display-screen">
          <div id="display">{screen}</div>
        </div>
        <div className="buttons">
          <table>
            <tbody>
              <tr>
                <td>
                  <button
                    className="btn-operator"
                    id="clear"
                    onClick={clearScreenHandler}
                  >
                    C
                  </button>
                </td>
                <td>
                  <button
                    className="btn-operator"
                    id="/"
                    onClick={signClickHandler}
                  >
                    &divide;
                  </button>
                </td>
                <td>
                  <button
                    className="btn-operator"
                    id="*"
                    onClick={signClickHandler}
                  >
                    &times;
                  </button>
                </td>
                <td>
                  <button
                    className="btn-operator"
                    id="backspace"
                    onClick={backspaceHandler}
                  >
                    &#10094;
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn-number"
                    id="7"
                    onClick={numClickHandler}
                  >
                    7
                  </button>
                </td>
                <td>
                  <button
                    className="btn-number"
                    id="8"
                    onClick={numClickHandler}
                  >
                    8
                  </button>
                </td>
                <td>
                  <button
                    className="btn-number"
                    id="9"
                    onClick={numClickHandler}
                  >
                    9
                  </button>
                </td>
                <td>
                  <button
                    className="btn-operator"
                    id="-"
                    onClick={signClickHandler}
                  >
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn-number"
                    id="4"
                    onClick={numClickHandler}
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    className="btn-number"
                    id="5"
                    onClick={numClickHandler}
                  >
                    5
                  </button>
                </td>
                <td>
                  <button
                    className="btn-number"
                    id="6"
                    onClick={numClickHandler}
                  >
                    6
                  </button>
                </td>
                <td>
                  <button
                    className="btn-operator"
                    id="+"
                    onClick={signClickHandler}
                  >
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn-number"
                    id="1"
                    onClick={numClickHandler}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    className="btn-number"
                    id="2"
                    onClick={numClickHandler}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    className="btn-number"
                    id="3"
                    onClick={numClickHandler}
                  >
                    3
                  </button>
                </td>
                <td rowSpan="2">
                  <button
                    className="btn-equal"
                    id="equal"
                    onClick={evaluateHandler}
                  >
                    =
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    style={btn}
                    className="btn-operator"
                    onClick={dotClickHandler}
                  >
                    .
                  </button>
                </td>
                <td>
                  <button
                    className="btn-number"
                    id="0"
                    onClick={numClickHandler}
                  >
                    0
                  </button>
                </td>
                <td>
                  <button
                    className="btn-operator"
                    id="signToggle"
                    onClick={invertSignClickHandler}
                  >
                    +/-
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <small>&copy; Ademary@AltSchool {year}.</small>
    </div>
  );
};

export default Calculator;
